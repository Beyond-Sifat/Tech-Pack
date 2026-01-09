import jwt from 'jsonwebtoken';
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {

    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;
    if (!token) {
        return NextResponse.json({ authenticated: false });
    }


    try {
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET as string
        ) as { email: string };

        return NextResponse.json({
            authenticated: true,
            user: {
                email: decoded.email,
            },
        });
    } catch {
        return NextResponse.json({ authenticated: false });
    }
}