import { NextResponse } from "next/server";
import { spotifyFetch } from "@/app/lib/spotify";

export async function GET() {
  try {
    const [topRes, nowRes, followRes] = await Promise.all([
      spotifyFetch("/me/top/tracks?limit=10"),
      spotifyFetch("/me/player/currently-playing"),
      spotifyFetch("/me/following?type=artist&limit=50"),
    ]);

    const top = await topRes.json();
    const now = nowRes.status === 204 ? null : await nowRes.json();
    const followed = await followRes.json();

    const payload = {
      top_tracks: top.items?.map((t: any) => ({
        id: t.id,
        name: t.name,
        uri: t.uri,
        artists: t.artists.map((a: any) => a.name),
      })),
      now_playing: now
        ? {
            is_playing: now.is_playing,
            name: now.item?.name,
            artists: now.item?.artists?.map((a: any) => a.name),
          }
        : null,
      followed_artists: followed.artists?.items?.map((a: any) => a.name),
    };

    return NextResponse.json(payload, {
      headers: { "Cache-Control": "s-maxage=30, stale-while-revalidate=60" },
    });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
