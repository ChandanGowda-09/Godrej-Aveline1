import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import FormModal from './FormModal'

export default function Hero() {
  const [showForm, setShowForm] = useState(false)

  // ✅ FORM STATE (ADDED)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    bhk: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        access_key: "9d40a6f7-55b3-408d-bdd8-7dbd83e7ab2b",

        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        bhk: formData.bhk,
        message: formData.message,

        subject: "New Lead from Hero Form",
        from_name: "Godrej Aveline Website",
        source: "Hero Section"
      })
    })

    const data = await res.json()

    if (data.success) {
      alert("Submitted successfully ✅")

      setFormData({
        name: '',
        phone: '',
        email: '',
        bhk: '',
        message: ''
      })
    } else {
      alert("Something went wrong ❌")
    }
  }

  const handleScroll = (href) => {
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  // 🔥 AUTO POPUP (UNCHANGED)
useEffect(() => {
  const popupKey = "popupShown"

  // ✅ If already shown once → stop
  if (localStorage.getItem(popupKey) === "true") return

  const timer = setTimeout(() => {
    setShowForm(true)

    // ✅ Save permanently (only once ever)
    localStorage.setItem(popupKey, "true")
  }, 10000)

  return () => clearTimeout(timer)
}, [])

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0 bg-[#1a1814]" />

        {/* Pattern */}
        <div className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #B8965A 0, #B8965A 1px, transparent 0, transparent 50%)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Image */}
        <div className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/hero.webp')",
            opacity: 0.38,
          }}
        />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/70" />

        {/* CONTENT */}
        <div className="relative z-10 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div className="text-center md:text-left">
            <motion.div className="inline-block border border-gold/50 text-gold-light text-[10px] tracking-[0.35em] uppercase px-6 py-2 mb-8">
              Godrej Properties Presents
            </motion.div>

            <motion.h1 className="text-white leading-[1.05]" style={{ fontSize: 'clamp(3.5rem, 8vw, 7rem)' }}>
              Godrej <br />
              <span className="text-gold-light">Aveline</span>
            </motion.h1>

            <motion.p className="text-white/65 text-xs tracking-[0.3em] uppercase mt-5">
              Luxury Living Redefined
            </motion.p>

            <div className="flex gap-4 mt-10">
              <button className="btn-primary" onClick={() => setShowForm(true)}>
                Book Site Visit
              </button>

              <button className="btn-outline" onClick={() => handleScroll('#about')}>
                Explore Project
              </button>
            </div>
          </div>

          {/* 🔥 RIGHT FORM (CONNECTED TO WEB3FORMS) */}
          <form
            onSubmit={handleSubmit}
            className="bg-white/95 backdrop-blur-md p-6 md:p-8 rounded-xl shadow-2xl"
          >
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Request a Callback
            </h2>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              className="w-full border p-3 mb-3"
              required
            />

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 XXXXX XXXXX"
              className="w-full border p-3 mb-3"
              required
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className="w-full border p-3 mb-3"
              required
            />

            <select
              name="bhk"
              value={formData.bhk}
              onChange={handleChange}
              className="w-full border p-3 mb-3"
              required
            >
              <option value="">Select BHK type</option>
              <option>2 BHK</option>
              <option>3 BHK</option>
              <option>4 BHK</option>
            </select>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Any specific requirements..."
              className="w-full border p-3 mb-4"
              rows={4}
            />

            <button className="w-full bg-[#B8965A] text-white py-3">
              Request a Callback
            </button>

            <p className="text-xs text-gray-500 mt-3">
              By submitting, you agree to be contacted by our team.
            </p>
          </form>

        </div>

        {/* Scroll */}
        <motion.button className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <ChevronDown className="text-white" />
        </motion.button>
      </section>

      {/* POPUP */}
      {showForm && <FormModal onClose={() => setShowForm(false)} />}
    </>
  )
}