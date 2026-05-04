import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-purple-400 relative z-[-1] flex justify-between px-4 h-14 items-center'>
      <div className="logo font-bold">
        <span className='text-green-700'>&lt;</span>
        <span>pass</span><span className='text-green-700'>Op</span>
        <span className='text-green-700'>/&gt;</span>
      </div>
      <ul className='flex flex-1 justify-center'>
        <li className='flex gap-7'>
          <a className='hover:font-bold' href="/">Home</a>
          <a className='hover:font-bold' href="/About">About</a>
          <a className='hover:font-bold' href="/Contact">Contact</a>
        </li>
      </ul>
      <button className='flex justify-center items-center bg-blue-400 px-1 rounded-lg ring-blue-600 ring-1'>
        <img className='w-8' src="/github.png" alt="" />
        <span>Github</span>
      </button>

    </nav>
  )
}

export default Navbar
