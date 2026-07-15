import React, { useEffect, useState } from 'react'
import UrusSection1 from './UrusSection1'
import UrusSection2 from './UrusSection2'
import UrusSection3 from './UrusSection3'
import UrusSection4 from './UrusSection4'
import UrusSection5 from './UrusSection5'
import UrusSection6 from './UrusSection6'

const Urus = () => {
  return(
    <div className='flex flex-col'>
      <UrusSection1 />
      <UrusSection2 />
      <UrusSection3 />
      <UrusSection4 />
      <UrusSection5 />
      <UrusSection6 />
    </div>
  )
}

export default Urus