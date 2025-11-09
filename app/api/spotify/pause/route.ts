import { NextResponse } from "next/server";
import { spotifyFetch } from "@/app/lib/spotify";

export async function PUT() {
  const res = await spotifyFetch("/me/player/pause", { method: "PUT" });
  return NextResponse.json({ ok: res.status === 204 });
}
