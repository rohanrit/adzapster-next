"use client"

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ContactHero from '@/components/ContactHero'
import FloatingShapes from '@/components/FloatingShapes'
import SectionHeading from '@/components/SectionHeading'
import { MailIcon, PhoneIcon, MapPinIcon, MessageSquareIcon, ArrowRightIcon, Clock10Icon, CheckCheckIcon } from 'lucide-react'

const contactShapes = [
  { type: 'cube', size: 60, color: 'purple', position: { top: '10%', left: '8%' }, depth: 0.3, rotate: { x: 20, y: -25 } },
  { type: 'donut', size: 90, thickness: 15, color: 'pink', position: { top: '15%', right: '10%' }, depth: 0.5, rotate: { x: 50, z: 40 } },
  { type: 'pyramid', size: 50, color: 'orange', position: { bottom: '25%', left: '12%' }, depth: 0.4, rotate: { x: -12, y: 30 } },
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

export default function ContactUsContent() {
  return (
    <>
      <Navbar />
            {/* <ContactHero /> */}


      <section className="contact-hero" id="contact-hero">
            <FloatingShapes shapes={contactShapes} />

            <motion.div
              className="contact-hero-container"
              variants={stagger}
              initial="hidden"
              animate="visible"
            >
              <div className="contact-hero-content">
                <motion.div className="hero-badge" variants={fadeUp}>
                  <MessageSquareIcon className="w-4 h-4" />
                  Get In Touch
                </motion.div>

                <motion.h1 className="hero-title" variants={fadeUp}>
                  Let&apos;s Start a<br />
                  <span className="gradient-text">Conversation</span>
                </motion.h1>

                <motion.p className="hero-subtitle" variants={fadeUp}>
                  Have questions about programmatic advertising? Our team is here to help you
                  navigate the future of digital marketing.
                </motion.p>

                <motion.div className="contact-hero-methods" variants={fadeUp}>
                  {/* Quick Stats */}
                    <div className="card p-6 md:p-8 bg-gradient-to-br from-[var(--bg-navbar)] to-[#251844] text-white relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
                      <div className="relative z-10">
                        <h3 className="text-3xl font-bold mb-6">You will get.</h3>
                        <div className="grid grid-cols-3 gap-4">
                          {[
                            { metric: '24/7', label: 'Support' },
                            { metric: '<2hrs', label: 'Response' },
                            { metric: '100%', label: 'Transparent' },
                          ].map((stat, idx) => (
                            <div key={idx} className="text-center">
                              <div className="text-2xl font-extrabold gradient-text mb-1">{stat.metric}</div>
                              <div className="text-xs text-gray-300">{stat.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                </motion.div>

                {/* <motion.div className="contact-hero-methods" variants={fadeUp}>
                  {contactMethods.map((method) => (
                    <div className="contact-method" key={method.label}>
                      <div className="contact-method-icon" style={{ background: `${method.color}20`, color: method.color }}>
                        <method.icon className="w-5 h-5" />
                      </div>
                      <div className="contact-method-info">
                        <span className="contact-method-label">{method.label}</span>
                        <span className="contact-method-value">{method.value}</span>
                      </div>
                    </div>
                  ))}
                </motion.div> */}

                {/* <motion.div variants={fadeUp}>
                  <a href="#contact" className="btn btn-primary">
                    <span>Send Message</span>
                    <ArrowRightIcon className="w-4 h-4" />
                  </a>
                </motion.div> */}
              </div>

              <motion.div className="contact-hero-visual" variants={fadeUp}>
                <div className="avatar-infographic">
                  {/* Central Avatar Circle */}
                  <div className="avatar-center">
                    <div className="avatar-ring ring-1" />
                    <div className="avatar-ring ring-2" />
                    <div className="avatar-ring ring-3" />
                    <div className="avatar-core">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                      </svg>
                    </div>
                    <div className="avatar-glow" />
                  </div>

                  {/* Floating Contact Nodes */}
                  <motion.div
                    className="contact-node node-email"
                    animate={{ y: [0, -12, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <MailIcon className="w-5 h-5" />
                    <span>24h Response</span>
                  </motion.div>

                  <motion.div
                    className="contact-node node-phone"
                    animate={{ y: [0, 12, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  >
                    <PhoneIcon className="w-5 h-5" />
                    <span>Free Consult</span>
                  </motion.div>

                  <motion.div
                    className="contact-node node-chat"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  >
                    <MessageSquareIcon className="w-5 h-5" />
                    <span>Live Support</span>
                  </motion.div>

                  <motion.div
                    className="contact-node node-location"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  >
                    <MapPinIcon className="w-5 h-5" />
                    <span>Global Team</span>
                  </motion.div>

                  {/* Connection Lines SVG */}
                  <svg className="connection-lines" viewBox="0 0 400 400" fill="none">
                    <motion.circle
                      cx="200" cy="200" r="140"
                      stroke="var(--primary)"
                      strokeWidth="1.5"
                      strokeDasharray="6 6"
                      fill="none"
                      opacity="0.15"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      style={{ transformOrigin: "center" }}
                    />
                    <motion.circle
                      cx="200" cy="200" r="100"
                      stroke="var(--purple)"
                      strokeWidth="1"
                      strokeDasharray="4 4"
                      fill="none"
                      opacity="0.12"
                      animate={{ rotate: -360 }}
                      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                      style={{ transformOrigin: "center" }}
                    />
                    <motion.path
                      d="M200 60 L200 340 M60 200 L340 200"
                      stroke="var(--border)"
                      strokeWidth="1"
                      strokeDasharray="8 8"
                      opacity="0.2"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                  </svg>
                </div>
              </motion.div>
            </motion.div>
          </section>

      {/* Contact Form & Info Section */}
      <section className="container" id="contact-form">
        <div className="section-container">
          <SectionHeading
            tag="Contact Us"
            title="Start a Conversation"
            subtitle="Fill out the form below or reach out through our direct channels."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Contact Form */}
            <div className="lg:col-span-8 card p-8 md:p-12 relative overflow-hidden group">
              {/* Decorative gradient blob */}
              <div className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-br from-primary/20 via-purple-500/10 to-transparent rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700" />

              <div className="relative z-10">
                <div className="mb-8 pb-6 border-b border-[var(--border)]">
                  <h2 className="text-2xl font-bold text-[var(--text-dark)] dark:text-white">Send a Message</h2>
                  <p className="text-[var(--text-muted)] mt-2">We'll respond within 24 hours</p>
                </div>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative group">
                      <label className="font-semibold text-sm text-[var(--text-dark)] dark:text-gray-300 mb-2 block">First Name</label>
                      <div className="relative">
                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)] group-focus-within:text-primary transition-colors text-xl">person</span>
                        <input
                          className="w-full pl-12 pr-4 py-3.5 bg-white/50 dark:bg-[#1B1B3A]/50 backdrop-blur-sm border-2 border-[var(--border)] rounded-xl focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all font-body-md text-[var(--text-dark)] dark:text-white placeholder:text-[var(--text-muted)] hover:border-primary/50"
                          placeholder="John"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="relative group">
                      <label className="font-semibold text-sm text-[var(--text-dark)] dark:text-gray-300 mb-2 block">Last Name</label>
                      <div className="relative">
                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)] group-focus-within:text-primary transition-colors text-xl">person</span>
                        <input
                          className="w-full pl-12 pr-4 py-3.5 bg-white/50 dark:bg-[#1B1B3A]/50 backdrop-blur-sm border-2 border-[var(--border)] rounded-xl focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all font-body-md text-[var(--text-dark)] dark:text-white placeholder:text-[var(--text-muted)] hover:border-primary/50"
                          placeholder="Doe"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="relative group">
                    <label className="font-semibold text-sm text-[var(--text-dark)] dark:text-gray-300 mb-2 block">Business Email</label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)] group-focus-within:text-primary transition-colors text-xl">mail</span>
                      <input
                        className="w-full pl-12 pr-4 py-3.5 bg-white/50 dark:bg-[#1B1B3A]/50 backdrop-blur-sm border-2 border-[var(--border)] rounded-xl focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all font-body-md text-[var(--text-dark)] dark:text-white placeholder:text-[var(--text-muted)] hover:border-primary/50"
                        placeholder="john@company.com"
                        type="email"
                      />
                    </div>
                  </div>

                  <div className="relative group">
                    <label className="font-semibold text-sm text-[var(--text-dark)] dark:text-gray-300 mb-2 block">Industry</label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)] group-focus-within:text-primary transition-colors text-xl">business_center</span>
                      <select className="w-full pl-12 pr-4 py-3.5 bg-white/50 dark:bg-[#1B1B3A]/50 backdrop-blur-sm border-2 border-[var(--border)] rounded-xl focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all font-body-md text-[var(--text-dark)] dark:text-white appearance-none hover:border-primary/50 cursor-pointer">
                        <option>E-commerce</option>
                        <option>SaaS</option>
                        <option>FinTech</option>
                        <option>Media & Publishing</option>
                        <option>Other</option>
                      </select>
                      <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)] pointer-events-none text-xl">expand_more</span>
                    </div>
                  </div>

                  <div className="relative group">
                    <label className="font-semibold text-sm text-[var(--text-dark)] dark:text-gray-300 mb-2 block">Message</label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-4 top-4 text-[var(--text-muted)] group-focus-within:text-primary transition-colors text-xl">chat</span>
                      <textarea
                        className="w-full pl-12 pr-4 py-3.5 bg-white/50 dark:bg-[#1B1B3A]/50 backdrop-blur-sm border-2 border-[var(--border)] rounded-xl focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all font-body-md text-[var(--text-dark)] dark:text-white placeholder:text-[var(--text-muted)] hover:border-primary/50 resize-none"
                        placeholder="How can we help scale your performance?"
                        rows="5"
                      ></textarea>
                    </div>
                  </div>

                  <button
                    className="btn btn-primary text-lg px-10 py-4 group w-full md:w-auto hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300"
                    type="submit"
                  >
                    <span>Send Inquiry</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
                  </button>
                </form>
              </div>
            </div>

            {/* Sidebar Info */}
            <aside className="lg:col-span-4 flex flex-col gap-6">
              {/* Direct Support Card */}
              <div className="card p-6 md:p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-2xl" />
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-6 text-[var(--text-dark)] dark:text-white">Direct Support</h3>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4 group">
                      <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-tr from-primary to-primary-dark rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        <span className="material-symbols-outlined text-white text-2xl">support_agent</span>
                      </div>
                      <div>
                        <p className="font-bold text-[var(--text-dark)] dark:text-white mb-1">Technical Assistance</p>
                        <p className="text-[var(--text-body)] dark:text-gray-300">support@adzapster.com</p>
                        <p className="text-xs text-[var(--text-muted)] mt-1">24/7 Priority support for Enterprise clients</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 group">
                      <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-tr from-purple-500 to-pink-500 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        <span className="material-symbols-outlined text-white text-2xl">business_center</span>
                      </div>
                      <div>
                        <p className="font-bold text-[var(--text-dark)] dark:text-white mb-1">Sales Inquiries</p>
                        <p className="text-[var(--text-body)] dark:text-gray-300">+1 (888) 555-0192</p>
                        <p className="text-xs text-[var(--text-muted)] mt-1">Mon - Fri, 9am - 6pm EST</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Locations */}
              <div className="card overflow-hidden" id="offices">
                <div className="h-56 md:h-64 w-full bg-[var(--bg-secondary)] relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-purple-500/10 to-pink-500/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/90 dark:bg-[#1B1B3A]/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary text-2xl">location_on</span>
                      <span className="font-bold text-[var(--text-dark)] dark:text-white">New York HQ</span>
                    </div>
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="text-xl font-bold mb-4 text-[var(--text-dark)] dark:text-white">Global Headquarters</h3>
                  <p className="text-[var(--text-body)] dark:text-gray-300 mb-6">
                    One World Trade Center, Suite 85<br />
                    New York, NY 10007<br />
                    United States
                  </p>
                  <div className="flex gap-8 pt-6 border-t border-[var(--border)]">
                    <div>
                      <p className="text-xs font-bold text-[var(--primary)] uppercase tracking-widest mb-1">EMEA Hub</p>
                      <p className="text-[var(--text-dark)] dark:text-white font-semibold">London, UK</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[var(--purple)] uppercase tracking-widest mb-1">APAC Hub</p>
                      <p className="text-[var(--text-dark)] dark:text-white font-semibold">Singapore</p>
                    </div>
                  </div>
                </div>
              </div>

            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
