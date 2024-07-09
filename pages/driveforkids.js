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
import KidsHero from '@/components/KidsHero';

const driveforkids = () => {
  return (
    <>
        <Navbar/>

        <KidsHero/>

        <div className='my-5 mx-10  '>
            <img  className='rounded-2xl shadow-sm' src='/images/kids.avif'/>
        </div>

        <Footer/>
    </>
  )
}

export default driveforkids