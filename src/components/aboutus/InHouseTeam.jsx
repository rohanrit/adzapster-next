'use client'

import { motion, useInView } from 'framer-motion'
import SectionHeading from '../SectionHeading'

const team = [
  { name: 'Ritesh Sharma', role: 'Founder & CEO', initials: 'RS' },
  { name: 'Sarah Chen', role: 'Head of Programmatic', initials: 'SC' },
  { name: 'Marcus Lee', role: 'Creative Director', initials: 'ML' },
  { name: 'Priya Patel', role: 'Data Strategist', initials: 'PP' },
]

export default function InHouseTeam() {
  const inView = useInView({ once: true, margin: '-100px' })

  return (
    <section className="relative py-32 md:py-40 bg-black text-white overflow-hidden w-full">
      <div className="container max-w-[1200px] mx-auto px-6">
        <div>
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="section-tag">Our People</span>
            <SectionHeading>
              A Dedicated
              <span className="gradient-text"> In-House Team</span>
            </SectionHeading>
            <p className="text-lg md:text-xl leading-relaxed text-gray-300 max-w-3xl mb-16">
              Meet the visionaries combining decades of experience in fintech, data science, and
              global marketing.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {team.map((member, i) => (
            <motion.div
              key={i}
              className="text-center p-8 md:p-10 bg-white/[0.03] border border-white/10 rounded-2xl hover:border-emerald-400/30 hover:bg-white/[0.06] transition-all duration-500"
              whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(16, 185, 129, 0.1)' }}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center mx-auto mb-6 text-white font-bold text-2xl md:text-3xl shadow-lg shadow-emerald-500/20">
                {member.initials}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                {member.name}
              </h3>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
