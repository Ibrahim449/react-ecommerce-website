import React from 'react'
import AboutContent from './about/AboutContent'
import AboutHeader from './about/AboutHeader'
import Footer from './home/Footer'
import Navbar from './home/Navbar'
// import AboutHeader from './about/AboutHeader'

export default function About() {
  return (
    <div>
      <Navbar />
      <AboutHeader />
      <AboutContent />
      <Footer />
    </div>
  )
}
