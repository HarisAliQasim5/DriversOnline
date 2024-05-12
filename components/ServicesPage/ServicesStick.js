import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { MdDirectionsBike } from "react-icons/md";
import { CiFaceSmile } from "react-icons/ci";
import { useDarkMode } from "../ContextFiles/DarkModeContext";
import { useLanguage } from "../ContextFiles/LanguageContext";
const factData = [
  {
    icon: <AiOutlineLike className="text-4xl text-purple" />,
    title: "Fair fares",
    description: "Create beautiful cards with gradient borders with Tailwind CSS.",
  },
  {
    icon: <MdDirectionsBike className="text-4xl text-purple" />,
    title: "Ride control",
    description: "Create beautiful cards with gradient borders with Tailwind CSS.",
  },
  {
    icon: <CiFaceSmile className="text-4xl text-purple" />,
    title: "Emotional comfort",
    description: "Create beautiful cards with gradient borders with Tailwind CSS.",
  },
];

const ServicesStick = () => {

  const { darkMode } = useDarkMode();
  const { language } = useLanguage();
  return (
    <div className={`sm:px-10 px-4 font-serif ${darkMode ? "bg-dark text-white" : ""} pb-10`}>
      <p className="pt-5 text-4xl md:text-5xl pb-10 w-3/4">
      People <span className="text-purple">stick</span> with us because
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-5 ">
        {factData.map((fact, index) => (
          <div key={index} className="rounded-lg bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg ">
            <div className={` p-7 rounded-md ${darkMode ? "bg-light": "bg-white"}`}>
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-200">
                {fact.icon}
              </div>
              <h1 className="font-bold text-xl mb-2 pt-4 text-purple">{fact.title}</h1>
              <p>{fact.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesStick;
