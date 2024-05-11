import React from 'react'
import { MdSpatialTracking } from "react-icons/md";
const WhyChooseUs = () => {
  return (
    <div className='px-4 md:px-10 font-serif '>
         <h1 className='text-purple font-bold pb-5 text-4xl lg:hidden italic'>Why Choose Us</h1>
      <div className='grid lg:grid-cols-2 '>
        <div className=''>
            <h1 className='text-purple font-bold pb-5 hidden lg:flex'>Why Choose Us</h1>
            <p className=' text-3xl md:text-4xl  font-bold text-slate-800'>Trusted By Thousands <span className='lg:flex lg:pt-1 xl:pt-2'> Of  <span className='text-purple md:pl-3 '>Happy Customers</span> </span></p>
            <p className='pt-5 sm:pt-14 md:pt-5 xl:pt-10 xl:pr-10 text-slate-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nesciunt minima sunt eligendi in at. Fugit a explicabo natus praesentium unde suscipit, at laboriosam consequuntur, autem iste, eaque nisi amet?</p>
            <div className='grid md:grid-cols-2 gap-y-5 md:gap-y-0 gap-x-4 xl:gap-x-10 mt-5 xl:mt-10 '>
                <div className='border rounded-xl px-3 py-4 md:pb-5 '>
                    <div className=' '>
                        <MdSpatialTracking className='text-[60px] bg-purple rounded-full px-2 py-2'/>
                        <h1 className='mt-4 font-semibold'>Real Time Tracking</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa soluta autem dolorem veniam similique quo il.</p>
                    </div>
                </div>
                <div className='border rounded-xl px-3 py-4'>
                    <div className=' '>
                        <MdSpatialTracking className='text-[60px] bg-purple rounded-full px-2 py-2'/>
                        <h1 className='mt-4 font-semibold'>Real Time Tracking</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa soluta autem dolorem veniam similique quo il.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex flex-col justify-center -order-1 lg:order-1 '>
            
            <div className='flex justify-center lg:justify-end'>
            <img src="./images/whychooseus.jpg" alt="" className='w-[550px]' />
            </div>
                
        </div>

      </div>
    </div>
  )
}

export default WhyChooseUs
