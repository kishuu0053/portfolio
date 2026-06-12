import{ BrowserRouter,Routes,Route } from "react-router-dom"
import React from 'react'
import Home from './pages/Home'
import Navbar from './components/shared/Navbar'
import Footer from './components/shared/Footer'
import About from './pages/about'
import Serviceoffer from './components/ui/Serviceoffer'
import { Features } from 'tailwindcss'
import Services from './pages/services'
import Contact from './pages/contact'


export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
    <Routes>
      < Route path="/" element={<Home/>} />
      < Route path="about" element={<About/>} />
      < Route path="service" element={<Services/>} />
      < Route path="contact" element={<Contact/>} />
    
  </Routes>
       
          
          <Footer/>
            
     
      
     
    </BrowserRouter>
  )
}
