import { NextResponse } from "next/server";

export async function GET() {
  const state = Math.random().toString(36).slice(2, 10);
  const scope = [
    "user-top-read",
    "user-read-currently-playing",
    "user-read-playback-state",
    "user-modify-playback-state",
    "user-follow-read",
  ].join(" ");

  const params = new URLSearchParams({
    response_type: "code",
    client_id: process.env.SPOTIFY_CLIENT_ID!,
    scope,
    redirect_uri: process.env.SPOTIFY_REDIRECT_URI!,
    state,
  });

  return NextResponse.redirect(
    `https://accounts.spotify.com/authorize?${params.toString()}`,
  );
}
