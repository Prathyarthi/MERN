import { NextRequest, NextResponse } from "next/server";

// For Analytics usecase such as request count
let requestCount = 0;

// This middleware runs on all routes
export function middleware(req: NextRequest) {
    requestCount++;
    const res = NextResponse.next();
    console.log(`Request count: ${requestCount}`);
    return res;
}

// To selectively run middleware only on certain paths:

export const config = {
    matcher: '/api/:path*'    // Only runs on /api/anything
}


