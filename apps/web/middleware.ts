import { NextRequest, NextResponse } from 'next/server';
import { protectedRoutes } from './features/auth/protected-routes';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  // Find the first matching protected route
  const match = Object.keys(protectedRoutes).find((route) => pathname.startsWith(route));
  if (!match) return NextResponse.next();

  // Read user cookie
  const userCookie = request.cookies.get('user');
  if (!userCookie) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  let user: { role: string } | null = null;
  try {
    user = JSON.parse(userCookie.value);
  } catch {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  const allowedRoles = protectedRoutes[match];
  if (!user || !allowedRoles.includes(user.role as (typeof allowedRoles)[number])) {
    return NextResponse.redirect(new URL('/unauthorized', request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/engineer/:path*', '/viewer/:path*'],
};
