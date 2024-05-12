import React from 'react'
import { useDarkMode } from '../ContextFiles/DarkModeContext';
import { useLanguage } from '../ContextFiles/LanguageContext';
const Safety = () => {

  const { darkMode } = useDarkMode();
  const { language } = useLanguage();

  return (
    <div className={` ${darkMode ? "bg-dark": ""} px-4 sm:px-10 py-4  font-serif pt-28`}>
      {language === 'en' && <div>
      <div className={`grid lg:grid-cols-3  rounded-3xl ${darkMode ? "bg-light" : "bg-gradient-to-br from-gray-200 to-gray-400"}  py-5 px-6`}>
        <div className='flex flex-col  lg:col-span-2 lg:pr-16 xl:pr-28 '>

        <div>
        <h1 className="  bg-gradient-to-br from-purple to-magenta text-transparent bg-clip-text font-bold pb-5 text-4xl  italic ">
            Standards
          </h1>
          <p className="pt-5 text-4xl md:text-5xl pb-10 ">Upholding<span className="text-purple"> Safety</span> Standards</p>
          <div className={`text-lg ${darkMode ? "text-white":"text-gray-700"}`}>
          <p className='leading-tight'><span className='text-purple font-bold'>1.</span> Rigorous driver vetting, regular vehicle checks, and advanced app safety features prioritize your safety</p>
          <p className='leading-tight pt-4'><span className='text-purple font-bold'>2.</span> Every driver undergoes strict vetting, vehicles receive regular inspections, and our app ensures real-time GPS tracking and 24/7 support.</p>
          <p className='leading-tight pt-4'><span className='text-purple font-bold'>3.</span> Our commitment is your safety, security, and peace of mind on every journey</p>
          </div>
          


        </div>
        </div>
        <div className='-order-1 lg:order-1 flex justify-center'>
            <img src="./images/safety.svg" alt="driversOnline" className='w-[400px] lg:w-96 ' />
        </div>
      </div>
    </div>}

    {language === 'es' && <div>
      <div className='grid lg:grid-cols-3  rounded-3xl '>
        <div className='flex flex-col justify-center lg:col-span-2 lg:pr-16 xl:pr-28'>

        <div>

          <h1 className='text-4xl font-bold text-slate-800  pb-10'>Cumplir con los estándares de seguridad</h1>
          <p className='text-slate-700 '>Nuestra máxima prioridad. Examinamos rigurosamente a nuestros conductores, realizamos inspecciones periódicas de vehículos e implementamos funciones de seguridad avanzadas en nuestra aplicación. Con seguimiento GPS en tiempo real y soporte 24 horas al día, 7 días a la semana, su seguridad es nuestro compromiso. Viaja con confianza sabiendo que cada viaje con nosotros prioriza tu seguridad y tranquilidad.</p>


        </div>
        </div>
        <div className='-order-1 lg:order-1 flex justify-center'>
            <img src="./images/safety.svg" alt="driversOnline" className='w-[400px] lg:w-96 ' />
        </div>
      </div>
    </div>}

    {language === 'fr' && <div>
      <div className='grid lg:grid-cols-3  rounded-3xl '>
        <div className='flex flex-col justify-center lg:col-span-2 lg:pr-16 xl:pr-28 '>

        <div>

          <h1 className='text-4xl font-bold text-slate-800  pb-10'>Respect des normes de sécurité</h1>
          <p className='text-slate-700 '>Notre priorité absolue. Nous contrôlons rigoureusement nos chauffeurs, effectuons des inspections régulières des véhicules et mettons en œuvre des fonctionnalités de sécurité avancées dans notre application. Avec un suivi GPS en temps réel et une assistance 24h/24 et 7j/7, votre sécurité est notre engagement. Roulez en toute confiance en sachant que chaque voyage avec nous donne la priorité à votre sécurité et à votre tranquillité d'esprit.</p>


        </div>
        </div>
        <div className='-order-1 lg:order-1 flex justify-center'>
            <img src="./images/safety.svg" alt="driversOnline" className='w-[400px] lg:w-96 ' />
        </div>
      </div>
    </div>}
   
    </div>
  )
}

export default Safety
