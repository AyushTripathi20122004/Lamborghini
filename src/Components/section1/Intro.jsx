import { ArrowBigRightIcon, ArrowRight } from 'lucide-react'
import React from 'react'

const Intro = () => {
  return (
    <div className='h-screen overflow-hidden relative '>
        {/* image */}
        <img className='h-full w-full object-cover' src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/homepage/2026/slider/urus_se_performante/hero1-desktop.png" alt="" />
        
        {/* text over the image */}
        <div className=' absolute top-40 flex items-center h-full w-full '>

            <div className=' px-20  gap-10 grid grid-cols-2 w-full  items-end justify-between '>
                <div className='text-white w-full '>
                    <p className='text-4xl font-normal'>
                        1
                        <sup>st</sup>
                        JULY - 12:00 PM CEST
                    </p>
                    <h1 className='text-8xl'>
                        Save the date
                    </h1>
                </div>
                <div className='w-full  flex items-baseline justify-end'>
                    <button className='bg-white hover:text-white transition-all duration-300 font-normal  px-10  py-5  gap-2  text-2xl hover:bg-black border flex items-center border-black hover:border-white'>
                        Discover More <ArrowRight />
                    </button>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Intro
