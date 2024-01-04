import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
        <div className='flex flex-wrap items-center justify-between mx-auto p-8 bg-[#1C5C2D]'>
            <Link href={"/"} className='text-[#E2D6AF] text-3xl ml-6 font-bold'> LOGO</Link>
            <div className='menu'></div> 
        </div>
    </nav>
    
  )
}

export default Navbar