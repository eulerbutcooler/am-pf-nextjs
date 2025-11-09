// app/spotify/page.tsx
export const revalidate = 30; // ISR

export default async function SpotifyPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/spotify`, {
    next: { revalidate: 30 },
  });
  const data = await res.json();

  return (
    <main style={{ padding: 24, fontFamily: "system-ui" }}>
      <h1>My Spotify Data</h1>
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
      <p>
        Not authorized? <a href="/api/spotify/login">Login with Spotify</a>
      </p>
    </main>
  );
}
