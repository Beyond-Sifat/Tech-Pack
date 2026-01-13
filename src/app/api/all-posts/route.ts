import { mongoConnect } from "@/lib/mongoConnect";
import { NextResponse } from "next/server";

export async function GET(){
    const {db} = await mongoConnect()

    const posts = await db
    .collection("reviews")
    .find({})
    .sort({ createdAt: -1 })
    .toArray();

    return NextResponse.json(posts);
}