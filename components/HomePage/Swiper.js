import React, { useState, useEffect } from 'react';
import { TypeAnimation } from "react-type-animation";
import { useDarkMode } from '../ContextFiles/DarkModeContext';
import { useLanguage } from '../ContextFiles/LanguageContext';
const images = [
  { src: './images/image1.png', text: 'Never has operating a taxi', subText: 'been so satisfying.' },
  { src: './images/image2.png',  text: 'Never has operating a taxi', subText: 'been so satisfying.' },
  { src: './images/image3.png',  text: 'Never has operating a taxi', subText: 'been so satisfying.' },
  // Add more image URLs and corresponding text as needed
];

const Swiper = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { darkMode } = useDarkMode();
  const { language } = useLanguage();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      { language ==='en' &&
        <div className="relative flex  items-center mt-16 sm:mt-12">
        <img src={images[currentImageIndex].src} alt="swiper" className="w-full md:h-full h-[250px]" />
        <div className="absolute left-4 sm:left-10 text-white text-xl font-bold">
          <div className='text-2xl sm:text-3xl lg:text-5xl lg:space-y-2'>
            <p className='text-white'>Never has <span className='text-purple'> operating a taxi</span><span className=' sm:hidden ml-1'>been so satisfying.</span></p>
            <p className='hidden sm:flex text-white'>been so satisfying.</p>
            <div className='text-[16px] sm:text-xl lg:text-2xl sm:pt-2 lg:pt-5 bg-gradient-to-br from-magenta to-purple text-transparent bg-clip-text pb-4'>
              <TypeAnimation
                sequence={[
                  "Android & IOS both",
                  4000,
                  "Set Your Own Price",
                  4000,
                  "Exact Fare Estimate",
                  4000,
                  
                ]}
                wrapper="span"
                speed={0}
                style={{ fontSize: "1.5em", display: "inline-block" }}
                repeat={Infinity}
              />
            </div>
  
            <button className='text-lg sm:text-xl lg:text-2xl rounded-md  shadow-white font-bold bg-gradient-to-br from-magenta to-purple px-2 sm:px-3 py-1 sm:py-2 '>Download Now</button>
          </div>
        </div>
      </div>
      }

{ language ==='fr' &&
        <div className="relative flex  items-center mt-16 sm:mt-12">
        <img src={images[currentImageIndex].src} alt="swiper" className="w-full md:h-full h-[250px]" />
        <div className="absolute left-4 sm:left-10 text-white text-xl font-bold">
          <div className='text-2xl sm:text-3xl lg:text-5xl lg:space-y-2'>
            <p className='text-white'>Jamais <span className='text-purple'> conduire un taxi</span><span className=' sm:hidden ml-1'>été si satisfaisant.</span></p>
            <p className='hidden sm:flex text-white'>été si satisfaisant</p>
            <div className='text-[16px] sm:text-xl lg:text-2xl sm:pt-2 lg:pt-5 bg-gradient-to-br from-magenta to-purple text-transparent bg-clip-text pb-4'>
              <TypeAnimation
                sequence={[
                  "Android et IOS tous les deux",
                  4000,
                  "Fixez votre propre prix",
                  4000,
                  "Estimation exacte du tarif",
                  4000,
                  
                ]}
                wrapper="span"
                speed={0}
                style={{ fontSize: "1.5em", display: "inline-block" }}
                repeat={Infinity}
              />
            </div>
  
            <button className='text-lg sm:text-xl lg:text-2xl rounded-md  shadow-white font-bold bg-gradient-to-br from-magenta to-purple px-2 sm:px-3 py-1 sm:py-2 '>Télécharger maintenant</button>
          </div>
        </div>
      </div>
      }

{ language ==='es' &&
        <div className="relative flex  items-center mt-16 sm:mt-12">
        <img src={images[currentImageIndex].src} alt="swiper" className="w-full md:h-full h-[250px]" />
        <div className="absolute left-4 sm:left-10 text-white text-xl font-bold">
          <div className='text-2xl sm:text-3xl lg:text-5xl lg:space-y-2'>
            <p className='text-white'>Nunca lo ha hecho <span className='text-purple'> operando un taxi</span><span className=' sm:hidden ml-1'>
sido tan satisfactorio.</span></p>
            <p className='hidden sm:flex text-white'>
sido tan satisfactorio.</p>
            <div className='text-[16px] sm:text-xl lg:text-2xl sm:pt-2 lg:pt-5 bg-gradient-to-br from-magenta to-purple text-transparent bg-clip-text pb-4'>
              <TypeAnimation
                sequence={[
                  "Android e IOS ambas",
                  4000,
                  "Establece tu propio precio",
                  4000,
                  "Estimación exacta de la tarifa",
                  4000,
                  
                ]}
                wrapper="span"
                speed={0}
                style={{ fontSize: "1.5em", display: "inline-block" }}
                repeat={Infinity}
              />
            </div>
  
            <button className='text-lg sm:text-xl lg:text-2xl rounded-md  shadow-white font-bold bg-gradient-to-br from-magenta to-purple px-2 sm:px-3 py-1 sm:py-2 '>Descargar ahora</button>
          </div>
        </div>
      </div>
      }
    
    </div>
  );
};

export default Swiper;
