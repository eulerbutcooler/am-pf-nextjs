// lib/spotify.ts
"use server";

import { upstashGet, upstashSet, upstashSetEx } from "./upstash";

const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REDIRECT_URI } =
  process.env;

if (!SPOTIFY_CLIENT_ID || !SPOTIFY_CLIENT_SECRET || !SPOTIFY_REDIRECT_URI) {
  throw new Error("Missing Spotify env vars");
}

const REFRESH_KEY = "spotify:refresh_token";
const ACCESS_KEY = "spotify:access_token";
const ACCESS_EXPIRES_KEY = "spotify:access_expires_at"; // unix seconds

function basicAuthHeader() {
  // Works in both Node and Edge (Buffer exists in Node; btoa on Edge if needed)
  if (typeof Buffer !== "undefined") {
    return (
      "Basic " +
      Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString(
        "base64",
      )
    );
  }
  // edge: use btoa
  return (
    "Basic " +
    (globalThis as any).btoa(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`)
  );
}

/** Save refresh token to Upstash */
export async function saveRefreshToken(refreshToken: string) {
  await upstashSet(REFRESH_KEY, refreshToken);
}

/** Read refresh token from Upstash */
export async function getRefreshToken(): Promise<string | null> {
  try {
    return await upstashGet(REFRESH_KEY);
  } catch (err) {
    console.warn("getRefreshToken error", err);
    return null;
  }
}

/** Cache access token and expiry */
async function cacheAccessToken(token: string, expiresInSeconds: number) {
  // store token and expires_at
  const expiresAt = Math.floor(Date.now() / 1000) + expiresInSeconds;
  // we store token with TTL slightly less than expiry to be safe
  const ttl = Math.max(60, expiresInSeconds - 30);
  await upstashSetEx(ACCESS_KEY, token, ttl);
  await upstashSetEx(ACCESS_EXPIRES_KEY, String(expiresAt), ttl);
}

async function getCachedAccessToken(): Promise<{
  token: string | null;
  expiresAt: number | null;
}> {
  try {
    const [token, expiresAtStr] = await Promise.all([
      upstashGet(ACCESS_KEY),
      upstashGet(ACCESS_EXPIRES_KEY),
    ]);
    return { token, expiresAt: expiresAtStr ? Number(expiresAtStr) : null };
  } catch (err) {
    console.warn("getCachedAccessToken error", err);
    return { token: null, expiresAt: null };
  }
}

/** Exchange code for tokens; save refresh_token in Upstash */
export async function exchangeCodeForTokens(code: string) {
  const params = new URLSearchParams({
    grant_type: "authorization_code",
    code,
    redirect_uri: SPOTIFY_REDIRECT_URI!,
  });

  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: basicAuthHeader(),
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params,
  });
  if (!res.ok) {
    const txt = await res.text();
    throw new Error("Token exchange failed: " + txt);
  }
  const data = await res.json();
  const { access_token, refresh_token, expires_in } = data;
  if (refresh_token) {
    await saveRefreshToken(refresh_token);
  }
  if (access_token && expires_in) {
    await cacheAccessToken(access_token, expires_in);
  }
  return data;
}

/** Refresh access token using stored refresh token (Upstash) */
export async function refreshAccessToken(): Promise<string> {
  // try cached
  const { token: cachedToken, expiresAt } = await getCachedAccessToken();
  const now = Math.floor(Date.now() / 1000);
  if (cachedToken && expiresAt && expiresAt > now + 30) {
    return cachedToken;
  }

  const refreshToken = await getRefreshToken();
  if (!refreshToken) {
    throw new Error(
      "No refresh token saved. Complete OAuth flow via /api/spotify/login -> callback.",
    );
  }

  const params = new URLSearchParams({
    grant_type: "refresh_token",
    refresh_token: refreshToken,
  });

  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: basicAuthHeader(),
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params,
  });

  if (!res.ok) {
    const txt = await res.text();
    throw new Error("Failed to refresh access token: " + txt);
  }
  const data = await res.json();
  const token = data.access_token;
  const expires_in = data.expires_in || 3600;
  if (!token) throw new Error("No access token in refresh response");
  await cacheAccessToken(token, expires_in);
  if (data.refresh_token) {
    // Upstash it (Spotify sometimes rotates refresh token)
    await saveRefreshToken(data.refresh_token);
  }
  return token;
}

// Generic Spotify fetch with automatic token
export async function spotifyFetch(path: string, init?: RequestInit) {
  const token = await refreshAccessToken();
  const headers = new Headers(init?.headers || {});
  headers.set("Authorization", `Bearer ${token}`);
  const res = await fetch(`https://api.spotify.com/v1${path}`, {
    ...init,
    headers,
    cache: "no-store",
  });
  // if token expired and spotify returns 401, try one refresh + retry
  if (res.status === 401) {
    const token2 = await refreshAccessToken();
    headers.set("Authorization", `Bearer ${token2}`);
    return fetch(`https://api.spotify.com/v1${path}`, {
      ...init,
      headers,
      cache: "no-store",
    });
  }
  return res;
}
