"use client";

import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black">
            <h1 className="text-5xl font-bold mb-4">404</h1>
            <p className="text-lg mb-6">
                The page you are looking for does not exist.
            </p>

            <Link
                href="/"
                className="border border-black px-6 py-2 hover:bg-black hover:text-white transition"
            >
                Go back home
            </Link>
        </div>
    );
}
