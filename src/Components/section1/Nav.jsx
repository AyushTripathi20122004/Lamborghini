import React, { useEffect } from 'react'
import { Menu, MessagesSquare, Search  } from 'lucide-react';
import { Link } from 'react-router-dom';
import { gsap } from "gsap";

const Nav = () => {

  useEffect(()=>{
    const NavTl=gsap.timeline()

    NavTl.from('.NavContainer',{
      scale:2,
      ease:'none',
      duration:0.25,
    })
    NavTl.from('.Menu',{
      y:100,
      filter:'blur(10px)'
    },'>')
    NavTl.from('.logo',{
      y:100,
      filter:'blur(10px)'
    },'>')
    NavTl.from('.search div',{
      y:100,
      filter:'blur(10px)',
      stagger:0.1
    },'>')



  }
  ,[])
  return (
    <div className=' NavContainer overflow-hidden bg-gradient-to-b from-black via-5% to-transparent navbar lg:px-20 px-4 md:px-20  w-screen fixed top-0  z-[99]  flex justify-between items-center py-2  text-white'>
        {/* menu button */}
      <div className='Menu overflow-hidden' >
        <Link to='/Menu' className='flex gap-2 text-lg items-center'>
            <Menu />
            <h1 className='text-xl font-normal'>MENU</h1>
        </Link>
      </div>
      {/* logo */}
      <div className='h-16 w-16 logo'>
        <img className='h-full w-full object-cover' src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/logos/2024/03_26/logo_header_01.svg" alt="" />
      </div>
      {/* search button  */}
      <div className='flex gap-4 search '>
        <div><MessagesSquare size={22} /></div>
        <div><Link to='/Search'><Search  size={22}/></Link></div>
      </div>
    </div>
  )
}

export default Nav
