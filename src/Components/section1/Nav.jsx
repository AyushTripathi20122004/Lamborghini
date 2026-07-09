import React from 'react'
import { Menu, MessagesSquare, Search  } from 'lucide-react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className=' bg-black/30 navbar lg:px-20 px-4 md:px-20  w-screen fixed top-0  z-[99]  backdrop-blur-xl flex justify-between items-center py-2  text-white'>
        {/* menu button */}
      <div >
        <Link to='/Menu' className='flex gap-2 text-lg items-center'>
            <Menu />
            <h1 className='text-xl font-normal'>MENU</h1>
        </Link>
      </div>
      {/* logo */}
      <div className='h-16 w-16'>
        <img className='h-full w-full object-cover' src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/logos/2024/03_26/logo_header_01.svg" alt="" />
      </div>
      {/* search button  */}
      <div className='flex gap-4  '>
        <MessagesSquare size={22} />
        <Link to='/Search'><Search  size={22}/></Link>
      </div>
    </div>
  )
}

export default Nav
