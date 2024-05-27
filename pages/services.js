import ServiceUniqueOfferings from '@/components/ServicesPage/ServiceUniqueOfferings'
import ServicesBanner from '@/components/ServicesPage/ServicesBanner'
import ServicesCard from '@/components/ServicesPage/ServicesCard'
import ServicesStick from '@/components/ServicesPage/ServicesStick'
import Sidebar from '@/components/Sidebar'
import Footer from '@/components/layoutScreen/Footer'
import Navbar from '@/components/layoutScreen/Navbar'
import React from 'react'

const services = () => {
  return (
    <div>
      <Navbar/>
      <ServicesBanner/>
       <ServiceUniqueOfferings/>
       <ServicesCard/>
       <ServicesStick/>
       <Footer/>
    </div>
  )
}

export default services
