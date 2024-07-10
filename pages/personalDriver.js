import AboutFAQ from '@/components/About/AboutFAQ'
import BookingMain from '@/components/BookingMain'
import DownloadApp from '@/components/HomePage/DownloadApp'
import PersonalDrivers from '@/components/PersonalDrivers'
import PersonalHero from '@/components/PersonalHero'
import PersonalServices from '@/components/PersonalServices'
import PersonalSteps from '@/components/PersonalSteps'
import Footer from '@/components/layoutScreen/Footer'
import Navbar from '@/components/layoutScreen/Navbar'
import React from 'react'

const personalDriver = () => {
  return (
    <div>
      <Navbar/>
    
      <PersonalDrivers/>
      <BookingMain  category="regular driver for you"/>
      <PersonalServices/>
      <PersonalSteps/>

      <DownloadApp/>  
      <AboutFAQ/>
      <Footer/>
    </div>
  )
}

export default personalDriver
