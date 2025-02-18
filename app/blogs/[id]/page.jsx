import prisma from '@/lib/prisma';
import React from 'react'

const BlogSignlePage = async ({ params }) => {

    const { id } = params;

    const post = await prisma.post.findUnique({
        where: { id: parseInt(id) },
    })

    return (
        <div className="max-w-2xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
            <p className="text-gray-600">{new Date(post.createdAt).toLocaleDateString()}</p>
            <p className="mt-4">{post.content || "No content available"}</p>
        </div>
    )
}

export default BlogSignlePage