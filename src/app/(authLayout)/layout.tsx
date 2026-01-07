export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section className="flex min-h-screen items-center justify-center bg-white">
            <div className="w-full max-w-md border border-black p-8">
                {children}
            </div>
        </section>
    )
}