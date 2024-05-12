import React from "react";
import { IoDocumentTextOutline } from "react-icons/io5";
import { BiSupport, BiSolidBookContent } from "react-icons/bi";
import { useDarkMode } from "../ContextFiles/DarkModeContext";
import { useLanguage } from "../ContextFiles/LanguageContext";
const featuresEng = [
  {
    icon: IoDocumentTextOutline,
    title: "Easy Rides History & Management",
    description:
      "Perfect for learning how the framework works, prototyping a new idea, or creating a demo to share online.",
  },
  {
    icon: BiSolidBookContent,
    title: "Fare, KM & Time in your hand",
    description:
      "Perfect for learning how the framework works, prototyping a new idea, or creating a demo to share online.",
  },
  {
    icon: BiSupport,
    title: "Our Dedicated Support",
    description:
      "Perfect for learning how the framework works, prototyping a new idea, or creating a demo to share online.",
  },
];

const featuresFr = [
    {
      icon: IoDocumentTextOutline,
      title: "Gestion et historique faciles des trajets",
      description:
        "Parfait pour apprendre comment fonctionne le framework, prototyper une nouvelle idée ou créer une démo à partager en ligne.",
    },
    {
      icon: BiSolidBookContent,
      title: "Tarif, KM & Temps entre vos mains",
      description:
        "Parfait pour apprendre comment fonctionne le framework, prototyper une nouvelle idée ou créer une démo à partager en ligne.",
    },
    {
      icon: BiSupport,
      title: "Notre soutien dédié",
      description:
        "Parfait pour apprendre comment fonctionne le framework, prototyper une nouvelle idée ou créer une démo à partager en ligne.",
    },
  ];
  
  // Features array in Spanish
  const featuresEs = [
    {
      icon: IoDocumentTextOutline,
      title: "Historial y gestión de viajes fácil",
      description:
        "Perfecto para aprender cómo funciona el framework, prototipar una nueva idea o crear una demostración para compartir en línea.",
    },
    {
      icon: BiSolidBookContent,
      title: "Tarifa, KM y Tiempo en tu mano",
      description:
        "Perfecto para aprender cómo funciona el framework, prototipar una nueva idea o crear una demostración para compartir en línea.",
    },
    {
      icon: BiSupport,
      title: "Nuestro Soporte Dedicado",
      description:
        "Perfecto para aprender cómo funciona el framework, prototipar una nueva idea o crear una demostración para compartir en línea.",
    },
  ];

const HomeFeatures = () => {
  const { darkMode } = useDarkMode();
  const { language } = useLanguage();

  return (
    <div className={`px-4 sm:px-10 ${darkMode ? "bg-dark" : ""} pt-20 font-serif`}>
      {language == 'en' &&
      <div>
        <h1 className="text-3xl pt-10 font-bold bg-gradient-to-br from-purple to-magenta text-transparent bg-clip-text">Features</h1>
        <p className="pt-5 text-4xl md:text-5xl pb-10 lg:w-2/3">Managing your <span className="text-purple">money has never</span>  been easier</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4 lg:gap-y-0 ">
        {featuresEng.map((feature, index) => (
          <div
            key={index}
            className={`group relative cursor-pointer overflow-hidden ${
              darkMode ? "bg-light" : "bg-white"
            } px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10`}
          >
            <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-gradient-to-br from-purple to-magenta transition-all duration-1000 group-hover:scale-[10]"></span>
            <div className="relative z-10 mx-auto max-w-md">
              <span className="grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-purple to-magenta transition-all duration-300 group-hover:bg-sky-400 ">
                <feature.icon className="text-5xl" />
              </span>
              <div
                className={`space-y-6 pt-5 text-base leading-7 ${
                  darkMode ? "text-white" : "text-gray-600"
                }  transition-all duration-300 group-hover:text-white/90`}
              >
                <h1 className={`text-2xl font-semi-bold ${darkMode ? "text-purple" : "text-gray-800"} `}>{feature.title}</h1>
                <p>{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
      }


    </div>
  );
};

export default HomeFeatures;
