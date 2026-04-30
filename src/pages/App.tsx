import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Services from '../components/Services'
import About from '../components/About'
import Gallery from '../components/Gallery'
import Testimonials from '../components/Testimonials'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import WhatsAppFab from '../components/WhatsAppFab'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Stats />
        <Services />
        <About />
        <Gallery />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  )
}
