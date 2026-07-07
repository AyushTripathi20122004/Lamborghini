import React from 'react'

const Searchpage = () => {
  return (
    <div className='h-full w-full flex flex-col pt-20  bg-black'>
        {/* search bar */}
        <div className='flex items-center h-56 p-20 '>
            <form action="" className='flex gap-2'>
                <input type="text" placeholder='Search on the website' className='p-4 focus:outline-0  placeholder:text-white/80  text-white h-16 w-lg border border-white' />
                <button className='bg-white p-4 h-16 hover:bg-white/70 transition-all duration-200 w-fit text-xl '>
                    Search
                </button>
            </form>
        </div>
        <div className='p-20  bg-[#181818] flex flex-col gap-8' >
            <div><h1 className='text-6xl text-white'>Main topics</h1></div>
            
            {/* cards  */}
            <div className='grid grid-cols-3 gap-8'>
                {/* card1 */}
                <div className='flex flex-col gap-2'>
                    <div className='flex text-white text-4xl items-center gap-2'>
                        {/* imgage */}
                        <div> <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/search/icons/car.svg" alt="" srcset="" /></div>
                        <div>
                            MODELS
                        </div>
                    </div>
                    <div class="w-full flex flex-col text-sm text-thin">
                        <a href="#" class="py-4 border-b-[0.25px] border-white text-white hover:text-gray-300 transition">
                            TEMERARIO
                        </a>

                        <a href="#" class="py-4 border-b-[0.25px] border-white text-white hover:text-gray-300 transition">
                           REVUELTO
                        </a>

                        <a href="#" class="py-4 border-b-[0.25px] border-white text-white hover:text-gray-300 transition">
                           URUS SE
                        </a>

                        <a href="#" class="py-4 border-b-[0.25px] border-white text-white hover:text-gray-300 transition">
                            URUS S
                        </a>

                        <a href="#" class="py-4 border-b-[0.25px] border-white text-white hover:text-gray-300 transition">
                            URUS PERFORMANTE
                        </a>
                    </div>
                </div>

                 {/* card2 */}
                <div className='flex flex-col gap-2'>
                    <div className='flex text-white text-4xl items-center gap-2'>
                        {/* imgage */}
                        <div> <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/search/icons/profile.svg" alt="" srcset="" /></div>
                        <div>
                            OWNERSHIP
                        </div>
                    </div>
                    <div class="w-full flex flex-col text-sm text-thin">
                        <a href="#" class="py-4 border-b-[0.25px] border-white text-white hover:text-gray-300 transition">
                           CONNECTIVITY
                        </a>

                        <a href="#" class="py-4 border-b-[0.25px] border-white text-white hover:text-gray-300 transition">
                            CUSTOMER APP
                        </a>

                        <a href="#" class="py-4 border-b-[0.25px] border-white text-white hover:text-gray-300 transition">
                          MOBILITY PROGRAM
                        </a>

                        <a href="#" class="py-4 border-b-[0.25px] border-white text-white hover:text-gray-300 transition">
                           SERVICE
                        </a>

                        <a href="#" class="py-4 border-b-[0.25px] border-white text-white hover:text-gray-300 transition">
                            RECALL CAMPAIGN
                        </a>
                    </div>
                </div>

                 {/* card3 */}
                <div className='flex flex-col gap-2'>
                    <div className='flex text-white text-4xl items-center gap-2'>
                        {/* imgage */}
                        <div> <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/search/icons/custom_solution.svg" alt="" srcset="" /></div>
                        <div>
                            CUSTOM SOLUTIONS
                        </div>
                    </div>
                    <div class="w-full flex flex-col text-sm text-thin">
                        <a href="#" class="py-4 border-b-[0.25px] border-white text-white hover:text-gray-300 transition">
                            CUSTOMIZATION
                        </a>

                        <a href="#" class="py-4 border-b-[0.25px] border-white text-white hover:text-gray-300 transition">
                            ACCESSORIES
                        </a>

                        <a href="#" class="py-4 border-b-[0.25px] border-white text-white hover:text-gray-300 transition">
                            FINANCIAL SERVICES
                        </a>
                    </div>
                </div>
                
            </div>

        </div>
      
    </div>
  )
}

export default Searchpage
