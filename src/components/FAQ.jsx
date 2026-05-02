'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FloatingShapes from './FloatingShapes'
import TiltCard from './TiltCard'
import SectionHeading from './SectionHeading'

const shapes = [
  { type: 'cube', size: 70, color: 'orange', position: { top: '10%', right: '5%' }, depth: 0.3 },
  { type: 'donut', size: 90, thickness: 14, color: 'purple', position: { bottom: '15%', left: '4%' }, depth: 0.4 },
  { type: 'pyramid', size: 50, color: 'blue', position: { top: '5%', left: '12%' }, depth: 0.25, rotate: { x: -10, y: 30 } },
  { type: 'donut', size: 55, thickness: 9, color: 'orange', position: { top: '20%', right: '15%' }, depth: 0.3, rotate: { x: 40, z: 20 } },
  { type: 'cube', size: 45, color: 'purple', position: { bottom: '25%', right: '10%' }, depth: 0.22, rotate: { x: 15, y: -25 } },
  { type: 'pyramid', size: 40, color: 'orange', position: { top: '50%', left: '8%' }, depth: 0.18, rotate: { x: 5, y: 35 } },
  { type: 'donut', size: 45, thickness: 7, color: 'blue', position: { bottom: '35%', left: '15%' }, depth: 0.2, rotate: { x: 30, z: 25 } },
  { type: 'cube', size: 35, color: 'blue', position: { top: '65%', right: '12%' }, depth: 0.15, rotate: { x: -20, y: 20 } },
  { type: 'pyramid', size: 55, color: 'purple', position: { bottom: '5%', right: '20%' }, depth: 0.12, rotate: { x: 10, y: -15 } },
  { type: 'donut', size: 35, thickness: 5, color: 'purple', position: { top: '75%', left: '18%' }, depth: 0.1, rotate: { x: 25, z: 30 } },
  { type: 'cube', size: 25, color: 'orange', position: { bottom: '55%', left: '10%' }, depth: 0.08, rotate: { x: -15, y: 25 } },
  { type: 'pyramid', size: 28, color: 'blue', position: { top: '35%', right: '10%' }, depth: 0.15, rotate: { x: 10, y: -20 } },
  { type: 'donut', size: 28, thickness: 4, color: 'orange', position: { bottom: '45%', right: '15%' }, depth: 0.08, rotate: { x: 20, z: 25 } },
  { type: 'cube', size: 22, color: 'purple', position: { top: '80%', left: '8%' }, depth: 0.1, rotate: { x: -10, y: 30 } },
  { type: 'pyramid', size: 20, color: 'orange', position: { bottom: '60%', right: '8%' }, depth: 0.06, rotate: { x: 5, y: 15 } },
]

const faqs = [
  {
    q: 'What is programmatic advertising?',
    a: 'Programmatic advertising uses automated technology and algorithms to buy and sell digital ad space in real-time. Instead of manual negotiations, our AI engine bids on impressions across thousands of publishers in milliseconds — ensuring your ads reach the right audience at the right price.',
  },
  {
    q: 'How do CTV ads work?',
    a: 'Connected TV (CTV) ads are served on internet-connected television devices like Smart TVs, Roku, Apple TV, and Fire Stick. These are typically full-screen, non-skippable ads that deliver a premium, TV-like experience with the targeting precision of digital — including household-level targeting and interactive QR code overlays.',
  },
  {
    q: 'What budget is required to get started?',
    a: 'We recommend a minimum media spend of $5,000/month for meaningful results, though we\'ve designed our Starter plan for businesses beginning at $1,499/month in management fees. During our free strategy call, we\'ll recommend the optimal budget allocation based on your goals, industry, and target market.',
  },
  {
    q: 'How do you measure campaign performance?',
    a: 'We track every metric that matters: impressions, click-through rates (CTR), video completion rates (VCR), cost per acquisition (CPA), return on ad spend (ROAS), and custom KPIs specific to your business. Your dedicated dashboard provides real-time visibility into all campaign performance data.',
  },
  {
    q: 'Do you provide creative services?',
    a: 'Yes! We have an in-house creative team that produces everything from static banners and rich media ads to video creatives and interactive CTV formats. Creative production is included in our Growth and Enterprise plans, and available as an add-on for Starter plans.',
  },
]

export default function FAQ() {
  const [active, setActive] = useState(0)

  const toggle = (i) => setActive(active === i ? null : i)

  return (
    <section className="section section--white" id="faq">
      <FloatingShapes shapes={shapes} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div className="section-header" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <span className="section-tag">Questions</span>
          <SectionHeading>
            Frequently Asked <span className="gradient-text">Questions</span>
          </SectionHeading>
          <p className="section-subtitle">Got questions? We&apos;ve got answers. If you don&apos;t find what you need, reach out — we&apos;re happy to help.</p>
        </motion.div>

        <div className="faq-list">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              className={`faq-item card ${active === i ? 'active' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <button
                className="faq-question"
                onClick={() => toggle(i)}
                aria-expanded={active === i}
              >
                <span>{faq.q}</span>
                <svg
                  className="faq-chevron"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              <AnimatePresence initial={false}>
                {active === i && (
                  <motion.div
                    className="faq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <p>{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
