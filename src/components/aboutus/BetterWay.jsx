'use client'

import { motion, useInView } from 'framer-motion'
import SectionHeading from '@/components/SectionHeading'

const items = [
  {
    title: 'No black-box reporting',
    desc: 'We work openly from the start, sharing real-time data and progress as it develops.',
  },
  {
    title: 'Challenge what isn\'t working',
    desc: "We don't just run ads. We question assumptions and push boundaries.",
  },
  {
    title: 'Clarity at every stage',
    desc: 'Clear dashboards and regular check-ins keep campaigns moving without guesswork.',
  },
  {
    title: 'Built to evolve',
    desc: 'Campaigns that are easy to update, easy to scale, and strong enough to last.',
  },
]

export default function BetterWay() {
  const inView = useInView({ once: true, margin: '-100px' })

  return (
    <section className="relative py-32 md:py-40 bg-black text-white overflow-hidden w-full">
      <div className="container max-w-[1200px] mx-auto px-6">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-tag">Our Approach</span>
          <SectionHeading>
            A Better Way<br />of Working
          </SectionHeading>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              className="relative p-8 md:p-10 bg-white/[0.03] border border-white/10 rounded-2xl hover:border-emerald-400/30 hover:bg-white/[0.06] transition-all duration-500"
              whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(16, 185, 129, 0.1)' }}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="absolute top-4 left-4 w-8 h-[2px] bg-gray-700 group-hover:w-12 group-hover:bg-emerald-400 transition-all duration-500" />
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-base md:text-lg text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
