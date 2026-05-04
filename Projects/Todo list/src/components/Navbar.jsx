import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between px-7 py-2 bg-indigo-500'>
        <div className="logo">
            <span className="font-bold text-2xl text-white">i-Task</span>
        </div>
        <div>
            <ul className='flex gap-9 text-white '>
                <li className="hover:font-bold cursor-pointer transition-all hover:bg-pink-500 py-1 px-2 rounded-lg ">Home</li>
                <li className="hover:font-bold cursor-pointer transition-all hover:bg-pink-500 py-1 px-2 rounded-lg">Your task</li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
