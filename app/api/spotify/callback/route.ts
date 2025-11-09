import { NextResponse } from "next/server";
import { exchangeCodeForTokens } from "@/app/lib/spotify";

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const code = url.searchParams.get("code");
    if (!code)
      return NextResponse.json({ error: "Missing code" }, { status: 400 });

    await exchangeCodeForTokens(code);
    const redirectUrl = new URL("/", process.env.NEXT_PUBLIC_BASE_URL);
    return NextResponse.redirect(redirectUrl.toString(), { status: 302 });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
