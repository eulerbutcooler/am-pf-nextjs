import { Suspense } from "react";
import SpotifyPlayer from "@/app/components/SpotifyPlayer";
import { Card, CardContent } from "@/components/ui/card";

async function SpotifyData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/spotify`, {
    cache: "no-store",
  });
  
  if (!res.ok) {
    throw new Error("Failed to fetch Spotify data");
  }
  
  const data = await res.json();

  return (
    <SpotifyPlayer
      topTracks={data.top_tracks || []}
      nowPlaying={data.now_playing || null}
      followedArtists={data.followed_artists || []}
    />
  );
}

function LoadingState() {
  return (
    <div className="mx-auto max-w-6xl space-y-8 p-6">
      <div className="space-y-2">
        <div className="h-10 w-64 animate-pulse rounded-lg bg-muted" />
        <div className="h-5 w-96 animate-pulse rounded-lg bg-muted" />
      </div>
      <Card>
        <CardContent className="p-6">
          <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="h-12 w-12 animate-pulse rounded-full bg-muted" />
                <div className="flex-1 space-y-2">
                  <div className="h-4 w-3/4 animate-pulse rounded bg-muted" />
                  <div className="h-3 w-1/2 animate-pulse rounded bg-muted" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default function SpotifyPage() {
  return (
    <Suspense fallback={<LoadingState />}>
      <SpotifyData />
    </Suspense>
  );
}
