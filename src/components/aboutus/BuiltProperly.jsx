'use client'

import { motion, useInView } from 'framer-motion'
import SectionHeading from '../SectionHeading'

export default function BuiltProperly() {
  const inView = useInView({ once: true, margin: '-100px' })

  return (
    <section className="relative py-32 md:py-40 bg-black text-white overflow-hidden w-full">
      {/* Background noise overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundSize: '200px',
      }} />
      <div className="container max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <motion.div
              className="contact-info"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="section-tag">Our Mission</span>
              <SectionHeading>
                Built to do the <span className="gradient-text">job properly.</span>
              </SectionHeading>
            </motion.div>
            <p className="text-lg md:text-xl leading-relaxed text-gray-300">
              "I started Adzapster because I was tired of seeing agencies do just enough. Much of our industry relies on confidence and surface-level work."
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-gray-300">
              We found clients benefit from a collaborative process that delivers clear thinking and produces campaigns that remain valuable well beyond launch.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-gray-300">
              It's our belief that programmatic advertising should help teams move with confidence, not more friction. Our platform enables clients to edit and publish campaign changes in minutes.
            </p>
            <div className="flex items-center gap-4 mt-10 pt-6 border-t border-white/10">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white font-bold text-lg">
                RS
              </div>
              <div>
                <div className="font-semibold text-white">Ritesh Sharma</div>
                <div className="text-sm text-gray-400">Founder & Director</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
