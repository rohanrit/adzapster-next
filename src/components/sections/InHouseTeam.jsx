'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const team = [
  { name: 'Ritesh Sharma', role: 'Founder & CEO', initials: 'RS' },
  { name: 'Sarah Chen', role: 'Head of Programmatic', initials: 'SC' },
  { name: 'Marcus Lee', role: 'Creative Director', initials: 'ML' },
  { name: 'Priya Patel', role: 'Data Strategist', initials: 'PP' },
]

export default function InHouseTeam() {
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { once: true, margin: '-100px' })

  useEffect(() => {
    if (!sectionRef.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.team-member',
        { opacity: 0, y: 60, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
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
    <section ref={sectionRef} className="relative py-32 md:py-40 bg-black text-white overflow-hidden">
      <div className="container max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
          animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-tag inline-block mb-6 text-gray-400">Our People</span>
          <h2 className="font-heading text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[0.95] text-white mb-6">
            A Dedicated<br />In-House Team
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-gray-300 max-w-3xl mb-16">
            Meet the visionaries combining decades of experience in fintech, data science, and global marketing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {team.map((member, i) => (
            <motion.div
              key={i}
              className="team-member group text-center p-8 md:p-10 bg-white/[0.03] border border-white/10 rounded-2xl hover:border-emerald-400/30 hover:bg-white/[0.06] transition-all duration-500"
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
              <p className="text-sm md:text-base text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
