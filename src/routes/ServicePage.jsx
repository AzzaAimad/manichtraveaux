import React from 'react'
import Navbar from '../components/Navbar'
import HeroImage from '../components/HeroImage'
import Footer from '../components/Footer'


function ServicePage() {
  return (
    <div>
    <Navbar/>
    <HeroImage heading='Our services' text='You Will find what you are looking for'/>
    
    <Footer/>
</div>
  )
}

export default ServicePage