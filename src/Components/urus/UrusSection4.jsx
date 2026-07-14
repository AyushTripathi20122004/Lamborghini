import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useState } from 'react'

const UrusSection4 = () => {
    const Sec4Cards=[
        'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/0_facelift_2025/model_details_new/urus_se_performante/gallery/new/s1.jpg',

        'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/0_facelift_2025/model_details_new/urus_se_performante/gallery/new/s2.jpg',

        'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/0_facelift_2025/model_details_new/urus_se_performante/gallery/new/s3.jpg',

        'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/0_facelift_2025/model_details_new/urus_se_performante/gallery/new/s4.jpg',

        'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/0_facelift_2025/model_details_new/urus_se_performante/gallery/new/s5.jpg'
    ]
    
    let [Index,setIndex]=useState(0)

    

    console.log(Index);

  return (
    <div className='h-screen w-full overflow-hidden  relative py-20 bg-[#181818]'>
        {/* Translate btn */}
        <div className={`   absolute px-20 top-1/2 z-[2]  w-full ${Index<Sec4Cards.length-1 ? 'flex justify-between':'flex justify-start'}  ${Index>0 ? 'flex justify-between':'flex justify-end'} `}>
            <button onClick={()=>{if(Index>0){setIndex((Index-1)%Sec4Cards.length)}}} className={`bg-black/20 border border-white  rounded-full ${Index>0 ? 'flex':'hidden'} items-center justify-center overflow-hidden h-16 w-16`}>
                <ChevronLeft className='text-white' size={40}  />
            </button>
            <button onClick={()=>{
                if(Index<Sec4Cards.length-1){setIndex((Index+1)%Sec4Cards.length)}}
                } 
            className={`bg-black/20 ${Index<Sec4Cards.length-1 ? 'flex':'hidden'} border border-white rounded-full  items-center justify-center overflow-hidden h-16 w-16`}>
                <ChevronRight className='text-white object-cover' strokeWidth={1.5} size={40} />
            </button>
        </div>
        {/* Img Cards */}
        <div style={{
            transform: Index > 0
                ? `translateX(-${Index * 100}vw)`
                : `translateX(${Index * 100}vw)`
            }} className='grid grid-flow-col transition-all duration-300   gap-2'>
            {
                Sec4Cards.map((elem,idx)=>{
                    return (
                        <div key={idx} className='w-screen h-screen select-none '>
                            <img className='h-full w-full object-cover object-bottom' src={elem} alt="" srcset="" />
                        </div>
                    )
                })
            }
        </div>


        {/* index */}
        <div className='flex justify-center w-full absolute top-[94%] z-[2]'>
            <div className='flex gap-2'>
                {Sec4Cards.map((elem,idx)=>{
                return(
                    <div key={idx} onClick={()=>{setIndex(idx)}} className={` border border-white/40 rounded ${Index==idx ? 'bg-transparent':'bg-white'} h-1.5 w-20 `}> </div>
                )
            })}
            </div>
        </div>


    </div>
  )
}

export default UrusSection4