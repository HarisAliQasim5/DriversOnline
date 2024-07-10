import React from "react";
import { MdSpatialTracking } from "react-icons/md";
import { useDarkMode } from "./ContextFiles/DarkModeContext";
import { useLanguage } from "./ContextFiles/LanguageContext";
const features = [
  [
    "Easy Taxi Booking",
    "Calculate The Trip Mileage",
    "Easy To Use",
    "Data Safety Guaranteed",
  ],
];

const PersonalServices = () => {

    const { darkMode } = useDarkMode();
    const { language } = useLanguage();
  return (
    <div className={` ${darkMode ? "bg-dark" : ""} px-4 sm:px-10 pt-32 pb-5`}>
      <div className={`font-serif   rounded-3xl p-2 `}>
        <h1 className="text-purple font-bold pb-5 text-4xl lg:hidden  ">
          Unsere Services
        </h1>
        <div className="grid lg:grid-cols-2 ">
          <div className="flex flex-col justify-center ">
            <div className="flex justify-center ">
              <img
                src="./images/perDriv.jpg"
                alt=""
                className="w-[400px] h-[450px] rounded-xl"
              />
            </div>
          </div>

          <div className="">
            <h1 className="text-3xl pt-10 font-bold bg-gradient-to-br from-purple to-magenta text-transparent bg-clip-text hidden sm:flex">
            Unsere Services
            </h1>
            <p className="mt-5 pr-5 mb-5">At "Personal Drivers," we offer safe, reliable, and professional driving services tailored to your needs. Our experienced drivers ensure you reach your destinations comfortably and on time. Trust us for a smooth and stress-free driving experience.</p>
            

            <div className="grid md:grid-cols-2">
              {features.map((feature, index) => (
                <div className="space-y-3" key={index}>
                  {feature.map((item, idx) => (
                    <p key={idx}>
                      <span className="text-2xl pr-1 text-purple">✔</span>
                      {item}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalServices;
