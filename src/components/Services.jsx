'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import FloatingShapes from './FloatingShapes'
import TiltCard from './TiltCard'
import SectionHeading from './SectionHeading'

const shapes = [
  { type: 'pyramid', size: 70, color: 'blue', position: { top: '5%', right: '4%' }, depth: 0.35 },
  { type: 'cube', size: 55, color: 'blue', position: { bottom: '8%', left: '3%' }, depth: 0.5 },
  { type: 'donut', size: 65, thickness: 10, color: 'blue', position: { top: '12%', left: '10%' }, depth: 0.28, rotate: { x: 40, z: 20 } },
  { type: 'cube', size: 45, color: 'blue', position: { top: '20%', right: '18%' }, depth: 0.22, rotate: { x: -10, y: 35 } },
  { type: 'pyramid', size: 40, color: 'blue', position: { bottom: '20%', right: '8%' }, depth: 0.3, rotate: { x: 15, y: -25 } },
  { type: 'donut', size: 50, thickness: 8, color: 'blue', position: { top: '45%', left: '5%' }, depth: 0.18, rotate: { x: 30, z: 15 } },
  { type: 'pyramid', size: 55, color: 'blue', position: { bottom: '5%', right: '25%' }, depth: 0.2, rotate: { x: 5, y: 30 } },
  { type: 'donut', size: 40, thickness: 6, color: 'blue', position: { top: '70%', left: '8%' }, depth: 0.15, rotate: { x: 25, z: 35 } },
  { type: 'cube', size: 28, color: 'blue', position: { bottom: '30%', left: '15%' }, depth: 0.12, rotate: { x: -15, y: 25 } },
  { type: 'pyramid', size: 30, color: 'blue', position: { top: '80%', right: '20%' }, depth: 0.1, rotate: { x: 10, y: -15 } },
  { type: 'donut', size: 35, thickness: 5, color: 'blue', position: { top: '30%', right: '10%' }, depth: 0.18, rotate: { x: 20, z: 25 } },
  { type: 'cube', size: 25, color: 'blue', position: { bottom: '45%', right: '15%' }, depth: 0.08, rotate: { x: -10, y: 20 } },
  { type: 'pyramid', size: 28, color: 'blue', position: { top: '60%', left: '20%' }, depth: 0.12, rotate: { x: 5, y: 30 } },
  { type: 'donut', size: 28, thickness: 4, color: 'blue', position: { bottom: '55%', left: '10%' }, depth: 0.1, rotate: { x: 15, z: 20 } },
]

const services = [
  { 
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="20" height="20" rx="4" stroke="var(--icon-color)" strokeWidth="1.5" />
        <path d="M12 18V12M12 12L9 15M12 12L15 15" stroke="var(--icon-color)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 6L12 10L8 6" stroke="var(--icon-color)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="9" stroke="var(--icon-color)" strokeWidth="1" strokeDasharray="2 2" />
      </svg>
    ), 
    title: 'Performance Marketing', 
    desc: 'CPL, CPA, CPS models tailored to your goals. Every dollar tracked, every conversion measured.', 
    features: ['ROI-focused campaigns', 'Real-time bid management', 'Multi-channel attribution'] 
  },
  { 
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="var(--icon-color)" strokeWidth="1.5" />
        <path d="M15 12L10 15V9L15 12Z" fill="var(--icon-color)" />
        <path d="M2 12H5M19 12H22M12 2V5M12 19V22" stroke="var(--icon-color)" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 12L18 18" stroke="var(--icon-color)" strokeWidth="1" strokeDasharray="3 3" />
      </svg>
    ), 
    title: 'Video Advertising', 
    desc: 'YouTube, OTT, in-stream & out-stream video ads that captivate and convert across platforms.', 
    features: ['High VTR optimization', 'Pre-roll & mid-roll', 'YouTube TrueView & Bumper'] 
  },
  { 
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="4" width="18" height="12" rx="2" stroke="var(--icon-color)" strokeWidth="1.5" />
        <path d="M7 20L12 16L17 20" stroke="var(--icon-color)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="10" r="3" fill="var(--icon-color)" fillOpacity="0.2" stroke="var(--icon-color)" strokeWidth="1" />
        <rect x="9" y="13" width="6" height="1" rx="0.5" fill="var(--icon-color)" />
      </svg>
    ), 
    title: 'Connected TV (CTV)', 
    desc: 'Full-screen, non-skippable ads on premium CTV inventory with interactive QR-based engagement.', 
    features: ['Premium CTV inventory', 'QR-based interaction', 'Household targeting'] 
  },
  { 
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="var(--icon-color)" strokeWidth="1.5" />
        <path d="M2 12L12 17L22 12" stroke="var(--icon-color)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 17L12 22L22 17" stroke="var(--icon-color)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="7" r="2" fill="var(--icon-color)" />
      </svg>
    ), 
    title: 'Programmatic Advertising', 
    desc: 'Real-time bidding powered by AI for precision targeting at scale across formats and platforms.', 
    features: ['RTB & private deals', 'AI-driven targeting', 'Cross-format reach'] 
  },
  { 
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="2" width="14" height="20" rx="3" stroke="var(--icon-color)" strokeWidth="1.5" />
        <circle cx="12" cy="18" r="1.5" fill="var(--icon-color)" />
        <path d="M9 7H15M9 10H13" stroke="var(--icon-color)" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="11" y="13" width="6" height="6" rx="1" stroke="var(--icon-color)" strokeWidth="1" />
      </svg>
    ), 
    title: 'Mobile & App Marketing', 
    desc: 'Drive app installs, engagement, and retargeting with precision mobile campaigns.', 
    features: ['App install campaigns', 'Deep-link retargeting', 'In-app placements'] 
  },
  { 
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="20" height="20" rx="4" stroke="var(--icon-color)" strokeWidth="1.5" />
        <path d="M6 14L10 10L14 14L18 10" stroke="var(--icon-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="6" cy="14" r="2" fill="var(--icon-color)" />
        <circle cx="18" cy="10" r="2" fill="var(--icon-color)" />
      </svg>
    ), 
    title: 'Rich Media Ads', 
    desc: 'Interactive, gamified creatives that break through the noise and drive engagement.', 
    features: ['HTML5 creatives', 'Gamified ad experiences', 'Interactive formats'] 
  },
]

