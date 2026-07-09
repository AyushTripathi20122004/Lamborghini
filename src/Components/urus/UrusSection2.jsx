import React from 'react'

const UrusSection2 = () => {
  return (
    <div className=' py-20 flex flex-col items-center justify-center bg-[#181818]'>
        <div className='px-20 flex gap-6 flex-col'>
            {/* urus logo image  */}
            <div className='flex items-center justify-center'>
                <img className='h-[4rem]' src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/0_facelift_2025/loghi/urus/urus_se_performante/Model%3DUrus%20SE%20Performante%2C%20Alignment%3DCenter%2C%20Breakpoint%3DDesktop-dark.svg" alt="" srcset="" />
            </div>
            {/* text */}
            <p className='text-white text-xl font-thin'>
                Urus SE Performante redefines the standards of the plug-in hybrid Super SUV with 812 CV of power. Advanced aerodynamic efficiency and driving dynamics combine to deliver absolute precision, made possible by an innovative suspension system.
            </p>
        </div>
        <div className=' px-20 h-full flex gap-20 justify-center w-full mt-40 '>
            <div className='text-white text-center '>
                <h1 className='text-9xl'>597<span className='text-4xl'>KW</span></h1>
                <p className='text-3xl text-white/60'>Max power <br /> (combined ICE+EE)</p>
            </div>

            <div className='text-white text-center '>
                <h1 className='text-9xl'>312<span className='text-4xl'>KW/h</span></h1>
                <p className='text-3xl text-white/60'>Max Speed</p>
            </div>

            <div className='text-white text-center '>
                <h1 className='text-9xl'>3.3<span className='text-4xl'>s</span></h1>
                <p className='text-3xl text-white/60'>0-100 km/h</p>
            </div>
            
        </div>
    </div>
  )
}

export default UrusSection2