import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import Gallery from '../components/Gallery'
import ContactForm from '../components/ContactForm'

export default function App(){
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <Testimonials />
        <Gallery />
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-2xl font-bold mb-6">Fale conosco</h2>
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
