import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { mongoConnect } from "@/lib/mongoConnect";

import { JwtPayload } from "jsonwebtoken";

interface AuthTokenPayload extends JwtPayload {
    email: string;
    id: string;
    role: string;
}

async function getUserEmail() {

    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;
    if (!token) return null;

    const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET!
    ) as AuthTokenPayload;

    return decoded.email;
}

/* ADD REVIEW */
export async function POST(req: Request) {
    const { db } = await mongoConnect();
    const email = await getUserEmail();

    if (!email) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();

    await db.collection("reviews").insertOne({
        title: body.title,
        description: body.description,
        rating: body.rating,
        email,
        createdAt: new Date(),
    });

    return NextResponse.json({ message: "Review added" }, { status: 201 });
}

/* GET MY REVIEWS */
export async function GET() {
    const { db } = await mongoConnect();
    const email = await getUserEmail();

    if (!email) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const reviews = await db
        .collection("reviews")
        .find({ email })
        .toArray();

    return NextResponse.json(reviews);
}
