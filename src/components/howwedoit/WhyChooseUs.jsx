'use client'

import { motion } from 'framer-motion'
import SectionHeading from '@/components/SectionHeading'

const whyItems = [
  { icon: 'verified', title: 'Premium Inventory', desc: 'Access to top-tier publishers and platforms worldwide.' },
  { icon: 'insights', title: 'Data-Driven', desc: 'AI-powered optimization for maximum ROI and performance.' },
  { icon: 'support_agent', title: '24/7 Support', desc: 'Dedicated account management and real-time optimization.' },
]

export default function WhyChooseUs() {
  return (
    <section className="section bg-[var(--bg-secondary)]">
      <div className="container">
        <SectionHeading
          tag="Why Choose Us"
          title="Why Adzapster Services?"
          subtitle="We combine technology, data, and creativity to deliver exceptional results."
        />

        <div className="grid md:grid-cols-3 gap-8 text-center">
          {whyItems.map((item, idx) => (
            <motion.div
              key={idx}
              className="p-8 rounded-2xl bg-white/50 dark:bg-[#1B1B3A]/50 backdrop-blur-sm border border-[var(--border)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <span className="material-symbols-outlined text-4xl text-primary mb-4">{item.icon}</span>
              <h3 className="text-lg font-bold mb-2 text-[var(--text-dark)] dark:text-white">{item.title}</h3>
              <p className="text-sm text-[var(--text-muted)]">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
