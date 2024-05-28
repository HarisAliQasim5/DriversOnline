import Navbar from '@/components/layoutScreen/Navbar'
import React from 'react'

const booking = () => {
  return (
    <div>
        <Navbar/>
      <div className="relative flex  items-center mt-16 sm:mt-12">
        <img src="./images/Booking.jpg" alt="swiper" className="w-full md:h-full h-[250px]" />
        <div  className="absolute top-10 px-60 text-center text-white text-5xl font-bold">
        <p>Transfer and tours around Georgia from private drivers</p>
        <p className='text-xl mt-5'>Incredibly friendly locals will tell you all about Georgia's most picturesque, breathtaking, and gastronomic must-visit places</p>
        </div>
        <div className="absolute  w-full  px-32 ">
        <div className='bg-black lg:bg-opacity-60 rounded-2xl p-6 space-y-4'>
                <div className='flex justify-center'>
                    <input type="text" className='w-2/3 py-3 rounded-md px-3' placeholder='Point of Departure ?'/>
                </div>
                <div className='flex justify-center '>
                    <input type="text" className='w-2/3 py-3 rounded-md px-3' placeholder='Point of Arrival ? '/>
                </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default booking
