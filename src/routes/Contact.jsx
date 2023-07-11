import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import ContactUs from '../components/ContactUs'


function Contact() {
  return (
    <div>
        <Navbar/>
        <HeroImage heading='Contact Us' text='Get In Touch'/>
         <ContactUs/>
        <Footer/>
    </div>
  )
}

export default Contact