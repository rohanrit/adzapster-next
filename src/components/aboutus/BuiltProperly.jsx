'use client'

import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef, useEffect, useMemo } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function BuiltProperly() {
  const parallaxRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: parallaxRef, offset: ['start start', 'end start'] })
  const sectionY = useTransform(scrollYProgress, [0, 1], [0, -100])
  const sectionOpacity = useTransform(scrollYProgress, [0, 0.5, 1, 1], [1, 1, 1, 1])

  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const lines = [
    'Built to do the',
    'job properly.',
  ]
  const inView = useInView(sectionRef, { once: true, margin: '-100px' })

  useEffect(() => {
    if (!sectionRef.current) return
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      })
      tl.fromTo(
        titleRef.current?.querySelectorAll('.line'),
        { opacity: 0, y: 60, filter: 'blur(8px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1, stagger: 0.15, ease: 'power3.out' }
      )
      tl.fromTo(
        '.built-properly-content',
        { opacity: 0, y: 40, filter: 'blur(4px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8, ease: 'power3.out' },
        '-=0.5'
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
        zIndex: 40,
        marginTop: '-20vh',
        minHeight: '100vh',
        backgroundColor: 'black'
      }}
      className="w-full flex flex-col justify-center"
    >
      <section ref={sectionRef} className="relative py-32 md:py-40 bg-black text-white overflow-hidden w-full">
      {/* Background noise overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundSize: '200px',
      }} />
      <div className="container max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div ref={titleRef}>
            <motion.span
              className="section-tag inline-block mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Our Mission
            </motion.span>
            <h2 className="font-heading text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[0.95] tracking-tight text-white">
              {lines.map((line, i) => (
                <span key={i} className="line block" style={{ display: 'block' }}>
                  {line.includes('properly') ? (
                    <>
                      {line.split('properly')[0]}
                      <span className="text-gray-400">properly.</span>
                    </>
                  ) : (
                    line
                  )}
                </span>
              ))}
            </h2>
          </div>
          <div className="built-properly-content space-y-6 md:space-y-8">
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
    </motion.div>
  )
}
