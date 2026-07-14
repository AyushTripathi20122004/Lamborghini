import React from 'react'

const UrusSection5 = () => {
  return (
    <div className='relative pt-20 bg-[#181818]  w-full h-screen'>
        
        <div className='flex  absolute top-20 flex-col z-10 bg-gradient-to-b from-[#181818]  to-transparent justify-center w-full  items-center text-white'>
            <h1 className='text-7xl'>Aerodynamics</h1>
            <p className='text-center text-xl '>Flow engineering harmonizes downforce and cooling, reducing drag and ensuring mathematical stability as well as optimal dynamic balance.</p>
        </div>
        <div className='h-full w-full'>
            <video className='h-full w-full object-cover object-center' autoPlay loop muted playsInline>
            <source  src="https://videolamborghini-meride-tv.akamaized.net/video/folder2/1779893287UrusSE-Performante_01-Aero-H_Chapter-Main_lamborghini.mp4" type="video/mp4" />
            </video>
        </div>
    </div>
  )
}

export default UrusSection5