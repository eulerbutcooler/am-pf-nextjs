import { NextResponse } from "next/server";
import { exchangeCodeForTokens } from "@/app/lib/spotify";

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const code = url.searchParams.get("code");
    if (!code)
      return NextResponse.json({ error: "Missing code" }, { status: 400 });

    await exchangeCodeForTokens(code);
    return NextResponse.redirect("/", { status: 302 });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
