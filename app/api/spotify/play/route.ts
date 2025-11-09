import { NextResponse } from "next/server";
import { spotifyFetch } from "@/app/lib/spotify";

export async function PUT(req: Request) {
  const body = await req.json();
  const { uri } = body;

  // If uri is provided, play specific track
  // If no uri, resume current playback
  const requestBody = uri ? { uris: [uri] } : undefined;

  const res = await spotifyFetch("/me/player/play", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: requestBody ? JSON.stringify(requestBody) : undefined,
  });

  return NextResponse.json({ ok: res.status === 204 });
}