export default function Services() {
  const trackRef = useRef(null)
  const sectionRef = useRef(null)
  const [index, setIndex] = useState(0)
  const [perView, setPerView] = useState(3)
  const [isAutoScrolling, setIsAutoScrolling] = useState(false)

  useEffect(() => {
    const update = () => setPerView(window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3)
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsAutoScrolling(entry.isIntersecting)
      },
      { threshold: 0.5 }
    )
    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isAutoScrolling) return

    const interval = setInterval(() => {
      setIndex((prev) => {
        const maxIndex = Math.max(0, services.length - perView)
        return prev >= maxIndex ? 0 : prev + 1
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [isAutoScrolling, perView])

  const maxIndex = Math.max(0, services.length - perView)

  const goTo = (i) => {
    const next = Math.max(0, Math.min(i, maxIndex))
    setIndex(next)
    setIsAutoScrolling(false)
    setTimeout(() => setIsAutoScrolling(true), 5000)
  }

  const [slideWidth, setSlideWidth] = useState(0)
  useEffect(() => {
    function updateWidth() {
      if (trackRef.current?.children[0]) {
        setSlideWidth(trackRef.current.children[0].offsetWidth + 24)
      }
    }
    updateWidth();
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [])
  const offset = () => index * slideWidth


  return (
    <section ref={sectionRef} className="section section--light" id="services">
      <FloatingShapes shapes={shapes} patternType="dotted" />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div className="section-header" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <span className="section-tag">What We Do</span>
          <SectionHeading>
            Our <span className="gradient-text">Services</span>
          </SectionHeading>
          <p className="section-subtitle">End-to-end advertising solutions engineered for measurable performance across every screen.</p>
        </motion.div>

        <div className="services-carousel">
          <div ref={trackRef} className="carousel-track" style={{ transform: `translateX(-${offset()}px)` }}>
            {services.map((s, i) => (
              <TiltCard key={s.title} className="service-card card multi-gradient-card" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.6 }}>
                <div className="service-card-glow" />
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <ul className="service-features">
                  {s.features.map((f) => <li key={f}>{f}</li>)}
                </ul>
              </TiltCard>
            ))}
          </div>
          <div className="carousel-controls">
            <button className="carousel-btn" onClick={() => goTo(index - 1)} aria-label="Previous">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6" /></svg>
            </button>
            <div className="carousel-dots">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <div key={i} className={`carousel-dot ${i === index ? 'active' : ''}`} onClick={() => goTo(i)} />
              ))}
            </div>
            <button className="carousel-btn" onClick={() => goTo(index + 1)} aria-label="Next">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
