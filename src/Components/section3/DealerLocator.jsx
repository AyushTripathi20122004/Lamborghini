import { ArrowRight } from 'lucide-react'
import React from 'react'

const DealerLocator = () => {
  return (
    <div className='  relative h-52 overflow-hidden'>
      <div className='h-full w-full '><img className='h-full w-full object-cover ' src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/0_facelift_2025/homepage/banner_locator/banner-desktop.jpg" alt="" /></div>

      <div className='absolute top-0 flex  flex-col  justify-center gap-6 px-60 w-full h-full bg-black/60'>
        <h1 className='uppercase text-7xl text-white'>Dealer locator</h1>
        <div>
            <button className='flex justify-between w-44  py-3 px-6 bg-white'>
                FIND YOU DEALER
                <ArrowRight />
            </button>
        </div>
      </div>
    </div>
  )
}

export default DealerLocator
