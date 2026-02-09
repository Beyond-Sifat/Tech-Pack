// import { NextRequest, NextResponse } from "next/server";

// export function proxy(request: NextRequest) {
//     const token = request.cookies.get("token")?.value;

//     // if (!token) {
//     //     const loginUrl = new URL("/login", request.url);
//     //     loginUrl.searchParams.set("redirect", request.nextUrl.pathname);
//     //     return NextResponse.redirect(loginUrl);
//     // }

//     const isProtectedRoute =
//         request.nextUrl.pathname.startsWith("/add-review") ||
//         request.nextUrl.pathname.startsWith("/my-post");

//     if (isProtectedRoute && !token) {
//         return NextResponse.redirect(new URL("/login", request.url));
//     }

//     return NextResponse.next();
// }

// export const config = {
//     matcher: ["/add-review", "/my-post"],
// };



import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
    const token = request.cookies.get("token")?.value;

    const protectedRoutes = ["/add-review", "/my-post"];

    const isProtected = protectedRoutes.some((route) =>
        request.nextUrl.pathname.startsWith(route)
    );

    if (isProtected && !token) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/add-review/:path*", "/my-post/:path*"],
};



// import { NextRequest, NextResponse } from "next/server";

// export function middleware(req: NextRequest) {
//   const token = req.cookies.get("token")?.value;

//   if (!token) {
//     return NextResponse.redirect(new URL("/login", req.url));
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/add-review", "/my-post"],
// };


// const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
//   role: "admin" | "user";
// };

// if (req.nextUrl.pathname.startsWith("/admin") && decoded.role !== "admin") {
//   return NextResponse.redirect(new URL("/unauthorized", req.url));
// }
