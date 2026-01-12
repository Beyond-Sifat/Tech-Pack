"use client";

export default function GlobalError({
    // error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black">
            <h1 className="text-4xl font-bold mb-4">Something went wrong</h1>

            <p className="mb-6 text-center max-w-md">
                An unexpected error occurred. Please try again.
            </p>

            <button
                onClick={() => reset()}
                className="border border-black px-6 py-2 hover:bg-black hover:text-white transition"
            >
                Try again
            </button>
        </div>
    );
}
