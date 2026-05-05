'use client'

import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

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
  const parallaxRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: parallaxRef, offset: ['start start', 'end start'] })
  const sectionY = useTransform(scrollYProgress, [0, 1], [0, -100])
  const sectionOpacity = useTransform(scrollYProgress, [0, 0.5, 1, 1], [1, 1, 1, 1])

  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { once: true, margin: '-100px' })

  useEffect(() => {
    if (!sectionRef.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.better-way-card',
        { opacity: 0, scale: 0.98, y: 40 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
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
    <motion.div
      ref={parallaxRef}
      style={{
        y: sectionY,
        opacity: sectionOpacity,
        position: 'sticky',
        top: 0,
        zIndex: 60,
        marginTop: '-20vh',
        minHeight: '100vh',
        backgroundColor: 'black'
      }}
      className="w-full flex flex-col justify-center"
    >
      <section ref={sectionRef} className="relative py-32 md:py-40 bg-black text-white overflow-hidden w-full">
      <div className="container max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
          animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-tag inline-block mb-6 text-gray-400">Our Approach</span>
          <h2 className="font-heading text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[0.95] text-white mb-16">
            A Better Way<br />of Working
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              className="better-way-card group relative p-8 md:p-10 bg-white/[0.03] border border-white/10 rounded-2xl hover:border-emerald-400/30 hover:bg-white/[0.06] transition-all duration-500"
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
    </motion.div>
  )
}
