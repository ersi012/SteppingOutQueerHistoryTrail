import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='grid-cols-1 lg:grid-cols-12  bg-[#1C5C2D] py-20 px-20'>
        <div className='col-span-7 place-self-center text-center mb-7 sm:text-left'>
            <h1 className='text-[#E2D6AF] font-serif text-6xl font-semibold'>Welcome text!!</h1>
            <p className='text-[#C7BEA0] font-serif text-lg mt-2 mb-4'>Lorem ipsum dolor sit amet, consectetur adipisci 
            elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            anim id est laborum. Ut enim ad minim veniam, 
            anim id est laborum.
            </p>

            <button className='bg-[#E2D6AF] rounded-full w-full sm:w-fit px-5 py-3 font-serif text-[#1C5C2D] hover:bg-slate-200 '>Explore</button>
        </div>


        <div className='col-span-5 place-self-center mt-5 lg:m-0'>
            <div className='rounded-full bg-[#E2D6AF] w-[270px] h-[270px] relative'>
                <Image
                src='/images/header.png'
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                width={250}
                height={250}
                />
            </div>

        </div>
    </div>
  )
}

export default Header