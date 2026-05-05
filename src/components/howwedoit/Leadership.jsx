'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import SectionHeading from '@/components/SectionHeading'

export default function Leadership() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })
  const teamY = useTransform(scrollYProgress, [0, 1], [0, -100])
  const teamOpacity = useTransform(scrollYProgress, [0, 0.5, 1, 1], [1, 1, 1, 1])

  return (
    <motion.section
      ref={sectionRef}
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
            <p className="text-xl text-tertiary">Meet the visionaries combining decades of experience in fintech, data science, and global marketing.</p>
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
  )
}
