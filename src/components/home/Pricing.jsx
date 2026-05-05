'use client'

import { motion } from 'framer-motion'
import FloatingShapes from '@/components/FloatingShapes'
import TiltCard from '@/components/TiltCard'
import SectionHeading from '@/components/SectionHeading'

const shapes = [
  { type: 'donut', size: 100, thickness: 16, color: 'purple', position: { top: '8%', left: '4%' }, depth: 0.4 },
  { type: 'cube', size: 60, color: 'orange', position: { bottom: '12%', right: '5%' }, depth: 0.35 },
  { type: 'pyramid', size: 50, color: 'pink', position: { top: '12%', right: '15%' }, depth: 0.28, rotate: { x: -15, y: 25 } },
  { type: 'donut', size: 55, thickness: 9, color: 'purple', position: { top: '25%', left: '10%' }, depth: 0.22, rotate: { x: 35, z: 20 } },
  { type: 'cube', size: 45, color: 'orange', position: { bottom: '20%', left: '12%' }, depth: 0.3, rotate: { x: 10, y: -30 } },
  { type: 'pyramid', size: 40, color: 'pink', position: { top: '55%', right: '8%' }, depth: 0.18, rotate: { x: 5, y: 30 } },
  { type: 'donut', size: 45, thickness: 7, color: 'purple', position: { bottom: '35%', right: '12%' }, depth: 0.2, rotate: { x: 40, z: 25 } },
  { type: 'cube', size: 35, color: 'orange', position: { top: '70%', left: '15%' }, depth: 0.15, rotate: { x: -20, y: 20 } },
  { type: 'pyramid', size: 55, color: 'pink', position: { bottom: '5%', left: '18%' }, depth: 0.12, rotate: { x: 10, y: -20 } },
  { type: 'donut', size: 35, thickness: 5, color: 'purple', position: { top: '80%', right: '18%' }, depth: 0.1, rotate: { x: 25, z: 30 } },
  { type: 'cube', size: 25, color: 'orange', position: { bottom: '50%', right: '20%' }, depth: 0.08, rotate: { x: -15, y: 25 } },
  { type: 'pyramid', size: 28, color: 'pink', position: { top: '40%', right: '10%' }, depth: 0.15, rotate: { x: 10, y: -30 } },
  { type: 'donut', size: 28, thickness: 4, color: 'purple', position: { bottom: '30%', left: '10%' }, depth: 0.08, rotate: { x: 20, z: 25 } },
  { type: 'cube', size: 22, color: 'orange', position: { top: '85%', left: '12%' }, depth: 0.1, rotate: { x: -10, y: 30 } },
  { type: 'pyramid', size: 20, color: 'pink', position: { bottom: '60%', right: '10%' }, depth: 0.06, rotate: { x: 5, y: 15 } },
]

const check = <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>

const plans = [
  {
    tier: 'Starter',
    desc: 'For small businesses & startups',
    currency: '$',
    amount: '1,499',
    period: '/month',
    featured: false,
    features: ['Campaign setup & launch', '1 platform (YouTube or Display)', 'Monthly performance reports', 'Basic optimization', 'Email support'],
    cta: 'Get Started',
  },
  {
    tier: 'Growth',
    desc: 'For scaling brands',
    currency: '$',
    amount: '3,999',
    period: '/month',
    featured: true,
    features: ['Multi-platform campaigns', 'Video + Display + CTV', 'Weekly optimization & reports', 'AI targeting engine access', 'Dedicated account manager', 'Creative consultation'],
    cta: 'Get Started',
  },
  {
    tier: 'Enterprise',
    desc: 'Custom solutions for large brands',
    currency: '',
    amount: 'Custom',
    period: '',
    featured: false,
    features: ['All platforms & formats', 'Full-funnel strategy', 'Real-time analytics dashboard', 'Creative production team', 'Dedicated pod (strategist + analyst)', 'SLA-backed performance'],
    cta: 'Get Custom Plan',
  },
]

export default function Pricing() {
  return (
    <section className="section section--light" id="pricing">
      <FloatingShapes shapes={shapes} patternType="dotted" />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div className="section-header" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <span className="section-tag">Plans</span>
          <SectionHeading>
            Subscription <span className="gradient-text">Plans</span>
          </SectionHeading>
          <p className="section-subtitle">Flexible plans designed to scale with your business. Start small, grow big.</p>
        </motion.div>

        <div className="pricing-grid">
          {plans.map((plan, i) => (
            <TiltCard
              key={plan.tier}
              className={`pricing-card card multi-gradient-card ${plan.featured ? 'pricing-card--featured' : ''}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              {plan.featured && <div className="pricing-popular">Most Popular</div>}
              <div className="pricing-tier">{plan.tier}</div>
              <div className="pricing-desc">{plan.desc}</div>
              <div className="pricing-price">
                {plan.currency && <span className="price-currency">{plan.currency}</span>}
                <span className="price-amount">{plan.amount}</span>
                {plan.period && <span className="price-period">{plan.period}</span>}
              </div>
              <ul className="pricing-features">
                {plan.features.map((f) => (
                  <li key={f}>{check} {f}</li>
                ))}
              </ul>
              <a href="#contact" className={`btn ${plan.featured ? 'btn-primary' : 'btn-outline'} btn-block`}>
                {plan.cta}
              </a>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  )
}
