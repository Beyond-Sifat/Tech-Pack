"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";

type LoginFormData = {
    email: string;
    password: string;
}
export default function LoginPage() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormData>();

    const onSubmit = (data: LoginFormData) => {
        console.log("Login Data:", data);
    }
    return (
        <div>
            <h1 className="mb-6 text-2xl font-bold text-black">Login</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <label className="block text-sm text-black">Email</label>
                    <input
                        type="email"
                        {...register("email", { required: "Email is required" })}
                        className="mt-1 w-full border border-black px-3 py-2"
                    />
                    {errors.email && (
                        <p className="text-sm text-black">{errors.email.message}</p>
                    )}
                </div>

                <div>
                    <label className="block text-sm text-black">Password</label>
                    <input
                        type="password"
                        {...register("password", { required: "Password is required" })}
                        className="mt-1 w-full border border-black px-3 py-2"
                    />
                    {errors.password && (
                        <p className="text-sm text-black">{errors.password.message}</p>
                    )}
                </div>

                <button
                    type="submit"
                    className="w-full bg-black py-2 text-white"
                >
                    Login
                </button>
            </form>

            <p className="mt-4 text-sm text-black">
                Don&apos;t have an account?{" "}
                <Link href="/signup" className="underline">
                    Sign up
                </Link>
            </p>
        </div>
    )
}