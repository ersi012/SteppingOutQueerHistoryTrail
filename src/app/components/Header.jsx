import React from 'react'
import Image from 'next/image'

const Header = () => {

  return (
    <section className='bg-[#1C5C2D] w-screen min-h-screen px-20 py-20 flex justify-center items-center'>
        <div className='grid grid-cols-1 lg:grid-cols-12'>
            <div className='col-span-8 place-self-center text-center sm:text-left '>
                <h1 className='text-[#E2D6AF] font-serif text-7xl font-semibold mb-9 ml-8'>Stepping Out: the Portland, Maine Queer History Trail</h1>
                <p className='text-[#C7BEA0] font-serif text-xl md:text-left mb-7 ml-8'>This 1.5 mile self-guided tour will take you through the downtown of Maine’s largest city along Congress and Pine Streets in Portland. Along the way, you will explore locations and events important to local LGBTQ+ history. 
                </p>
                <audio controls>
                    <source src="./audio/SteppingOutIntroV2_mixdown.mp3" type="audio/mpeg" />
                </audio>
            </div>

            <div className='col-span-4 place-self-center lg:m-0 mt-4'>
  <div className='rounded-full bg-[#E2D6AF] w-full max-w-[400px] aspect-square relative overflow-hidden flex items-center justify-center'>
    <div className='rounded-full w-11/12 max-w-[350px] aspect-square overflow-hidden'>
      <Image
        src='./images/header.webp'
        className="w-full h-full object-cover rounded-full"
        width={350}
        height={300}
        alt="Header Image"
      />
                </div>
            </div>
            </div>

        </div>
    </section>
  )
}

export default Header