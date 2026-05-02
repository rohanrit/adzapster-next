'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import FloatingShapes from './FloatingShapes'
import TiltCard from './TiltCard'
import SectionHeading from './SectionHeading'

const shapes = [
  { type: 'donut', size: 100, thickness: 15, color: 'blue', position: { bottom: '10%', left: '4%' }, depth: 0.5, rotate: { x: 50, z: 40 } },
  { type: 'cube', size: 75, color: 'blue', position: { top: '8%', right: '6%' }, depth: 0.4 },
  { type: 'pyramid', size: 65, color: 'blue', position: { top: '5%', left: '12%' }, depth: 0.35 },
  { type: 'donut', size: 70, thickness: 12, color: 'blue', position: { bottom: '12%', right: '6%' }, depth: 0.45 },
  { type: 'cube', size: 45, color: 'blue', position: { top: '15%', left: '12%' }, depth: 0.25, rotate: { x: -15, y: 40 } },
  { type: 'pyramid', size: 50, color: 'blue', position: { bottom: '20%', right: '15%' }, depth: 0.3, rotate: { x: 15, y: -25 } },
  { type: 'donut', size: 55, thickness: 9, color: 'blue', position: { top: '30%', right: '18%' }, depth: 0.22, rotate: { x: 35, z: 20 } },
  { type: 'cube', size: 40, color: 'blue', position: { bottom: '30%', left: '8%' }, depth: 0.18, rotate: { x: 10, y: -20 } },
  { type: 'pyramid', size: 35, color: 'blue', position: { top: '50%', right: '8%' }, depth: 0.2, rotate: { x: 5, y: 30 } },
  { type: 'donut', size: 50, thickness: 8, color: 'blue', position: { bottom: '30%', right: '10%' }, depth: 0.4, rotate: { x: 45, z: 30 } },
  { type: 'cube', size: 35, color: 'blue', position: { top: '65%', left: '15%' }, depth: 0.15, rotate: { x: -20, y: 20 } },
  { type: 'pyramid', size: 55, color: 'blue', position: { bottom: '5%', right: '20%' }, depth: 0.12, rotate: { x: 10, y: -15 } },
  { type: 'donut', size: 35, thickness: 5, color: 'blue', position: { top: '75%', left: '18%' }, depth: 0.1, rotate: { x: 25, z: 30 } },
  { type: 'cube', size: 28, color: 'blue', position: { bottom: '50%', right: '25%' }, depth: 0.1, rotate: { x: -20, y: 20 } },
  { type: 'pyramid', size: 30, color: 'blue', position: { top: '85%', left: '10%' }, depth: 0.08, rotate: { x: 10, y: -30 } },
  { type: 'donut', size: 28, thickness: 4, color: 'blue', position: { bottom: '45%', left: '10%' }, depth: 0.12, rotate: { x: 20, z: 25 } },
  { type: 'cube', size: 22, color: 'blue', position: { top: '25%', right: '10%' }, depth: 0.08, rotate: { x: -15, y: 25 } },
  { type: 'pyramid', size: 25, color: 'blue', position: { bottom: '40%', right: '15%' }, depth: 0.15, rotate: { x: 5, y: 15 } },
  { type: 'cube', size: 20, color: 'blue', position: { top: '55%', left: '20%' }, depth: 0.06, rotate: { x: -10, y: 30 } },
  { type: 'donut', size: 25, thickness: 3, color: 'blue', position: { bottom: '55%', left: '15%' }, depth: 0.08, rotate: { x: 15, z: 20 } },
]

const cards = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="var(--icon-color)" strokeWidth="1.5" />
        <path d="M12 7V12L15 15" stroke="var(--icon-color)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 2V4M12 20V22M2 12H4M20 12H22" stroke="var(--icon-color)" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
    number: 10,
    suffix: '+',
    label: 'Years of Experience',
    desc: 'Deep expertise in performance marketing, video, and CTV advertising ecosystems.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="20" height="20" rx="4" stroke="var(--icon-color)" strokeWidth="1.5" />
        <path d="M7 11V13M10 10V14M13 9V15M17 7V17" stroke="var(--icon-color)" strokeWidth="2" strokeLinecap="round" />
        <circle cx="17" cy="7" r="1" fill="var(--icon-color)" />
      </svg>
    ),
    number: 200,
    suffix: '+',
    label: 'Brands Served',
    desc: 'Trusted by 200+ brands across verticals — from startups to Fortune 500 enterprises.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="var(--icon-color)" strokeWidth="1.5" />
        <path d="M2 12H22M12 2C14.5 5 16 8.5 16 12C16 15.5 14.5 19 12 22M12 2C9.5 5 8 8.5 8 12C8 15.5 9.5 19 12 22" stroke="var(--icon-color)" strokeWidth="1" />
        <circle cx="12" cy="12" r="3" stroke="var(--icon-color)" strokeWidth="1" />
      </svg>
    ),
    number: 30,
    suffix: '+',
    label: 'Countries Reached',
    desc: 'Multi-country campaign management with localized targeting and compliance.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="var(--icon-color)" strokeWidth="1.5" />
        <path d="M2 12L12 17L22 12" stroke="var(--icon-color)" strokeWidth="1.5" />
        <path d="M2 17L12 22L22 17" stroke="var(--icon-color)" strokeWidth="1.5" />
        <circle cx="12" cy="7" r="2" fill="var(--icon-color)" />
      </svg>
    ),
    number: 50,
    suffix: '+',
    label: 'AI-Powered Targeting',
    desc: 'Machine learning algorithms for real-time bid optimization and audience segmentation.',
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

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function About() {
  return (
    <section className="section section--white" id="about">
      <FloatingShapes shapes={shapes} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
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

        <div className="about-grid">
          {cards.map((card, i) => (
            <TiltCard
              key={card.label}
              className="about-card card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="about-card-icon">{card.icon}</div>
              <Counter target={card.number} suffix={card.suffix} />
              <p className="about-card-label">{card.label}</p>
              <p className="about-card-desc">{card.desc}</p>
            </TiltCard>
          ))}
        </div>

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
