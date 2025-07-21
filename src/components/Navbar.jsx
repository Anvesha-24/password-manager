import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-800 text-white ' >
<div className='mycontainer justify-between items-center flex px-4 py-5 h-14'>

        <div className='logo font-bold text-white text-2xl'>
            <span className='text-green-700'>&lt;</span>
            Pass
            <span className='text-green-700'>OP/&gt;</span>
            </div>
      <ul>
        <li className='flex gap-4'>
            <a className="hover:font-bold" href="/">Home</a>
            <a className="hover:font-bold" href="#">About</a>
            <a className="hover:font-bold" href="#">Contact</a>
        </li>
      </ul>
      <button className='text-white bg-green-700 flex my-5 justify-between items-center border'>
        <img className='invert p-1 w-8' src='/icons/github.svg' alt="github"/>
        <span className='font-bold px-2'>GitHub</span>
      </button>
      </div>
    </nav>
  )
}

export default Navbar
