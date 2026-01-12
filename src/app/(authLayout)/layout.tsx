import Link from "next/link";

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section className="flex min-h-screen items-center justify-center bg-white">
            <div className="w-full max-w-md">

                {/* Logo OUTSIDE the bordered box */}
                <Link href="/" className="mb-6 block text-3xl font-bold text-black">
                    Thoughts
                </Link>

                {/* Bordered box */}
                <div className="border p-8">
                    {children}
                </div>

            </div>
        </section>
    );
}
