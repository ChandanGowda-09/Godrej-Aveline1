import React from 'react'
import { motion } from 'framer-motion'
import { useScrollReveal, fadeUpVariants, staggerContainer } from '../hooks/useScrollReveal'

const highlights = [
  { num: '01', label: 'Property Type', value: 'Premium Residential Apartments' },
  { num: '02', label: 'Configuration', value: '2, 3 & 4 BHK' },
  { num: '03', label: 'Project Status', value: 'Pre-Launch' },
  { num: '04', label: 'Possession', value: '2028 Onwards' },
  { num: '05', label: 'Starting Price', value: 'On Request' },
  { num: '06', label: 'Developer', value: 'Godrej Properties Ltd.' },
  { num: '07', label: 'Location', value: 'Bengaluru, Karnataka' },
  { num: '08', label: 'RERA', value: 'PRM/KA/RERA/XXXXX' },
]

export default function Highlights() {
  const { ref: headRef, controls: headControls } = useScrollReveal()
  const { ref: gridRef, controls: gridControls } = useScrollReveal()

  return (
    <section id="highlights" className="py-24 md:py-32" style={{ background: '#2C2C2A' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          ref={headRef}
          variants={staggerContainer}
          initial="hidden"
          animate={headControls}
          className="mb-14"
        >
          <motion.span
            variants={fadeUpVariants}
            className="inline-block text-[11px] tracking-[0.3em] uppercase border-t border-gold-light text-gold-light pt-1.5 mb-6"
          >
            Project Highlights
          </motion.span>
          <motion.h2
            variants={fadeUpVariants}
            className="font-serif font-light text-white leading-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
          >
            The Finest in Every
            <br />
            <em className="not-italic text-gold-light">Detail</em>
          </motion.h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          ref={gridRef}
          variants={staggerContainer}
          initial="hidden"
          animate={gridControls}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          style={{ background: 'rgba(255,255,255,0.06)', gap: '1px' }}
        >
          {highlights.map((item) => (
            <motion.div
              key={item.num}
              variants={fadeUpVariants}
              className="p-8 md:p-10 group cursor-default transition-colors duration-300"
              style={{ background: '#2C2C2A' }}
              whileHover={{ background: '#363432' }}
            >
              <div
                className="font-serif text-5xl font-light leading-none mb-4"
                style={{ color: 'rgba(184,150,90,0.3)' }}
              >
                {item.num}
              </div>
              <div className="text-[10px] tracking-[0.2em] uppercase text-gold-light mb-2">
                {item.label}
              </div>
              <div className="font-serif text-white text-xl font-light leading-snug">
                {item.value}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
