import React, { useContext } from 'react';
import { useDarkMode } from '../components/ContextFiles/DarkModeContext';
import { useLanguage } from '../components/ContextFiles/LanguageContext';
import Swiper from '@/components/HomePage/Swiper';
import Safety from '@/components/HomePage/Safety';
import Testimonials from '@/components/HomePage/Testimonials';
import WhyChooseUs from '@/components/WhyChooseUs';
import Sample from '@/components/Sample';
import DownloadApp from '@/components/HomePage/DownloadApp';
import Timeline from '@/components/Timeline';
import { MdWhatsapp } from "react-icons/md";
import HomeFeatures from '@/components/HomePage/HomeFeatures';
import HomeChooseus from '@/components/HomePage/HomeChooseus';
import HomeInsights from '@/components/HomePage/HomeInsights';
import HomeFairPrice from '@/components/HomePage/HomeFairPrice';
import HomeFact from '@/components/HomePage/HomeFact';
import HomeRating from '@/components/HomePage/HomeRating';
import HomeDrivers from '@/components/HomePage/HomeDrivers';
import Footer from '@/components/layoutScreen/Footer';
import Navbar from '@/components/layoutScreen/Navbar';

export default function Home() {
  const { darkMode } = useDarkMode();
  const { language } = useLanguage();

  return (
    <>
    <Navbar/>
    <div className={`${darkMode ? "bg-[#171C30] text-white " : "bg-white text-black "} overflow-x-hidden `}>
      
      <Swiper/>
      {/* ------------------------ Whatsapp Button------------------------------------ */}
      <div className="fixed bottom-3 -right-10 sm:right-0 z-50 mx-5 ">

      <MdWhatsapp className='w-12 h-12 hover:text-green-600 cursor-pointer ' />
      </div>
      {/* ------------------------- End Of Whatsapp Button ---------------------------- */}

      <HomeRating/>
      <HomeInsights/>
      <HomeFeatures/>
      <HomeChooseus/>
      <HomeFairPrice/>
      <HomeDrivers/>
      <HomeFact/>
      <Safety/>
      <Testimonials/>
      <DownloadApp/>  
      <Footer/>
      

    </div>
    </>
  );
}
