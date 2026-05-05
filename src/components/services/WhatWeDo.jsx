'use client'

import { motion } from 'framer-motion'
import SectionHeading from '@/components/SectionHeading'

const servicesBenefits = [
  {
    icon: 'tune',
    title: 'Precision Targeting',
    desc: 'AI-driven algorithms optimize your campaigns for maximum ROI and performance.',
    color: '#13e195',
  },
  {
    icon: 'hub',
    title: 'Omnichannel Reach',
    desc: 'Reach your audience across all digital channels with unified programmatic buying.',
    color: '#8B5CF6',
  },
  {
    icon: 'insights',
    title: 'Transparent Analytics',
    desc: 'Real-time dashboards with granular metrics and cross-channel attribution.',
    color: '#F97316',
  },
]

export default function WhatWeDo() {
  return (
    <section className="section section--light" id="what-we-do">
      <div className="container relative z-10">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-tag">What We Do</span>
          <SectionHeading>
            We Deliver <span className="gradient-text">Results</span>
          </SectionHeading>
          <p className="text-xl text-tertiary">
            Our programmatic services are designed to...
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {servicesBenefits.map((benefit, idx) => (
            <motion.div
              key={benefit.title}
              className="card p-8 text-center group relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.65, ease: 'easeOut' }}
              whileHover={{ scale: 1.03, boxShadow: `0 8px 48px ${benefit.color}33` }}
            >
              <div 
                className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity" 
                style={{ background: `radial-gradient(circle at 50% 50%, ${benefit.color}, transparent 70%)` }} 
              />
              <div 
                className="service-icon mx-auto mb-6 flex items-center justify-center w-16 h-16 rounded-full" 
                style={{ background: `linear-gradient(135deg, ${benefit.color}, ${benefit.color}88)` }}
              >
                <span className="material-symbols-outlined text-white text-4xl">
                  {benefit.icon}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[var(--text-dark)] dark:text-white">{benefit.title}</h3>
              <p className="text-[var(--text-body)] dark:text-gray-300">
                {benefit.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
