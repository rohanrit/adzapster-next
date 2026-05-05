'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Hero() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -150])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 1])

  return (
    <motion.section
      ref={sectionRef}
      className="section section--white robolabs-hero"
      style={{
        y: heroY,
        opacity: heroOpacity,
        position: 'sticky',
        top: 0,
        zIndex: 10,
        height: '100vh'
      }}
    >
      <div className="robolabs-hero-bg" />
      <div className="robolabs-hero-grid" />
      <div className="robolabs-oval robolabs-oval--1" />
      <div className="robolabs-oval robolabs-oval--2" />
      <div className="robolabs-oval robolabs-oval--3" />
      <div className="robolabs-oval robolabs-oval--4" />
      <div className="robolabs-oval robolabs-oval--5" />
      <div className="robolabs-hero-bottom-gradient" />
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="robolabs-online-badge">
            <span className="robolabs-online-dot" />
            <span>Online</span>
          </div>
          <h1 className="hero-title mb-6">
            <span className="robolabs-hero-title-lead">The Era of AI is Here ✦ </span>
            Adzapster helps you lead it
          </h1>
          <p className="hero-subtitle mx-auto mb-10">
            We are a global crew of performance marketers and AI builders, helping brands use intelligent automation in ways that make sense - no hype, just practical growth.
          </p>
          <div className="hero-cta-group justify-center mb-0">
            <a href="#mission" className="btn btn-outline">Learn More</a>
          </div>
          <div className="robolabs-core-tech">
            <p>Our core technologies</p>
            <div className="robolabs-logo-strip">
              <img src="https://framerusercontent.com/images/m2Ee8qVNaUq1p30JNXzf87wtGZ4.png" alt="Technology 1" />
              <img src="https://framerusercontent.com/images/n3QeCgxiERZtWGL7E7mRbFJGPU.png" alt="Technology 2" />
              <img src="https://framerusercontent.com/images/Bcly3ML9TcmNxDC5rKCRKuvqODI.png" alt="Technology 3" />
              <img src="https://framerusercontent.com/images/o3i1Dnx2WxItzPkcePIqvEQOFU.png" alt="Technology 4" />
              <img src="https://framerusercontent.com/images/aEfuAatqNA9OPAwEZa6f4GuCgU.png" alt="Technology 5" />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
