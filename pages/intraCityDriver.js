import IntracityHero from '@/components/IntracityHero'
import IntracityMain from '@/components/IntracityMain'
import IntracitySteps from '@/components/IntracitySteps'
import Navbar from '@/components/layoutScreen/Navbar'
import React from 'react'

const intraCityDriver = () => {
  return (
    <div>
      <Navbar/>
      <IntracityHero/>
      <IntracityMain/>
      <IntracitySteps/>
    </div>
  )
}

export default intraCityDriver