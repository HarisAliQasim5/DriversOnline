import React from 'react'

const PersonalDrivers = () => {
  return (
    <div>
      <div className='grid grid-cols-2'>
        <div className='flex flex-col justify-center border-2'>
            <h1 className='text-purple'>HIRE DRIVERS</h1>
            <h2 className='text-3xl w-3/5 font-semibold'>Hire Temporary Drivers at Your Convenience</h2>
            <div className=''>
            <button className='bg-black px-8 py-1 text-white '>Book</button>
            </div>
        </div>
        
        <div>
            <img src="/images/personalDriver.jpeg" alt="" className='h-96' />
        </div>

      </div>
    </div>
  )
}

export default PersonalDrivers
