import { mongoConnect } from "@/lib/mongoConnect";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
    try {
        const { client, db } = await mongoConnect();
        const { username, email, password } = await req.json();

        if (!username || !email || !password) {
            //   client.close();
            return NextResponse.json(
                { error: "All fields are required" },
                { status: 400 }
            );
        }

        const existingUser = await db.collection("users").findOne({ email });
        if (existingUser) {
            //   client.close();
            return NextResponse.json(
                { error: "User already exists" },
                { status: 400 }
            );
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const result = await db.collection("users").insertOne({
            username,
            email,
            password: hashedPassword,
            role: "user",
            createdAt: new Date(),
        });

        const token = jwt.sign(
            { id: result.insertedId, email, role: "user" },
            process.env.JWT_SECRET as string,
            { expiresIn: "1d" }
        );

        const res = NextResponse.json(
            { message: "User registered" },
            { status: 201 }
        );

        res.cookies.set({
            name: "token",
            value: token,
            httpOnly: true,
            path: "/",
            maxAge: 60 * 60 * 24,
            sameSite: "strict",
            secure: process.env.NODE_ENV === "production",
        });

        return res;
    } catch (error) {
        console.log(error);
        return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
    }
}