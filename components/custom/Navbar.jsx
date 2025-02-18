import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center p-5 border-b'>
            <div className="logo">
                <Link className='text-2xl font-semibold' href={'/'}>MyBlog</Link>
            </div>
            <div className="menu flex gap-5">
                <Link href={'/'}>Home</Link>
                <Link href={'/blogs'}>Blogs</Link>
            </div>
            <div className="create">
                <Link href={'/new-blog'}><Button>New Blog</Button></Link>
            </div>
        </div>
    )
}

export default Navbar