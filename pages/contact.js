import ContactBanner from '@/components/ContactBanner'
import ContactBox from '@/components/ContactBox'
import ContactForm from '@/components/ContactForm'
import React from 'react'
import { useDarkMode } from '../components/ContextFiles/DarkModeContext';
import { useLanguage } from '../components/ContextFiles/LanguageContext';
import Login from '@/components/Login';
import Sample from '@/components/Sample';
import AboutSection from '@/components/About/AboutSection';
import Footer from '@/components/layoutScreen/Footer';
import Navbar from '@/components/layoutScreen/Navbar';

const contact = () => {
  const { darkMode } = useDarkMode();
    const { language } = useLanguage();
  return (
    <>
    <div className="fixed bottom-0 -right-2 sm:right-0 z-50 ">
        <img src="./images/whatsapp.png" alt="" className='w-20 h-20 sm:w-28 sm:h-28' />
    </div>
    <Navbar/>
    <div className={` ${darkMode ? "bg-dark" : ""}`}>
      <ContactBanner/>
      <ContactBox/>
      <ContactForm/>
      
    </div>
    <Footer/>
    </>
  )
}

export default contact
