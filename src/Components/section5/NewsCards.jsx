import React from 'react'

const NewsCards = ({Len,TranslateX}) => {
    const NewsData=[
        {
            btn1:'Events',
            btn2:'Esperienza',
            date:'29 JUNE 2026',
            image:'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/news/2026/06_29_world/cover.jpg',
            heading:'Esperienza Lamborghini”: the world from behind the wheel',
            paragraph:(<>Revuelto: Combined energy consumption: 4,7 kWh/100 Km plus 15 l/100km; Combined CO2 emissions: 350 g/km; Combined CO2 efficiency class: G; Combined fuel consumption with discharged battery: 17,9 l/100km; CO2 class with discharged battery: G <br /><br />
            Temerario: Combined energy consumption: 4,3 kWh/100 Km plus 11,2 l/100km; Combined CO2 emissions: 272 g/km; Combined CO2 efficiency class: G; Combined fuel consumption with discharged battery: 14 l/100km; CO2 class with discharged battery: G <br /> <br />
            Urus SE: Combined energy consumption: 21,4 kWh/100 Km plus 5,71 l/100km; Combined CO2 emissions: 140 g/km; Combined CO2 efficiency class: E; Combined fuel consumption with discharged battery: 12,9 l/100km; CO2 class with discharged battery: G
            </>
            )
        },
        {
            btn1:'Corporate',
            btn2:'People',
            date:'29 JUNE 2026',
            image:'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/news/2026/06_23_mastro/cover%20%2824%29.jpg',
            heading:'Christian Mastro Named CEO of Lamborghini America'
        },
        {
            date:'25 JUNE 2026',
            image:'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/news/2026/06_25_save/cover.jpg',
            heading:'SAVE THE DATE'
        },
        {
            btn1:'Sustainability',
            btn2:'',
            date:'26 JUNE 2026',
            image:'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/news/2026/06_25_sostenibilit%C3%A0/cover%20%2828%29.jpg',
            heading:'Lamborghini Publishes 2025 Sustainability Report'
        },
        {
            btn1:'Heritage',
            btn2:'URUS',
            date:'22 JUNE 2026',
            image:'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/news/2026/06_22_suv/cover.jpg',
            heading:'Lamborghini Super SUVs: From LM002 to Urus SE',
            paragraph:(<>Urus Performante, Urus SE, Urus: Combined energy consumption: 21,4 kWh/100 Km plus 14,1-5,71 l/100km; Combined CO2 emissions: 325-140 g/km; Combined CO2 efficiency class: E-G; Combined fuel consumption with discharged battery: 12,9 l/100km; CO2 class with discharged battery: G</>)
        },
        {
            btn1:'DESIGN',
            btn2:'FENOMENO',
            date:'19 JUNE 2026',
            image:'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/news/2026/06_16_design/cover.jpg',
            heading:'Fenomeno Roadster: Design Through Mitja Borkert’s Eyes',
            paragraph:(<>The vehicle is not yet offered for sale and is therefore not subject to Directive 1999/94/EC. The fuel consumption and emissions data is in the type approval stage</>)
        },
        {
            btn1:'BRAND EXTENSION',
            date:'18 JUNE 2026',
            image:'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/news/2026/06_18_miura/cover%20%2821%29.jpg',
            heading:'Lamborghini Miura: from super sports icon to gaming protagonist'
        }
    ]

    // sending length to the section5
    Len(Math.ceil(NewsData.length/3))




  return (
    <div style={{transform: `translateX(-${TranslateX * 100}%)`}} className={`flex gap-4 transition-all  duration-300 ease-in`}>
      {
        NewsData.map((elem,idx)=>{
            return (
                <div key={idx} className='w-96  h-full flex flex-col gap-6 shrink-0'>
                    {/* image */}
                    <div className='overflow-hidden'>
                        <img src={elem.image}  className='h-[20rem] hover:scale-105 transition-all duration-300  w-full object-cover' alt="" srcset="" />
                    </div>
                    <div className='flex flex-col gap-6'>
                        <div className={`flex gap-4  text-white  ${elem.btn1  ? 'flex':'hidden'}`}>
                            {/* small span buttons */}
                            <button className={`text-sm bg-black/50 px-2 py-0.5 ${elem.btn1  ? 'block':'hidden'}`}>
                                {elem.btn1 || ''}
                            </button>
                            <button className={`text-sm bg-black/50 px-2 py-0.5 ${elem.btn2  ? 'block':'hidden'}`}>
                                {elem.btn2 || ''}
                            </button>
                        </div>
                        {/* date */}
                        <div className='text-sm text-black/80'>
                            {elem.date}
                        </div>
                        <div>
                            <h1 className='text-4xl'>
                                {elem.heading}
                            </h1>
                        </div>

                        <p className={`text-xl ${elem.paragraph? 'block': 'hidden'}`}>
                            {elem.paragraph || ""}
                        </p>

                    </div>


                </div>
            )
        })
      }
    </div>
  )
}


export default NewsCards
