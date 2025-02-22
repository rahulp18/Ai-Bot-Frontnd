import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const publicRoutes = ["/auth"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow requests to public routes
  if (publicRoutes.some((route) => pathname.startsWith(route))) {
    return NextResponse.next();
  }

  // Check if a session token exists in cookies
  const token = request.cookies.get("session_token")?.value;
  if (!token) {
    // If no token, redirect to the login/auth page
    const loginUrl = new URL("/auth", request.url);
    return NextResponse.redirect(loginUrl);
  }

  // Allow request to proceed if token exists
  return NextResponse.next();
}

// Define which routes the middleware should apply to
export const config = {
  matcher: ["/((?!_next|static|api/public|auth).*)"],
};
