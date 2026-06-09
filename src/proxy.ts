import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verifyToken } from './lib/auth'

export async function proxy(request: NextRequest) {
  const path = request.nextUrl.pathname;
  
  // Protect only /admin routes
  if (path.startsWith('/admin')) {
    const isLoginPage = path === '/admin/login';
    const sessionCookie = request.cookies.get('admin_session');
    
    // Verify token if exists
    const payload = sessionCookie ? await verifyToken(sessionCookie.value) : null;
    
    // If trying to access admin dashboard without login -> redirect to login
    if (!isLoginPage && !payload) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
    
    // If trying to access login page but already logged in -> redirect to dashboard
    if (isLoginPage && payload) {
      return NextResponse.redirect(new URL('/admin/pesanan', request.url));
    }
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*'],
}
