import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
        <div className='flex flex-wrap w-screen items-center justify-between mx-auto p-5 bg-[#1C5C2D]'>
            <Link href={"/"} className='text-[#E2D6AF] text-5xl ml-2 font-bold'> LOGO</Link>
            <div className='menu hidden md:block md:w-auto'></div> 
            <ul>
              <li>
                <Link href={'#sites'} className='block py-2 pl-3 pr-4 bg-[#E2D6AF] text-[#1C5C2D] font-serif rounded-full sm-text-xl hover:bg-slate-200 place-content-center'>Sites</Link>
              </li>
              <li>
                <Link href={'#about'} className='block py-2 pl-3 pr-4 bg-[#E2D6AF] text-[#1C5C2D] font-serif rounded-full sm-text-xl hover:bg-slate-200'>About</Link>
              </li>
            </ul>
        </div>
    </nav>
    
  )
}

export default Navbar