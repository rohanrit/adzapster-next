'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import FloatingShapes from '@/components/FloatingShapes'
import SectionHeading from '@/components/SectionHeading'

export default function Mission() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })
  const missionY = useTransform(scrollYProgress, [0, 1], [0, -80])
  const missionOpacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [1, 1, 1, 1])

  return (
    <motion.section
      ref={sectionRef}
      id="mission"
      className="section section--light"
      style={{
        y: missionY,
        opacity: missionOpacity,
        position: 'sticky',
        top: 0,
        zIndex: 20,
        marginTop: '-30vh',
        height: '100vh'
      }}
    >
      <FloatingShapes shapes={[]} />
      <div className="container relative z-10">
        <div className="section-header">
          <span className="section-tag">Our Core Foundation</span>
          <SectionHeading>Mission & Vision</SectionHeading>
          <p className="text-xl text-tertiary">Built on reliability, innovation, and absolute transparency.</p>
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-xl"
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
                To democratize advanced programmatic infrastructure by providing high-performance tools that transform complex data into actionable revenue streams. We believe that every ad should deliver value, not just impressions.
              </p>
            </div>
            <div className="mt-xl grid grid-cols-2 gap-md">
              <div className="border-l-4 border-primary-container pl-md">
                <h4 className="font-label-md text-label-md text-on-background">Real-time Clarity</h4>
                <p className="font-label-sm text-label-sm text-tertiary">Unmatched visibility into every transaction.</p>
              </div>
              <div className="border-l-4 border-secondary pl-md">
                <h4 className="font-label-md text-label-md text-on-background">Algorithmic Edge</h4>
                <p className="font-label-sm text-label-sm text-tertiary">Proprietary AI designed for efficiency.</p>
              </div>
            </div>
          </div>
          {/* Vision Card */}
          <div className="bg-on-secondary-container card p-md flex flex-col text-white">
            <span className="material-symbols-outlined text-secondary-container text-4xl mb-md">visibility</span>
            <h3 className="font-headline-md text-headline-md mb-base">Our Vision</h3>
            <p className="font-body-md text-body-md opacity-90 mb-lg">
              Setting the global standard for ethical, high-velocity advertising where technology serves the user experience and the brand's bottom line simultaneously.
            </p>
            <div className="mt-auto">
              <img
                className="rounded-lg h-32 w-full object-cover grayscale opacity-50"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIeKoJ1X94FsOY3lBQnDUbrJoeTCVHhvTvc_hUMqaxIktrxr58sZ32RjLQoR_nRaHcKpYcw547qWgZHcRHagJDC5ptkbteyIHCWGzKINEUMO4cGtUHiH2RkkGIXfBbEIkhy9tFAQ6CTZiKY6MSXo89ROiiWdwmgmNqED7PCj7524VFyMWGQDGIisSFLT79rXZAF7KWM96njnn0QOSKydFh1M672QnFomxMlyhEXPnyUK7Q9uSQsWukDT9goNKxcJg_R8OxeEU6triS"
                alt="Global Connectivity"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
