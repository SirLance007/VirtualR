import React from 'react'
import Navbar from './components/Navbar.jsx'
import HeroSection from './components/Herosection.jsx'
import FeatureSection from './components/FeatureSection.jsx'
import Testimonials from './components/Testimonials.jsx'
import Pricing from './components/Pricing.jsx'
import Footer from './components/Footer.jsx'
import { Workflow } from 'lucide-react'
const App = () => {
  return (
    <div className='px-20'>
      <Navbar/>
      <HeroSection/>
      <FeatureSection/>
      <Workflow />
      <Pricing/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default App