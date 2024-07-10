import AboutFAQ from '@/components/About/AboutFAQ'
import BookingMain from '@/components/BookingMain'
import Navbar from '@/components/Dasboard/Navbar'
import FamilyHero from '@/components/FamilyHero'
import DownloadApp from '@/components/HomePage/DownloadApp'
import Footer from '@/components/layoutScreen/Footer'
import React from 'react'

const familyDriver = () => {
  return (
    <>
      <Navbar/>
      <FamilyHero/>
      <BookingMain category="full time family drivers"/> 

      <AboutFAQ/>
      <DownloadApp/>
      <Footer/>
    </>
  )
}

export default familyDriver




// "Intercity Drivers"