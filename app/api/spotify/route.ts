import { NextResponse } from "next/server";
import { spotifyFetch } from "@/app/lib/spotify";

interface SpotifyArtist {
  id: string;
  name: string;
}

interface SpotifyTrack {
  id: string;
  name: string;
  uri: string;
  artists: SpotifyArtist[];
}

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
      top_tracks: top.items?.map((t: SpotifyTrack) => ({
        id: t.id,
        name: t.name,
        uri: t.uri,
        artists: t.artists.map((a: SpotifyArtist) => a.name),
      })),
      now_playing:
        now && now.item
          ? {
              is_playing: now.is_playing,
              name: now.item.name,
              artists:
                now.item.artists?.map((a: SpotifyArtist) => a.name) || [],
              uri: now.item.uri,
              id: now.item.id,
            }
          : null,
      followed_artists: followed.artists?.items?.map(
        (a: SpotifyArtist) => a.name,
      ),
    };

    return NextResponse.json(payload, {
      headers: { "Cache-Control": "s-maxage=30, stale-while-revalidate=60" },
    });
  } catch (e) {
    const message = e instanceof Error ? e.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
