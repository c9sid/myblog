import { Loader2 } from 'lucide-react'
import React from 'react'

const loading = () => {
    return (
        <div className='flex justify-center items-center py-5 text-2xl'>
            <Loader2 className='animate-spin' />
        </div>
    )
}

export default loading