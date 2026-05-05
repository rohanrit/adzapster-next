'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import FloatingShapes from './FloatingShapes'
import TiltCard from './TiltCard'
import SectionHeading from './SectionHeading'

const shapes = [
  { type: 'donut', size: 100, thickness: 15, color: 'pink', position: { bottom: '10%', left: '4%' }, depth: 0.5, rotate: { x: 50, z: 40 } },
  { type: 'cube', size: 75, color: 'purple', position: { top: '8%', right: '6%' }, depth: 0.4 },
  { type: 'pyramid', size: 65, color: 'orange', position: { top: '5%', left: '12%' }, depth: 0.35 },
  { type: 'donut', size: 70, thickness: 12, color: 'pink', position: { bottom: '12%', right: '6%' }, depth: 0.45 },
  { type: 'cube', size: 45, color: 'purple', position: { top: '15%', left: '12%' }, depth: 0.25, rotate: { x: -15, y: 40 } },
  { type: 'pyramid', size: 50, color: 'orange', position: { bottom: '20%', right: '15%' }, depth: 0.3, rotate: { x: 15, y: -25 } },
  { type: 'donut', size: 55, thickness: 9, color: 'pink', position: { top: '30%', right: '18%' }, depth: 0.22, rotate: { x: 35, z: 20 } },
  { type: 'cube', size: 40, color: 'purple', position: { bottom: '30%', left: '8%' }, depth: 0.18, rotate: { x: 10, y: -20 } },
  { type: 'pyramid', size: 35, color: 'orange', position: { top: '50%', right: '8%' }, depth: 0.2, rotate: { x: 5, y: 30 } },
  { type: 'donut', size: 50, thickness: 8, color: 'pink', position: { bottom: '30%', right: '10%' }, depth: 0.4, rotate: { x: 45, z: 30 } },
  { type: 'cube', size: 35, color: 'purple', position: { top: '65%', left: '15%' }, depth: 0.15, rotate: { x: -20, y: 20 } },
  { type: 'pyramid', size: 55, color: 'orange', position: { bottom: '5%', right: '20%' }, depth: 0.12, rotate: { x: 10, y: -15 } },
  { type: 'donut', size: 35, thickness: 5, color: 'pink', position: { top: '75%', left: '18%' }, depth: 0.1, rotate: { x: 25, z: 30 } },
  { type: 'cube', size: 28, color: 'purple', position: { bottom: '50%', right: '25%' }, depth: 0.1, rotate: { x: -20, y: 20 } },
  { type: 'pyramid', size: 30, color: 'orange', position: { top: '85%', left: '10%' }, depth: 0.08, rotate: { x: 10, y: -30 } },
  { type: 'donut', size: 28, thickness: 4, color: 'pink', position: { bottom: '45%', left: '10%' }, depth: 0.12, rotate: { x: 20, z: 25 } },
  { type: 'cube', size: 22, color: 'purple', position: { top: '25%', right: '10%' }, depth: 0.08, rotate: { x: -15, y: 25 } },
  { type: 'pyramid', size: 25, color: 'orange', position: { bottom: '40%', right: '15%' }, depth: 0.15, rotate: { x: 5, y: 15 } },
  { type: 'cube', size: 20, color: 'pink', position: { top: '55%', left: '20%' }, depth: 0.06, rotate: { x: -10, y: 30 } },
  { type: 'donut', size: 25, thickness: 3, color: 'purple', position: { bottom: '55%', left: '15%' }, depth: 0.08, rotate: { x: 15, z: 20 } },
]

const cards = [
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
    features: ['10+ years experience', '200+ brands served', '30+ countries reached', 'AI-powered targeting'],
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="var(--icon-color)" strokeWidth="1.5" />
        <path d="M15 12L10 15L15 12L15 12Z" fill="var(--icon-color)" />
        <path d="M2 12H5M19 12H22M12 2V5M12 19V22" stroke="var(--icon-color)" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 12L18 18" stroke="var(--icon-color)" strokeWidth="1" strokeDasharray="3 3" />
      </svg>
    ),
    title: 'Video Advertising',
    desc: 'YouTube, OTT, in-stream & out-stream video ads that captivate and convert across platforms.',
    features: ['High VTR optimization', 'Pre-roll & mid-roll', 'YouTube TrueView & Bumper'],
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
    features: ['Premium CTV inventory', 'QR-based interaction', 'Household targeting'],
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="var(--icon-color)" strokeWidth="1.5" />
        <path d="M2 12L12 17L22 12" stroke="var(--icon-color)" strokeWidth="1.5" />
        <path d="M2 17L12 22L22 17" stroke="var(--icon-color)" strokeWidth="1.5" />
        <circle cx="12" cy="7" r="2" fill="var(--icon-color)" />
      </svg>
    ),
    title: 'Programmatic Advertising',
    desc: 'Real-time bidding powered by AI for precision targeting at scale across formats and platforms.',
    features: ['RTB & private deals', 'AI-driven targeting', 'Cross-format reach'],
  },
]

const flows = [
  { label: 'Data Collection', icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" /></svg> },
  { label: 'AI Targeting', icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg> },
  { label: 'Campaign Launch', icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg> },
  { label: 'Optimization', icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg> },
  { label: 'Growth & Scale', icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg> },
]

const arrow = (
  <svg width="40" height="12" viewBox="0 0 40 12"><path d="M0 6h36m-4-4l4 4-4 4" stroke="var(--primary)" strokeWidth="1.5" fill="none" /></svg>
)

function Counter({ target, suffix }) {
  const ref = useRef(null)
  const done = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !done.current) {
        done.current = true
        gsap.to({ v: 0 }, {
          v: target,
          duration: 2,
          ease: 'power3.out',
          onUpdate: function () { el.textContent = Math.round(this.targets()[0].v) + suffix },
        })
      }
    }, { threshold: 0.5 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [target, suffix])

  return <h3 ref={ref} className="about-card-number">0</h3>
}

export default function About() {
  return (
    <section className="section section--white" id="about">
      <FloatingShapes shapes={shapes} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>

        {/* Existing Hero Section */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-tag">About Us</span>
          <SectionHeading>
            Who
            <span className="gradient-text"> We Are</span>
          </SectionHeading>
          <p className="section-subtitle">A decade of transforming digital advertising with data-driven precision and creative excellence.</p>
        </motion.div>

        {/* Existing Cards Grid */}
        <div className="about-grid">
          {cards.map((card, i) => (
            <TiltCard
              key={card.title}
              className="about-card card multi-gradient-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
            >
              <div className="about-card-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
              <ul className="service-features">
                {card.features.map((f) => <li key={f}>{f}</li>)}
              </ul>
            </TiltCard>
          ))}
        </div>

        {/* Existing Infographic */}
        <motion.div
          className="about-infographic"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="infographic-flow">
            {flows.map((flow, i) => (
              <div key={flow.label} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div className="flow-step">
                  <div className="flow-icon">{flow.icon}</div>
                  <span>{flow.label}</span>
                </div>
                {i < flows.length - 1 && <div className="flow-connector">{arrow}</div>}
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
