'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SectionHeading from '@/components/SectionHeading'
import FloatingShapes from '@/components/FloatingShapes'

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

const phases = [
  {
    number: '01',
    title: 'Build',
    subtitle: 'We simulate your AI Agent in a staging setup - so you see how it works before going live.',
    steps: ['Trigger', 'Prompts', 'Send Email'],
    color: '#13e195',
    icon: 'construction',
  },
  {
    number: '02',
    title: 'Integrate',
    subtitle: 'We connect the AI Agent to your systems, run tests, and support you through rollout.',
    steps: ['Connect', 'Test', 'Deploy'],
    color: '#8B5CF6',
    icon: 'cable',
  },
  {
    number: '03',
    title: 'Tune',
    subtitle: 'We fine-tune your AI Agent and support you long-term as needs evolve.',
    steps: ['Monitor', 'Optimize', 'Scale'],
    color: '#F97316',
    icon: 'tune',
  },
]

const benefits = [
  {
    icon: 'timer',
    title: 'Save Time',
    desc: 'AI Agents automate tasks you didn\'t know you could. Work faster, and smarter.',
    color: '#13e195',
  },
  {
    icon: 'rocket_launch',
    title: 'Reach More',
    desc: 'AI Agents reach more customers for you, distributing your presence on channels that matter.',
    color: '#8B5CF6',
  },
  {
    icon: 'auto_awesome',
    title: 'Create More',
    desc: 'AI Agents dramatically boost your output - get maximum results from minimal time.',
    color: '#F97316',
  },
]

const faqs = [
  {
    q: 'What is the BIT framework™?',
    a: 'The BIT framework™ (Build, Integrate, Tune) is our proprietary methodology that ensures your AI Agent is fit for purpose, thoroughly tested, and continuously optimized for maximum performance.',
  },
  {
    q: 'How long does the Build phase take?',
    a: 'Typically 2-4 weeks depending on complexity. We simulate your AI Agent in a staging setup so you can see exactly how it works before going live.',
  },
  {
    q: 'Do you provide ongoing support after deployment?',
    a: 'Absolutely. The Tune phase includes long-term support, continuous fine-tuning, and optimization as your business needs evolve.',
  },
  {
    q: 'Can you integrate with our existing systems?',
    a: 'Yes! The Integrate phase is specifically designed to connect your AI Agent to your existing tech stack, CRM, and business systems.',
  },
]

