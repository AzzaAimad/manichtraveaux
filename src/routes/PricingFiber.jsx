import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import Pricing from '../components/Pricing'

function PricingFiber() {
  return (
    <div>
        <Navbar/>
        <HeroImage heading='PRICING' text='Choose Your Plan'/>
        <Pricing/>
        <Footer/>
    </div>


  )
}

export default PricingFiber