'use client'

import { motion, useInView } from 'framer-motion'
import SectionHeading from '@/components/SectionHeading'

const challenges = [
  '1. Stuck with outdated ad tech',
  '2. Complex campaigns need developers',
  '3. Too slow to launch new campaigns',
  '4. Difficulty scaling as you grow',
  "5. Metrics that don't tell the full story",
]

export default function Challenges() {
  const inView = useInView({ once: true, margin: '-100px' })

  return (
    <section className="relative py-32 md:py-40 bg-black text-white overflow-hidden w-full">
      <div className="container max-w-[1200px] mx-auto px-6">
        <div className="mb-16">
          <SectionHeading tag="Pain Points">
            Challenges We<br />Often Hear
          </SectionHeading>
        </div>

        <div className="space-y-8 md:space-y-10 max-w-3xl">
          {challenges.map((text, i) => (
            <motion.div
              key={i}
              className="relative pl-6 md:pl-8 border-l-4 border-transparent hover:border-emerald-400/60 transition-all duration-500 cursor-default"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-lg md:text-xl text-gray-300 group-hover:text-white transition-colors duration-300">
                {text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
