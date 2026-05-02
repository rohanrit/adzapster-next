'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import FloatingShapes from './FloatingShapes'

const heroShapes = [
  { type: 'cube', size: 80, color: 'orange', position: { top: '12%', left: '6%' }, depth: 0.4, rotate: { x: -25, y: 35 } },
  { type: 'donut', size: 130, thickness: 20, color: 'purple', position: { top: '18%', right: '8%' }, depth: 0.6, rotate: { x: 55, z: 25 } },
  { type: 'pyramid', size: 75, color: 'blue', position: { bottom: '22%', left: '12%' }, depth: 0.35, rotate: { x: -15, y: 20 } },
  { type: 'cube', size: 55, color: 'purple', position: { bottom: '15%', right: '15%' }, depth: 0.5, rotate: { x: 15, y: -20 } },
  { type: 'donut', size: 75, thickness: 12, color: 'orange', position: { top: '55%', left: '3%' }, depth: 0.25, rotate: { x: 70, z: 45 } },
  { type: 'pyramid', size: 60, color: 'orange', position: { top: '8%', right: '30%' }, depth: 0.45, rotate: { x: -5, y: 40 } },
  { type: 'blob', size: 900, color: 'orange', position: { top: '-10%', left: '-5%' }, depth: 0.1, opacity: 0.12 },
  { type: 'blob', size: 750, color: 'purple', position: { bottom: '10%', right: '-5%' }, depth: 0.15, opacity: 0.1 },
]

const stats = [
  { target: 500, suffix: 'M+', label: 'Impressions Delivered' },
  { target: 10, suffix: 'x', label: 'Average ROAS' },
  { target: 200, suffix: '+', label: 'Brands Served' },
]

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

function AnimatedCounter({ target, suffix }) {
  const ref = useRef(null)
  const animated = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true
          gsap.to({ val: 0 }, {
            val: target,
            duration: 2,
            ease: 'power3.out',
            onUpdate: function () {
              el.textContent = Math.round(this.targets()[0].val) + suffix
            },
          })
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target, suffix])

  return <span ref={ref} className="hero-stat-number">0</span>
}

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <FloatingShapes shapes={heroShapes} />

      <motion.div
        className="hero-container"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        <div className="hero-content">
          <motion.div className="hero-badge" variants={fadeUp}>
            <span className="badge-dot" />
            AI-Powered Ad Technology
          </motion.div>

          <motion.h1 className="hero-title" variants={fadeUp}>
            Precision Ads That Drive<br />
            <span className="gradient-text">Real Business Growth</span>
          </motion.h1>

          <motion.p className="hero-subtitle" variants={fadeUp}>
            Run high-performance campaigns across Video, OTT, and Connected TV — powered by data, optimized for ROI.
          </motion.p>

          <motion.div className="hero-cta-group" variants={fadeUp}>
            <a href="#contact" className="btn btn-primary" id="heroCta1">
              <span>Start Campaign</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </a>
            <a href="#contact" className="btn btn-outline" id="heroCta2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>
              <span>Book Free Call</span>
            </a>
          </motion.div>

          <motion.div className="hero-stats" variants={fadeUp}>
            {stats.map((stat) => (
              <div className="hero-stat" key={stat.label}>
                <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                <span className="hero-stat-label">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div className="hero-visual" variants={fadeUp}>
          <div className="engine-visual">
            {/* Background Grid/Network */}
            <div className="engine-grid">
              <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none">
                <defs>
                  <pattern id="engineGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="var(--border)" strokeWidth="1.5" />
                  </pattern>
                </defs>
                <rect width="400" height="400" fill="url(#engineGrid)" />
                <circle cx="200" cy="200" r="150" stroke="var(--primary)" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.2" />
                <circle cx="200" cy="200" r="100" stroke="var(--accent-purple)" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.2" />
              </svg>
            </div>

            {/* Connection Lines (Animated) */}
            <div className="engine-connections">
              <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none">
                <motion.path
                  d="M200 50 L200 350 M50 200 L350 200"
                  stroke="var(--primary)"
                  strokeWidth="2"
                  strokeDasharray="10 10"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.3 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
                <motion.circle
                  r="4"
                  fill="var(--primary)"
                  animate={{
                    offsetDistance: ["0%", "100%"],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  style={{ offsetPath: "path('M200 50 L200 350')" }}
                />
                <motion.circle
                  r="4"
                  fill="var(--accent-purple)"
                  animate={{
                    offsetDistance: ["0%", "100%"],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 1 }}
                  style={{ offsetPath: "path('M50 200 L350 200')" }}
                />
              </svg>
            </div>

            {/* Central AI Core */}
            <div className="engine-core">
              <div className="core-glow" />
              <div className="core-inner">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <motion.div
                className="core-rings"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <div className="ring ring--1" />
                <div className="ring ring--2" />
              </motion.div>
            </div>

            {/* Floating Metric Nodes */}
            <div className="engine-nodes">
              {[
                { label: 'CPC', val: '$0.12', color: 'orange', pos: { top: '15%', left: '15%' }, delay: 0 },
                { label: 'ROAS', val: '12.4x', color: 'purple', pos: { top: '15%', right: '15%' }, delay: 0.5 },
                { label: 'CTR', val: '4.8%', color: 'blue', pos: { bottom: '15%', left: '15%' }, delay: 1 },
                { label: 'VCR', val: '92%', color: 'orange', pos: { bottom: '15%', right: '15%' }, delay: 1.5 },
              ].map((node, i) => (
                <motion.div
                  key={node.label}
                  className={`engine-node node--${node.color}`}
                  style={node.pos}
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: node.delay }}
                >
                  <div className="node-label">{node.label}</div>
                  <div className="node-val">{node.val}</div>
                </motion.div>
              ))}
            </div>

            {/* Channel Icons */}
            <div className="engine-channels">
              <div className="channel channel--top" title="CTV">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="15" rx="2" /><polyline points="17 2 12 7 7 2" /></svg>
              </div>
              <div className="channel channel--right" title="Mobile">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>
              </div>
              <div className="channel channel--bottom" title="Video">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="5 3 19 12 5 21 5 3" /></svg>
              </div>
              <div className="channel channel--left" title="Display">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="2" y1="20" x2="22" y2="20" /></svg>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <div className="hero-scroll-indicator">
        <span>Scroll to explore</span>
        <div className="scroll-arrow">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg>
        </div>
      </div>
    </section>
  )
}
