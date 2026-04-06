import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import FormModal from './FormModal'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Highlights', href: '#highlights' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Location', href: '#location' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // ✅ Dynamic form type (brochure / visit)
  const [showForm, setShowForm] = useState(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-border shadow-sm py-4 px-6 md:px-12'
            : 'bg-transparent py-6 px-6 md:px-12'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >

        {/* Logo */}
        <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')}>
          <span className={`text-xl md:text-2xl font-semibold tracking-widest ${
            scrolled ? 'text-slate-luxury' : 'text-white'
          }`}>
            GODREJ <span className="text-gold">AVELINE</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-[11px] uppercase ${
                  scrolled ? 'text-slate-2' : 'text-white'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* RIGHT BUTTONS */}
        <div className="hidden lg:flex items-center gap-4">

          {/* ✅ Download Brochure */}
          <button
            onClick={() => setShowForm("brochure")}
            className={`text-[11px] uppercase px-5 py-2.5 border transition ${
              scrolled
                ? 'border-gold text-gold hover:bg-gold hover:text-white'
                : 'border-white text-white hover:bg-white hover:text-black'
            }`}
          >
            Download Brochure
          </button>

          {/* ✅ Book Site Visit */}
          <button
            onClick={() => setShowForm("visit")}
            className={`text-[11px] uppercase px-5 py-2.5 ${
              scrolled
                ? 'bg-gold text-white'
                : 'bg-white/10 text-white'
            }`}
          >
            Book Site Visit
          </button>

        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div className="fixed inset-0 bg-white z-40">
            <div className="p-6">

              {navLinks.map((link) => (
                <div key={link.href} className="mb-6">
                  <a onClick={(e) => handleNavClick(e, link.href)}>
                    {link.label}
                  </a>
                </div>
              ))}

              {/* Mobile Brochure */}
              <button
                onClick={() => {
                  setMenuOpen(false)
                  setShowForm("brochure")
                }}
                className="w-full border border-gold text-gold py-3 mb-4"
              >
                Download Brochure
              </button>

              {/* Mobile Visit */}
              <button
                onClick={() => {
                  setMenuOpen(false)
                  setShowForm("visit")
                }}
                className="w-full bg-gold text-white py-3 text-center"
              >
                Book Site Visit
              </button>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ✅ MODAL */}
      {showForm && (
        <FormModal
          type={showForm}
          onClose={() => setShowForm(null)}
        />
      )}
    </>
  )
}