'use client'

import { motion } from 'framer-motion'
import TiltCard from './TiltCard'
import FloatingShapes from './FloatingShapes'
import SectionHeading from './SectionHeading'

const shapes = [
  { type: 'cube', size: 60, color: 'pink', position: { bottom: '15%', left: '5%' }, depth: 0.3 },
  { type: 'donut', size: 70, thickness: 12, color: 'purple', position: { top: '8%', right: '5%' }, depth: 0.4 },
  { type: 'pyramid', size: 50, color: 'orange', position: { top: '5%', left: '12%' }, depth: 0.25, rotate: { x: -15, y: 40 } },
  { type: 'donut', size: 65, thickness: 10, color: 'pink', position: { top: '25%', right: '18%' }, depth: 0.3, rotate: { x: 40, z: 15 } },
  { type: 'cube', size: 45, color: 'purple', position: { top: '12%', left: '20%' }, depth: 0.22, rotate: { x: 10, y: -30 } },
  { type: 'pyramid', size: 45, color: 'orange', position: { bottom: '40%', left: '15%' }, depth: 0.25, rotate: { x: -15, y: 15 } },
  { type: 'donut', size: 50, thickness: 8, color: 'pink', position: { bottom: '30%', right: '10%' }, depth: 0.4, rotate: { x: 45, z: 30 } },
  { type: 'pyramid', size: 35, color: 'purple', position: { top: '65%', right: '15%' }, depth: 0.18, rotate: { x: 5, y: 30 } },
  { type: 'cube', size: 30, color: 'orange', position: { bottom: '10%', right: '20%' }, depth: 0.2, rotate: { x: -20, y: 20 } },
  { type: 'donut', size: 35, thickness: 5, color: 'pink', position: { bottom: '55%', right: '25%' }, depth: 0.1, rotate: { x: 25, z: 30 } },
  { type: 'pyramid', size: 28, color: 'purple', position: { top: '35%', right: '25%' }, depth: 0.15, rotate: { x: 10, y: -25 } },
  { type: 'cube', size: 25, color: 'orange', position: { bottom: '50%', left: '10%' }, depth: 0.08, rotate: { x: -15, y: 25 } },
  { type: 'donut', size: 28, thickness: 4, color: 'pink', position: { top: '80%', left: '15%' }, depth: 0.12, rotate: { x: 20, z: 25 } },
  { type: 'pyramid', size: 22, color: 'purple', position: { bottom: '25%', right: '8%' }, depth: 0.1, rotate: { x: 5, y: 15 } },
  { type: 'cube', size: 20, color: 'orange', position: { top: '50%', left: '10%' }, depth: 0.06, rotate: { x: -10, y: 30 } },
]

const steps = [
  {
    num: '01',
    title: 'Awareness',
    desc: 'Build massive reach through OTT, Video, and CTV campaigns. Get your brand in front of millions on premium screens.',
    tags: ['OTT', 'Video', 'CTV'],
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="16" /><line x1="8" y1="12" x2="16" y2="12" /></svg>,
  },
  {
    num: '02',
    title: 'Consideration',
    desc: 'Engage your audience with rich media, interactive formats, and compelling creatives that drive consideration.',
    tags: ['Rich Media', 'Engagement'],
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>,
  },
  {
    num: '03',
    title: 'Conversion',
    desc: 'Retarget high-intent users with performance ads. Drive clicks, installs, and purchases with optimized CPA campaigns.',
    tags: ['Retargeting', 'Performance'],
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>,
  },
  {
    num: '04',
    title: 'Optimization',
    desc: 'Continuous analytics, KPI dashboards, and AI-powered optimization to maximize every campaign dollar.',
    tags: ['Analytics', 'KPI Dashboards'],
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>,
  },
]

export default function Funnel() {
  return (
    <section className="section section--white" id="funnel">      
      <FloatingShapes shapes={shapes} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div className="section-header" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <span className="section-tag">Strategy</span>
          <SectionHeading>
            The <span className="gradient-text">Ad Funnel</span>
          </SectionHeading>
          <p className="section-subtitle">A full-funnel approach designed to move your audience from first impression to loyal customer.</p>
        </motion.div>

        <div className="funnel-timeline">
          <div className="funnel-line" />
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              className="funnel-step"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="funnel-step-marker"><span>{step.num}</span></div>
              <TiltCard className="funnel-step-content card" style={{ display: 'flex', gap: 20, alignItems: 'flex-start', padding: 28 }}>
                <div className="funnel-step-icon">{step.icon}</div>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                  <div className="funnel-tags">
                    {step.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
