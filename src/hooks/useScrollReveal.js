import { useEffect, useRef } from 'react'
import { useAnimation } from 'framer-motion'
import { useInView } from 'framer-motion'

export function useScrollReveal(threshold = 0.15) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: threshold })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  return { ref, controls, isInView }
}

export const fadeUpVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8 },
  },
}

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
}
