import React, { useEffect, useState } from 'react'

const UrusSection1 = () => {
  
  const img=[
    "https://images.unsplash.com/photo-1748189285388-c8852b6a7ed6?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ,
    'https://images.unsplash.com/photo-1726250751736-a4741a6fb402?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ,
    "https://images.unsplash.com/photo-1726250751749-7eb648694fdc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ,
    "https://images.unsplash.com/photo-1747944622987-4b266e53fd15?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ]

  const [index, setIndex] = useState(0);

  useEffect(()=>{
      const interval = setInterval(() => {
        setIndex(prev => (prev + 1) % img.length);
      }, 4000);

      return () => clearInterval(interval);
}, []);

  return (
    <div className=''>
        {/* presentation of the urus */}
        <div className='h-screen transition-all ease-in  overflow-hidden w-full relative'>
            <div className=''>
                <img className='h-full w-full object-cover' src={img[index]} alt=""  />
            </div>
            <div className='grid grid-cols-2 z-[4] gap-4 px-20 absolute top-[50vh]  w-full'>
              {/* herotext section */}
              <div>
                  <span className='uppercase text-white text-4xl'>
                  Urus at its peak
                </span>
                <h1 className='text-9xl text-white'>Urus se Performante</h1>
              </div>
              {/* button section */}
              <div className='flex gap-2 h-full items-end pb-6  '>
                  <button className='  bg-white  uppercase  flex justify-between items-center text-2xl h-16 w-sm p-6'>
                      Start CONFIGURATON
                      <svg aria-hidden="true" class="icon light" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 1.94702L3 6.18302V17.817L12 22.053L21 17.817V6.18302L12 1.94702ZM12.5 20.712V18H11.5V20.712L4 17.182V7.28902L6.002 8.23102L6.427 7.32602L4.675 6.50002L12 3.05302L19.325 6.50002L17.573 7.32502L17.999 8.23002L20 7.28802V17.183L12.5 20.712ZM14.927 9.67502L12.5 10.817V14H11.5V10.817L9.073 9.67502L9.499 8.77002L12 9.94702L14.502 8.77002L14.927 9.67502Z" fill="currentColor"></path>
                      </svg>
                      </button>
                  <button className=' uppercase  flex justify-between items-center text-white border border-white text-2xl h-16 w-48 p-6'>
                    Enquire
                    <svg aria-hidden="true" class="icon light" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 5V19H22V5H2ZM8.5 13.207L9.293 14H14.707L15.5 13.207L20.293 18H3.707L8.5 13.207ZM3 17.293V7.707L7.793 12.5L3 17.293ZM16.207 12.5L21 7.707V17.293L16.207 12.5ZM21 6V6.293L14.293 13H9.707L3 6.293V6H21Z" fill="currentColor" stroke="currentColor" stroke-width="0.4"></path>
                    </svg>
                  </button>
              </div>
            </div>

        </div>




    </div>
  )
}

export default UrusSection1