import AboutBanner from '@/components/About/AboutBanner'
import AboutBox from '@/components/About/AboutBox'
import AboutChooseUs from '@/components/About/AboutChooseUs'
import AboutFAQ from '@/components/About/AboutFAQ'
import AboutFeatures from '@/components/About/AboutFeatures'
import AboutFreedom from '@/components/About/AboutFreedom'
import AboutNumbers from '@/components/About/AboutNumbers'
import AboutPageCards from '@/components/About/AboutPageCards'
import AboutValues from '@/components/About/AboutValues'
import React from 'react'

const about = () => {
  return (
    <div>
      <AboutBanner/>
      <AboutChooseUs/>
      <AboutNumbers/>
      <AboutFeatures/>
      <AboutFreedom/>
      <AboutValues/>
      <AboutFAQ/>
      {/* <AboutBox/> */}
     
      
      {/* <AboutPageCards/> */}
    </div>
  )
}

export default about
