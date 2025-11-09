import { NextResponse } from "next/server";
import { exchangeCodeForTokens } from "@/app/lib/spotify";

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const code = url.searchParams.get("code");
    if (!code)
      return NextResponse.json({ error: "Missing code" }, { status: 400 });

    const data = await exchangeCodeForTokens(code);
    return NextResponse.redirect("/", { status: 302 });
  } catch (err: any) {
    return NextResponse.json(
      { error: String(err.message || err) },
      { status: 500 },
    );
  }
}
