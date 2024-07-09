import React from 'react'

const KidsFeature = () => {
  return (
    // <div className=''>
    //   <div className='grid md:grid-cols-3'>
    //         <div className='flex justify-center md:justify-end '>
    //             <img src="/images/mobile1.svg" alt="" className='h-64 md:h-96 ' />
    //         </div>
    //         <div className='flex flex-col justify-center md:col-span-2'>
    //             <div className='px-4 md:px-10 lg:px-20'>
    //                 <h1 className='text-2xl md:text-4xl font-bold'>Follow along in real time</h1>
    //                 <p className='md:mt-5 '>Monitor your child's trip in real time by following along with the iDrive YourCar app and enjoy the comfort of knowing exactly where your child is every step of the way.</p>
    //             </div>

    //         </div>
    //   </div>
    //   <div className='grid md:grid-cols-3'>
    //         <div className='flex flex-col justify-center md:col-span-2'>
    //             <div className='px-4 md:px-10 lg:px-20'>
    //                 <h1 className='text-2xl md:text-4xl font-bold'>Follow along in real time</h1>
    //                 <p className='md:mt-5 '>Monitor your child's trip in real time by following along with the iDrive YourCar app and enjoy the comfort of knowing exactly where your child is every step of the way.</p>
    //             </div>

    //         </div>
            
    //         <div className='flex justify-center md:justify-start '>
    //             <img src="/images/mobile1.svg" alt="" className='h-64 md:h-96 ' />
    //         </div>
    //   </div>
    // </div>
    <section className="w-full mx-auto py-5 md:py-20  my-4 ">

      <div className="xl:w-[80%] sm:w-[85%] xs:w-[90%] mx-auto flex flex-col md:flex-row xs:flex-col lg:gap-4 xs:gap-2 justify-center lg:items-stretch md:items-center mt-4">
        <div className="lg:w-[35%]  xs:w-full  p-2 flex justify-center md:bg-gray-100 rounded-xl">
          <img src="/images/mobile1.svg" alt="" className='h-72 md:h-96' />
        </div>
        <div className="lg:w-[37%] sm:w-full xs:w-full  px-4   md:p-4 xs:p-0 rounded-md flex flex-col justify-center">
          <h2 className="text-3xl font-semibold text-gray-900  dark:text-gray-800">
          Follow along in real time
          </h2>
          <p className="text-md mt-4">
          Monitor your child's trip in real time by following along with the iDrive YourCar app and enjoy the comfort of knowing exactly where your child is every step of the way.
          </p>
        </div>
      </div>

      <div className="xl:w-[80%] sm:w-[85%] xs:w-[90%] mx-auto flex flex-col md:flex-row xs:flex-col lg:gap-4 xs:gap-2 justify-center lg:items-stretch md:items-center mt-5 md:mt-20">
        <div className="lg:w-[37%] sm:w-full xs:w-full px-4   md:p-4 xs:p-0 rounded-md md:flex flex-col justify-center hidden">
          <h2 className="text-3xl font-semibold text-gray-900  dark:text-gray-800">
          Stay in direct contact
          </h2>
          <p className="text-md mt-4">Features like click-to-call and click-to-message allow you to stay in direct contact with your driver at the touch of a button.
          </p>
        </div>
        <div className="lg:w-[35%] xs:w-full md:bg-gray-100 p-2 flex justify-center rounded-xl">
          
        <img src="/images/mobile2.svg" alt="" className='h-72 md:h-96' />
        </div>
        <div className="lg:w-[37%] sm:w-full xs:w-full px-4   md:p-4 xs:p-0 rounded-md flex flex-col justify-center md:hidden">
          <h2 className="text-3xl font-semibold text-gray-900  dark:text-gray-800">
          Stay in direct contact
          </h2>
          <p className="text-md mt-4">Features like click-to-call and click-to-message allow you to stay in direct contact with your driver at the touch of a button.
          </p>
        </div>
      </div>
    </section>
  )
}

export default KidsFeature
