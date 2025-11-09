import { NextResponse } from "next/server";
import { spotifyFetch } from "@/app/lib/spotify";

export async function PUT(req: Request) {
  const { uri } = await req.json();
  if (!uri)
    return NextResponse.json({ error: "uri required" }, { status: 400 });
  const res = await spotifyFetch("/me/player/play", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ uris: [uri] }),
  });
  return NextResponse.json({ ok: res.status === 204 });
}
