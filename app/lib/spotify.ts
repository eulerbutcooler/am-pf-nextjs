// lib/spotify.ts
"use server";

const {
  SPOTIFY_CLIENT_ID,
  SPOTIFY_CLIENT_SECRET,
  SPOTIFY_REDIRECT_URI,
  SPOTIFY_REFRESH_TOKEN,
} = process.env;

if (!SPOTIFY_CLIENT_ID || !SPOTIFY_CLIENT_SECRET || !SPOTIFY_REDIRECT_URI) {
  throw new Error("Missing Spotify env vars");
}

let cachedAccessToken: { token: string; expiresAt: number } | null = null;

async function getAccessToken(): Promise<string> {
  const now = Date.now() / 1000;
  if (cachedAccessToken && cachedAccessToken.expiresAt > now + 30) {
    return cachedAccessToken.token;
  }

  const params = new URLSearchParams({
    grant_type: "refresh_token",
    refresh_token: SPOTIFY_REFRESH_TOKEN!,
  });

  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization:
        "Basic " +
        Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString(
          "base64",
        ),
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params,
  });

  if (!res.ok) throw new Error("Failed to refresh token");
  const data = await res.json();
  cachedAccessToken = {
    token: data.access_token,
    expiresAt: now + data.expires_in,
  };
  return data.access_token;
}

export async function spotifyFetch(path: string, init?: RequestInit) {
  const token = await getAccessToken();
  const res = await fetch(`https://api.spotify.com/v1${path}`, {
    ...init,
    headers: {
      ...(init?.headers || {}),
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  });
  return res;
}
