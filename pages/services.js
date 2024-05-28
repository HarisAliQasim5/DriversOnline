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
      <div className="fixed bottom-0 -right-2 sm:right-0 z-50 ">
        <img src="./images/whatsapp.png" alt="" className='w-20 h-20 sm:w-28 sm:h-28' />
      </div>
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
