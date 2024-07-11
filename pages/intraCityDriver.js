import BookingMain from '@/components/BookingMain'
import DownloadApp from '@/components/HomePage/DownloadApp'
import IntracityHero from '@/components/IntracityHero'
import IntracityMain from '@/components/IntracityMain'
import IntracitySteps from '@/components/IntracitySteps'
import Footer from '@/components/layoutScreen/Footer'
import Navbar from '@/components/layoutScreen/Navbar'
import React from 'react'

const intraCityDriver = () => {
  return (
    <div>
      <Navbar/>
      <IntracityHero/>
      <BookingMain/>
      <IntracityMain/>
      <IntracitySteps/>
      <DownloadApp/>
      <Footer/>
    </div>
  )
}

export default intraCityDriver