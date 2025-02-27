import React from 'react'
import { useDarkMode } from '../components/ContextFiles/DarkModeContext';
import { useLanguage } from '../components/ContextFiles/LanguageContext';
import { PiCityFill } from "react-icons/pi";
const Sample = () => {
  const { darkMode } = useDarkMode();
    const { language } = useLanguage();

  return (
    <div className='font-serif '>
      <section>
  {/* Container */}
  <div className="px-4 sm:px-10 w-full max-w-7xl  py-12  md:py-16 lg:py-20">
    {/* Component */}
    <div className="flex flex-col gap-8 lg:flex-row lg:gap-10">
      {/* Content */}
      <div className="flex flex-col gap-8 lg:w-3/5">
        <h2 className="mb-4 lg:mb-8 text-3xl font-bold md:text-5xl bg-gradient-to-br from-purple to-magenta text-transparent bg-clip-text font-serif italic">About us</h2>
        <p className="text-sm sm:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin fermentum leo vel orci. Dui faucibus in ornare quam viverra orci sagittis eu. Viverra nam libero justo laoreet sit amet. Vulputate odio ut enim blandit volutpat maecenas volutpat blandit. A lacus vestibulum sed arcu non odio euismod. Feugiat pretium nibh ipsum consequat. Cum sociis natoque penatibus et. Leo in vitae turpis massa sed. Neque aliquam vestibulum morbi blandit cursus. Facilisis sed odio morbi quis. A pellentesque sit amet porttitor eget.</p>
        <a href="#" className={`w-40 rounded-md bg-gradient-to-r from-purple to-magenta px-6 py-3 text-center font-semibold text-white`}>Learn More</a>
        {/* Divider */}
      
      
      </div>
      {/* Image */}
      <div className="w-full   lg:w-2/5 flex justify-center ">
        <img src="./images/about.png" alt="" className='rounded-xl  '/>
      </div>
    </div>
    

<div className='grid grid-cols-4 gap-x-5'>
    <div
        class="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
        <span class="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
        <div class="relative z-10 mx-auto max-w-md">
            <span class="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-10 w-10 text-white transition-all">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                </svg>
            </span>
            <div
                class="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                <p>Perfect for learning how the framework works, prototyping a new idea, or creating a demo to share
                    online.</p>
            </div>
        </div>
    </div>
  <div className=''>
  <div className={`my-5  h-[3px] w-full  bg-gradient-to-br from-purple to-magenta `}></div>
      <div>
        <p className='text-5xl font-bold'>744</p>
        <p className='mt-3'>Cities</p>
      </div>
  </div>
  <div className=''>
  <div className={`my-5  h-[3px] w-full  bg-gradient-to-br from-purple to-magenta `}></div>
      <div>
        <p className='text-5xl font-bold'>744</p>
        <p className='mt-3'>Cities</p>
      </div>
  </div>
  <div className=''>
  <div className={`my-5  h-[3px] w-full  bg-gradient-to-br from-purple to-magenta `}></div>
      <div>
        <p className='text-5xl font-bold'>744</p>
        <p className='mt-3'>Cities</p>
      </div>
  </div>
  
  
</div>
  </div>
</section>
    </div>
  )
}

export default Sample
