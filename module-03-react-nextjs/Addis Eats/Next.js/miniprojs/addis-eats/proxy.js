import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function proxy(request) {
  const token = request.cookies.get("addis-eats-session")?.value;
  const secret = process.env.SESSION_SECRET;

  let validSession = false;

  if (token && secret) {
    try {
      await jwtVerify(token, new TextEncoder().encode(secret));
      validSession = true;
    } catch {
      validSession = false;
    }
  }

  if (!validSession) {
    const url = new URL("/sign-in", request.url);
    url.searchParams.set(
      "next",
      request.nextUrl.pathname + request.nextUrl.search
    );

    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/orders/:path*", "/staff/:path*"],
};