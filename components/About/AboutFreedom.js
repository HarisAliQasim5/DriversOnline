import React from 'react'
import { useDarkMode } from "../ContextFiles/DarkModeContext";
import { useLanguage } from "../ContextFiles/LanguageContext";
const AboutFreedom = () => {
    const { darkMode } = useDarkMode();
    const { language } = useLanguage();
  return (
    <div className={` ${darkMode ? "bg-dark text-white" : ""} px-4 sm:px-10 pt-10 lg:pt-20 pb-5`}>
      <div className={`font-serif`}>
          <p className="pt-5 text-4xl md:text-5xl pb-10 ">
          Freedom of 
            <span className="text-purple"> choice </span> with inDrive
          </p>
        </div>

        <div className='grid lg:grid-cols-2 gap-x-8 gap-y-10 mt-5'>
            <div className={` ${darkMode ? "bg-light" : "bg-gradient-to-br from-gray-100 via-gray-300  to-gray-400 "} px-4 py-10 rounded-lg`}>
                    <h1 className='text-2xl font-bold'>Drivers Online Vision</h1>
                    <p className='pt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ducimus porro magni adipisci perspiciatis, excepturi quaerat dolorum nobis rem nihil molestiae, incidunt, natus a perferendis? Esse, consequatur molestiae. Harum, ratione.</p>
                    <div className='flex justify-center'>
                    <img src="./images/aboutvalues.png" alt=""  className='mt-5'/>
                    </div>
                    
            </div>
            <div className={`${darkMode ? "bg-light" : "bg-gradient-to-br from-gray-100 via-gray-300  to-gray-400 "} px-4 py-10 rounded-lg`}>
                    <h1 className='text-2xl font-bold'>Drivers Online Mission</h1>
                    <p className='pt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ducimus porro magni adipisci perspiciatis, excepturi quaerat dolorum nobis rem nihil molestiae, incidunt, natus a perferendis? Esse, consequatur molestiae. Harum, ratione.</p>
                    <div className='flex justify-center'>
                    <img src="./images/aboutvison.png" alt=""  className='mt-5'/>
                    </div>
            </div>

        </div>
    </div>
  )
}

export default AboutFreedom
