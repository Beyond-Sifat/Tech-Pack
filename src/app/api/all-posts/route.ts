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


// import { mongoConnect } from "@/lib/mongoConnect";
// import { NextResponse } from "next/server";
// import jwt from "jsonwebtoken";
// import { cookies } from "next/headers";

// interface AuthTokenPayload {
//   email: string;
// }

// /* 🔐 verify user */
// async function getUserEmail() {
//   const cookieStore = await cookies();
//   const token = cookieStore.get("token")?.value;

//   if (!token) return null;

//   try {
//     const decoded = jwt.verify(
//       token,
//       process.env.JWT_SECRET!
//     ) as AuthTokenPayload;

//     return decoded.email;
//   } catch {
//     return null;
//   }
// }

// /* ✅ PROTECTED GET */
// export async function GET() {
//   const email = await getUserEmail();

//   // 🚨 BLOCK UNAUTHORIZED
//   if (!email) {
//     return NextResponse.json(
//       { error: "Unauthorized" },
//       { status: 401 }
//     );
//   }

//   const { db } = await mongoConnect();

//   const posts = await db
//     .collection("reviews")
//     .find({})
//     .sort({ createdAt: -1 })
//     .toArray();

//   return NextResponse.json(posts);
// }