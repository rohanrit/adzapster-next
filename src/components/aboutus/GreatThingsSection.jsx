'use client'

import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const testimonials = [
  {
    quote: "Adzapster transformed our ROAS from 3x to 14x in just two quarters. Their AI targeting is next-level.",
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
    quote: "We launched 12 campaigns across CTV and YouTube in record time. Flawless execution.",
    name: 'Roberto Silva',
    role: 'Growth Lead',
    company: 'LatamReach',
  },
]

export default function GreatThingsSection() {
  const parallaxRef = useRef(null)
  const { scrollYProgress: parallaxScrollYProgress } = useScroll({ target: parallaxRef, offset: ['start start', 'end start'] })
  const sectionY = useTransform(parallaxScrollYProgress, [0, 1], [0, -100])
  const sectionOpacity = useTransform(parallaxScrollYProgress, [0, 0.5, 1, 1], [1, 1, 1, 1])

  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { once: true, margin: '-100px' })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3])
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.98, 1, 1, 0.98])

  useEffect(() => {
    if (!sectionRef.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.testimonial-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
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
        zIndex: 90,
        marginTop: '-20vh',
        minHeight: '100vh',
        backgroundColor: 'black'
      }}
      className="w-full flex flex-col justify-center"
    >
      <section ref={sectionRef} className="relative py-32 md:py-40 bg-black text-white overflow-hidden w-full">
      <div className="container max-w-[1200px] mx-auto px-6">
        <motion.div
          style={{ opacity, scale }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="section-tag inline-block mb-6 text-gray-400"
          >
            Testimonials
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
            animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[0.95] text-white mb-6"
          >
            Great Things Come to<br />Those Who Work With Us
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="testimonial-card group relative p-8 md:p-10 bg-white/[0.03] border border-white/10 rounded-2xl hover:border-emerald-400/30 hover:bg-white/[0.06] transition-all duration-500"
              whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(16, 185, 129, 0.1)' }}
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="#10b981"
                className="mb-4 opacity-50 group-hover:opacity-100 transition-opacity duration-300"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
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
    </motion.div>
  )
}
