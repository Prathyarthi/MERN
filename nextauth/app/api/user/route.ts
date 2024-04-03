import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest, res: NextResponse) {
    return NextResponse.json({
        user: {
            id: "user1",
            name: "user1",
            email: "user1@gmail.com"
        }
    })
}