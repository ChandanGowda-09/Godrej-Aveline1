import React from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { useScrollReveal, fadeUpVariants, staggerContainer } from '../hooks/useScrollReveal'

const images = [
  { url: "/Exterior-facade.webp", caption: "Exterior Facade" },
  { url: "/living-room.webp", caption: "Living Room" },
  { url: "/Bedroom.webp", caption: "Master Bedroom" },
  { url: "/pool.webp", caption: "Pool View" },
  { url: "/Garden.webp", caption: "Garden Terrace" },
  { url: "/Kitchen.webp", caption: "Kitchen" },
]

export default function Gallery() {
  const { ref: headRef, controls: headControls } = useScrollReveal()
  const { ref: swiperRef, controls: swiperControls } = useScrollReveal()

  return (
    <section id="gallery" className="py-24 md:py-32" style={{ background: '#2C2C2A' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          ref={headRef}
          variants={staggerContainer}
          initial="hidden"
          animate={headControls}
          className="mb-12"
        >
          <motion.span
            variants={fadeUpVariants}
            className="inline-block text-[11px] tracking-[0.3em] uppercase border-t border-gold-light text-gold-light pt-1.5 mb-6"
          >
            Visual Gallery
          </motion.span>
          <motion.h2
            variants={fadeUpVariants}
            className="font-serif font-light text-white leading-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
          >
            A Glimpse of
            <br />
            <em className="not-italic text-gold-light">Aveline Life</em>
          </motion.h2>
        </motion.div>

        <motion.div
          ref={swiperRef}
          variants={fadeUpVariants}
          initial="hidden"
          animate={swiperControls}
        >
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1.5, spaceBetween: 20 },
              900: { slidesPerView: 2.5, spaceBetween: 24 },
              1200: { slidesPerView: 3, spaceBetween: 24 },
            }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation
            loop
            className="gallery-swiper"
            style={{ paddingBottom: '3rem' }}
          >
            {images.map((img, i) => (
              <SwiperSlide key={i}>
                <div className="relative group overflow-hidden">
                  <div
                    className="w-full aspect-[4/3] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${img.url}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-400">
                    <span className="text-white text-sm font-light tracking-widest uppercase">
                      {img.caption}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  )
}
