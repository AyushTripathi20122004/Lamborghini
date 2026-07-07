import React, { useState } from 'react'
import NewsCards from './NewsCards'

const Section5 = () => {
    // len of the cards
    const [CardLength,setLen]=useState(0)
    console.log(CardLength);
    
    // trnlate x
    const [TranslateX,SetTranslateX]=useState(0)
  return (
    <div className=' flex items-center justify-center mt-20 mb-20 bg-white '>
      <div className='w-[75rem] overflow-hidden'>
        <NewsCards Len={setLen} TranslateX={TranslateX} />
        <div className='flex justify-center gap-4 mt-10'>
            {Array.from({ length: CardLength }).map((_, index) => {
                return (
                    <div key={index} onClick={()=>{SetTranslateX(index)}} className={`h-1 w-36  ${TranslateX==index? "bg-black":"bg-black/50"} `}></div>
                );
            })}
        </div>
      </div>
    </div>
  )
}

export default Section5
