import React from 'react'
import Navbar from '../components/Navbar'
import Video from '../components/Video'
import Footer from '../components/Footer'
import Service from '../components/Service'
import Team from '../components/Team'
import Carousel from '../components/Carousel'
import Reference from '../components/Reference'
import Materials from '../components/Materials'


function Home() {
  return (
    <div>
      <Navbar/>
      <Video/>
      <Service/>
      <Reference/>
      <Materials/>
      <Team/>
      <Carousel/>
      <Footer/>
      
    </div>
  )
}


export default Home