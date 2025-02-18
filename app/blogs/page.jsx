import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function BlogPage() {

    const res = await fetch('https://myblog-two-psi.vercel.app/api/posts', { cache: "no-store" });
    const posts = await res.json();

    return (
        <div className="max-w-2xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
            {posts.length === 0 ? (
                <p>No posts available</p>
            ) :
                (
                    posts.map((post) => (
                        <div key={post.id} className="border-b py-4">
                            <h2 className="text-xl font-semibold">{post.title}</h2>
                            <p className="text-gray-600">{new Date(post.createdAt).toLocaleDateString()}</p>
                            <p className="my-2">{post.content || "No content available"}</p>
                            <Link href={`/blogs/${post.id}`}><Button>Read more</Button></Link>
                        </div>
                    ))
                )}
        </div>
    );
}
