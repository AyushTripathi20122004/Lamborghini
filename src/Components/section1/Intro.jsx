import { ArrowBigRightIcon, ArrowRight } from 'lucide-react'
import React from 'react'
import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";
import Urus from '../urus/Urus';

const Intro = () => {
  return (
    <div className='h-screen  relative '>
        {/* image */}
        <img className='h-full w-full object-cover object-center  opacity-70' src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/homepage/2026/slider/urus_se_performante/01_07/hero1-desktop.png" alt="" />
        
        {/* text over the image */}
        <div className=' absolute top-[22vh] flex items-center h-full w-full '>

            <div className=' lg:px-20 px-4 md:px-20  gap-10 grid lg:grid-cols-2  md:grid-cols-2 w-full  items-end justify-between '>
                <div className='text-white w-full '>
                    <p className='text-3xl font-normal uppercase'>
                        Urus se performante
                    </p>
                    <h1 className='text-8xl  uppercase '>
                        Urus at its peak
                    </h1>
                </div>
                <div className='w-full  flex items-baseline lg:justify-end md:justify-end'>
                    <Link to="/Urus">
                        <button className='bg-yellow-500 hover:bg-yellow-700  transition-all duration-100 font-normal  px-10  py-5  gap-2  text-2xl flex items-center'>
                            Explore the Model <ArrowRight />
                        </button>
                    </Link>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Intro
