import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import FormModal from './FormModal'

export default function Hero() {
  const [showForm, setShowForm] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
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
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: "9d40a6f7-55b3-408d-bdd8-7dbd83e7ab2b",
        ...formData,
        subject: "New Lead from Hero Form",
        from_name: "Godrej Aveline Website"
      })
    })

    const data = await res.json()

    if (data.success) {
      alert("Submitted successfully ✅")
      setFormData({ name: '', phone: '', email: '', message: '' })
    } else {
      alert("Something went wrong ❌")
    }
  }

  const handleScroll = (id) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    if (localStorage.getItem("popupShown")) return
    const timer = setTimeout(() => {
      setShowForm(true)
      localStorage.setItem("popupShown", "true")
    }, 10000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <section className="relative h-screen overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0 bg-[#1a1814]" />

        {/* Pattern */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, #B8965A 0, #B8965A 1px, transparent 0, transparent 50%)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero.webp')", opacity: 0.4 }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* ✅ CENTER TEXT */}
        <div className="absolute inset-0 flex items-center justify-center z-10 text-center">
          <div className="max-w-2xl">

            <motion.div className="inline-block border border-[#B8965A]/50 text-[#B8965A] text-xs tracking-[0.3em] uppercase px-5 py-2 mb-6">
              Godrej Properties Presents
            </motion.div>

            <motion.h1
  className="text-white leading-[1.05] tracking-tight font-light"
  style={{ fontSize: "clamp(4.5rem, 10vw, 9rem)" }}
>
  Godrej <br />
  <span className="text-[#B8965A] font-medium">
    Aveline
  </span>
</motion.h1>

            <motion.p className="text-white/70 mt-4 text-sm tracking-widest uppercase">
              Luxury Living Redefined
            </motion.p>

            <div className="flex justify-center gap-4 mt-8">
              <button
                className="bg-[#B8965A] text-white px-6 py-3 text-sm rounded-md"
                onClick={() => setShowForm(true)}
              >
                Book Site Visit
              </button>

              <button
                className="border border-white text-white px-6 py-3 text-sm rounded-md"
                onClick={() => handleScroll('#about')}
              >
                Explore Project
              </button>
            </div>

          </div>
        </div>

        {/* ✅ RIGHT FORM */}
        <div className="absolute right-6 md:right-16 top-1/2 -translate-y-1/2 z-20">
          <form
            onSubmit={handleSubmit}
            className="bg-white/95 backdrop-blur-md p-5 rounded-xl shadow-2xl w-[280px] md:w-[320px]"
          >
            <h2 className="text-lg font-semibold mb-3 text-gray-800">
              Request a Callback
            </h2>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              className="w-full border p-2 text-sm mb-3 rounded-md"
              required
            />

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 XXXXX XXXXX"
              className="w-full border p-2 text-sm mb-3 rounded-md"
              required
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className="w-full border p-2 text-sm mb-3 rounded-md"
              required
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Any specific requirements..."
              className="w-full border p-2 text-sm mb-3 rounded-md h-20"
            />

            <button className="w-full py-2 text-sm bg-[#B8965A] text-white rounded-md">
              Request a Callback
            </button>

            <p className="text-xs text-gray-500 mt-2">
              By submitting, you agree to be contacted by our team.
            </p>
          </form>
        </div>

        {/* Scroll Icon */}
        <motion.div className="absolute bottom-6 left-1/2 -translate-x-1/2">
          <ChevronDown className="text-white animate-bounce" />
        </motion.div>

      </section>

      {showForm && <FormModal onClose={() => setShowForm(false)} />}
    </>
  )
}