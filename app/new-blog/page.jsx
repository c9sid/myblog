"use client"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const newBlog = () => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            axios.post('https://myblog-two-psi.vercel.app/api/posts/api/posts', {
                title,
                content
            })
            setTitle('');
            setContent('');
            router.push('/blogs');
            console.log('Blog posted');
        } catch (error) {
            console.log("Error while posting blog");
        }
    }

    return (
        <div className='flex justify-center items-center py-10'>
            <form onSubmit={handleSubmit} className='p-10 border rounded-md'>
                <h2 className='text-center pb-8'>Add new blog</h2>
                <div className='space-y-4'>
                    <Input className="w-72" onChange={(e) => setTitle(e.target.value)} value={title} placeholder="Enter Title" />
                    <Textarea onChange={(e) => setContent(e.target.value)} value={content} placeholder="Enter Description" />
                    <Button className='w-72'>Publish</Button>
                </div>
            </form>
        </div>
    )
}

export default newBlog