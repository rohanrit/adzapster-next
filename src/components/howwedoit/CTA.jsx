'use client'

import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="section mb-0">
      <div className="container">
        <motion.div
          className="bg-primary-container rounded-2xl p-xl flex flex-col items-center text-center text-white relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
          <h2 className="font-display-lg text-display-lg mb-md relative z-10">Ready to transform your business?</h2>
          <p className="font-body-lg text-body-lg opacity-90 max-w-2xl mb-lg relative z-10">
            Join forward-thinking companies leveraging our BIT Framework™ to build, integrate, and tune AI Agents that deliver real results.
          </p>
          <div className="flex flex-wrap gap-md relative z-10">
            <a href="/contact-us" className="bg-white text-primary-container font-bold px-8 py-4 rounded-lg hover:bg-surface-container transition-all active:scale-95 shadow-lg">
              Talk to an Expert
            </a>
            <a href="/services" className="bg-transparent border-2 border-white/40 hover:border-white text-white font-bold px-8 py-4 rounded-lg transition-all active:scale-95">
              View Services
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
