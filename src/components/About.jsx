import React from 'react'
import { motion } from 'framer-motion'
import {
  useScrollReveal,
  fadeUpVariants,
  staggerContainer,
} from '../hooks/useScrollReveal'

// ✅ PUBLIC IMAGES
const slidingImages = [
  "/Slide1.jpeg",
  "/Slide2.jpeg",
  "/Slide3.jpeg",
  "/Slide4.jpeg",
  "/Slide5.jpeg",
  "/Slide6.jpeg",
  "/Slide7.jpeg",
  "/Slide8.jpeg",
  "/Slide9.jpeg",
]

const stats = [
  { val: '4.2A', label: 'Total Area' },
  { val: '320+', label: 'Residences' },
  { val: '40+', label: 'Amenities' },
]

export default function About() {
  const { ref: leftRef, controls: leftControls } = useScrollReveal()
  const { ref: rightRef, controls: rightControls } = useScrollReveal()

  return (
    <section
      id="about"
      className="py-24 md:py-32"
      style={{ background: 'var(--cream)' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* ================= LEFT SIDE ================= */}
          <div>
            <motion.div
              ref={leftRef}
              variants={fadeUpVariants}
              initial="hidden"
              animate={leftControls}
              className="relative"
            >
              {/* Gold Box */}
              <div className="absolute -top-4 -left-4 z-10 w-20 h-20 bg-gold flex flex-col items-center justify-center shadow-lg">
                <span className="font-serif text-2xl text-white">25+</span>
                <span className="text-[9px] text-white/70 uppercase">Years</span>
              </div>

              {/* Main Image */}
              <div
                className="w-full aspect-[3/4] bg-cover bg-center rounded-lg shadow-xl"
                style={{ backgroundImage: "url('/main.webp')" }}
              />

              {/* Secondary Image */}
              <div
                className="hidden md:block absolute -bottom-6 -right-6 w-[55%] aspect-[4/3] bg-cover bg-center border-4 border-white shadow-xl rounded-lg"
                style={{ backgroundImage: "url('/secondary.webp')" }}
              />
            </motion.div>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <motion.div
            ref={rightRef}
            variants={staggerContainer}
            initial="hidden"
            animate={rightControls}
            className="lg:pl-4"
          >
            <motion.span variants={fadeUpVariants} className="section-tag">
              About the Project
            </motion.span>

            <motion.h2 variants={fadeUpVariants} className="section-title mt-2">
              Where Architecture
              <br />
              Meets <em>Artistry</em>
            </motion.h2>

            <motion.div variants={fadeUpVariants} className="gold-divider" />

            <motion.p variants={fadeUpVariants} className="text-slate-2 mb-4">
              Godrej Aveline is a landmark residential development that sets a new benchmark for luxury living.
            </motion.p>

            <motion.p variants={fadeUpVariants} className="text-slate-2 mb-4">
              Nestled in Bengaluru’s most sought-after corridor where design meets lifestyle.
            </motion.p>

            <motion.p variants={fadeUpVariants} className="text-slate-2">
              Crafted for modern living with timeless elegance and thoughtful spaces.
            </motion.p>

            {/* ================= STATS ================= */}
            <motion.div
              variants={fadeUpVariants}
              className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-border"
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <span className="text-3xl text-gold">{stat.val}</span>
                  <span className="text-xs block">{stat.label}</span>
                </div>
              ))}
            </motion.div>

            {/* ================= SLIDING GALLERY ================= */}
            <div className="mt-16 overflow-hidden">
              <div className="flex gap-4 animate-scroll">

                {slidingImages.map((img, i) => (
                  <div
                    key={i}
                    className="relative cursor-pointer group flex-shrink-0"
                    onClick={() => window.open(img, "_blank")}
                  >
                    <img
                      src={img}
                      alt=""
                      className="w-48 h-32 object-cover rounded-lg shadow-md transition duration-300 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition rounded-lg flex items-center justify-center">
                      <span className="text-white text-xs tracking-wider">
                        VIEW
                      </span>
                    </div>
                  </div>
                ))}

                {/* Duplicate for infinite scroll */}
                {slidingImages.map((img, i) => (
                  <div key={`dup-${i}`} className="flex-shrink-0">
                    <img
                      src={img}
                      alt=""
                      className="w-48 h-32 object-cover rounded-lg shadow-md"
                    />
                  </div>
                ))}

              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  )
}