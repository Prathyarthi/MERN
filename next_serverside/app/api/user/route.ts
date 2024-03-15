import { NextRequest, NextResponse } from "next/server"

export function GET() {
    return Response.json({
        name: "Prathyarthi",
        email: "prathyarthi@gmail.com"
    })
}

export async function POST(req: NextRequest) {
    const body = await req.json()
    console.log(body);

    return Response.json({
        message: "Signed up succesfully"
    })
}