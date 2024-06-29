import React from "react";
import { FaStar } from "react-icons/fa";
import { useDarkMode } from "../ContextFiles/DarkModeContext";
import { useLanguage } from "../ContextFiles/LanguageContext";
const DownloadApp = () => {
  const { darkMode } = useDarkMode();
  const { language } = useLanguage();
  return (
    <div className={` px-4 sm:px-10 font-serif ${darkMode ? "bg-dark" : ""} pb-20 pt-10`}>
      <div className="relative flex md:items-center pt- sm:pt-3">
        <img
          src="./images/downloadapp.png"
          alt="swiper"
          className="w-full md:h-[280px] h-[500px] rounded-3xl lg:h-full  "
        />
        <div className="absolute left-4 sm:left-10 top-0 md:top-4 text-white">
          <div className="flex ">
            <img src="./images/logo.png" alt="" className="w-24 md:-mt-4 xl:mt-0" />
            <div className="flex flex-col justify-center text-purple">
              <h1>DriversOnline</h1>
              <div className="flex gap-x-1 mt-2">
              <FaStar className="text-yellow-500"/>
              <FaStar className="text-yellow-500"/>
              <FaStar className="text-yellow-500"/>
              <FaStar className="text-yellow-500"/>
              <FaStar className="text-yellow-500"/>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-2xl md:text-5xl lg:-mt-3 xl:mt-5 font-bold italic text-purple">Mobile App</h1>
            <p className="mt-2 lg:mt-5 md:w-[400px] lg:w-full">Freedom of choice and movement – one app for rides, cargo, and delivery.</p>
            <button className='mt-3 lg:mt-8 xl:mt-10 text-lg sm:text-xl lg:text-2xl rounded-md  shadow-white font-bold bg-gradient-to-br from-magenta to-purple px-2 sm:px-3 py-1 sm:py-2 '>Download Now</button>
          </div>
        </div>
        <div className="absolute right-1/4  lg:right-4 md:right-0 -bottom-3 md:hidden  ">
          <img src="./images/mobile.png" alt="" className="h-72 md:h-80 xl:h-full" />
        </div>
        <div className="absolute  lg:right-4 md:right-0  hidden md:flex ">
          <img src="./images/mobile.png" alt="" className="h-72  md:h-80 xl:h-full" />
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
