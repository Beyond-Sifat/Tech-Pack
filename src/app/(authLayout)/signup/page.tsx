"use client";

import { Button } from "@/components/ui/button";
// import { setToken } from "@/lib/token";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";


type SignupFormData = {
    username: string;
    email: string;
    password: string;
};


export default function SignupPage() {


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignupFormData>()
    const router = useRouter();

    const onSubmit = async (data: SignupFormData) => {
        const res = await fetch("/api/auth/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });

        const result = await res.json();
        if (res.ok) {
            alert("SignUp successful!");
            router.push("/");
        } else {
            alert(result.error || "SignUp failed");
        }

    };
    return (
        <div>
            <h1 className="mb-6 text-2xl font-bold text-black">Create Account</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <label className="block text-sm text-black">Name</label>
                    <input
                        type="text"
                        {...register("username", { required: "Name is required" })}
                        className="mt-1 w-full border border-black px-3 py-2"
                    />
                    {errors.username && (
                        <p className="text-sm text-black">{errors.username.message}</p>
                    )}
                </div>

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
                        {...register("password", {
                            required: "Password is required",
                            minLength: {
                                value: 6,
                                message: "Minimum 6 characters",
                            },
                        })}
                        className="mt-1 w-full border border-black px-3 py-2"
                    />
                    {errors.password && (
                        <p className="text-sm text-black">
                            {errors.password.message}
                        </p>
                    )}
                </div>

                <Button
                    type="submit"
                    className="w-full bg-black py-2 text-white"
                >
                    Sign Up
                </Button>
            </form>

            <p className="mt-4 text-sm text-black">
                Already have an account?{" "}
                <Link href="/login" className="underline">
                    Login
                </Link>
            </p>
        </div>
    )
}