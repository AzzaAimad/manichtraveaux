import { useState } from 'react'
import {Routes,Route} from 'react-router-dom'

import Home from './routes/Home'
import PricingFiber from './routes/PricingFiber'
import Contact from './routes/Contact'
import ServicePage from './routes/ServicePage'



function App() {
  

  return (
    <>
    <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/pricing' element={<PricingFiber/>}/>
       <Route path='/contact' element={<Contact/>}/>   
       <Route path='/services' element={<ServicePage/>}/>
    </Routes>
    </>
  )
}

export default App
