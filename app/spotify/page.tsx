import { Suspense } from "react";

async function SpotifyData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/spotify`, {
    cache: "no-store",
  });
  const data = await res.json();

  return (
    <pre
      style={{
        background: "#0b1220",
        color: "#dbeafe",
        padding: 16,
        borderRadius: 8,
        whiteSpace: "pre-wrap",
      }}
    >
      {JSON.stringify(data, null, 2)}
    </pre>
  );
}

export default function SpotifyPage() {
  return (
    <main style={{ padding: 24, fontFamily: "system-ui" }}>
      <h1>My Spotify Data</h1>
      <Suspense fallback={<div>Loading Spotify data...</div>}>
        <SpotifyData />
      </Suspense>
      <p>
        Not authorized? <a href="/api/spotify/login">Login with Spotify</a>
      </p>
    </main>
  );
}
