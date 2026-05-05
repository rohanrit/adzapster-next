'use client'

import { motion } from 'framer-motion'
import FloatingShapes from '@/components/FloatingShapes'

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

export default function Hero() {
  return (
    <section className="section section--white robolabs-hero" id="howwedoit-hero">
      <div className="robolabs-hero-bg" />
      <div className="robolabs-hero-grid" />
      <div className="robolabs-oval robolabs-oval--1" />
      <div className="robolabs-oval robolabs-oval--2" />
      <div className="robolabs-oval robolabs-oval--3" />
      <div className="robolabs-oval robolabs-oval--4" />
      <div className="robolabs-oval robolabs-oval--5" />
      <div className="robolabs-hero-bottom-gradient" />

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
        <div className="hero-content text-center col-span-2">
          <motion.div className="robolabs-online-badge mx-auto" variants={fadeUp}>
            <span className="robolabs-online-dot" />
            OUR PROCESS
          </motion.div>

          <motion.h1 className="hero-title" variants={fadeUp}>
            How We <br />
            <span className="gradient-text">Do It</span>
          </motion.h1>

          <motion.p className="hero-subtitle mx-auto" variants={fadeUp}>
            The BIT framework™ ensures your AI Agent is fit for purpose — built smart, integrated seamlessly, tuned continuously.
          </motion.p>

          <motion.div className="hero-cta-group justify-center" variants={fadeUp}>
            <a href="#process" className="btn btn-primary">
              <span>Explore Process</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
            </a>
            <a href="/contact-us" className="btn btn-outline">
              <span>Get Started</span>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
