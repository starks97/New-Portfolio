import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "./consts";

export const config = {
  matcher: "/dashboard",
};

export function middleware(req: NextRequest) {
  try {
    const { cookies } = req;
    const authCookie = cookies.get(ACCESS_TOKEN);
    const refreshToken = cookies.get(REFRESH_TOKEN);

    if (!refreshToken && !authCookie) {
      return NextResponse.redirect(new URL("/auth/login", req.url));
    }

    if (!authCookie) {
      return NextResponse.redirect(new URL("/auth/refresh", req.url));
    }

    return NextResponse.next();
  } catch (error) {
    console.error(error);
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }
}
