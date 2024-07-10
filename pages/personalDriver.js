import PersonalDrivers from '@/components/PersonalDrivers'
import PersonalHero from '@/components/PersonalHero'
import PersonalServices from '@/components/PersonalServices'
import PersonalSteps from '@/components/PersonalSteps'
import Navbar from '@/components/layoutScreen/Navbar'
import React from 'react'

const personalDriver = () => {
  return (
    <div>
        <Navbar/>
      <PersonalHero/>
      <PersonalDrivers/>
      <PersonalServices/>
      <PersonalSteps/>
    </div>
  )
}

export default personalDriver
