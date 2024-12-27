import React from 'react'
import MobileTile from '../../components/MobileTile/MobileTile'
import Filters from '../../components/Filters/Filters'
const Mobile = () => {
  return (
    <div className='flex m-4 justify-between gap-2'>
       <Filters/>
       <div px-6>
        <MobileTile/>
        <MobileTile/>
        <MobileTile/>
        <MobileTile/>
        <MobileTile/>
        <MobileTile/>
        <MobileTile/>
       </div>
    </div>
  )
}

export default Mobile