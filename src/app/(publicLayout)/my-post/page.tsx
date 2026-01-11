"use client";

import { useEffect, useState } from "react";


type ReviewPost = {
    _id: string;
    title: string;
    description: string;
    rating: number;
    email: string;
    createdAt: string;
};

export default function MyPostsPage() {
    const [posts, setPosts] = useState<ReviewPost[]>([]);
    const [editPost, setEditPost] = useState<ReviewPost | null>(null);

    const fetchPosts = async () => {
        const res = await fetch("/api/reviews");
        const data = await res.json();
        setPosts(data);
    };

    useEffect(() => {
        const load = async () => {
            await fetchPosts();
        };

        load();
    }, []);

    const handleDelete = async (id: string) => {
        await fetch(`/api/reviews/${id}`, { method: "DELETE" });
        fetchPosts();
    };

    const handleUpdate = async () => {
        if (!editPost) return;

        await fetch(`/api/reviews/${editPost._id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                title: editPost.title,
                description: editPost.description,
                rating: editPost.rating,
            }),
        });

        setEditPost(null);
        fetchPosts();
    };

    return (
        <div className="max-w-3xl mx-auto mt-10">
            <h1 className="text-2xl font-bold mb-4">My Posts</h1>

            {posts.map((post) => (
                <div key={post._id} className="border p-4 mb-4">
                    <h2 className="font-semibold">{post.title}</h2>
                    <p>{post.description}</p>

                    <div className="mt-3 flex gap-3">
                        <button
                            onClick={() => setEditPost(post)}
                            className="border px-3 py-1"
                        >
                            Edit
                        </button>

                        <button
                            onClick={() => handleDelete(post._id)}
                            className="border px-3 py-1"
                        >
                            Delete
                        </button>

                        <button className="border px-3 py-1">
                            Details
                        </button>
                    </div>
                </div>
            ))}

            {/* EDIT MODAL */}
            {editPost && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
                    <div className="bg-white p-6 w-96">
                        <h2 className="font-bold mb-3">Edit Review</h2>

                        <input
                            className="border w-full p-2 mb-2"
                            value={editPost.title}
                            onChange={(e) =>
                                setEditPost({ ...editPost, title: e.target.value })
                            }
                        />

                        <textarea
                            className="border w-full p-2 mb-2"
                            value={editPost.description}
                            onChange={(e) =>
                                setEditPost({ ...editPost, description: e.target.value })
                            }
                        />

                        <div className="flex gap-2">
                            <button
                                onClick={handleUpdate}
                                className="bg-black text-white px-4 py-1"
                            >
                                Save
                            </button>
                            <button
                                onClick={() => setEditPost(null)}
                                className="border px-4 py-1"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
