import React from "react";
import { useDarkMode } from "../ContextFiles/DarkModeContext";
import { useLanguage } from "../ContextFiles/LanguageContext";
import { FaRegLightbulb } from "react-icons/fa";

const AboutValues = () => {
  const { darkMode } = useDarkMode();
  const { language } = useLanguage();

  // Define an array of objects for each section
  const valuesData = [
    {
      title: "Purpose",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat aliquam necessitatibus hic accusantium quasi, nam, nulla doloribus eum fugiat facere quo nihil esse nisi praesentium vel eligendi. Voluptas, facere aperiam.",
    },
    {
      title: "Vision",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat aliquam necessitatibus hic accusantium quasi, nam, nulla doloribus eum fugiat facere quo nihil esse nisi praesentium vel eligendi. Voluptas, facere aperiam.",
    },
    {
      title: "Mission",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat aliquam necessitatibus hic accusantium quasi, nam, nulla doloribus eum fugiat facere quo nihil esse nisi praesentium vel eligendi. Voluptas, facere aperiam.",
    },
    // Add more sections as needed
  ];

  return (
    <div>
      <div className={` ${darkMode ? "bg-dark" : ""} px-4 sm:px-10 pt-20 pb-5 `}>
        <div className={`font-serif  ${darkMode ? "bg-light" : "bg-gradient-to-br from-gray-200 to-gray-400"} rounded-3xl p-2 py-10`}>
          <h1 className="sm:px-4  bg-gradient-to-br from-purple to-magenta text-transparent bg-clip-text font-bold pb-5 text-4xl italic">
            DriversOnline Values
          </h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 sm:px-4 gap-x-8  gap-y-5 mt-10">
            {/* Map over the valuesData array and render each section */}
            {valuesData.map((data, index) => (
              <div key={index} className={`${darkMode ? "bg-dark" : "bg-gradient-to-br from-gray-500 to-gray-700"}  rounded-xl p-5`}>
                <FaRegLightbulb size={45} className="text-white border-2 border-purple px-2 py-2 rounded-full" />
                <h4 className={`py-2 font-bold ${darkMode ? "text-purple": "text-black"} mt-2`}>{data.title}</h4>
                <p className="text-sm leading-7 text-white space-y-4">{data.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutValues;
