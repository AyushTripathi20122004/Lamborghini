import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import React, { useEffect, useState } from 'react'


const Sec2Cards = () => {

    // card data stored here
    
    const CardData=[
        {
            ModelNameImage:"https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/0_facelift_2025/loghi/temerario/temerario_center_light.svg",
            Qoute:'You can hide who you are',
            ModelImage:'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/0_facelift_2025/homepage/models/temerario/familyChooser-Temerario_0.png',
            Links:['#','#','#']
        },
        {
            ModelNameImage:"https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/0_facelift_2025/loghi/urus/urus_center_light.svg",
            Qoute:'dare to live more',
            ModelImage:'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/0_facelift_2025/homepage/models/urus/models_urus_se.png',
            Links:['#','#','#']
        },
        {
            ModelNameImage:"https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/0_facelift_2025/loghi/revuelto/revuelto_center_light.svg",
            Qoute:'from now on',
            ModelImage:'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/0_facelift_2025/homepage/models/revuelto/familyChooser-Revuelto_0.png',
            Links:['#','#','#']
        }
    ];

    const paragraphs=[
        'Energy consumption (weighted combined): 4,3 kWh/100 Km plus 11,2 l/100km; CO2 emissions (weighted combined): 272 g/km; CO2 class (weighted combined): G; CO2 class with discharged battery: G; Fuel consumption with discharged battery (combined): 14 l/100km',

        'Urus Performante, Urus SE: Combined energy consumption: 21,4 kWh/100 Km plus 14,1-5,71 l/100km; Combined CO2 emissions: 320-140 g/km; Combined CO2 efficiency class: E-G; Combined fuel consumption with discharged battery: 12,9 l/100km; CO2 class with discharged battery: G',

        'Energy consumption (weighted combined): 4,7 kWh/100 Km plus 15 l/100km; CO2 emissions (weighted combined): 350 g/km; CO2 class (weighted combined): G; CO2 class with discharged battery: G; Fuel consumption with discharged battery (combined): 17,9 l/100km'
        
    ]

    let [CardIndex,SetIndex]=useState('0');

    let [LeftBtn , setLeftbtn]=useState('');
    let [RightBtn , setRightbtn]=useState('');

  return (
    <div className='relative'>

        {/* Card scrolling btns */}
        <div className=' z-[5] absolute top-[30%] flex w-full justify-between'>
            <button 
            onClick={()=>{
                if(CardIndex>0){
                    SetIndex(CardIndex=(CardIndex-1)%CardData.length)
                }
            }}
                
            className='h-14 backdrop-blur-sm flex items-center justify-center LeftBtn  w-14 rounded-full border border-black'>
                <ChevronLeft size='40' strokeWidth='1.2' />
            </button>
             
            <button onClick={()=>{
                if(CardIndex<CardData.length-1){
                    SetIndex(CardIndex=(CardIndex+1)%CardData.length)
                }
            }}
                className='h-14  backdrop-blur-sm flex items-center justify-center RightBtn  w-14 rounded-full border border-black'>
                <ChevronRight size='40' strokeWidth='1.2' />
            </button>
        </div>
        {/* cards */}
        <div style={{ transform: `translateX(-${CardIndex*80}%)` }} className={` transition-all duration-200 cards  pl-28 grid  grid-flow-col items-center   `}>
            {
               CardData.map((elem,idx)=>{
                return(
                    <div key={idx} className='card min-w-[60rem]  flex flex-col items-center'>
                        <div className='cardHeader flex flex-col items-center'>
                            {/* model name */}
                            <div className=''>
                                <img className='h-full w-full object-cover' src={elem.ModelNameImage} alt="" srcset="" />
                            </div>
                            {/* qoute */}
                            <p className='text-8xl text-black/50'>{elem.Qoute}</p>
                        </div>
                        {/* car model image */}
                        <div className='ModelImage  w-full'>
                            <img src={elem.ModelImage} className='h-full w-full object-cover' alt="" srcset="" />
                        </div>

                        <div className='mt-20 flex gap-4 max-w-[20rem]  justify-center '>
                            <div>
                                <button className='bg-[#917300] text-white uppercase flex justify-between items-center text-lg h-16 w-48 p-6'>
                                    Explore the Model <ArrowRight />
                                </button>
                            </div>
                            <div>
                                <button className=' border-b border-black  uppercase flex justify-between items-center text-lg h-16 w-56 p-6'>
                                    Start CONFIGURATON
                                    <svg aria-hidden="true" class="icon light" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 1.94702L3 6.18302V17.817L12 22.053L21 17.817V6.18302L12 1.94702ZM12.5 20.712V18H11.5V20.712L4 17.182V7.28902L6.002 8.23102L6.427 7.32602L4.675 6.50002L12 3.05302L19.325 6.50002L17.573 7.32502L17.999 8.23002L20 7.28802V17.183L12.5 20.712ZM14.927 9.67502L12.5 10.817V14H11.5V10.817L9.073 9.67502L9.499 8.77002L12 9.94702L14.502 8.77002L14.927 9.67502Z" fill="currentColor"></path></svg>
                                </button>
                            </div>
                            <div>
                                <button className=' uppercase flex justify-between items-center text-lg h-16 w-48 p-6'>
                                    Explore the Model
                                    <svg aria-hidden="true" class="icon light" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 5V19H22V5H2ZM8.5 13.207L9.293 14H14.707L15.5 13.207L20.293 18H3.707L8.5 13.207ZM3 17.293V7.707L7.793 12.5L3 17.293ZM16.207 12.5L21 7.707V17.293L16.207 12.5ZM21 6V6.293L14.293 13H9.707L3 6.293V6H21Z" fill="currentColor" stroke="currentColor" stroke-width="0.4"></path></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                )
               }) 
            }
        </div>
        {/* paragraphs about cars */}
        <div className='mt-20 text-xl text-black/80 font-thin  ease-in duration-500'>
            <p>
                {paragraphs[CardIndex]}
            </p>
        </div>
      
    </div>
  )
}

export default Sec2Cards
