import React from 'react'
import { motion } from 'framer-motion'
import { Sun, Home, HeartPulse, Train, Plane, ShoppingBag } from 'lucide-react'
import { useScrollReveal, fadeUpVariants, staggerContainer } from '../hooks/useScrollReveal'

const advantages = [
  {
    icon: Sun,
    title: 'IT Corridor Access',
    sub: '15 mins to Whitefield & Electronic City IT hubs',
  },
  {
    icon: Home,
    title: 'Premier Schools Nearby',
    sub: 'DPS, Inventure Academy, Ryan International - within 5 km',
  },
  {
    icon: HeartPulse,
    title: 'World-Class Healthcare',
    sub: 'Manipal, Apollo, Columbia Asia hospitals - under 10 minutes',
  },
  {
    icon: Train,
    title: 'Metro Connectivity',
    sub: 'Walking distance to upcoming Namma Metro station',
  },
  {
    icon: Plane,
    title: 'Airport Access',
    sub: 'Kempegowda International Airport - 45 min via NICE Road',
  },
  {
    icon: ShoppingBag,
    title: 'Retail & Entertainment',
    sub: 'Forum, Phoenix, Orion Mall - all within 20 minutes',
  },
]

export default function Location() {
  const { ref: leftRef, controls: leftControls } = useScrollReveal()
  const { ref: rightRef, controls: rightControls } = useScrollReveal()

  return (
    <section id="location" className="py-24 md:py-32" style={{ background: 'var(--cream2)' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Advantages */}
          <motion.div
            ref={leftRef}
            variants={staggerContainer}
            initial="hidden"
            animate={leftControls}
          >
            <motion.span variants={fadeUpVariants} className="section-tag">
              Location Advantages
            </motion.span>
            <motion.h2 variants={fadeUpVariants} className="section-title mt-2">
              Perfectly
              <br />
              <em>Connected</em>
            </motion.h2>
            <motion.div variants={fadeUpVariants} className="gold-divider" />

            <ul className="mt-2">
              {advantages.map((item, i) => (
                <motion.li
                  key={item.title}
                  variants={fadeUpVariants}
                  className="flex items-start gap-4 py-4 border-b border-border last:border-b-0"
                >
                  <div className="w-9 h-9 bg-gold flex items-center justify-center flex-shrink-0 mt-0.5">
                    <item.icon size={16} className="text-white" strokeWidth={2} />
                  </div>
                  <div>
                    <div className="font-medium text-[0.9rem] text-slate-luxury">{item.title}</div>
                    <div className="text-[0.8rem] text-muted font-light mt-0.5">{item.sub}</div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Map */}
          <motion.div
            ref={rightRef}
            variants={fadeUpVariants}
            initial="hidden"
            animate={rightControls}
            className="relative"
          >
            <div
              className="w-full aspect-[4/3] bg-cover bg-center relative"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?w=900&q=80')",
              }}
            >
              {/* Overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(184,150,90,0.12), transparent)',
                }}
              />

              {/* Pulse dot */}
              <motion.div
                className="absolute top-[42%] left-[46%] w-4 h-4 bg-gold rounded-full"
                animate={{
                  boxShadow: [
                    '0 0 0 0px rgba(184,150,90,0.4)',
                    '0 0 0 14px rgba(184,150,90,0)',
                  ],
                }}
                transition={{ repeat: Infinity, duration: 2, ease: 'easeOut' }}
              />

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm px-6 py-4">
                <div className="font-serif text-lg text-slate-luxury font-medium">
                  Godrej <em className="not-italic text-gold">Aveline</em>
                </div>
                <div className="text-[11px] tracking-widest text-muted uppercase mt-0.5">
                  Bengaluru, Karnataka
                </div>
              </div>
            </div>

            {/* Distance pills */}
            <div className="grid grid-cols-3 gap-3 mt-4">
              {[
                { place: 'Airport', dist: '45 min' },
                { place: 'Metro', dist: '5 min' },
                { place: 'IT Hub', dist: '15 min' },
              ].map((d) => (
                <div
                  key={d.place}
                  className="text-center border border-border py-3 bg-white"
                >
                  <div className="font-serif text-xl text-gold font-medium">{d.dist}</div>
                  <div className="text-[10px] tracking-widest text-muted uppercase mt-0.5">{d.place}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
