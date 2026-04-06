import React, { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[9999] h-0.5 origin-left"
      style={{
        scaleX,
        background: 'linear-gradient(90deg, #B8965A, #D4B483)',
      }}
    />
  )
}
