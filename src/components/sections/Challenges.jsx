'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const challenges = [
  'Stuck with outdated ad tech',
  'Complex campaigns need developers',
  'Too slow to launch new campaigns',
  'Difficulty scaling as you grow',
  'Metrics that don\'t tell the full story',
]

export default function Challenges() {
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { once: true, margin: '-80px' })

  useEffect(() => {
    if (!sectionRef.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.challenge-item',
        { opacity: 0, x: -40, borderLeftWidth: '0px' },
        {
          opacity: 1,
          x: 0,
          borderLeftWidth: '4px',
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-32 md:py-40 bg-black text-white overflow-hidden">
      <div className="container max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
          animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-tag inline-block mb-6 text-gray-400">Pain Points</span>
          <h2 className="font-heading text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[0.95] text-white mb-16">
            Challenges We<br />Often Hear
          </h2>
        </motion.div>

        <div className="space-y-8 md:space-y-10 max-w-3xl">
          {challenges.map((text, i) => (
            <motion.div
              key={i}
              className="challenge-item group relative pl-6 md:pl-8 border-l-4 border-transparent hover:border-emerald-400/60 transition-all duration-500 cursor-default"
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
