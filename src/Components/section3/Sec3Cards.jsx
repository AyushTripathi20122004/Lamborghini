import React, { useState } from 'react'

const Sec3Cards = () => {

    const S3Cards={
        card1: [{
            text:'Configure your',
            heading:(<>Urus SE<br />Performante</>),
            Links:['#','#'],
            CarImage:'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/0_facelift_2025/gateway_family/urus/Urus%20SE%20Performante-modelChooser-desktop_v2.png',
            borderColor:'border-yellow-500'

        }],
        card2: [{
            text:'Configure your',
            heading:'Temerario',
            Links:['#','#'],
            CarImage:'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/0_facelift_2025/homepage/model_chooser/model_chooser_temerario.png',
            paragraph:'Energy consumption (weighted combined): 4,3 kWh/100 Km plus 11,2 l/100km; CO2 emissions (weighted combined): 272 g/km; CO2 class (weighted combined): G; CO2 class with discharged battery: G; Fuel consumption with discharged battery (combined): 14 l/100km',
             borderColor:'border-yellow-500'

        }],
        card3: [{
            text:'Configure your',
            heading:'Revuelto',
            Links:['#','#'],
            CarImage:'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/0_facelift_2025/homepage/model_chooser/model_chooser_revuelto.png',
            paragraph:'Energy consumption (weighted combined): 4,3 kWh/100 Km plus 11,2 l/100km; CO2 emissions (weighted combined): 272 g/km; CO2 class (weighted combined): G; CO2 class with discharged battery: G; Fuel consumption with discharged battery (combined): 14 l/100km',
             borderColor:'border-yellow-500'

        }],
        card4: [{
            text:'Configure your',
            heading:'Urus SE',
            Links:['#','#'],
            CarImage:'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/0_facelift_2025/homepage/model_chooser/model_chooser_urus_se.png',
            paragraph:'Energy consumption (weighted combined): 4,3 kWh/100 Km plus 11,2 l/100km; CO2 emissions (weighted combined): 272 g/km; CO2 class (weighted combined): G; CO2 class with discharged battery: G; Fuel consumption with discharged battery (combined): 14 l/100km',
            borderColor:'border-yellow-500'

        }]

    }

    
    

    const [Card,setCard]=useState(S3Cards.card1)
  return (
    <div className='flex justify-center py-20 h-screen bg-[#181818]'>
        <div className='flex flex-col justify-between items-center'>
            {/* changing btns */}
            <ul className='flex text-white/60 gap-4 font-normal text-[16px]  '>
                <li className={` border-b border-white/60   px-6`}><button onClick={()=>{setCard(S3Cards.card1)}}>Urus SE Performante</button></li>
                <li className='border-b border-white/60 px-6'><button onClick={()=>{setCard(S3Cards.card2)}}>Temerario</button></li>
                <li className='border-b border-white/60 px-6'><button onClick={()=>{setCard(S3Cards.card3)}}>Revuelto</button></li>
                <li className='border-b border-white/60 px-6'><button onClick={()=>{setCard(S3Cards.card4)}}>Urus SE</button></li>
            </ul>
            {/* cards section */}
            <div className='flex items-center justify-center   h-full  w-full '>
                {
                    Card.map((elem,idx)=>{
                        return (
                            <div key={idx} className='flex relative items-center w-full  gap-10  h-full'>
                                <div className=' absolute top-0 flex flex-col pb-20  justify-end px-4 h-full'>
                                    <span className='text-4xl text-white'>{elem.text}</span>
                                    <h1 className='flex flex-wrap text-7xl text-white'>{elem.heading}</h1>
                                    <div className='flex gap-4'>
                                        <div>
                                            <button className=' bg-yellow-300  uppercase flex justify-between items-center  h-8 gap-4 text-nowrap p-6'>
                                            Start CONFIGURATON
                                            <svg aria-hidden="true" class="icon light" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 1.94702L3 6.18302V17.817L12 22.053L21 17.817V6.18302L12 1.94702ZM12.5 20.712V18H11.5V20.712L4 17.182V7.28902L6.002 8.23102L6.427 7.32602L4.675 6.50002L12 3.05302L19.325 6.50002L17.573 7.32502L17.999 8.23002L20 7.28802V17.183L12.5 20.712ZM14.927 9.67502L12.5 10.817V14H11.5V10.817L9.073 9.67502L9.499 8.77002L12 9.94702L14.502 8.77002L14.927 9.67502Z" fill="currentColor">
                                            </path>
                                            </svg>
                                            </button>
                                        </div>
                                        <div>
                                            <button className=' text-white border border-white uppercase flex justify-between items-center  h-8 gap-4  p-6'>
                                                Equire
                                                <svg aria-hidden="true" class="icon light" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 5V19H22V5H2ZM8.5 13.207L9.293 14H14.707L15.5 13.207L20.293 18H3.707L8.5 13.207ZM3 17.293V7.707L7.793 12.5L3 17.293ZM16.207 12.5L21 7.707V17.293L16.207 12.5ZM21 6V6.293L14.293 13H9.707L3 6.293V6H21Z" fill="currentColor" stroke="currentColor" stroke-width="0.4"></path></svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className='h-[80%]  w-full'>
                                    <img className='object-cover object-left h-full w-full' src={elem.CarImage} alt="" srcset="" />
                                </div>
                            </div>
                        )
                    })
                }
                
            </div>
            
        </div>
      
    </div>
  )
}

export default Sec3Cards
