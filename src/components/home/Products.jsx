'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import FloatingShapes from '@/components/FloatingShapes'
import TiltCard from '@/components/TiltCard'
import SectionHeading from '@/components/SectionHeading'

const shapes = [
  { type: 'cube', size: 75, color: 'purple', position: { top: '8%', left: '4%' }, depth: 0.4 },
  { type: 'pyramid', size: 65, color: 'pink', position: { bottom: '12%', right: '6%' }, depth: 0.35 },
  { type: 'donut', size: 90, thickness: 14, color: 'orange', position: { top: '50%', right: '3%' }, depth: 0.5 },
  { type: 'pyramid', size: 50, color: 'pink', position: { top: '15%', right: '15%' }, depth: 0.3, rotate: { x: -15, y: 25 } },
  { type: 'cube', size: 45, color: 'orange', position: { top: '25%', left: '12%' }, depth: 0.25, rotate: { x: 10, y: -30 } },
  { type: 'donut', size: 55, thickness: 9, color: 'purple', position: { bottom: '20%', left: '8%' }, depth: 0.35, rotate: { x: 45, z: 20 } },
  { type: 'pyramid', size: 40, color: 'orange', position: { top: '70%', right: '8%' }, depth: 0.18, rotate: { x: 5, y: 35 } },
  { type: 'cube', size: 35, color: 'pink', position: { bottom: '40%', right: '20%' }, depth: 0.22, rotate: { x: -20, y: 15 } },
  { type: 'donut', size: 45, thickness: 7, color: 'pink', position: { top: '35%', right: '25%' }, depth: 0.2, rotate: { x: 30, z: 25 } },
  { type: 'pyramid', size: 30, color: 'purple', position: { top: '80%', left: '18%' }, depth: 0.12, rotate: { x: -10, y: 20 } },
  { type: 'cube', size: 25, color: 'orange', position: { bottom: '50%', left: '25%' }, depth: 0.15, rotate: { x: 15, y: -25 } },
  { type: 'donut', size: 35, thickness: 5, color: 'pink', position: { top: '20%', right: '10%' }, depth: 0.18, rotate: { x: 25, z: 30 } },
  { type: 'pyramid', size: 28, color: 'purple', position: { bottom: '55%', right: '12%' }, depth: 0.1, rotate: { x: 10, y: -15 } },
  { type: 'cube', size: 22, color: 'orange', position: { top: '55%', left: '8%' }, depth: 0.08, rotate: { x: -15, y: 20 } },
  { type: 'donut', size: 28, thickness: 4, color: 'purple', position: { bottom: '25%', right: '18%' }, depth: 0.12, rotate: { x: 20, z: 25 } },
]

const products = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="20" height="20" rx="4" stroke="var(--icon-color)" strokeWidth="1.5" />
        <path d="M12 18V12M12 12L9 15M12 12L15 15" stroke="var(--icon-color)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 6L12 10L8 6" stroke="var(--icon-color)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="9" stroke="var(--icon-color)" strokeWidth="1" strokeDasharray="2 2" />
      </svg>
    ),
    title: 'AI Targeting Platform',
    desc: 'Contextual + behavioral targeting powered by machine learning. Reach the right user at the right moment.',
    features: ['Real-time bid optimization', 'Contextual targeting', 'Behavioral segmentation'],
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
    title: 'Campaign Analytics Dashboard',
    desc: 'Real-time reporting with granular insights. Track impressions, clicks, conversions, and ROAS in one view.',
    features: ['Real-time reporting', 'Granular insights', 'Multi-channel tracking'],
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
    title: 'Audience Intelligence Engine',
    desc: 'Predictive audience segmentation. Build lookalike models and discover high-value user cohorts.',
    features: ['Lookalike modeling', 'Predictive segmentation', 'High-value cohorts'],
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
    title: 'CTV Ad Builder',
    desc: 'Create interactive CTV ad formats with QR overlays, shoppable elements, and dynamic creatives.',
    features: ['Interactive CTV formats', 'QR overlays', 'Shoppable elements'],
  },
]

export default function Products() {
  const trackRef = useRef(null)
  const [index, setIndex] = useState(0)
  const [perView, setPerView] = useState(3)

  useEffect(() => {
    const update = () => setPerView(window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3)
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const maxIndex = Math.max(0, products.length - perView)
  const goTo = (i) => setIndex(Math.max(0, Math.min(i, maxIndex)))

  // Fix: Store slide width in state and only update in effect, not in render
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
    <section className="section section--light" id="products">      
      <FloatingShapes shapes={shapes} patternType="dotted" />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div className="section-header" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <span className="section-tag">Technology</span>
          <SectionHeading>
            Our <span className="gradient-text">Products</span>
          </SectionHeading>
          <p className="text-xl text-tertiary">Proprietary ad-tech products built to give you an unfair advantage in digital advertising.</p>
        </motion.div>

        <div className="products-carousel">
          <div ref={trackRef} className="carousel-track" style={{ transform: `translateX(-${offset()}px)` }}>
            {products.map((p, i) => (
              <TiltCard key={p.title} className="product-card card multi-gradient-card" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.6 }}>
                <div className="product-icon">{p.icon}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <ul className="service-features">
                  {p.features.map((f) => <li key={f}>{f}</li>)}
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
