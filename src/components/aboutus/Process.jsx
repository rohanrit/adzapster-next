'use client'

import { motion } from 'framer-motion'
import SectionHeading from '@/components/SectionHeading'

const phases = [
  {
    number: '01',
    title: 'Build',
    subtitle: 'We simulate your AI Agent in a staging setup - so you see how it works before going live.',
    steps: ['Trigger', 'Prompts', 'Send Email'],
    color: '#13e195',
    icon: 'construction',
  },
  {
    number: '02',
    title: 'Integrate',
    subtitle: 'We connect the AI Agent to your systems, run tests, and support you through rollout.',
    steps: ['Connect', 'Test', 'Deploy'],
    color: '#8B5CF6',
    icon: 'cable',
  },
  {
    number: '03',
    title: 'Tune',
    subtitle: 'We fine-tune your AI Agent and support you long-term as needs evolve.',
    steps: ['Monitor', 'Optimize', 'Scale'],
    color: '#F97316',
    icon: 'tune',
  },
]

export default function Process() {
  return (
    <section className="section" id="process">
      <div className="container relative z-10">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-tag">Our Process</span>
          <SectionHeading>
            The <span className="gradient-text">BIT Framework™</span>
          </SectionHeading>
          <p className="text-xl text-tertiary">
            A proven 3-phase methodology that ensures your AI Agent delivers real results.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mt-12">
          {phases.map((phase, idx) => (
            <motion.div
              key={phase.number}
              className="card p-8 relative overflow-hidden group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.7, ease: 'easeOut' }}
              whileHover={{ y: -8, boxShadow: `0 20px 60px ${phase.color}22` }}
            >
              {/* Phase Number */}
              <div className="absolute top-6 right-6 text-6xl font-extrabold opacity-10" style={{ color: phase.color }}>
                {phase.number}
              </div>

              {/* Icon */}
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6" style={{ background: `${phase.color}20` }}>
                <span className="material-symbols-outlined text-3xl" style={{ color: phase.color }}>
                  {phase.icon}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-2 text-[var(--text-dark)] dark:text-white">
                Phase {phase.number}: {phase.title}
              </h3>

              {/* Subtitle */}
              <p className="text-[var(--text-body)] dark:text-gray-300 mb-6">
                {phase.subtitle}
              </p>

              {/* Steps Infographic */}
              <div className="space-y-3">
                {phase.steps.map((step, stepIdx) => (
                  <motion.div
                    key={step}
                    className="flex items-center gap-3 p-3 rounded-lg"
                    style={{ background: `${phase.color}08` }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (idx * 0.15) + (stepIdx * 0.1) + 0.3 }}
                  >
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold" style={{ background: phase.color }}>
                      {stepIdx + 1}
                    </div>
                    <span className="font-semibold text-[var(--text-dark)] dark:text-white">{step}</span>
                  </motion.div>
                ))}
              </div>

              {/* Decorative Element */}
              <div className="absolute bottom-0 left-0 right-0 h-1 translate-y-full group-hover:translate-y-0 transition-transform duration-300" style={{ background: `linear-gradient(90deg, transparent, ${phase.color}, transparent)` }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
