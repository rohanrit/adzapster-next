'use client'

import { motion } from 'framer-motion'
import FloatingShapes from '@/components/FloatingShapes'
import SectionHeading from '@/components/SectionHeading'

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

export default function Hero() {
  return (
    <section className="section section--white robolabs-hero" id="careers-hero">
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
            WE ARE HIRING
          </motion.div>

          <motion.h1 className="hero-title" variants={fadeUp}>
            Engineer the future of <span className="gradient-text">programmatic advertising</span>.
          </motion.h1>

          <motion.p className="hero-subtitle mx-auto" variants={fadeUp}>
            Join a team of visionaries, data scientists, and engineers building the world's fastest real-time bidding infrastructure.
          </motion.p>

          <motion.div className="hero-cta-group justify-center" variants={fadeUp}>
            <a href="#innovation" className="btn btn-primary">
              <span>View Open Roles</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
            </a>
            <a href="#perks" className="btn btn-outline">
              <span>Our Culture</span>
            </a>
          </motion.div>

          <div className="relative group mt-xl">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl blur-2xl opacity-50"></div>
            <img 
              className="relative w-full h-[400px] object-cover rounded-2xl shadow-xl border border-outline-variant/40 grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
              src="/images/section-img-009.png"
              alt="Adzapster Team"
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
