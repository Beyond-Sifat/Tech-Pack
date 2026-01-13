import Link from "next/link";

export default function Footer() {
    const footerLinks = {
        product: [
            // { name: "Features", href: "/features" },
            // { name: "Pricing", href: "/pricing" },
            { name: "Documentation", href: "/docs" },
        ],
        company: [
            { name: "About", href: "/about" },
            // { name: "Careers", href: "/careers" },
            { name: "Contact", href: "/contact" },
        ],
        legal: [
            { name: "Privacy Policy", href: "/privacy" },
            { name: "Terms of Service", href: "/terms" },
        ],
    };

    return (
        <footer className="  bg-white mt-15 p-20">
            <div className="mx-auto container ">
                <div className="grid gap-10 md:grid-cols-4">
                    {/* Brand */}
                    <div>
                        <h2 className="text-2xl font-bold text-black">Thoughts</h2>
                        <p className="mt-2 text-sm text-black">
                            Building reliable, modern web solutions.
                        </p>
                    </div>

                    {/* Product */}
                    <div>
                        <h3 className="mb-3 text-sm font-semibold uppercase text-black">
                            Product
                        </h3>
                        <ul className="space-y-2">
                            {footerLinks.product.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-black hover:underline underline-offset-4"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="mb-3 text-sm font-semibold uppercase text-black">
                            Company
                        </h3>
                        <ul className="space-y-2">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-black hover:underline underline-offset-4"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="mb-3 text-sm font-semibold uppercase text-black">
                            Legal
                        </h3>
                        <ul className="space-y-2">
                            {footerLinks.legal.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-black hover:underline underline-offset-4"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-black pt-6 text-center text-sm text-black">
                    © {new Date().getFullYear()} Tech Pack. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
