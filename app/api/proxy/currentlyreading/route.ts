import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const API_KEY = process.env.HARDCOVER_TOKEN;
    console.log("api token: ", process.env.HARDCOVER_TOKEN);
    const body = await req.json();
    const response = await fetch("https://api.hardcover.app/v1/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    const res = NextResponse.json(data);
    res.headers.set(
      "Cache-Control",
      "public, s-maxage=2592000, stale-while-revalidate=2592000"
    );
    return res;
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Internal server error" });
  }
}
