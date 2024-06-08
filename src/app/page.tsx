import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import From from './components/From'
import Video from './components/Video'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import TrustAndSafety from './components/TrustAndSafety'
import FeatureCarousel from './components/FeatureCarousel'
import Vid from './components/Vid'
import FeatureFine from './components/FeatureFine';

const page = () => {
  return (
    <div>
      <Header/>
     <Hero/>
     <From/>
     <Video/>
     <Vid/>
     <FeatureCarousel/>
     <FeatureFine/>
     <TrustAndSafety/>
     <FAQ/>
     <Footer/>
    
    </div>
  )
}

export default page