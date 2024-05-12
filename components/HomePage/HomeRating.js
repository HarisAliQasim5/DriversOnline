import React from "react";
import { useDarkMode } from "../ContextFiles/DarkModeContext";
import { useLanguage } from "../ContextFiles/LanguageContext";
const HomeRating = () => {
  const { darkMode } = useDarkMode();
  const { language } = useLanguage();
  return (
    <div>
        {language ==='en' && <div className={`sm:px-10 px-4 font-serif pt-20 ${darkMode ? "bg-dark" : ""}`}>
      <div className="lg:grid lg:grid-cols-4">
        <div className="lg:col-span-3">
          <p className="pt-5 text-4xl md:text-5xl pb-10 ">
            Eliminating social inequality in{" "}
            <span className="text-purple">order to improve</span> the lot of the
            world's billions of humans
          </p>
        </div>
        <div>
          <div className="absolute hidden -mt-40 lg:right-10 xl:right-36 -z-40 lg:flex">
            <img src="./images/line.svg" alt="" className="w-[500px]" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-x-10">
        <div>
        <div className={`my-5  h-[2px] w-full  bg-gradient-to-br from-purple to-magenta `}></div>
        <h1 className="text-5xl font-bold">749</h1>
        <p className="text-2xl pt-2">cities</p>
        </div>
        <div>
        <div className={`my-5  h-[2px] w-full  bg-gradient-to-br from-purple to-magenta `}></div>
        <h1 className="text-5xl font-bold">3</h1>
        <p className="text-2xl pt-2">Countries</p>
        </div>
        <div>
        <div className={`my-5  h-[2px] w-full  bg-gradient-to-br from-purple to-magenta `}></div>
        <h1 className="text-5xl font-bold">200+</h1>
        <p className="text-2xl pt-2">App Installs</p>
        </div>
      </div>
    </div>}


    {language ==='fr' && <div className={`sm:px-10 px-4 font-serif pt-16 ${darkMode ? "bg-dark" : ""}`}>
      <div className="lg:grid lg:grid-cols-4">
        <div className="lg:col-span-3">
          <p className="pt-5 text-4xl md:text-5xl pb-10 ">
          Éliminer les inégalités sociales dans{" "}
            <span className="text-purple">afin d'améliorer</span> le sort des milliards d'humains dans le monde
          </p>
        </div>
        <div>
          <div className="absolute hidden -mt-40 lg:right-10 xl:right-36 -z-40 lg:flex">
            <img src="./images/line.svg" alt="" className="w-[500px]" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-x-10">
        <div>
        <div className={`my-5  h-[2px] w-full  bg-gradient-to-br from-purple to-magenta `}></div>
        <h1 className="text-5xl font-bold">749</h1>
        <p className="text-2xl pt-2">villes</p>
        </div>
        <div>
        <div className={`my-5  h-[2px] w-full  bg-gradient-to-br from-purple to-magenta `}></div>
        <h1 className="text-5xl font-bold">3</h1>
        <p className="text-2xl pt-2">Des pays</p>
        </div>
        <div>
        <div className={`my-5  h-[2px] w-full  bg-gradient-to-br from-purple to-magenta `}></div>
        <h1 className="text-5xl font-bold">200+</h1>
        <p className="text-2xl pt-2">Installations d'applications</p>
        </div>
      </div>
    </div>}



    {language ==='es' && <div className={`sm:px-10 px-4 font-serif pt-16 ${darkMode ? "bg-dark" : ""}`}>
      <div className="lg:grid lg:grid-cols-4">
        <div className="lg:col-span-3">
          <p className="pt-5 text-4xl md:text-5xl pb-10 ">
            Eliminar la desigualdad social en
            <span className="text-purple">para mejorar</span> la suerte de los miles de millones de seres humanos del mundo
          </p>
        </div>
        <div>
          <div className="absolute hidden -mt-40 lg:right-10 xl:right-36 -z-40 lg:flex">
            <img src="./images/line.svg" alt="" className="w-[500px]" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-x-10">
        <div>
        <div className={`my-5  h-[2px] w-full  bg-gradient-to-br from-purple to-magenta `}></div>
        <h1 className="text-5xl font-bold">749</h1>
        <p className="text-2xl pt-2">ciudades</p>
        </div>
        <div>
        <div className={`my-5  h-[2px] w-full  bg-gradient-to-br from-purple to-magenta `}></div>
        <h1 className="text-5xl font-bold">3</h1>
        <p className="text-2xl pt-2">Países</p>
        </div>
        <div>
        <div className={`my-5  h-[2px] w-full  bg-gradient-to-br from-purple to-magenta `}></div>
        <h1 className="text-5xl font-bold">200+</h1>
        <p className="text-2xl pt-2">Instalaciones de aplicaciones</p>
        </div>
      </div>
    </div>}
    </div>
    
  );
};

export default HomeRating;
