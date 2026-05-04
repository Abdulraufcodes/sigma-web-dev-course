import React from 'react'

const Footer = () => {
    return (
        <div className='bg-purple-500 p-2 flex flex-col justify-center items-center fixed bottom-0 w-full'>
            <div className="logo font-bold text-2xl">
                <span className='text-green-700'>&lt;</span>
                <span>pass</span><span className='text-green-700'>Op</span>
                <span className='text-green-700'>/&gt;</span>
            </div>
            <div className='flex justify-center items-center gap-2'>
                <span>Created with</span>
                <img className='w-5' src="/heart.png" alt="" />
                <span>by Rauf</span>
            </div>
        </div>
    )
}

export default Footer
