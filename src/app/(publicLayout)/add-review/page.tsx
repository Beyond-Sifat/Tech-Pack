"use client";

import { useState } from "react";

export default function AddReviewPage() {
    const [form, setForm] = useState({
        title: "",
        description: "",
        rating: 5,
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        await fetch("/api/reviews", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        });

        setForm({ title: "", description: "", rating: 5 });
        alert("Review added");
    };

    return (
        <div className="max-w-xl mx-auto mt-10">
            <h1 className="text-2xl font-bold mb-4">Add Review</h1>

            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    className="border w-full p-2"
                    placeholder="Title"
                    value={form.title}
                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                />

                <textarea rows={10}
                    className="border w-full p-2"
                    placeholder="Description"
                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                />

                {/* <input
                    type="number"
                    min="1"
                    max="5"
                    className="border w-full p-2"
                    value={form.rating}
                    onChange={(e) => setForm({ ...form, rating: Number(e.target.value) })}
                /> */}

                <button className="bg-black text-white px-4 py-2">
                    Submit
                </button>
            </form>
        </div>
    );
}
