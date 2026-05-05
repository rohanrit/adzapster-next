'use client'

import { motion } from 'framer-motion'
import TiltCard from '@/components/TiltCard'
import FloatingShapes from '@/components/FloatingShapes'
import SectionHeading from '@/components/SectionHeading'

const shapes = [
  { type: 'pyramid', size: 80, color: 'pink', position: { top: '10%', left: '5%' }, depth: 0.35 },
  { type: 'donut', size: 75, thickness: 12, color: 'purple', position: { bottom: '10%', right: '6%' }, depth: 0.45 },
  { type: 'cube', size: 55, color: 'orange', position: { top: '5%', right: '12%' }, depth: 0.3, rotate: { x: -20, y: 30 } },
  { type: 'donut', size: 55, thickness: 9, color: 'pink', position: { top: '30%', left: '8%' }, depth: 0.25, rotate: { x: 35, z: 25 } },
  { type: 'pyramid', size: 45, color: 'purple', position: { bottom: '25%', left: '20%' }, depth: 0.32, rotate: { x: -15, y: 40 } },
  { type: 'cube', size: 40, color: 'orange', position: { top: '50%', right: '3%' }, depth: 0.22, rotate: { x: 10, y: -25 } },
  { type: 'donut', size: 45, thickness: 7, color: 'pink', position: { bottom: '35%', right: '15%' }, depth: 0.28, rotate: { x: 50, z: 15 } },
  { type: 'pyramid', size: 35, color: 'purple', position: { top: '15%', left: '18%' }, depth: 0.18, rotate: { x: -5, y: 20 } },
  { type: 'cube', size: 30, color: 'orange', position: { top: '65%', left: '10%' }, depth: 0.2, rotate: { x: -15, y: 35 } },
  { type: 'donut', size: 35, thickness: 5, color: 'pink', position: { top: '40%', right: '10%' }, depth: 0.15, rotate: { x: 25, z: 30 } },
  { type: 'pyramid', size: 50, color: 'purple', position: { top: '70%', right: '20%' }, depth: 0.12, rotate: { x: 10, y: -30 } },
  { type: 'cube', size: 28, color: 'orange', position: { bottom: '45%', right: '15%' }, depth: 0.1, rotate: { x: -20, y: 25 } },
  { type: 'donut', size: 30, thickness: 4, color: 'pink', position: { top: '60%', left: '20%' }, depth: 0.12, rotate: { x: 15, z: 20 } },
  { type: 'pyramid', size: 25, color: 'purple', position: { bottom: '40%', left: '15%' }, depth: 0.15, rotate: { x: 5, y: 15 } },
  { type: 'cube', size: 22, color: 'orange', position: { top: '80%', left: '25%' }, depth: 0.1, rotate: { x: -10, y: 30 } },
  { type: 'donut', size: 28, thickness: 4, color: 'pink', position: { bottom: '55%', left: '10%' }, depth: 0.08, rotate: { x: 20, z: 25 } },
]

const items = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L3 7V12C3 17.5 7 21 12 22C17 21 21 17.5 21 12V7L12 2Z" stroke="var(--icon-color)" strokeWidth="1.5" />
        <path d="M9 12L11 14L15 10" stroke="var(--icon-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="9" stroke="var(--icon-color)" strokeWidth="1" strokeDasharray="2 2" />
      </svg>
    ),
    title: '99%+ Brand Safety',
    desc: 'Industry-leading brand safety measures with premium inventory verification and fraud protection.',
    features: ['Premium inventory', 'Fraud protection', 'Brand verification'],
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="var(--icon-color)" strokeWidth="1.5" />
        <path d="M7 8H17M7 12H13M7 16H15" stroke="var(--icon-color)" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="18" cy="16" r="3" stroke="var(--icon-color)" strokeWidth="1.5" />
        <path d="M18 16V14M18 16L19 17" stroke="var(--icon-color)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Transparent Reporting',
    desc: 'Real-time dashboards with complete transparency. No hidden fees, no black-box metrics.',
    features: ['Real-time dashboards', 'No hidden fees', 'Complete transparency'],
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
    title: 'AI Optimization Engine',
    desc: 'Machine learning that gets smarter with every impression. Continuous campaign optimization 24/7.',
    features: ['24/7 optimization', 'Machine learning', 'Continuous improvement'],
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="16" height="16" rx="2" stroke="var(--icon-color)" strokeWidth="1.5" />
        <path d="M4 10H20M10 4V20" stroke="var(--icon-color)" strokeWidth="1" strokeDasharray="2 2" />
        <circle cx="7" cy="7" r="1.5" fill="var(--icon-color)" />
        <circle cx="17" cy="17" r="1.5" fill="var(--icon-color)" />
      </svg>
    ),
    title: 'Cross-Platform Reach',
    desc: 'Mobile, Web, OTT, CTV — reach your audience wherever they are, on every device and screen.',
    features: ['Mobile & Web', 'OTT & CTV', 'Every device'],
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3L4 9V21H20V9L12 3Z" stroke="var(--icon-color)" strokeWidth="1.5" />
        <circle cx="12" cy="13" r="3" stroke="var(--icon-color)" strokeWidth="1.5" />
        <path d="M12 13V11M12 13L10 14" stroke="var(--icon-color)" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="8" y="18" width="8" height="2" fill="var(--icon-color)" />
      </svg>
    ),
    title: 'Creative + Media In-House',
    desc: 'End-to-end capabilities. Strategy, creatives, media buying, and analytics all under one roof.',
    features: ['Strategy & creatives', 'Media buying', 'Analytics included'],
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="var(--icon-color)" strokeWidth="1.5" />
        <path d="M8 12L11 15L16 9" stroke="var(--icon-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="var(--icon-color)" strokeWidth="1" strokeDasharray="3 3" />
      </svg>
    ),
    title: 'Dedicated Account Teams',
    desc: 'Every client gets a dedicated team. Strategic oversight, not just account managers.',
    features: ['Dedicated teams', 'Strategic oversight', 'Direct access'],
  },
]

export default function WhyUs() {
  return (
    <section className="section section--white" id="why-us">      
      <FloatingShapes shapes={shapes} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div className="section-header" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <span className="section-tag">Advantage</span>
          <SectionHeading>
            Why <span className="gradient-text">Choose Us</span>
          </SectionHeading>
          <p className="section-subtitle">The competitive edge your advertising strategy has been missing.</p>
        </motion.div>

        <div className="why-grid">
          {items.map((item, i) => (
              <TiltCard
              key={item.title}
              className="why-card card multi-gradient-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="why-card-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <ul className="service-features">
                {item.features.map((f) => <li key={f}>{f}</li>)}
              </ul>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  )
}
