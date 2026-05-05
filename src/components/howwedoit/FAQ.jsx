'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeading from '@/components/SectionHeading'

const faqs = [
  {
    q: 'What is the BIT framework™?',
    a: 'The BIT framework™ (Build, Integrate, Tune) is our proprietary methodology that ensures your AI Agent is fit for purpose, thoroughly tested, and continuously optimized for maximum performance.',
  },
  {
    q: 'How long does the Build phase take?',
    a: 'Typically 2-4 weeks depending on complexity. We simulate your AI Agent in a staging setup so you can see exactly how it works before going live.',
  },
  {
    q: 'Do you provide ongoing support after deployment?',
    a: 'Absolutely. The Tune phase includes long-term support, continuous fine-tuning, and optimization as your business needs evolve.',
  },
  {
    q: 'Can you integrate with our existing systems?',
    a: 'Yes! The Integrate phase is specifically designed to connect your AI Agent to your existing tech stack, CRM, and business systems.',
  },
]

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <section className="section section--light">
      <div className="container max-w-4xl mx-auto">
        <SectionHeading
          tag="FAQ"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about our methodology and process."
        />

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
