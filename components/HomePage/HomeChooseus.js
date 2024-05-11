import React from "react";
import { MdSpatialTracking } from "react-icons/md";
import { useDarkMode } from "../ContextFiles/DarkModeContext";
import { useLanguage } from "../ContextFiles/LanguageContext";
const features = [
  [
    "Easy Taxi Booking",
    "Calculate The Trip Mileage",
    "Easy To Use",
    "Data Safety Guaranteed",
  ],
  [
    "GPS Searching",
    "Check The Rate In Real Time",
    "Quickest Ride Start",
    "24/7 Quality Service",
  ],
];

const HomeChooseus = () => {

    const { darkMode } = useDarkMode();
    const { language } = useLanguage();
  return (
    <div className={` ${darkMode ? "bg-dark" : ""} px-4 sm:px-10 pt-20 pb-5`}>
      <div className={`font-serif  ${darkMode ? "bg-light" : "bg-gradient-to-br from-gray-200 to-gray-400"} rounded-3xl p-2 `}>
        <h1 className="text-purple font-bold pb-5 text-4xl lg:hidden italic ">
          Why Choose Us
        </h1>
        <div className="grid lg:grid-cols-2 ">
          <div className="flex flex-col justify-center ">
            <div className="flex justify-center lg:justify-start">
              <img
                src="./images/mobilephone.png"
                alt=""
                className="w-[550px] "
              />
            </div>
          </div>

          <div className="">
            <h1 className="text-3xl pt-10 font-bold bg-gradient-to-br from-purple to-magenta text-transparent bg-clip-text hidden sm:flex">
              Why Us
            </h1>
            <p className="pt-5 text-4xl md:text-5xl pb-10 ">
              Why <span className="text-purple">DriversOnline</span> is popular
            </p>

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

export default HomeChooseus;
