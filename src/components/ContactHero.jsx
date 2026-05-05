'use client'

import { motion } from 'framer-motion'
import FloatingShapes from './FloatingShapes'
import { MailIcon, PhoneIcon, MapPinIcon, MessageSquareIcon, ArrowRightIcon, Clock10Icon, CheckCheckIcon } from 'lucide-react'

const contactShapes = [
  { type: 'cube', size: 60, color: 'pink', position: { top: '10%', left: '5%' }, depth: 0.3, rotate: { x: -20, y: 30 } },
  { type: 'donut', size: 100, thickness: 15, color: 'purple', position: { top: '15%', right: '10%' }, depth: 0.5, rotate: { x: 45, z: 20 } },
  { type: 'pyramid', size: 55, color: 'orange', position: { bottom: '20%', left: '8%' }, depth: 0.35, rotate: { x: -10, y: 25 } },
  { type: 'cube', size: 45, color: 'purple', position: { bottom: '12%', right: '12%' }, depth: 0.4, rotate: { x: 15, y: -15 } },
  { type: 'blob', size: 600, color: 'pink', position: { top: '-5%', right: '-5%' }, depth: 0.1, opacity: 0.1 },
  { type: 'blob', size: 500, color: 'purple', position: { bottom: '5%', left: '-5%' }, depth: 0.12, opacity: 0.08 },
]

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

const contactMethods = [
  { icon: MailIcon, label: 'Email', value: 'hello@adzapster.com', color: 'var(--primary)' },
  { icon: PhoneIcon, label: 'Phone', value: '+1 (555) 987-6543', color: 'var(--purple)' },
  { icon: MapPinIcon, label: 'Locations', value: 'NY · London · Singapore', color: 'var(--orange)' },
]

export default function ContactHero() {
  return (
          <section className="hero" id="contact-hero">
          
            
            <div className="hero-container">
              <div className="hero-content text-center">
                <div className="hero-badge mx-auto">
                  <span className="badge-dot" />
                  GET IN TOUCH
                </div>
    
                <h1 className="hero-title">
                  Let's Engineer Your <br />
                  <span className="gradient-text">Programmatic Future</span>
                </h1>
    
                <p className="hero-subtitle mx-auto">
                  Our specialists are ready to help you optimize campaign performance and navigate the complexities of global ad exchanges.
                </p>
    
                <div className="hero-cta-group justify-center">
                  <a href="#contact-form" className="btn btn-primary">
                    <span>Send Message</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                  </a>
                  <a href="#offices" className="btn btn-outline">
                    <span>Our Offices</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
  )
}
