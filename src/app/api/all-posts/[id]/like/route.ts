import { mongoConnect } from "@/lib/mongoConnect";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";


export async function POST(
    request: NextRequest,
    context: { params:Promise< { id: string } >}
) {
    const { id } = await context.params;
    const { db } = await mongoConnect();

    await db.collection("reviews").updateOne(
        { _id: new ObjectId(id) },
        { $inc: { likes: 1 } }
    );

    return NextResponse.json({ message: "Liked" });
}