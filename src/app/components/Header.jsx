import React from 'react'
import Image from 'next/image'

const Header = () => {

  return (
    <section className='bg-[#1C5C2D] w-screen min-h-screen px-20 py-20 flex justify-center items-center'>
        <div className='grid grid-cols-1 lg:grid-cols-12'>
            <div className='col-span-8 place-self-center text-center sm:text-left '>
                <h1 className='text-[#E2D6AF] font-serif text-7xl font-semibold mb-9 ml-8'>LGBTQ+ History Trail </h1>
                <p className='text-[#C7BEA0] font-serif text-xl md:text-left mb-7 ml-8'>This 1.5 mile self-guided tour will take you through the downtown of Maine’s largest city along Congress and Pine Streets in Portland. Along the way, you will explore locations and events important to local LGBTQ+ history. 
                </p>

                <button className='bg-[#E2D6AF] rounded-full w-full sm:w-fit px-5 py-3 font-serif text-[#1C5C2D] hover:bg-slate-200  ml-8'>Explore</button>
            </div>


            <div className='col-span-4 place-self-center lg:m-0 mt-4'>
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