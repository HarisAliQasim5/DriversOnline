import React from 'react'

const IntracityMain = () => {
  return (
    <div className='mt-10 px-4 md:px-0'>
        <h1 className='text-center text-2xl md:text-4xl font-bold mb-10 md:mb-20'>Few Clicks Away To Book A Ride</h1>
      <div className='grid md:grid-cols-2 pb-10'>
        <div className='flex flex-col justify-center'>
            <img src="./images/cab.jpeg" alt="" />
        </div>
        <div className='grid grid-cols-2 md:px-10 lg:px-20 xl:px-36 gap-x-5 gap-y-5 lg:gap-x-10 lg:gap-y-10 mt-10 md:mt-0'>
            <div className='rounded-2xl border pb-4 lg:-rotate-6 flex justify-center'>
                <div>
                <img src="./images/intra1.jpeg" alt="" className='h-28 w-40 p-3 rounded-2xl ' />
                <p className='text-center font-bold'>LOCAL</p>
                </div>
            </div>
            <div className='rounded-2xl border lg:rotate-6 flex justify-center'>
                <div>
                <img src="./images/intra2.jpeg" alt="" className='h-28 w-40 p-3 rounded-2xl ' />
                <p className='text-center font-bold'>PERMANENT</p>
                </div>
                
            </div>
            <div className='rounded-2xl border pb-4 lg:rotate-2 flex justify-center'>
                <div>
                <img src="./images/intra4.jpeg" alt="" className='h-28 w-40 p-3 rounded-2xl ' />
                <p className='text-center font-bold '>OUTSTATION </p>
                </div>
                
            </div>
            <div className='rounded-2xl border lg:-rotate-12 flex justify-center'>
                <div>
                <img src="./images/intra3.jpeg" alt="" className='h-28 w-40 p-3 rounded-2xl ' />
                <p className='text-center font-bold px-3'>OUTSTATION DROP</p>
                </div>
                
            </div>
        </div>
      </div>
    </div>
  )
}

export default IntracityMain
