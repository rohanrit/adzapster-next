'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import FloatingShapes from './FloatingShapes'
import TiltCard from './TiltCard'
import SectionHeading from './SectionHeading'

const shapes = [
  { type: 'cube', size: 75, color: 'blue', position: { top: '8%', left: '4%' }, depth: 0.4 },
  { type: 'pyramid', size: 65, color: 'blue', position: { bottom: '12%', right: '6%' }, depth: 0.35 },
  { type: 'donut', size: 90, thickness: 14, color: 'blue', position: { top: '50%', right: '3%' }, depth: 0.5 },
  { type: 'pyramid', size: 50, color: 'blue', position: { top: '15%', right: '15%' }, depth: 0.3, rotate: { x: -15, y: 25 } },
  { type: 'cube', size: 45, color: 'blue', position: { top: '25%', left: '12%' }, depth: 0.25, rotate: { x: 10, y: -30 } },
  { type: 'donut', size: 55, thickness: 9, color: 'blue', position: { bottom: '20%', left: '8%' }, depth: 0.35, rotate: { x: 45, z: 20 } },
  { type: 'pyramid', size: 40, color: 'blue', position: { top: '70%', right: '8%' }, depth: 0.18, rotate: { x: 5, y: 35 } },
  { type: 'cube', size: 35, color: 'blue', position: { bottom: '40%', right: '20%' }, depth: 0.22, rotate: { x: -20, y: 15 } },
  { type: 'donut', size: 45, thickness: 7, color: 'blue', position: { top: '35%', right: '25%' }, depth: 0.2, rotate: { x: 30, z: 25 } },
  { type: 'pyramid', size: 30, color: 'blue', position: { top: '80%', left: '18%' }, depth: 0.12, rotate: { x: -10, y: 20 } },
  { type: 'cube', size: 25, color: 'blue', position: { bottom: '50%', left: '25%' }, depth: 0.15, rotate: { x: 15, y: -25 } },
  { type: 'donut', size: 35, thickness: 5, color: 'blue', position: { top: '20%', right: '10%' }, depth: 0.18, rotate: { x: 25, z: 30 } },
  { type: 'pyramid', size: 28, color: 'blue', position: { bottom: '55%', right: '12%' }, depth: 0.1, rotate: { x: 10, y: -15 } },
  { type: 'cube', size: 22, color: 'blue', position: { top: '55%', left: '8%' }, depth: 0.08, rotate: { x: -15, y: 20 } },
  { type: 'donut', size: 28, thickness: 4, color: 'blue', position: { bottom: '25%', right: '18%' }, depth: 0.12, rotate: { x: 20, z: 25 } },
]

const products = [
  { 
    badge: 'AI', 
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="var(--icon-color)" strokeWidth="1.5" />
        <path d="M12 6V18M6 12H18" stroke="var(--icon-color)" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="12" cy="12" r="4" stroke="var(--icon-color)" strokeWidth="1.5" />
        <path d="M12 12L16 16" stroke="var(--icon-color)" strokeWidth="1" />
        <circle cx="12" cy="12" r="1.5" fill="var(--icon-color)" />
      </svg>
    ), 
    title: 'AI Targeting Platform', 
    desc: 'Contextual + behavioral targeting powered by machine learning. Reach the right user at the right moment.' 
  },
  { 
    badge: 'Analytics', 
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="3" width="20" height="15" rx="2" stroke="var(--icon-color)" strokeWidth="1.5" />
        <path d="M6 14L9 11L12 14L18 8" stroke="var(--icon-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 18H22" stroke="var(--icon-color)" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="9" y="20" width="6" height="2" rx="1" fill="var(--icon-color)" />
      </svg>
    ), 
    title: 'Campaign Analytics Dashboard', 
    desc: 'Real-time reporting with granular insights. Track impressions, clicks, conversions, and ROAS in one view.' 
  },
  { 
    badge: 'DMP', 
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="9" cy="7" r="4" stroke="var(--icon-color)" strokeWidth="1.5" />
        <path d="M17 21V19C17 16.7909 15.2091 15 13 15H5C2.79086 15 1 16.7909 1 19V21" stroke="var(--icon-color)" strokeWidth="1.5" />
        <circle cx="18" cy="12" r="3" stroke="var(--icon-color)" strokeWidth="1.5" />
        <path d="M23 21V20C23 18.3431 21.6569 17 20 17H16" stroke="var(--icon-color)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ), 
    title: 'Audience Intelligence Engine', 
    desc: 'Predictive audience segmentation. Build lookalike models and discover high-value user cohorts.' 
  },
  { 
    badge: 'CTV', 
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="7" width="20" height="13" rx="2" stroke="var(--icon-color)" strokeWidth="1.5" />
        <path d="M7 21L12 17L17 21" stroke="var(--icon-color)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="9" y="10" width="6" height="6" rx="1" stroke="var(--icon-color)" strokeWidth="1.5" strokeDasharray="2 2" />
        <circle cx="12" cy="13" r="1.5" fill="var(--icon-color)" />
      </svg>
    ), 
    title: 'CTV Ad Builder', 
    desc: 'Create interactive CTV ad formats with QR overlays, shoppable elements, and dynamic creatives.' 
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
          <p className="section-subtitle">Proprietary ad-tech products built to give you an unfair advantage in digital advertising.</p>
        </motion.div>

        <div className="products-carousel">
          <div ref={trackRef} className="carousel-track" style={{ transform: `translateX(-${offset()}px)` }}>
            {products.map((p, i) => (
              <TiltCard key={p.title} className="product-card card multi-gradient-card" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }}>
                <div className="product-card-badge">{p.badge}</div>
                <div className="product-icon">{p.icon}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <a href="#contact" className="product-link">Learn More →</a>
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
