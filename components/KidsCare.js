import React from 'react'
import Image from 'next/image'
const KidsCare = () => {
  return (
    <div>
    <div>
    <div className=''>
    <section className="relative">
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-b from-gray-100 to-gray-400 h-[500px] -skew-y-3  transform origin-top-right" />
      <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-[#912CEE] to-[#800080]h-[500px] -skew-y-12 transform origin-bottom-right" />
    </div>
    <div className="relative flex items-center justify-center px-8 py-16 min-h-screen">
      <div className="flex flex-col items-center justify-between max-w-6xl mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <img
          alt="Fresh vegetables"
          className="w-full max-w-md rounded-lg shadow-lg lg:w-1/2 lg:h-[450px]"
          src="/images/kids.jpeg"
        />
        <div className="text-center  lg:text-left lg:w-1/2 text-black">
          <h1 className="text-4xl font-bold">Let Us Take Care of It Thoroughly and Efficiently</h1>
          <p className="mt-4 mb-8">Our newest feature, School Rides, will help you say goodbye to running after your kids in the morning or struggling to arrange pickups and drop-offs.</p>
          <button className="bg-white text-[#2c3230]  px-4 py-1 rounded-full">Book Your Ride</button>
        </div>
      </div>
    </div>
  </section>
  </div>
  </div>
  </div>
  )
}

export default KidsCare
