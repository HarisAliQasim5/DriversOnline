import React from 'react'

const PersonalHero = () => {
  return (
    <div className='mt-20'>
      <div class="bg-gray-800 font-[sans-serif] text-white p-6 lg:h-screen">
      <div class="grid md:grid-cols-2 items-center gap-10 max-w-5xl max-md:max-w-md mx-auto md:mt-5">
        <div class="md:h-[400px] ">
          <img src="./images/persHero.jpg" class="w-full h-full object-contain" />
        </div>
        <div class="max-md:text-center">
          <h3 class="md:text-3xl text-2xl md:leading-10">Hire Personal Drivers For Your Convience</h3>
          <p class="mt-6 text-sm">Laboris qui Lorem ad tempor ut reprehenderit. Nostrud anim nulla officia ea sit deserunt. Eu eu quis anim aute Laboris qui Lorem ad tempor ut reprehenderit.</p>
          <button type="button" class="px-6 py-2 mt-8 font-semibold rounded text-sm outline-none border-2 border-white">Explore</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default PersonalHero
