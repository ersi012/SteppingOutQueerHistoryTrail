import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <section className='bg-[#1C5C2D] w-screen min-h-screen px-20 py-40'>
        <div className='grid grid-cols-1 lg:grid-cols-12  '>
            <div className='col-span-7 place-self-center text-center sm:text-left ml-7'>
                <h1 className='text-[#E2D6AF] font-serif text-7xl font-semibold mb-9'>Welcome text!!</h1>
                <p className='text-[#C7BEA0] font-serif text-xl  mb-7'>Lorem ipsum dolor sit amet, consectetur adipisci 
                elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                anim id est laborum. Ut enim ad minim veniam, 
                anim id est laborum.
                </p>

                <button className='bg-[#E2D6AF] rounded-full w-full sm:w-fit px-5 py-3 font-serif text-[#1C5C2D] hover:bg-slate-200 '>Explore</button>
            </div>


            <div className='col-span-5 place-self-center mt-20 ml-5 lg:m-0'>
                <div className='rounded-full bg-[#E2D6AF] w-[370px] h-[370px] relative'>
                    <Image
                    src='/images/header.png'
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="Two people sitting in a car reaching back holding on to a rainbow flag"
                    width={350}
                    height={350}
                    />
                </div>

            </div>
        </div>
    </section>
  )
}

export default Header