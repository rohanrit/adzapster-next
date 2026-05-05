'use client'

import { motion, useInView } from 'framer-motion'
import FloatingShapes from '@/components/FloatingShapes'
import SectionHeading from '@/components/SectionHeading'

export default function Mission() {
  const inView = useInView({ once: true, margin: '-100px' })

  return (
    <section className="section section--light" id="mission">
      <FloatingShapes shapes={[]} />
      <div className="container section--light relative z-10">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-tag">Our Core Foundation</span>
          <SectionHeading>
            The <span className="gradient-text">Mission & Vision</span>
          </SectionHeading>
          <p className="text-xl text-tertiary">
            Built on reliability, innovation, and absolute transparency.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-xl"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Mission Card */}
          <div className="md:col-span-2 card multi-gradient-card flex flex-col justify-between p-md">
            <div>
              <span className="material-symbols-outlined text-primary-container text-4xl mb-md">track_changes</span>
              <h3 className="font-headline-md text-headline-md text-on-background mb-base">Our Mission</h3>
              <p className="font-body-lg text-body-lg text-tertiary">
                To democratize advanced programmatic infrastructure by providing high-performance
                tools that transform complex data into actionable revenue streams. We believe that
                every ad should deliver value, not just impressions.
              </p>
            </div>
            <div className="mt-xl grid grid-cols-2 gap-3">
              <div className="border-l-4 border-primary-container pl-2">
                <h4 className="font-label-md text-label-2 text-on-background">Real-time Clarity</h4>
                <p className="font-label-sm text-label-sm text-tertiary">
                  Unmatched visibility into every transaction.
                </p>
              </div>
              <div className="border-l-4 border-secondary pl-2">
                <h4 className="font-label-md text-label-2 text-on-background">Algorithmic Edge</h4>
                <p className="font-label-sm text-label-sm text-tertiary">
                  Proprietary AI designed for efficiency.
                </p>
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div className="bg-on-secondary-container card p-md flex flex-col text-white">
            <span className="material-symbols-outlined text-secondary-container text-4xl mb-md">visibility</span>
            <h3 className="font-headline-md text-headline-md mb-base">Our Vision</h3>
            <p className="font-body-md text-body-md opacity-90">
              Setting the global standard for ethical, high-velocity advertising where technology
              serves the user experience and the brand's bottom line simultaneously.
            </p>
            <div className="mt-auto pt-md">
              <img
                className="rounded-lg h-32 w-full object-cover grayscale opacity-50"
                src="/images/section-img-007.png"
                alt="Global Connectivity"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
