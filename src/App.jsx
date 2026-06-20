import React, { useEffect } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Services from './Components/Services'
import Banner2 from './Components/Banner2'
import Subscribe from './Components/Subscribe'
import Join from './Components/Join'
import Footer from './Components/Footer'
import AOS from 'aos'
import 'aos/dist/aos.css';
const App = () => {
  useEffect(()=>{
    AOS.init({
      duration: 1000,
      easing :"ease-in-out"
    })
  })
  return (
    <main>
     <Navbar/>
     <Hero/>
     <Services/>
     <Banner2/>
     <Subscribe/>
     <Join/>
     <Footer/>
    </main>
  )
}

export default App
