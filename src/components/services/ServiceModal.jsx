'use client'

import { motion, AnimatePresence } from 'framer-motion'

export default function ServiceModal({ service, onClose }) {
  if (!service) return null

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Modal Content */}
        <motion.div
          className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-[#1B1B3A] rounded-3xl shadow-2xl border border-[var(--border)]"
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors z-10"
            onClick={onClose}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
          </button>

          {/* Modal Header */}
          <div className="p-8 pb-0">
            <div className="flex items-center gap-4 mb-6">
              <div className="service-icon flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-tr from-primary via-primary-dark to-accent-purple shadow-lg">
                <span className="material-symbols-outlined text-white text-4xl">
                  {service.icon}
                </span>
              </div>
              <div>
                {/* <span className="text-sm font-semibold text-primary">{service.tag}</span> */}
                <h2 className="text-3xl font-bold text-tertiary">{service.label}</h2>
              </div>
            </div>
            <p className="text-[var(--text-body)] dark:text-gray-300 mb-6">
              {service.details}
            </p>
          </div>

          {/* Infographic */}
          <div className="mx-8 p-6 rounded-2xl bg-gradient-to-r from-primary/10 to-accent-purple/10 border border-primary/20">
            <div className="flex items-center justify-around">
              <div className="text-center">
                <div className="text-4xl font-extrabold gradient-text mb-2">{service.infographic.metric}</div>
                <div className="text-sm text-[var(--text-muted)]">{service.infographic.label}</div>
              </div>
              <div className="w-px h-16 bg-[var(--border)]" />
              <div className="text-center">
                <div className="text-4xl font-extrabold text-accent-purple mb-2">24/7</div>
                <div className="text-sm text-[var(--text-muted)]">Support</div>
              </div>
              <div className="w-px h-16 bg-[var(--border)]" />
              <div className="text-center">
                <div className="text-4xl font-extrabold text-orange-500 mb-2">100%</div>
                <div className="text-sm text-[var(--text-muted)]">Transparent</div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="p-8">
            <h3 className="text-lg font-bold mb-4 text-tertiary">Key Features</h3>
            <ul className="space-y-3">
              {service.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-[var(--text-body)] dark:text-gray-300">
                  <div className="w-6 h-6 flex items-center justify-center rounded-full bg-primary/20 text-primary flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
                  </div>
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex gap-4">
              <a href="/contact-us" className="btn btn-primary flex-1 text-center">
                Get Started
              </a>
              <button onClick={onClose} className="btn btn-outline flex-1 text-center">
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
