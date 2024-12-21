 import { NextResponse } from "next/server";

export async function POST(req) {
    let data=  await req.json()
    return NextResponse.json({sucsess:"true",data})
}