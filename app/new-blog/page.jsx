"use client"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const newBlog = () => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch('/api/posts/', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, content }),
        });

        if (title == '' || content == '') {
            setErrorMessage("All fields are required!");
            return;
        }

        if (res.ok) {
            setTitle('');
            setContent('');
            setSuccessMessage('Blog added successfully!');
            router.push('/blogs');
        } else {
            setErrorMessage("Failded to create blog");
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
                {successMessage && <p className='text-center py-3 text-green-500'>{successMessage}</p>}
                {errorMessage && <p className='text-center py-3 text-red-500'>{errorMessage}</p>}
            </form>
        </div>
    )
}

export default newBlog