import React from 'react'

const UrusSection6 = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center overflow-hidden  relative px-20 mt-20">
      <div className='text-white absolute w-full py-10  top-0 bg-gradient-to-b from-black via-50% to-transparent '>
        <h2 className="text-7xl text-center font-normal">Interior</h2>
        <p className="mt-2 text-center text-xl">"Feel like a pilot" cockpit with Corsa Tex and carbon. Avionic keys and digital HMI shape a pure technical essence."</p>
      </div>
        <div className="select-none flex items-center justify-center">
          <img  className='h-full w-full object-cover' src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/0_facelift_2025/model_details_new/urus_se_performante/interior/02_07/UrusSE-Performante_03-Interior-H_Chapter-Main_Still-B-last-optim.jpg" alt="" srcset="" />
        </div>
    </div>
  )
}

export default UrusSection6