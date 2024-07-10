import React from 'react'

const FamilyHero = () => {
  return (
    <div className='bg-gray-800 -mt-5'>
      <div className="font-sans text-[#333] max-w-6xl max-md:max-w-md mx-auto">
      <div className="grid md:grid-cols-2 items-center md:gap-8 gap-6">
        <div className="max-md:order-1 max-md:text-center">
          <p className="text-sm font-bold text-purple mb-2"><span className="rotate-90 inline-block mr-2">|</span> ALL IN ONE APP</p>
          <h2 className="md:text-5xl text-3xl font-extrabold mb-4 md:!leading-[55px] text-white">Book Your Fmily Rides With Us</h2>
          <p className="mt-4 text-base text-gray-200 leading-relaxed">Embark on a gastronomic journey with our curated dishes, delivered promptly to your doorstep. Elevate your dining experience today.</p>
          <div className="mt-10 space-x-4">
            <button type='button'
              className="bg-purple hover:bg-transparent  hover:border-2  transition-all text-white font-bold text-sm rounded-full px-6 py-2.5">Book Now</button>
            <button type='button'
              className="bg-transparent hover:bg-blue-600 hover:text-white border-2 border-purple transition-all text-purple font-bold text-sm rounded-full px-6 py-2.5">Download App</button>
          </div>
          <hr className="mt-10" />
         
        </div>
        <div className="lg:h-[650px] md:h-[550px] flex items-center relative max-md:before:hidden before:absolute before:bg-purple before:h-full before:w-3/4 before:right-0 before:z-0">
          <img src="./images/FamilyImg.jpg" className="rounded-md lg:w-3/4 lg:h-5/6 md:w-11/12 z-50 relative" alt="Dining Experience" />
        </div>
      </div>
    </div>
    </div>
  )
}

export default FamilyHero