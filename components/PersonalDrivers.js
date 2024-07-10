import React from 'react'

const PersonalDrivers = () => {
  return (
    <div className='mt-10 py-10 bg-gray-800 px-4'>
      <div className='grid md:grid-cols-2'>
        <div className='flex flex-col justify-center '>
        <div className='flex justify-center '>
            <div>
            <h1 className='text-purple '>BOOK DRIVERS</h1>
            <div className='flex flex-col text-white'>
            <h2 className='text-3xl lg:text-5xl font-semibold '>Hire Personal Drivers at <span>Your Convenience</span></h2>
            <h2 className='text-3xl lg:text-5xl font-semibold hidden '>Your Convenience</h2>
            </div>
           
            <div className='flex justify-center'>
            <button className='bg-black px-8 py-1 text-white mt-5'>Book Now</button>
            </div>
            </div>
            
        </div>
        </div>
        
        <div className='flex justify-center md:order-1 -order-1 pt-5  mb-5'>
            <img src="/images/personalDriver.jpeg" alt="" className='md:h-72 lg:h-96' />
        </div>

      </div>
    </div>
  )
}

export default PersonalDrivers
