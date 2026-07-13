import React from 'react'

const UrusSection3 = () => {
  return (
    <div className='relative px-20 bg-[#181818] overflow-hidden'>

        <div className='h-[34rem] w-full o'>
            <video
                autoPlay
                muted
                loop
                playsInline
                width="100%"
                className='h-full w-full object-cover '
            >
                <source src="https://videolamborghini-meride-tv.akamaized.net/video/folder2/1782824076UrusSE-Performante_02-Exterior-H_Chapter-Main_lamborghini.mp4" type="video/mp4"></source>
            </video>

            <div className='absolute top-0  grid grid-rows-2   items-center   h-full w-full'>
                <div className='flex bg-gradient-to-b from-[#181818] via-0.5% to-transparent    py-4 flex-col h-full  w-full items-center text-white'>
                    <h1 className='text-7xl '>CARBON ELEMENTS</h1>
                    <p className=' text-center text-xl text-wrap w-full'>Extensive use of carbon fiber lightens Urus SE Performante, optimizing the power-to-weight ratio to achieve unrivaled performance.</p>
                </div>

                <div className='flex py-4 w-full bg-gradient-to-t from-[#181818] via-0.5% to-transparent  items-end h-full justify-center'>
                    <button className='  uppercase border border-white text-white  flex justify-between items-center text-2xl h-16 w-2xs p-6'>
                      Start CONFIGURATON
                      <svg aria-hidden="true" class="icon light" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 1.94702L3 6.18302V17.817L12 22.053L21 17.817V6.18302L12 1.94702ZM12.5 20.712V18H11.5V20.712L4 17.182V7.28902L6.002 8.23102L6.427 7.32602L4.675 6.50002L12 3.05302L19.325 6.50002L17.573 7.32502L17.999 8.23002L20 7.28802V17.183L12.5 20.712ZM14.927 9.67502L12.5 10.817V14H11.5V10.817L9.073 9.67502L9.499 8.77002L12 9.94702L14.502 8.77002L14.927 9.67502Z" fill="currentColor"></path>
                      </svg>
                    </button>
                </div>
            </div>

        </div>
    </div>
  )
}

export default UrusSection3