'use client'

import { motion } from 'framer-motion'
import SectionHeading from '@/components/SectionHeading'

const benefits = [
  {
    icon: 'timer',
    title: 'Save Time',
    desc: 'AI Agents automate tasks you didn\'t know you could. Work faster, and smarter.',
    color: '#13e195',
  },
  {
    icon: 'rocket_launch',
    title: 'Reach More',
    desc: 'AI Agents reach more customers for you, distributing your presence on channels that matter.',
    color: '#8B5CF6',
  },
  {
    icon: 'auto_awesome',
    title: 'Create More',
    desc: 'AI Agents dramatically boost your output - get maximum results from minimal time.',
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
            We Build <span className="gradient-text">AI Agents</span>
          </SectionHeading>
          <p className="text-xl text-tertiary">
            The ones that let you...
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={benefit.title}
              className="card p-8 text-center group relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.65, ease: 'easeOut' }}
              whileHover={{ scale: 1.03, boxShadow: `0 8px 48px ${benefit.color}33` }}
            >
              <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity" style={{ background: `radial-gradient(circle at 50% 50%, ${benefit.color}, transparent 70%)` }} />
              <div className="service-icon mx-auto mb-6 flex items-center justify-center w-16 h-16 rounded-full" style={{ background: `linear-gradient(135deg, ${benefit.color}, ${benefit.color}88)` }}>
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
