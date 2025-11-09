"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Play, Pause, Music, Users } from "lucide-react";

interface Track {
  id: string;
  name: string;
  uri: string;
  artists: string[];
}

interface NowPlaying {
  is_playing: boolean;
  name: string;
  artists: string[];
  uri?: string;
  id?: string;
}

interface SpotifyPlayerProps {
  topTracks: Track[];
  nowPlaying: NowPlaying | null;
  followedArtists: string[];
}

export default function SpotifyPlayer({
  topTracks,
  nowPlaying,
  followedArtists,
}: SpotifyPlayerProps) {
  const [loading, setLoading] = useState<string | null>(null);
  const [currentPlaying, setCurrentPlaying] = useState(nowPlaying);

  const handlePlay = async (uri: string, trackId: string) => {
    setLoading(trackId);
    try {
      const res = await fetch("/api/spotify/play", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri }),
      });
      if (res.ok) {
        const track = topTracks.find((t) => t.id === trackId);
        if (track) {
          setCurrentPlaying({
            is_playing: true,
            name: track.name,
            artists: track.artists,
            uri: track.uri,
            id: track.id,
          });
        }
      }
    } catch (error) {
      console.error("Failed to play track:", error);
    } finally {
      setLoading(null);
    }
  };

  const handlePause = async () => {
    setLoading("pause");
    try {
      const res = await fetch("/api/spotify/pause", {
        method: "PUT",
      });
      if (res.ok) {
        setCurrentPlaying(
          currentPlaying ? { ...currentPlaying, is_playing: false } : null,
        );
      }
    } catch (error) {
      console.error("Failed to pause:", error);
    } finally {
      setLoading(null);
    }
  };

  const handleResume = async () => {
    setLoading("resume");
    try {
      const res = await fetch("/api/spotify/play", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}), // Empty body to resume playback
      });
      if (res.ok) {
        setCurrentPlaying(
          currentPlaying ? { ...currentPlaying, is_playing: true } : null,
        );
      }
    } catch (error) {
      console.error("Failed to resume:", error);
    } finally {
      setLoading(null);
    }
  };

  return (
    <div className="mx-auto max-w-6xl space-y-8 p-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Spotify Dashboard</h1>
        <p className="text-muted-foreground">
          Manage your music and explore your top tracks
        </p>
      </div>

      {/* Now Playing Card */}
      {currentPlaying && (
        <Card className="border-primary border-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Music className="h-5 w-5" />
              Now Playing
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-lg font-semibold">
                  {currentPlaying.name}
                  {currentPlaying.id && (
                    <span className="text-muted-foreground ml-2 font-mono text-xs">
                      ({currentPlaying.id})
                    </span>
                  )}
                </p>
                <p className="text-muted-foreground text-sm">
                  {currentPlaying.artists.join(", ")}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Badge
                  variant={currentPlaying.is_playing ? "default" : "secondary"}
                >
                  {currentPlaying.is_playing ? "Playing" : "Paused"}
                </Badge>
                {currentPlaying.is_playing ? (
                  <Button
                    size="icon"
                    variant="outline"
                    onClick={handlePause}
                    disabled={loading === "pause"}
                  >
                    <Pause className="h-4 w-4" />
                  </Button>
                ) : (
                  <Button
                    size="icon"
                    variant="outline"
                    onClick={handleResume}
                    disabled={loading === "resume"}
                  >
                    <Play className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Top Tracks */}
      <Card>
        <CardHeader>
          <CardTitle>Your Top 10 Tracks</CardTitle>
          <CardDescription>
            Most listened tracks from your Spotify account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {topTracks.map((track, index) => (
              <div key={track.id}>
                <div className="hover:bg-muted flex items-center justify-between gap-4 rounded-lg p-3 transition-colors">
                  <div className="flex items-center gap-4">
                    <span className="bg-primary/10 text-primary flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold">
                      {index + 1}
                    </span>
                    <div className="min-w-0 flex-1 space-y-1">
                      <p className="leading-none font-medium">{track.name}</p>
                      <p className="text-muted-foreground text-sm">
                        {track.artists.join(", ")}
                      </p>
                    </div>
                  </div>
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => handlePlay(track.uri, track.id)}
                    disabled={loading === track.id}
                    className="shrink-0"
                  >
                    <Play className="h-4 w-4" />
                  </Button>
                </div>
                {index < topTracks.length - 1 && <Separator className="mt-3" />}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Followed Artists */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            Followed Artists
          </CardTitle>
          <CardDescription>
            Artists you follow on Spotify ({followedArtists.length})
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {followedArtists.slice(0, 20).map((artist) => (
              <Badge key={artist} variant="secondary">
                {artist}
              </Badge>
            ))}
            {followedArtists.length > 20 && (
              <Badge variant="outline">
                +{followedArtists.length - 20} more
              </Badge>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Authorization Link */}
      <Card className="border-dashed">
        <CardContent className="pt-6 text-center">
          <p className="text-muted-foreground text-sm">
            Need to reauthorize?{" "}
            <a
              href="/api/spotify/login"
              className="text-primary font-medium underline-offset-4 hover:underline"
            >
              Login with Spotify
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
