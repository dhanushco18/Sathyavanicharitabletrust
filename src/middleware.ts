import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/admin")) {
    const sessionCookie = request.cookies.get("sathiya_admin_session");
    const isLoginPage = pathname === "/admin/login";

    let hasValidSession = false;
    if (sessionCookie?.value) {
      try {
        const decodedStr = Buffer.from(sessionCookie.value, "base64url").toString("utf-8");
        const session = JSON.parse(decodedStr);
        if (session && session.adminId && session.expiresAt && Date.now() < session.expiresAt) {
          hasValidSession = true;
        }
      } catch {
        hasValidSession = false;
      }
    }

    // 1. Unauthenticated user trying to access protected admin pages
    if (!hasValidSession && !isLoginPage) {
      const loginUrl = new URL("/admin/login", request.url);
      loginUrl.searchParams.set("from", pathname);
      return NextResponse.redirect(loginUrl);
    }

    // 2. Already authenticated user visiting the login page
    if (hasValidSession && isLoginPage) {
      return NextResponse.redirect(new URL("/admin", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
