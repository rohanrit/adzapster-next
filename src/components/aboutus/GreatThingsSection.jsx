'use client'

import { motion, useInView } from 'framer-motion'
import SectionHeading from '../SectionHeading'

const testimonials = [
  {
    quote: 'Adzapster transformed our ROAS from 3x to 14x in just two quarters. Their AI targeting is next-level.',
    name: 'James Miller',
    role: 'Marketing Director',
    company: 'TechVantage',
  },
  {
    quote: "Finally, an agency that doesn't hide behind black-box metrics. Complete transparency and real results.",
    name: 'Lisa Andersson',
    role: 'Brand Manager',
    company: 'NordicGoods',
  },
  {
    quote: 'We launched 12 campaigns across CTV and YouTube in record time. Flawless execution.',
    name: 'Roberto Silva',
    role: 'Growth Lead',
    company: 'LatamReach',
  },
]

export default function GreatThingsSection() {
  const inView = useInView({ once: true, margin: '-100px' })

  return (
    <section className="relative py-32 md:py-40 bg-black text-white overflow-hidden w-full">
      <div className="container max-w-[1200px] mx-auto px-6">
        <div className="mb-16">
          <SectionHeading tag="Testimonials">
            Great Things Come to Those <span className="gradient-text"> Who Work With Us</span>
          </SectionHeading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="relative p-8 md:p-10 bg-white/[0.03] border border-white/10 rounded-2xl hover:border-emerald-400/30 hover:bg-white/[0.06] transition-all duration-500"
              whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(16, 185, 129, 0.1)' }}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="#10b981"
                className="mb-4 opacity-50 group-hover:opacity-100 transition-opacity duration-300"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-base md:text-lg leading-relaxed text-gray-300 group-hover:text-gray-200 transition-colors duration-300 mb-6">
                "{t.quote}"
              </p>
              <div>
                <div className="font-semibold text-white group-hover:text-emerald-400 transition-colors duration-300">
                  {t.name}
                </div>
                <div className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
                  {t.role}, {t.company}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
