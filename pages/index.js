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
      <div className="fixed bottom-0 right-0 z-50 ">
        <img src="./images/whatsapp.png" alt="" className='w-28 h-28' />
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
