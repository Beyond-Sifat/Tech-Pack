"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Products", href: "/products" },
        { name: "Pricing", href: "/pricing" },
        { name: "About", href: "/about" },
    ];

    const authLinks = [
        { name: "Login", href: "/login" },
        { name: "Sign Up", href: "/signup" },
    ];

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="w-full border-b border-black bg-white">
            <div className="mx-auto container ">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="text-xl font-bold text-black">
                        Tech Pack
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-black hover:underline underline-offset-4"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop Auth Buttons */}
                    <div className="hidden md:flex items-center gap-4">
                        {authLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`px-4 py-2 border border-black text-black ${link.name === "Sign Up"
                                        ? "bg-black text-white"
                                        : "bg-white"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden border border-black px-3 py-1 text-black"
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? "✕" : "☰"}
                    </button>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="md:hidden border-t border-black py-4">
                        <nav className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMenuOpen(false)}
                                    className="text-black"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>

                        <div className="mt-6 flex flex-col gap-3">
                            {authLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMenuOpen(false)}
                                    className={`px-4 py-2 text-center border border-black ${link.name === "Sign Up"
                                            ? "bg-black text-white"
                                            : "bg-white text-black"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}
