import React, { useEffect, useState } from 'react'
import Sec2Header from './Sec2Header'
import Sec2Cards from './Sec2Cards'
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

const Section2 = () => {
  return (
    <div className='Section2 bg-white py-20 lg:px-20 px-4 md:px-20 flex flex-col overflow-hidden gap-10 '>
      <Sec2Header />
      <Sec2Cards />
    </div>
  )
}

export default Section2
