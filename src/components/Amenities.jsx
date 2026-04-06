import React from 'react'
import { motion } from 'framer-motion'
import {
  Waves, Building2, Dumbbell, Trees, Baby, Shield,
  Car, Wifi, UtensilsCrossed, BookOpen, HeartPulse, Sun,
} from 'lucide-react'
import { useScrollReveal, fadeUpVariants, staggerContainer } from '../hooks/useScrollReveal'

const amenities = [
  {
    icon: Waves,
    name: 'Infinity Pool',
    desc: 'Rooftop infinity pool with panoramic city views - your private horizon above the skyline.',
  },
  {
    icon: Building2,
    name: 'Grand Clubhouse',
    desc: '15,000 sq.ft clubhouse with banquet halls, lounges, and premium co-working spaces.',
  },
  {
    icon: Dumbbell,
    name: 'State-of-Art Gym',
    desc: 'Fully-equipped gymnasium with personal training zones and dedicated wellness studio.',
  },
  {
    icon: Trees,
    name: 'Landscaped Gardens',
    desc: '3 acres of curated green spaces with walking trails, water features and meditation zones.',
  },
  {
    icon: Baby,
    name: "Kids' Play Zone",
    desc: 'Dedicated outdoor play areas with safe, premium equipment designed for all age groups.',
  },
  {
    icon: Shield,
    name: '24×7 Security',
    desc: 'Multi-tier security with CCTV surveillance, smart access control, and trained personnel.',
  },
  {
    icon: Car,
    name: 'Smart Parking',
    desc: 'Multi-level smart parking with EV charging stations and dedicated visitor parking bays.',
  },
  {
    icon: Wifi,
    name: 'High-Speed Internet',
    desc: 'Gigabit optical fibre connectivity pre-wired across every residence and common area.',
  },
  {
    icon: UtensilsCrossed,
    name: 'Fine Dining Lounge',
    desc: 'Residents-only dining lounge with a fully equipped catering kitchen for private events.',
  },
  {
    icon: BookOpen,
    name: 'Library & Lounge',
    desc: 'A curated library and reading lounge offering a quiet intellectual retreat every day.',
  },
  {
    icon: HeartPulse,
    name: 'Wellness Centre',
    desc: 'Spa, steam, sauna, and meditation rooms for complete mind-body restoration.',
  },
  {
    icon: Sun,
    name: 'Sky Terrace',
    desc: 'Exclusive rooftop sky terrace with outdoor seating and 360° views of Bengaluru.',
  },
]

export default function Amenities() {
  const { ref: headRef, controls: headControls } = useScrollReveal()
  const { ref: gridRef, controls: gridControls } = useScrollReveal()

  return (
    <section id="amenities" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          ref={headRef}
          variants={staggerContainer}
          initial="hidden"
          animate={headControls}
          className="max-w-xl mb-16"
        >
          <motion.span variants={fadeUpVariants} className="section-tag">
            World-Class Amenities
          </motion.span>
          <motion.h2 variants={fadeUpVariants} className="section-title mt-2">
            Life Elevated,
            <br />
            <em>Every Day</em>
          </motion.h2>
          <motion.div variants={fadeUpVariants} className="gold-divider" />
          <motion.p variants={fadeUpVariants} className="text-muted font-light leading-relaxed text-sm">
            Over 40 world-class amenities thoughtfully designed to enrich every moment of your
            daily life at Godrej Aveline.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div
          ref={gridRef}
          variants={staggerContainer}
          initial="hidden"
          animate={gridControls}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {amenities.map((item, i) => (
            <motion.div
              key={item.name}
              variants={fadeUpVariants}
              className="border border-border p-7 relative overflow-hidden group transition-all duration-400"
              whileHover={{
                boxShadow: '0 12px 40px rgba(0,0,0,0.08)',
                y: -4,
                borderColor: 'transparent',
              }}
            >
              {/* Bottom gold line on hover */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold origin-right"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.35 }}
                style={{ transformOrigin: 'right' }}
              />

              <div className="mb-5">
                <item.icon
                  size={28}
                  className="text-gold transition-transform duration-300 group-hover:scale-110"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="font-serif text-lg font-medium text-slate-luxury mb-2">
                {item.name}
              </h3>
              <p className="text-muted text-[0.8rem] leading-[1.75] font-light">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
