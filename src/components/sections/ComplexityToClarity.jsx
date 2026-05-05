'use client'

import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ComplexityToClarity() {
  const sectionRef = useRef(null)
  const containerRef = useRef(null)
  const inView = useInView(sectionRef, { once: true, margin: '-100px' })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const complexityOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const clarityOpacity = useTransform(scrollYProgress, [0.5, 1], [0, 1])
  const clarityScale = useTransform(scrollYProgress, [0.5, 1], [0.98, 1])
  const clarityBlur = useTransform(scrollYProgress, [0.5, 1], ['blur(8px)', 'blur(0px)'])

  useEffect(() => {
    if (!sectionRef.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.divider-line',
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.2,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'bottom 30%',
            scrub: true,
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
          <span className="section-tag inline-block mb-6 text-gray-400">Transformation</span>
        </motion.div>

        <div ref={containerRef} className="relative min-h-[400px] md:min-h-[500px] flex items-center justify-center">
          {/* Complexity - fades out */}
          <motion.div
            style={{ opacity: complexityOpacity }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <h2 className="font-heading text-[clamp(3rem,8vw,5rem)] font-bold leading-[0.9] text-gray-700 text-center">
              Complexity
            </h2>
          </motion.div>

          {/* Clarity - fades in */}
          <motion.div
            style={{
              opacity: clarityOpacity,
              scale: clarityScale,
              filter: clarityBlur,
            }}
            className="relative z-10 text-center"
          >
            <h2 className="font-heading text-[clamp(3rem,8vw,5rem)] font-bold leading-[0.9] text-white">
              Clarity
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mt-8 leading-relaxed"
            >
              Helping you move from complexity to clarity, we turn ideas into well-built campaigns
              your team can manage with confidence.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-10"
            >
              <a href="#contact" className="btn bg-white text-black hover:bg-gray-200 px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105">
                Our Approach
              </a>
            </motion.div>
          </motion.div>

          {/* Animated divider line */}
          <div className="divider-line absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent origin-center" />
        </div>
      </div>
    </section>
  )
}
