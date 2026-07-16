import { ArrowRight, Weight } from 'lucide-react'
import React from 'react'

const Section4 = () => {
  return (
    <div className=' flex justify-center py-20 bg-white'>
        <div className='max-w-[75%]'>
            <div className='flex mb-10 justify-between items-center'>
                <h1 className='text-6xl'>News Lamborghini world</h1>
                <button className='text-lg border-b border-black flex justify-center gap-4  h-10'>READ MORE <ArrowRight strokeWidth={1.2} /></button>
            </div>
            <div className=' max-h-[80vh] overflow-hidden'>
                <img className='hover:scale-105  transition-all h-full w-full object-cover duration-300' src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/motorsport/news/2026/07_01_urus/cover.jpg" alt="" srcset="" />
            </div>
            <div className=' mt-4 '>
                <button className='px-4  flex items-center justify-center h-5  text-white uppercase bg-black/60'>Urus</button>
            </div>
            <div className='mt-4 flex flex-col gap-4'>
                <span className='inline-block text-sm  '>1 June 2026</span>
                <h1 className='text-4xl'>Lamborghini Urus SE Performante: the Super SUV at its peak</h1>
                <p className='font-normal text-black/90 text-xl' >
                    <span className='inline-block  '>Fenomeno: Fenomeno: Under approval, not available for sale</span>
                    <span className='inline-block '>
                        Revuelto: Combined energy consumption: 4,7 kWh/100 Km plus 15 l/100km; Combined CO2 emissions: 350 g/km; Combined CO2 efficiency class: G; Combined fuel consumption with discharged battery: 17,9 l/100km; CO2 class with discharged battery: G
                    </span>
                    <span className='inline-block '>
                        Urus SE, Urus SE Performante: Combined energy consumption: 21,4 kWh/100 Km plus 5,71 l/100km; Combined CO2 emissions: 140 g/km; Combined CO2 efficiency class: E; Combined fuel consumption with discharged battery: 12,9 l/100km; CO2 class with discharged battery: G; Urus SE Performante: Under approval, not available for sale
                    </span>
                </p>
            </div>
        </div>
    </div>
  )
}

export default Section4
