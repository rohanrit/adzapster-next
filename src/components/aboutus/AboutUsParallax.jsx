'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AboutUsContent from '@/components/aboutus/AboutUsContent'
import FloatingShapes from '@/components/FloatingShapes'
import SectionHeading from '@/components/SectionHeading'

export default function AboutUsParallax() {
  const containerRef = useRef(null)
  const section1Ref = useRef(null)
  const section2Ref = useRef(null)
  const section3Ref = useRef(null)
  const section4Ref = useRef(null)

  const { scrollYProgress: scroll1 } = useScroll({ target: section1Ref, offset: ['start start', 'end start'] })
  const { scrollYProgress: scroll2 } = useScroll({ target: section2Ref, offset: ['start start', 'end start'] })
  const { scrollYProgress: scroll3 } = useScroll({ target: section3Ref, offset: ['start start', 'end start'] })
  const { scrollYProgress: scroll4 } = useScroll({ target: section4Ref, offset: ['start start', 'end start'] })

  const heroY = useTransform(scroll1, [0, 1], [0, -150])
  const heroOpacity = useTransform(scroll1, [0, 0.8], [1, 1])

  const missionY = useTransform(scroll2, [0, 1], [100, -80])
  const missionOpacity = useTransform(scroll2, [0, 0.3, 0.8, 1], [1, 1, 1, 1])
  const missionScale = useTransform(scroll2, [0, 0.5, 1], [1, 1, 1])

  const teamY = useTransform(scroll3, [0, 1], [80, -100])
  const teamOpacity = useTransform(scroll3, [0, 0.5, 1, 1], [1, 1, 1, 1])
  const teamScale = useTransform(scroll3, [0, 0.5, 1], [1, 1, 1])

  const ctaY = useTransform(scroll4, [0, 1], [60, -120])
  const ctaOpacity = useTransform(scroll4, [0, 0.3, 1], [1, 1, 1])

  return (
    <>
      <Navbar />
      <main ref={containerRef} className="relative" style={{ position: 'relative' }} suppressHydrationWarning>
        {/* Hero section - overlapped first */}
        <motion.section
          ref={section1Ref}
          className="section section--white robolabs-hero"
          style={{
            y: heroY,
            opacity: heroOpacity,
            position: 'sticky',
            top: 0,
            zIndex: 10,
            height: '100vh'
          }}
        >
          <div className="robolabs-hero-bg" />
          <div className="robolabs-hero-grid" />
          <div className="robolabs-oval robolabs-oval--1" />
          <div className="robolabs-oval robolabs-oval--2" />
          <div className="robolabs-oval robolabs-oval--3" />
          <div className="robolabs-oval robolabs-oval--4" />
          <div className="robolabs-oval robolabs-oval--5" />
          <div className="robolabs-hero-bottom-gradient" />
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="robolabs-online-badge">
                <span className="robolabs-online-dot" />
                <span>Online</span>
              </div>
              <h1 className="hero-title mb-6">
                <span className="robolabs-hero-title-lead">The Era of AI is Here ✦ </span>
                Adzapster helps you lead it
              </h1>
              <p className="hero-subtitle mx-auto mb-10">
                We are a global crew of performance marketers and AI builders, helping brands use intelligent automation in ways that make sense - no hype, just practical growth.
              </p>
              <div className="hero-cta-group justify-center mb-0">
                <a href="#mission" className="btn btn-outline">Learn More</a>
              </div>
              <div className="robolabs-core-tech">
                <p>Our core technologies</p>
                <div className="robolabs-logo-strip">
                  <img src="https://framerusercontent.com/images/m2Ee8qVNaUq1p30JNXzf87wtGZ4.png" alt="Technology 1" />
                  <img src="https://framerusercontent.com/images/n3QeCgxiERZtWGL7E7mRbFJGPU.png" alt="Technology 2" />
                  <img src="https://framerusercontent.com/images/Bcly3ML9TcmNxDC5rKCRKuvqODI.png" alt="Technology 3" />
                  <img src="https://framerusercontent.com/images/o3i1Dnx2WxItzPkcePIqvEQOFU.png" alt="Technology 4" />
                  <img src="https://framerusercontent.com/images/aEfuAatqNA9OPAwEZa6f4GuCgU.png" alt="Technology 5" />
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Mission & Vision Section - overlaps hero */}
        <motion.section
          ref={section2Ref}
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
              <p className="section-subtitle">Built on reliability, innovation, and absolute transparency.</p>
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

        {/* Leadership Team Section - overlaps mission */}
        <motion.section
          ref={section3Ref}
          className="sectionsection section--light"
          style={{
            y: teamY,
            opacity: teamOpacity,
            position: 'sticky',
            top: 0,
            zIndex: 30,
            marginTop: '-20vh',
            height: '100vh'
          }}
        >
          <div className="container relative z-10">
            <motion.div
              className="section-header flex flex-col md:flex-row justify-between items-end mb-lg gap-md"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="max-w-xl">
                <span className="section-tag">Leadership</span>
                <SectionHeading>The Architects</SectionHeading>
                <p className="section-subtitle">Meet the visionaries combining decades of experience in fintech, data science, and global marketing.</p>
              </div>
              <button className="group flex items-center gap-2 font-label-md text-label-md text-primary hover:text-on-primary-container transition-colors mt-8 md:mt-0">
                Join the team
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </motion.div>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, staggerChildren: 0.1 }}
            >
              {[
                { name: 'Marcus Thorne', role: 'CEO', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDcxwCQwK82iIC3CqeWFFlaBdIbjQHtgpRQ-EThqZO1qpaBmnvpTUDxttvgoT0tikU5BIrViLB9FvWQZEeR9UeslqWytCcXaPh9oIpYZ29e05mFx1YFpm9z0cHvPBovW3DUDJUSaxM-9vbu_pnano3R4uFbRNU0wcdKgqRKBADNI5IoG18VEvIYcYpiQUiNEP6QzindUy7rSLWAm2F2W9KnIxP_0iIanPHHqBV8TuTkts0zCYWeIzeF7TCm18nFdySWoQEu7SSxGf7F' },
                { name: 'Sarah Jenkins', role: 'CTO', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC_gItOrSce2R4oECA7X4dzXhGPjN3IpuBU8YBxZ-P_0ihXdjIojSenftzeCVnIWd5C-oO_RRTCcq84MmhyhOGB2tcDhRMrIG-xuDgd8AqDR6pLoJozhgUILM2kwJvrKGDysjRpIPtkncVq6yOYA_u8XjsYINhNTdYXrDb_86xjoTn67zQ0P0I4BMWzg2tGlP-uCMsU_Uwhe7A65PFl1US5-s7CIzQqxYwBnmbn86lryWYfkNmVqU-9Z0AqLtvQC3S5SJ0iYqex0nPY' },
                { name: 'David Chen', role: 'VP Engineering', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_IWquKlToAH9EuX9BMWrvg-HOqtN41XPnbT4TgAazrK3bHdxK1DxwmZ5Fz2xX_faxbyrOHsGK9ZzTIv2ygbiegPRf7_G0Pa315fZQGgGiudf7_kKjFYLeAl-mO6ncI_oNg-NQM4tkIIhr2n_Tth1QI0NOnS4npI3JUYm6CPvtAAOdggjdTLkpOsZxlQ7GEBylnYBSwt3u26zrd29rqTjbLCcdkU788THwNrAROeGdnZrZ4gJ8vCIWuLwIckfhd9RJuwwJ27AQyaDB' },
                { name: 'Elena Rodriguez', role: 'Head of Ops', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9yD9IXi1Kwgaeqw6qBrXEolT4fHjJSlCP6uhJXQzSPYJ-7VeZItGIO_ljzI-3pdjNHUeHE8ZarihKMktGog_Fxg5CYEXUc6pb9wgjjxCLPiGuu-T9cyitymAoxbTbU38jxgHc2P4nWf23F-jGpOPt-TK4Le3ycdVREMEtTRWmfenLeoJ_WrWTcC-FoIMXkQgPojrxQ3okZe2n3y2QOLNIQX00TikUJaCY9N8v1wz7ESbTiZDNc7fjNOriTccJ7-9qnVNQ_cpcWVJU' },
              ].map((member) => (
                <motion.div
                  key={member.name}
                  className="group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-md shadow-md border border-outline-variant/10">
                    <img
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      src={member.img}
                      alt={member.name}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-md">
                      <div className="flex gap-4">
                        <span className="material-symbols-outlined text-white cursor-pointer hover:text-primary-container">link</span>
                        <span className="material-symbols-outlined text-white cursor-pointer hover:text-primary-container">alternate_email</span>
                      </div>
                    </div>
                  </div>
                  <h4 className="font-headline-md text-headline-md text-on-background">{member.name}</h4>
                  <p className="font-label-sm text-label-sm text-primary uppercase tracking-widest">{member.role}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* CTA Section - overlaps team */}
        {/* <motion.section
          ref={section4Ref}
          className="section section--light mb-0"
          style={{
            y: ctaY,
            opacity: ctaOpacity,
            position: 'sticky',
            top: 0,
            zIndex: 40,
            marginTop: '-15vh',
            height: '100vh'
          }}
        >
          <div className="container">
            <motion.div
              className="bg-primary-container rounded-2xl p-xl flex flex-col items-center text-center text-white relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
              <h2 className="font-display-lg text-display-lg mb-md relative z-10">Ready to accelerate your dynamic campaigns?</h2>
              <p className="font-body-lg text-body-lg opacity-90 max-w-2xl mb-lg relative z-10">
                Join over 500+ global brands leveraging Adzapster to scale their programmatic presence with absolute precision.
              </p>
              <div className="flex flex-wrap gap-md relative z-10">
                <button className="bg-white text-primary-container font-bold px-8 py-4 rounded-lg hover:bg-surface-container transition-all active:scale-95 shadow-lg">
                  Talk to an Expert
                </button>
                <button className="bg-transparent border-2 border-white/40 hover:border-white text-white font-bold px-8 py-4 rounded-lg transition-all active:scale-95">
                  View Open Roles
                </button>
              </div>
            </motion.div>
          </div>
        </motion.section> */}
      </main>
      <AboutUsContent />
      <Footer />
    </>
  )
}
