"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GrLike } from "react-icons/gr";
import { ThumbsUp } from "lucide-react";

type Post = {
    _id: string;
    title: string;
    description: string;
    likes: number;
};

export default function AllPostsPage() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/api/all-posts")
            .then((res) => res.json())
            .then((data) => {
                setPosts(data);
                setLoading(false);
            });
    }, []);

    const handleLike = async (id: string) => {
        await fetch(`/api/all-posts/${id}/like`, { method: "POST" });

        setPosts((prev) =>
            prev.map((post) =>
                post._id === id
                    ? { ...post, likes: (post.likes ?? 0) + 1 }
                    : post
            )
        );
    };

    if (loading) return <p className="text-center mt-10">Loading...</p>;

    return (
        <div className="max-w-3xl mx-auto mt-10 space-y-6">
            <h1 className="text-3xl font-bold text-center">All Posts</h1>

            {posts.map((post) => (
                <Card key={post._id}>
                    <CardContent className="p-6 space-y-3">
                        <h2 className="text-xl font-semibold">{post.title}</h2>
                        <p className="text-gray-700">{post.description}</p>

                        <div className="flex items-center gap-4">
                            <Button
                                variant="outline"
                                className="flex items-center gap-2 border-black text-black hover:bg-black hover:text-white transition"
                                onClick={() => handleLike(post._id)}
                            >
                                <ThumbsUp className="h-4 w-4" />
                                Like
                            </Button>

                            <div className="flex items-center gap-2 px-3 py-1 rounded-full border text-sm font-semibold text-gray-700">
                                <ThumbsUp className="h-4 w-4 text-blue-500 fill-blue-500" />
                                <span>{post.likes}</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}


