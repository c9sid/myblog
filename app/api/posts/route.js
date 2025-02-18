import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// Handle GET request
export async function GET() {
    try {
        const posts = await prisma.post.findMany({
            orderBy: { createdAt: "desc" },
        });
        return NextResponse.json(posts, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Error fetching posts" }, { status: 500 });
    }
}

export async function POST(req) {
    try {
        const { title, content } = await req.json();
        const posts = await prisma.post.create({
            data: {
                title,
                content
            }
        })
        return NextResponse.json(posts, { status: 200 })
    } catch (error) {
        return NextResponse.json({ messaage: "Error while adding blog" }, { status: 500 })
    }
}