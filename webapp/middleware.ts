import { NextResponse } from 'next/server'
import { auth } from "@/auth"

export default auth((req) => {
    const isLoggedIn = !!req.auth
    const isPublicPath = req.nextUrl.pathname === '/' ||
        req.nextUrl.pathname === '/login' ||
        req.nextUrl.pathname.startsWith('/api/auth')

    if (isPublicPath && isLoggedIn) {
        // Redirect to dashboard if user is already logged in and tries to access public paths
        return NextResponse.redirect(new URL('/dashboard', req.nextUrl))
    }

    if (!isPublicPath && !isLoggedIn) {
        // Redirect to login if user is not logged in and tries to access protected paths
        return NextResponse.redirect(new URL('/login', req.nextUrl))
    }

    return NextResponse.next()
})

// Specify which routes middleware will run on
export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api/auth (auth API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - public folder
         */
        '/((?!api/auth|_next/static|_next/image|favicon.ico|public).*)',
    ],
}