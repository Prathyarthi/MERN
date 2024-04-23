import { NextRequest, NextResponse } from "next/server";

// For Analytics usecase such as request count
// let requestCount = 0;

// // This middleware runs on all routes
// export function middleware(req: NextRequest) {
//     requestCount++;
//     const res = NextResponse.next();
//     console.log(`Request count: ${requestCount}`);
//     return res;
// }

// // To selectively run middleware only on certain paths:

// export const config = {
//     matcher: '/api/:path*'    // Only runs on /api/anything
// }


// If we want to run logic more selectively by filtering the specified paths

export function middleware(request: NextRequest) {
    console.log(request.nextUrl.pathname)
    if (request.nextUrl.pathname.startsWith('/admin')) {
        return NextResponse.redirect(new URL('/signin', request.url))
    }

    if (request.nextUrl.pathname.startsWith('/dashboard')) {
        return NextResponse.next()
    }
}
