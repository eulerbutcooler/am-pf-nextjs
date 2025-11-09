export const UPSTASH_URL = process.env.UPSTASH_REDIS_REST_URL!;
export const UPSTASH_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN!;

if (!UPSTASH_URL || !UPSTASH_TOKEN) {
  // Not throwing: allow local dev fallback if you prefer env-only refresh token approach.
  console.warn(
    "Upstash not configured: UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN are required for persistent token storage.",
  );
}

async function upstashRequest(path: string, init?: RequestInit) {
  if (!UPSTASH_URL || !UPSTASH_TOKEN) {
    throw new Error("Upstash credentials missing");
  }
  const url = `${UPSTASH_URL}${path}`;
  const res = await fetch(url, {
    ...init,
    headers: {
      ...(init?.headers || {}),
      Authorization: `Bearer ${UPSTASH_TOKEN}`,
      "Content-Type": "application/json",
    },
  });
  return res;
}

/** set key to value (no TTL) */
export async function upstashSet(key: string, value: string) {
  // Upstash REST set endpoint: POST /set/:key/:value
  // url-encode key & value
  const k = encodeURIComponent(key);
  const v = encodeURIComponent(value);
  const res = await upstashRequest(`/set/${k}/${v}`, { method: "POST" });
  if (!res.ok) {
    const txt = await res.text();
    throw new Error("Upstash set failed: " + txt);
  }
  return res.json();
}

/** set key with ttl in seconds */
export async function upstashSetEx(
  key: string,
  value: string,
  exSeconds: number,
) {
  const k = encodeURIComponent(key);
  const v = encodeURIComponent(value);
  // POST /set/:key/:value?ex=<seconds>
  const res = await upstashRequest(`/set/${k}/${v}?ex=${exSeconds}`, {
    method: "POST",
  });
  if (!res.ok) {
    const txt = await res.text();
    throw new Error("Upstash setex failed: " + txt);
  }
  return res.json();
}

/** get key */
export async function upstashGet(key: string): Promise<string | null> {
  const k = encodeURIComponent(key);
  const res = await upstashRequest(`/get/${k}`);
  if (!res.ok) {
    const txt = await res.text();
    throw new Error("Upstash get failed: " + txt);
  }
  const json = await res.json();
  // Upstash returns { result: <value|null> }
  return json.result ?? null;
}
