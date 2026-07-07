import React, { useEffect } from 'react'
import DealerLocator from './DealerLocator'
import Sec3Cards from './Sec3Cards'
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

const Section3 = () => {

  return (
    <div className='Section3 h-full bg-[#181818]'>
      <DealerLocator />
      <Sec3Cards />
    </div>
  )
}

export default Section3
