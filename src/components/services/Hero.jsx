'use client'

import { motion } from 'framer-motion'
import FloatingShapes from '@/components/FloatingShapes'
import HeroInfographic from '@/components/services/HeroInfographic'
import SectionHeading from '@/components/SectionHeading'

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

export default function Hero() {
  return (
    <section className="hero" id="services-hero">
      <FloatingShapes shapes={[
        { type: 'cube', size: 60, color: 'purple', position: { top: '20%', left: '10%' }, depth: 0.4, rotate: { x: -25, y: 35 } },
        { type: 'donut', size: 100, thickness: 15, color: 'pink', position: { top: '15%', right: '8%' }, depth: 0.6, rotate: { x: 55, z: 25 } },
        { type: 'pyramid', size: 70, color: 'orange', position: { bottom: '25%', left: '15%' }, depth: 0.35, rotate: { x: -15, y: 20 } },
      ]} />

      <motion.div
        className="hero-container relative z-10"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        <div className="hero-content text-center">
          <motion.div className="hero-badge mx-auto" variants={fadeUp}>
            <span className="badge-dot" />
            OUR SERVICES
          </motion.div>

          <motion.h1 className="hero-title" variants={fadeUp}>
            Precision-Driven<br />
            <span className="gradient-text">Ad Services</span>
          </motion.h1>

          <motion.p className="hero-subtitle mx-auto" variants={fadeUp}>
            From brand awareness to performance marketing—discover how our suite of services can transform your digital advertising strategy.
          </motion.p>

          <motion.div className="hero-cta-group justify-center" variants={fadeUp}>
            <a href="#services-grid" className="btn btn-primary">
              <span>Explore Services</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
            </a>
            <a href="/contact-us" className="btn btn-outline">
              <span>Contact Us</span>
            </a>
          </motion.div>
        </div>
        <div className='relative overflow-hidden w-full h-full card bg-gradient-to-br from-[var(--bg-navbar)] to-[#251844] text-white overflow-hidden'>
          <HeroInfographic />
        </div>
      </motion.div>
    </section>
  )
}
