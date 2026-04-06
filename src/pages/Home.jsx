import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Highlights from '../components/Highlights'
import Amenities from '../components/Amenities'
import Location from '../components/Location'
import Gallery from '../components/Gallery'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import ScrollProgress from '../components/ScrollProgress'

export default function Home() {
  return (
    <main className="min-h-screen">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Highlights />
      <Amenities />
      <Location />
      <Gallery />
      <ContactForm />
      <Footer />
    </main>
  )
}
