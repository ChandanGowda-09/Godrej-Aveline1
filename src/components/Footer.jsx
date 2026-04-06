import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from 'lucide-react'
import { useScrollReveal, fadeUpVariants, staggerContainer } from '../hooks/useScrollReveal'

const quickLinks = [
  { label: 'About the Project', href: '#about' },
  { label: 'Highlights', href: '#highlights' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Location', href: '#location' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact Us', href: '#contact' },
]

export default function Footer() {
  const { ref, controls } = useScrollReveal()

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer style={{ background: '#1a1815' }}>
      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-10">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b"
          style={{ borderColor: 'rgba(255,255,255,0.08)' }}
        >
          {/* Brand Column */}
          <motion.div variants={fadeUpVariants} className="lg:col-span-1">
            <div className="font-serif text-2xl font-semibold tracking-widest text-white mb-1">
              GODREJ <span className="text-gold">AVELINE</span>
            </div>
            <div className="text-[10px] tracking-[0.25em] uppercase text-muted mb-5">
              Luxury Residences · Bengaluru
            </div>
            <p className="text-[0.8rem] text-white/35 font-light leading-[1.85] mb-6">
              An iconic address where every residence is a masterpiece of design, comfort, and
              enduring value. Developed by Godrej Properties.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 border flex items-center justify-center transition-colors duration-300"
                  style={{ borderColor: 'rgba(255,255,255,0.12)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#B8965A')}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)')}
                >
                  <Icon size={14} className="text-muted hover:text-gold transition-colors" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeUpVariants}>
            <div className="text-[10px] tracking-[0.25em] uppercase text-gold mb-6 border-t border-gold pt-1.5">
              Quick Links
            </div>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-[0.82rem] text-white/40 hover:text-gold transition-colors duration-300 font-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={fadeUpVariants}>
            <div className="text-[10px] tracking-[0.25em] uppercase text-gold mb-6 border-t border-gold pt-1.5">
              Contact Us
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone size={13} className="text-gold flex-shrink-0 mt-0.5" strokeWidth={2} />
                <div>
                  <div className="text-white/50 text-xs font-light">Sales Enquiry</div>
                  <div className="text-white/70 text-sm mt-0.5">+91 79756 07024</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={13} className="text-gold flex-shrink-0 mt-0.5" strokeWidth={2} />
                <div>
                  <div className="text-white/50 text-xs font-light">Email</div>
                  <div className="text-white/70 text-sm mt-0.5">loginrealty.info@gmail.com</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={13} className="text-gold flex-shrink-0 mt-0.5" strokeWidth={2} />
                <div>
                  <div className="text-white/50 text-xs font-light">Location</div>
                  <div className="text-white/70 text-sm mt-0.5 leading-relaxed">
                    Bengaluru, Karnataka, India
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Marketing Partner */}
          <motion.div variants={fadeUpVariants}>
            <div className="text-[10px] tracking-[0.25em] uppercase text-gold mb-6 border-t border-gold pt-1.5">
              Exclusive Marketing Partner
            </div>

            {/* LogIN Realty logo box */}
            <div
  className="inline-flex flex-col items-center border px-8 py-5 mb-6 w-full"
  style={{ borderColor: 'rgba(184,150,90,0.3)' }}
>
  {/* LOGO */}
  <img
    src="/LR.avif"   // 👉 replace with your actual logo path
    alt="Login Realty Logo"
    className="w-40 md:w-52 object-contain mb-3"
  />

  {/* TAGLINE (optional - same as before) */}
  <span className="text-[9px] tracking-[0.2em] uppercase text-muted mt-2">
    Trusted Real Estate Advisors
  </span>
</div>

            {/* RERA Badge */}
            <div
              className="border px-4 py-3"
              style={{ borderColor: 'rgba(184,150,90,0.25)' }}
            >
              <div className="text-[9px] tracking-[0.2em] uppercase text-gold mb-1">
                RERA Registration
              </div>
              <div className="text-white/60 text-xs font-light">
                PRM/KA/RERA/1251/446/PR/XXXXXX
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Disclaimer */}
        <div className="py-6 border-b" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
          <p className="text-[11px] text-white/20 font-light leading-[1.8] text-center max-w-4xl mx-auto">
            <strong className="text-white/30 font-medium">Disclaimer:</strong> This is not an
            official developer website. All information including pricing, specifications,
            configurations, and availability is for reference purposes only and is subject to
            change without prior notice. Images shown are for illustrative purposes only. Buyers
            are advised to verify all details independently with Godrej Properties before making
            any investment decisions. Login Realty is the exclusive marketing partner.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-white/20 tracking-wider">
            © {new Date().getFullYear()} Login Realty. All Rights Reserved.
          </p>
          <p className="text-[11px] text-white/20 tracking-wider text-center">
            Exclusive Marketing Partner for Godrej Aveline, Bengaluru
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-[11px] text-white/20 hover:text-gold/60 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-[11px] text-white/20 hover:text-gold/60 transition-colors">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
