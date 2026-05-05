'use client'

import { motion } from 'framer-motion'

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

export default function Hero() {
  return (
    <section className="hero section section--white">
      <div className="robolabs-hero-bg" />
      <div className="robolabs-hero-grid" />
      <div className="robolabs-oval robolabs-oval--1" />
      <div className="robolabs-oval robolabs-oval--2" />
      <div className="robolabs-oval robolabs-oval--3" />
      <div className="robolabs-oval robolabs-oval--4" />
      <div className="robolabs-oval robolabs-oval--5" />
      <div className="robolabs-hero-bottom-gradient" />

      <motion.div
        className="hero-container relative z-10"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        <div className="hero-content text-center col-span-2 pb-12">
          <motion.div className="robolabs-online-badge mx-auto" variants={fadeUp}>
            <span className="robolabs-online-dot" />
            Online
          </motion.div>
      
          <motion.h1 className="hero-title" variants={fadeUp}>
            The Era of AI is Here ✦{' '}
            <span className="gradient-text">Adzapster helps you lead it</span>
          </motion.h1>
      
          <motion.p className="hero-subtitle mx-auto" variants={fadeUp}>
            We are a global crew of performance marketers and AI builders, helping brands use intelligent automation in ways that make sense - no hype, just practical growth.
          </motion.p>
      
          <motion.div className="hero-cta-group justify-center" variants={fadeUp}>
            <a href="#mission" className="btn btn-outline">Learn More</a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
