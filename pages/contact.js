import ContactBanner from '@/components/ContactBanner'
import ContactBox from '@/components/ContactBox'
import ContactForm from '@/components/ContactForm'
import React from 'react'
import { useDarkMode } from '../components/ContextFiles/DarkModeContext';
import { useLanguage } from '../components/ContextFiles/LanguageContext';
import Login from '@/components/Login';
import Sample from '@/components/Sample';
import AboutSection from '@/components/About/AboutSection';

const contact = () => {
  const { darkMode } = useDarkMode();
    const { language } = useLanguage();
  return (
    <div className={` ${darkMode ? "bg-dark" : ""}`}>
      <ContactBanner/>
      <ContactBox/>
      <ContactForm/>
      {/* <Sample/> */}
      {/* <Login/> */}
      {/* <AboutSection/> */}
    </div>
  )
}

export default contact
