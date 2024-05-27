import AboutBanner from '@/components/About/AboutBanner'
import AboutBox from '@/components/About/AboutBox'
import AboutChooseUs from '@/components/About/AboutChooseUs'
import AboutFAQ from '@/components/About/AboutFAQ'
import AboutFeatures from '@/components/About/AboutFeatures'
import AboutFreedom from '@/components/About/AboutFreedom'
import AboutImages from '@/components/About/AboutImages'
import AboutNumbers from '@/components/About/AboutNumbers'
import AboutPageCards from '@/components/About/AboutPageCards'
import AboutValues from '@/components/About/AboutValues'
import Footer from '@/components/layoutScreen/Footer'
import Navbar from '@/components/layoutScreen/Navbar'
import React from 'react'

const about = () => {
  return (
    <>
    <Navbar/>
    <div>
      <AboutBanner/>
      <AboutChooseUs/>
      <AboutNumbers/>
      <AboutFeatures/>
      <AboutImages/>
      <AboutFreedom/>
      <AboutValues/>
      <AboutFAQ/>
      <Footer/>
      {/* <AboutBox/> */}
     
      
      {/* <AboutPageCards/> */}
    </div>
    </>
  )
}

export default about