export default function HowWeDoItContent() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="section section--white robolabs-hero" id="howwedoit-hero">
        <div className="robolabs-hero-bg" />
        <div className="robolabs-hero-grid" />
        <div className="robolabs-oval robolabs-oval--1" />
        <div className="robolabs-oval robolabs-oval--2" />
        <div className="robolabs-oval robolabs-oval--3" />
        <div className="robolabs-oval robolabs-oval--4" />
        <div className="robolabs-oval robolabs-oval--5" />
        <div className="robolabs-hero-bottom-gradient" />

        <FloatingShapes shapes={[
          { type: 'cube', size: 60, color: 'purple', position: { top: '20%', left: '10%' }, depth: 0.4, rotate: { x: -25, y: 35 } },
          { type: 'donut', size: 100, thickness: 15, color: 'pink', position: { top: '15%', right: '8%' }, depth: 0.6, rotate: { x: 55, z: 25 } },
          { type: 'pyramid', size: 70, color: 'orange', position: { bottom: '25%', left: '15%' }, depth: 0.35, rotate: { x: -15, y: 20 } },
        ]} />

        <motion.div
          className="hero-container relative z-10"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <div className="hero-content text-center col-span-2">
            <motion.div className="robolabs-online-badge mx-auto" variants={fadeUp}>
              <span className="robolabs-online-dot" />
              OUR PROCESS
            </motion.div>

            <motion.h1 className="hero-title" variants={fadeUp}>
              How We <br />
              <span className="gradient-text">Do It</span>
            </motion.h1>

            <motion.p className="hero-subtitle mx-auto" variants={fadeUp}>
              The BIT framework™ ensures your AI Agent is fit for purpose — built smart, integrated seamlessly, tuned continuously.
            </motion.p>

            <motion.div className="hero-cta-group justify-center" variants={fadeUp}>
              <a href="#process" className="btn btn-primary">
                <span>Explore Process</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
              </a>
              <a href="/contact-us" className="btn btn-outline">
                <span>Get Started</span>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* What We Do Section */}
      <section className="section section--light" id="what-we-do">
        <div className="container relative z-10">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-tag">What We Do</span>
            <SectionHeading>
              We Build <span className="gradient-text">AI Agents</span>
            </SectionHeading>
            <p className="section-subtitle">
              The ones that let you...
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={benefit.title}
                className="card p-8 text-center group relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.65, ease: 'easeOut' }}
                whileHover={{ scale: 1.03, boxShadow: `0 8px 48px ${benefit.color}33` }}
              >
                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity" style={{ background: `radial-gradient(circle at 50% 50%, ${benefit.color}, transparent 70%)` }} />
                <div className="service-icon mx-auto mb-6 flex items-center justify-center w-16 h-16 rounded-full" style={{ background: `linear-gradient(135deg, ${benefit.color}, ${benefit.color}88)` }}>
                  <span className="material-symbols-outlined text-white text-4xl">
                    {benefit.icon}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[var(--text-dark)] dark:text-white">{benefit.title}</h3>
                <p className="text-[var(--text-body)] dark:text-gray-300">
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - BIT Framework */}
      <section className="section" id="process">
        <div className="container relative z-10">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-tag">Our Process</span>
            <SectionHeading>
              The <span className="gradient-text">BIT Framework™</span>
            </SectionHeading>
            <p className="section-subtitle">
              A proven 3-phase methodology that ensures your AI Agent delivers real results.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mt-12">
            {phases.map((phase, idx) => (
              <motion.div
                key={phase.number}
                className="card p-8 relative overflow-hidden group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.7, ease: 'easeOut' }}
                whileHover={{ y: -8, boxShadow: `0 20px 60px ${phase.color}22` }}
              >
                {/* Phase Number */}
                <div className="absolute top-6 right-6 text-6xl font-extrabold opacity-10" style={{ color: phase.color }}>
                  {phase.number}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6" style={{ background: `${phase.color}20` }}>
                  <span className="material-symbols-outlined text-3xl" style={{ color: phase.color }}>
                    {phase.icon}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-2 text-[var(--text-dark)] dark:text-white">
                  Phase {phase.number}: {phase.title}
                </h3>

                {/* Subtitle */}
                <p className="text-[var(--text-body)] dark:text-gray-300 mb-6">
                  {phase.subtitle}
                </p>

                {/* Steps Infographic */}
                <div className="space-y-3">
                  {phase.steps.map((step, stepIdx) => (
                    <motion.div
                      key={step}
                      className="flex items-center gap-3 p-3 rounded-lg"
                      style={{ background: `${phase.color}08` }}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (idx * 0.15) + (stepIdx * 0.1) + 0.3 }}
                    >
                      <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold" style={{ background: phase.color }}>
                        {stepIdx + 1}
                      </div>
                      <span className="font-semibold text-[var(--text-dark)] dark:text-white">{step}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Decorative Element */}
                <div className="absolute bottom-0 left-0 right-0 h-1 translate-y-full group-hover:translate-y-0 transition-transform duration-300" style={{ background: `linear-gradient(90deg, transparent, ${phase.color}, transparent)` }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Code/Infographic Section - Phase 3 Tune */}
      <section className="section section--light overflow-hidden" id="infographic">
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="section-tag">Phase 3: Tune</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--text-dark)] dark:text-white">
                Continuous <span className="gradient-text">Optimization</span>
              </h2>
              <p className="text-lg text-[var(--text-body)] dark:text-gray-300 mb-6">
                We fine-tune your AI Agent and support you long-term as needs evolve. Our code-driven approach ensures precision at every step.
              </p>
              <div className="space-y-4">
                {['Marketing Automation', 'Analytics Engines', 'Omnichannel Publishing', 'MCP Server Development', 'Content Auto-Generation', 'RAG Systems'].map((item, idx) => (
                  <motion.div
                    key={item}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 }}
                  >
                    <div className="w-6 h-6 flex items-center justify-center rounded-full bg-primary/20 text-primary flex-shrink-0">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
                    </div>
                    <span className="text-[var(--text-body)] dark:text-gray-300">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: Animated Code Block Infographic */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative bg-[#1a1a2e] dark:bg-[#0f0f1a] rounded-2xl p-6 font-mono text-sm overflow-hidden border border-[var(--border)]">
                {/* Code Block Header */}
                <div className="flex items-center gap-2 mb-4 pb-4 border-b border-white/10">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-4 text-gray-400 text-xs">AgentOptimizer.js</span>
                </div>

                {/* Animated Code Lines */}
                <div className="space-y-2 text-xs md:text-sm">
                  <div className="text-purple-400">Class <span className="text-white">ChatBot</span> {'{'}</div>
                  <div className="pl-4 text-gray-400"><span className="text-blue-400">address</span> <span className="text-yellow-400">public</span> owner;</div>
                  <div className="pl-4 text-gray-400"><span className="text-blue-400">int</span> <span className="text-yellow-400">private</span> response;</div>
                  <div className="pl-4 text-gray-400"><span className="text-white">constructor</span>() {'{'}</div>
                  <div className="pl-8 text-gray-400">owner = <span className="text-green-400">msg.sender</span>;</div>
                  <div className="pl-4 text-gray-400">{'}'}</div>
                  <div className="pl-4 text-gray-400">function</div>
                  <div className="text-white">{'}'}</div>
                </div>

                {/* Floating Numbers */}
                <motion.div
                  className="absolute top-8 right-8 text-6xl font-extrabold text-primary/20"
                  animate={{ y: [0, -10, 0], opacity: [0.2, 0.4, 0.2] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  1
                </motion.div>
                <motion.div
                  className="absolute top-24 right-16 text-4xl font-bold text-purple-400/20"
                  animate={{ y: [0, 10, 0], opacity: [0.2, 0.3, 0.2] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                >
                  2
                </motion.div>
                <motion.div
                  className="absolute bottom-20 right-12 text-5xl font-bold text-orange-400/20"
                  animate={{ y: [0, -8, 0], opacity: [0.2, 0.35, 0.2] }}
                  transition={{ duration: 2.8, repeat: Infinity, delay: 1 }}
                >
                  3
                </motion.div>
              </div>

              {/* Decorative blur circles */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-400/20 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Technologies Section */}
      <section className="section">
        <div className="container relative z-10">
          <div className="robolabs-core-tech">
            <motion.p
              className="text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Our core technologies
            </motion.p>
            <motion.div
              className="robolabs-logo-strip"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img src="https://framerusercontent.com/images/m2Ee8qVNaUq1p30JNXzf87wtGZ4.png" alt="Technology 1" />
              <img src="https://framerusercontent.com/images/n3QeCgxiERZtWGL7E7mRbFJGPU.png" alt="Technology 2" />
              <img src="https://framerusercontent.com/images/Bcly3ML9TcmNxDC5rKCRKuvqODI.png" alt="Technology 3" />
              <img src="https://framerusercontent.com/images/o3i1Dnx2WxItzPkcePIqvEQOFU.png" alt="Technology 4" />
              <img src="https://framerusercontent.com/images/aEfuAatqNA9OPAwEZa6f4GuCgU.png" alt="Technology 5" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section section--light">
        <div className="container max-w-4xl mx-auto">
          <SectionHeading
            tag="FAQ"
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about our methodology and process."
          />

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                className="card overflow-hidden bg-white/80 dark:bg-[#1B1B3A] border border-[var(--border)]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
              >
                <button
                  className="w-full px-6 py-5 flex items-center justify-between text-left font-semibold text-lg text-[var(--text-dark)] dark:text-white hover:text-primary transition-colors"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  {faq.q}
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className={`transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 text-[var(--text-body)] dark:text-gray-300">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section mb-0">
        <div className="container">
          <motion.div
            className="bg-primary-container rounded-2xl p-xl flex flex-col items-center text-center text-white relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
            <h2 className="font-display-lg text-display-lg mb-md relative z-10">Ready to transform your business?</h2>
            <p className="font-body-lg text-body-lg opacity-90 max-w-2xl mb-lg relative z-10">
              Join forward-thinking companies leveraging our BIT Framework™ to build, integrate, and tune AI Agents that deliver real results.
            </p>
            <div className="flex flex-wrap gap-md relative z-10">
              <a href="/contact-us" className="bg-white text-primary-container font-bold px-8 py-4 rounded-lg hover:bg-surface-container transition-all active:scale-95 shadow-lg">
                Talk to an Expert
              </a>
              <a href="/services" className="bg-transparent border-2 border-white/40 hover:border-white text-white font-bold px-8 py-4 rounded-lg transition-all active:scale-95">
                View Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
