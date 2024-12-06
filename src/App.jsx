import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/Herosection'
import FeatureSection from './components/FeatureSection'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import Footer from './components/Footer'
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