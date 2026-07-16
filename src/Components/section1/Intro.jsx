import { ArrowBigRightIcon, ArrowRight } from 'lucide-react'
import React, { useEffect } from 'react'
import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";
import Urus from '../urus/Urus';
import { gsap } from "gsap";

const Intro = () => {
    useEffect(()=>{
        const IntroTl=gsap.timeline({duration:0.8});
        IntroTl.from('.Char',{
            display:'none',
            filter:'blur(10px)',
            rotateY:360,
            stagger:0.05,
            ease:'power1.in',
            duration:0.1
        },'start')
        IntroTl.from(".intro-Hero-Text2",{
            x:"-120%",
            filter:'blur(5px)',
            ease:'power1.out(2)'
        },'start')

        IntroTl.from(".intro-btn",{
            scale:0,
            ease:'back.out(1.7)',
            duration:2
        },'>')
        
    },[])
  return (
    <div className='h-screen  relative '>
        {/* image */}
        <img className='h-full w-full object-cover object-center  opacity-70' src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/homepage/2026/slider/urus_se_performante/01_07/hero1-desktop.png" alt="" />
        
        {/* text over the image */}
        <div className=' absolute top-[22vh] flex items-center h-full w-full '>

            <div className=' lg:px-20 px-4 md:px-20  gap-10 grid lg:grid-cols-2  md:grid-cols-2 w-full  items-end justify-between '>
                <div className='text-white w-full   '>
                    <p className='text-3xl font-normal intro-Hero-Text1  uppercase flex'>
                        {[...'se Urus performante'].map((elem,idx)=>{
                            return (<div className='Char' key={idx}>{elem == " " ? <>&nbsp;</> : elem}</div>)
                        })}
                    </p>
                    <h1 className='text-8xl intro-Hero-Text2   uppercase  '>
                        Urus at its peak
                    </h1>
                </div>
                <div className='  overflow-hidden   flex items-baseline lg:justify-end md:justify-end'>
                    <Link to="/Urus" className='intro-btn'>
                        <button className='bg-yellow-500   hover:bg-yellow-700  transition-all duration-100 font-normal  px-10  py-5  gap-2  text-2xl flex items-center'>
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
