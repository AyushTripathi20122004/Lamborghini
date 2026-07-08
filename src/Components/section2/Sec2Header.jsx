import { ArrowRight } from 'lucide-react'
import React from 'react'

const Sec2Header = () => {
  return (
    <div className='text-black flex justify-between items-center'>
      <div>
        <h1 className='lg:text-6xl text-4xl md:text-6xl'>MODELS</h1>
      </div>
      <div className= ' border-b py-2 lg:block md:block hidden border-black'>
        <a href="#" className='uppercase flex  text-xl leading-snug gap-2'>
            Discover all models <ArrowRight />
        </a>
      </div>
    </div>
  )
}

export default Sec2Header
