import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { mongoConnect } from "@/lib/mongoConnect";

async function getUserEmail() {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;
    if (!token) return null;

    const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET!
    ) as { email: string };

    return decoded.email;
}

type Params = { id: string };

export async function DELETE(
    _: Request,
    { params }: { params: Promise<Params> }
) {
    const { id } = await params;
    const email = await getUserEmail();
    if (!email) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { db } = await mongoConnect();

    await db.collection("reviews").deleteOne({
        _id: new ObjectId(id),
        email
    });

    return NextResponse.json({ message: "Deleted" });
}

export async function PUT(
    req: Request,
    { params }: { params: Promise<Params> }
) {
    const { id } = await params;
    const email = await getUserEmail();
    if (!email) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { db } = await mongoConnect();

    await db.collection("reviews").updateOne(
        { _id: new ObjectId(id), email },
        {
            $set: {
                title: body.title,
                description: body.description,
                rating: body.rating,
            },
        }
    );

    return NextResponse.json({ message: "Updated" });
}
