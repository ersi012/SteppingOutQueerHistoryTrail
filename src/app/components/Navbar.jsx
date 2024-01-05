import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
        <div className='flex flex-wrap w-screen items-center justify-between mx-auto p-7 bg-[#1C5C2D]'>
            <Link href={"/"} className='text-[#E2D6AF] text-3xl ml-6 font-bold'> LOGO</Link>
            <div className='menu hidden md:block md:w-auto'></div> 
            <ul>
              <li>
                <Link href={'#sites'} className='block py-2 pl-3 pr-4 bg-[#E2D6AF] text-[#1C5C2D] font-serif rounded-full'>Sites</Link>
              </li>
              <li>
                <Link href={'#about'} className='block py-2 pl-3 pr-4 bg-[#E2D6AF] text-[#1C5C2D] font-serif rounded-full'>About</Link>
              </li>
            </ul>
        </div>
    </nav>
    
  )
}

export default Navbar