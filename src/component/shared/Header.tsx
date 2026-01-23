"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { setToken } from '../../lib/token';
import { Button } from "@/components/ui/button";


type User = {
    email: string;
    name: string;
}
export default function Header() {
    const router = useRouter();



    const navLinks = [
        { name: "Home", href: "/" },
        // { name: "Products", href: "/products" },
        // { name: "Pricing", href: "/pricing" },
        // { name: "About", href: "/about" },
        { name: "All Posts", href: "/allPosts" },
        { name: "Posts", href: "/add-review" },
        // { name: "My Posts", href: "/my-post" },
    ];

    const [menuOpen, setMenuOpen] = useState(false);
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchUser = async () => {
            const res = await fetch('/api/auth/me');
            const data = await res.json();

            if (data.authenticated) {
                setUser(data.user);
            } else {
                setUser(null);
            }

            setLoading(false)
        };

        fetchUser();
    }, [])

    const handleLogout = async () => {
        await fetch("/api/auth/logout", {
            method: "POST",
        });
        setUser(null);
        router.push('/login');
    }


    return (
        <header className="w-full border-b border-black bg-white">
            <div className="mx-auto container ">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="text-2xl font-bold text-black">
                        Thoughts
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
                        {user &&
                            <Link href="/my-post">
                                My-Posts
                            </Link>
                        }
                    </nav>

                    {/* Desktop Auth Buttons */}
                    {!loading && (
                        <div className="hidden md:flex items-center gap-4">
                            {!user ? (
                                <>
                                    <Link
                                        href="/login"
                                    //className="border border-black px-4 py-2 text-black"
                                    >
                                        <Button>Login</Button>
                                    </Link>
                                    <Link
                                        href="/signup"
                                    //className="border border-black bg-black px-4 py-2 text-white"
                                    >
                                        <Button>Sign Up</Button>
                                    </Link>

                                </>
                            ) : (
                                <>
                                    <span className="text-black text-sm">
                                        {user.email}
                                    </span>
                                    <Button
                                        onClick={handleLogout}
                                        className="border border-black px-4 py-2 text-white"
                                    >
                                        Logout
                                    </Button>
                                </>
                            )}
                        </div>
                    )}

                    {/* Mobile Button */}
                    <Button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden px-3 py-1"
                    >
                        {menuOpen ? "✕" : "☰"}
                    </Button>
                </div>

                {/* Mobile Menu */}
                {menuOpen && !loading && (
                    <div className="md:hidden border-t border-black py-4">
                        <nav className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>

                        <div className="mt-6 flex flex-col gap-3">
                            {!user ? (
                                <>
                                    <Link
                                        href="/login"
                                        onClick={() => setMenuOpen(false)}
                                    //className="border border-black px-4 py-2 text-center"
                                    >
                                        <Button>Login</Button>
                                    </Link>
                                    <Link
                                        href="/signup"
                                        onClick={() => setMenuOpen(false)}
                                    //className="border border-black bg-black px-4 py-2 text-center text-white"
                                    >
                                        <Button>Sign Up </Button>
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <span className="text-center text-sm">
                                        {user.email}
                                    </span>
                                    <Button
                                        onClick={handleLogout}
                                        className="border border-white px-4 py-2"
                                    >
                                        Logout
                                    </Button>
                                </>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}
