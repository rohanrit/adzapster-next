'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeading from '@/components/SectionHeading'

const faqs = [
  {
    q: 'What makes Adzapster different from other ad tech platforms?',
    a: 'Adzapster combines proprietary AI algorithms with premium inventory access and transparent reporting. We focus on real business outcomes, not just impressions.'
  },
  {
    q: 'How quickly can I launch a campaign?',
    a: 'Most campaigns can be launched within 24-48 hours. Our streamlined onboarding process and pre-integrated DSP relationships make deployment fast and efficient.'
  },
  {
    q: 'Do you offer creative services for ad design?',
    a: 'Yes! We provide end-to-end creative services including display banners, video production, and rich media development to ensure your campaigns look as good as they perform.'
  },
  {
    q: 'What kind of reporting and analytics do you provide?',
    a: 'Real-time dashboards with granular metrics, cross-channel attribution, custom reports, and API access for enterprise clients. Transparency is our core value.'
  },
  {
    q: 'Can I integrate Adzapster with my existing martech stack?',
    a: 'Absolutely. We offer robust API integrations, support for major tag managers, and seamless connectivity with CRMs, DMPs, and analytics platforms.'
  },
]

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <section className="section section--light">
      <div className="container max-w-4xl mx-auto">
        <motion.div className="section-header" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <span className="section-tag">FAQ</span>
          <SectionHeading>
            Frequently Asked <span className="gradient-text">Questions</span>
          </SectionHeading>
          <p className="text-xl text-tertiary">Everything you need to know about our services and platform.</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              className="card overflow-hidden bg-white/80 dark:bg-[#1B1B3A] border border-[var(--border)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left font-semibold text-lg text-[var(--text-dark)] dark:text-white hover:text-primary transition-colors"
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              >
                {faq.q}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className={`transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              <AnimatePresence>
                {openFaq === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-[var(--text-body)] dark:text-gray-300">
                      {faq.a}
                    </div>
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
