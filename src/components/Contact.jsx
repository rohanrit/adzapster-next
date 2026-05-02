'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import FloatingShapes from './FloatingShapes'
import TiltCard from './TiltCard'
import SectionHeading from './SectionHeading'

const shapes = [
  { type: 'cube', size: 75, color: 'purple', position: { top: '12%', right: '8%' }, depth: 0.3 },
  { type: 'pyramid', size: 65, color: 'pink', position: { bottom: '18%', left: '5%' }, depth: 0.45 },
  { type: 'donut', size: 60, thickness: 10, color: 'orange', position: { top: '8%', left: '15%' }, depth: 0.25, rotate: { x: 35, z: 20 } },
  { type: 'pyramid', size: 45, color: 'purple', position: { top: '30%', right: '12%' }, depth: 0.2, rotate: { x: -15, y: 30 } },
  { type: 'cube', size: 40, color: 'pink', position: { bottom: '30%', right: '15%' }, depth: 0.18, rotate: { x: 10, y: -25 } },
  { type: 'donut', size: 50, thickness: 8, color: 'orange', position: { top: '55%', left: '8%' }, depth: 0.15, rotate: { x: 40, z: 15 } },
  { type: 'pyramid', size: 35, color: 'purple', position: { bottom: '10%', right: '25%' }, depth: 0.22, rotate: { x: 5, y: 20 } },
  { type: 'cube', size: 30, color: 'pink', position: { top: '70%', right: '18%' }, depth: 0.12, rotate: { x: -20, y: 15 } },
  { type: 'donut', size: 40, thickness: 6, color: 'orange', position: { bottom: '40%', left: '12%' }, depth: 0.2, rotate: { x: 30, z: 15 } },
  { type: 'pyramid', size: 28, color: 'purple', position: { top: '85%', left: '10%' }, depth: 0.1, rotate: { x: 10, y: -30 } },
  { type: 'cube', size: 22, color: 'pink', position: { bottom: '55%', right: '20%' }, depth: 0.08, rotate: { x: -15, y: 25 } },
  { type: 'donut', size: 30, thickness: 4, color: 'orange', position: { top: '40%', right: '10%' }, depth: 0.12, rotate: { x: 20, z: 25 } },
  { type: 'pyramid', size: 25, color: 'purple', position: { bottom: '40%', left: '15%' }, depth: 0.15, rotate: { x: 5, y: 15 } },
  { type: 'cube', size: 20, color: 'pink', position: { top: '25%', left: '20%' }, depth: 0.1, rotate: { x: -10, y: 20 } },
  { type: 'donut', size: 25, thickness: 3, color: 'orange', position: { top: '60%', left: '15%' }, depth: 0.08, rotate: { x: 15, z: 20 } },
]

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | sent

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => {
      setStatus('sent')
      setTimeout(() => {
        setStatus('idle')
        e.target.reset()
      }, 3000)
    }, 1500)
  }

  return (
    <section className="section section--gradient" id="contact">
      <FloatingShapes shapes={shapes} patternType="dotted" />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="contact-wrapper">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="section-tag">Let&apos;s Talk</span>
            <SectionHeading>
              Launch Your Next<br />
              <span className="gradient-text">Campaign</span>
            </SectionHeading>
            <p>Ready to drive measurable results? Fill out the form and our strategy team will get back to you within 24 hours with a custom plan.</p>
            <div className="contact-details">
              <div className="contact-detail">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                <span>hello@advantage-ads.com</span>
              </div>
              <div className="contact-detail">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>
                <span>+1 (555) 987-6543</span>
              </div>
              <div className="contact-detail">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                <span>New York · London · Singapore</span>
              </div>
            </div>
          </motion.div>

          <TiltCard
            className="contact-form card"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="form-group">
              <label htmlFor="contactName">Full Name</label>
              <input type="text" id="contactName" name="name" placeholder="John Doe" required />
            </div>
            <div className="form-group">
              <label htmlFor="contactEmail">Email Address</label>
              <input type="email" id="contactEmail" name="email" placeholder="john@company.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="contactBudget">Monthly Budget</label>
              <select id="contactBudget" name="budget" required defaultValue="">
                <option value="" disabled>Select your budget range</option>
                <option value="5k-10k">$5,000 – $10,000</option>
                <option value="10k-25k">$10,000 – $25,000</option>
                <option value="25k-50k">$25,000 – $50,000</option>
                <option value="50k-100k">$50,000 – $100,000</option>
                <option value="100k+">$100,000+</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="contactGoal">Campaign Goal</label>
              <select id="contactGoal" name="goal" required defaultValue="">
                <option value="" disabled>What&apos;s your primary goal?</option>
                <option value="brand-awareness">Brand Awareness</option>
                <option value="lead-generation">Lead Generation</option>
                <option value="app-installs">App Installs</option>
                <option value="sales">Sales &amp; Conversions</option>
                <option value="video-views">Video Views</option>
                <option value="other">Other</option>
              </select>
            </div>
            <button
              type="submit"
              className="btn btn-primary btn-block"
              disabled={status !== 'idle'}
              style={status === 'sent' ? { background: 'linear-gradient(135deg, #22c55e, #16a34a)', boxShadow: '0 4px 20px rgba(34,197,94,0.3)' } : {}}
            >
              {status === 'idle' && (
                <>
                  <span>Launch My Campaign</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
                </>
              )}
              {status === 'sending' && (
                <>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ animation: 'spin 1s linear infinite' }}><path d="M21 12a9 9 0 11-6.219-8.56" /></svg>
                  <span>Sending...</span>
                </>
              )}
              {status === 'sent' && (
                <>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                  <span>Campaign Request Sent!</span>
                </>
              )}
            </button>
          </TiltCard>
        </div>
      </div>
    </section>
  )
}
