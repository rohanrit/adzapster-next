'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SectionHeading from '@/components/SectionHeading'
import FloatingShapes from '@/components/FloatingShapes'

const services = [
  {
    label: 'Brand Awareness',
    icon: 'stars',
    tag: 'Branding',
    desc: 'Amplify your brand presence across all major digital channels, making your message memorable and building equity for the long term.',
    details: 'Our brand awareness solutions combine premium inventory access with advanced targeting to ensure your brand reaches the right audience at the right time. We leverage contextual targeting, demographic segmentation, and behavioral data to maximize brand recall and equity.',
    features: ['Premium Publisher Network', 'Contextual & Behavioral Targeting', 'Brand Safety & Suitability', 'Real-time Performance Dashboards', 'Cross-device Reach'],
    infographic: { metric: '85%', label: 'Brand Recall Increase', color: '#13e195' }
  },
  {
    label: 'Video',
    icon: 'play_circle',
    tag: 'Video',
    desc: 'Engage audiences with immersive video ads across web, mobile, and CTV. Premium inventory, precise targeting, measurable outcomes.',
    details: 'Video advertising that captivates. From pre-roll to outstream, we deliver your message through premium video inventory. Our programmatic video solutions ensure high completion rates and maximum engagement.',
    features: ['Pre-roll & Outstream Video', 'CTV & OTT Integration', 'Interactive Video Formats', 'Advanced Viewability Metrics', 'Cross-platform Video Attribution'],
    infographic: { metric: '12.4x', label: 'Video Engagement Rate', color: '#8B5CF6' }
  },
  {
    label: 'Native',
    icon: 'view_agenda',
    tag: 'Native',
    desc: 'Non-disruptive, seamless native ads that blend with content, driving higher engagement and brand lift.',
    details: 'Native advertising that feels natural. Our native ads integrate seamlessly into the user experience, delivering higher engagement rates while maintaining brand safety and editorial integrity.',
    features: ['In-feed Native Ads', 'Content Recommendation Engines', 'Sponsored Content Integration', 'Native Video Placements', 'Performance Analytics'],
    infographic: { metric: '4.8%', label: 'CTR vs Standard Display', color: '#F97316' }
  },
  {
    label: 'CTV & OTT',
    icon: 'tv_gen',
    tag: 'Streaming',
    desc: 'Reach the cord-cutter audience with targeted ads on connected TVs & streaming platforms—measurable, trackable, powerful.',
    details: 'Connected TV advertising for the modern viewer. Target cord-cutters and streaming enthusiasts with precision. Our CTV solutions offer advanced targeting, measurement, and attribution for the streaming era.',
    features: ['Premium CTV Inventory', 'Audience Targeting for Streaming', 'Cross-device Attribution', 'Advanced TV Analytics', 'Programmatic OTT Buying'],
    infographic: { metric: '92%', label: 'Viewer Retention Rate', color: '#FF69B4' }
  },
  {
    label: 'In-App',
    icon: 'smartphone',
    tag: 'Mobile',
    desc: 'Display perfectly optimized ads within top apps. App install, engagement, and reactivation solutions.',
    details: 'In-app advertising that converts. Reach users where they spend 90% of their mobile time. From app install campaigns to engagement and reactivation, we optimize for every stage of the mobile journey.',
    features: ['App Install Campaigns', 'In-app Engagement Ads', 'Re-engagement Solutions', 'Mobile App Attribution', 'SDK Integration Support'],
    infographic: { metric: '3.2x', label: 'Higher Conversion vs Mobile Web', color: '#13e195' }
  },
  {
    label: 'Display',
    icon: 'web',
    tag: 'Display',
    desc: 'Eye-catching banners, interstitials, & dynamic rich media across premium publisher inventory; high viewability, precise targeting.',
    details: 'Display advertising reimagined. From standard banners to rich media creatives, we deliver high-impact display campaigns across premium publishers with industry-leading viewability rates.',
    features: ['Responsive Display Ads', 'Rich Media & Interstitials', 'Dynamic Creative Optimization', 'Premium Publisher Access', 'Viewability & Brand Safety'],
    infographic: { metric: '78%', label: 'Viewability Rate', color: '#8B5CF6' }
  },
  {
    label: 'DOOH / OOH',
    icon: 'outdoor_garden',
    tag: 'Outdoor',
    desc: 'Bridging physical and digital—place dynamic ads onto digital billboards and screens all over the globe, programmatically.',
    details: 'Digital out-of-home advertising that makes an impact. Programmatically buy and optimize digital billboards, transit screens, and place-based media with real-time data and measurement.',
    features: ['Programmatic DOOH Buying', 'Real-time Audience Measurement', 'Dynamic Creative for Screens', 'Geofencing & Location Data', 'Cross-channel Attribution'],
    infographic: { metric: '5M+', label: 'Daily Impressions', color: '#F97316' }
  },
  {
    label: 'Rich Media',
    icon: 'burst_mode',
    tag: 'Interactive',
    desc: 'Advanced creatives: Interactive, expandable, gamified ad formats to maximize click-through and brand recall.',
    details: 'Rich media ads that engage. From expandable banners to interactive gamified experiences, our rich media solutions drive higher engagement and brand recall through innovative creative formats.',
    features: ['Expandable Ad Formats', 'Interactive & Gamified Ads', 'Video-in-Banner', 'Social Rich Media', 'Creative Performance Analytics'],
    infographic: { metric: '6.8x', label: 'Engagement vs Standard Banners', color: '#FF69B4' }
  },
  {
    label: 'Mobile Marketing',
    icon: 'phone_iphone',
    tag: 'Mobile',
    desc: 'Comprehensive UAC/cross-app/mobile web strategies, precision geo-targeting, and behavioral marketing at scale.',
    details: 'Mobile-first marketing strategies that deliver. From Universal App Campaigns to mobile web and location-based targeting, we help you reach mobile users with precision and scale.',
    features: ['Universal App Campaigns (UAC)', 'Mobile Web Advertising', 'Geo-targeting & Geofencing', 'SMS & Push Notification Ads', 'Mobile Audience Segmentation'],
    infographic: { metric: '68%', label: 'Mobile Traffic Share', color: '#13e195' }
  },
  {
    label: 'Performance / Lead Gen',
    icon: 'track_changes',
    tag: 'Performance',
    desc: 'ROI-driven targeting, CPC/CPA solutions, advanced attribution & fraud protection to deliver real results, not just impressions.',
    details: 'Performance advertising that delivers ROI. Our performance solutions focus on measurable outcomes—from cost-per-acquisition to lead generation—backed by advanced attribution and fraud protection.',
    features: ['CPA & CPC Optimization', 'Advanced Attribution Modeling', 'Real-time Bidding (RTB)', 'Fraud Detection & Prevention', 'Lead Quality Scoring'],
    infographic: { metric: '12.4x', label: 'Average ROAS', color: '#8B5CF6' }
  },
]

const faqs = [
  {
    q: 'What makes Adzapster different from other ad tech platforms?',
    a: 'Adzapster combines proprietary AI algorithms with premium inventory access and transparent reporting. We focus on real business outcomes, not just impressions.'
  },
  {
    q: 'How quickly can I launch a campaign?',
    a: 'Most campaigns can be launched within 24-48 hours. Our streamlined onboarding process and pre-integrated DSP relationships make deployment fast and efficient.'
  },
  {
    q: 'Do you offer creative services for ad design?',
    a: 'Yes! We provide end-to-end creative services including display banners, video production, and rich media development to ensure your campaigns look as good as they perform.'
  },
  {
    q: 'What kind of reporting and analytics do you provide?',
    a: 'Real-time dashboards with granular metrics, cross-channel attribution, custom reports, and API access for enterprise clients. Transparency is our core value.'
  },
  {
    q: 'Can I integrate Adzapster with my existing martech stack?',
    a: 'Absolutely. We offer robust API integrations, support for major tag managers, and seamless connectivity with CRMs, DMPs, and analytics platforms.'
  },
]

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

export default function Services() {
  const [selectedService, setSelectedService] = useState(null)
  const [openFaq, setOpenFaq] = useState(null)

  const closeModal = () => setSelectedService(null)

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="hero" id="services-hero">
        <FloatingShapes shapes={[
          { type: 'cube', size: 60, color: 'purple', position: { top: '20%', left: '10%' }, depth: 0.4, rotate: { x: -25, y: 35 } },
          { type: 'donut', size: 100, thickness: 15, color: 'pink', position: { top: '15%', right: '8%' }, depth: 0.6, rotate: { x: 55, z: 25 } },
          { type: 'pyramid', size: 70, color: 'orange', position: { bottom: '25%', left: '15%' }, depth: 0.35, rotate: { x: -15, y: 20 } },
        ]} />

        <motion.div
          className="hero-container"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <div className="hero-content text-center">
            <motion.div className="hero-badge mx-auto" variants={fadeUp}>
              <span className="badge-dot" />
              OUR SERVICES
            </motion.div>

            <motion.h1 className="hero-title" variants={fadeUp}>
              Precision-Driven<br />
              <span className="gradient-text">Ad Services</span>
            </motion.h1>

            <motion.p className="hero-subtitle mx-auto" variants={fadeUp}>
              From brand awareness to performance marketing—discover how our suite of services can transform your digital advertising strategy.
            </motion.p>

            <motion.div className="hero-cta-group justify-center" variants={fadeUp}>
              <a href="#services-grid" className="btn btn-primary">
                <span>Explore Services</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
              </a>
              <a href="/contact-us" className="btn btn-outline">
                <span>Contact Us</span>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="section" id="services-grid">
        <div className="section-container">
          <SectionHeading
            tag="Our Services"
            title="Complete Ad Tech Solutions"
            subtitle="Every channel, every format, every outcome—powered by data and optimized for performance."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc, idx) => (
              <motion.div
                key={svc.label}
                className="card service-card cursor-pointer flex flex-col justify-start items-start backdrop-blur-md shadow-xl rounded-2xl bg-white/80 dark:bg-gradient-to-br dark:from-[#251844] dark:to-[#21294b] border border-[var(--border)] overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06, duration: 0.65, ease: 'easeOut' }}
                whileHover={{ scale: 1.045, boxShadow: '0 8px 48px rgba(19,225,149,0.2)' }}
                onClick={() => setSelectedService(svc)}
              >
                {/* Tag */}
                <div className="absolute top-4 right-4 px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full border border-primary/20">
                  {svc.tag}
                </div>

                <div className="service-icon mb-5 mt-5 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-primary via-primary-dark to-accent-purple shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="material-symbols-outlined text-white text-3xl">
                    {svc.icon}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-primary-dark dark:text-primary">{svc.label}</h3>
                <p className="text-base font-medium mb-6 text-[var(--text-body)] dark:text-gray-200 min-h-[56px]">
                  {svc.desc}
                </p>
                <div className="mt-auto text-sm font-semibold text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn More
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-[var(--bg-secondary)]">
        <div className="section-container">
          <SectionHeading
            tag="Why Choose Us"
            title="Why Adzapster Services?"
            subtitle="We combine technology, data, and creativity to deliver exceptional results."
          />

          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { icon: 'verified', title: 'Premium Inventory', desc: 'Access to top-tier publishers and platforms worldwide.' },
              { icon: 'insights', title: 'Data-Driven', desc: 'AI-powered optimization for maximum ROI and performance.' },
              { icon: 'support_agent', title: '24/7 Support', desc: 'Dedicated account management and real-time optimization.' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="p-8 rounded-2xl bg-white/50 dark:bg-[#1B1B3A]/50 backdrop-blur-sm border border-[var(--border)]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                <span className="material-symbols-outlined text-4xl text-primary mb-4">{item.icon}</span>
                <h3 className="text-lg font-bold mb-2 text-[var(--text-dark)] dark:text-white">{item.title}</h3>
                <p className="text-sm text-[var(--text-muted)]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="section-container max-w-4xl mx-auto">
          <SectionHeading
            tag="FAQ"
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about our services and platform."
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

      {/* Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Overlay */}
            <div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={closeModal}
            />

            {/* Modal Content */}
            <motion.div
              className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-[#1B1B3A] rounded-3xl shadow-2xl border border-[var(--border)]"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors z-10"
                onClick={closeModal}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
              </button>

              {/* Modal Header */}
              <div className="p-8 pb-0">
                <div className="flex items-center gap-4 mb-6">
                  <div className="service-icon flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-tr from-primary via-primary-dark to-accent-purple shadow-lg">
                    <span className="material-symbols-outlined text-white text-4xl">
                      {selectedService.icon}
                    </span>
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-primary">{selectedService.tag}</span>
                    <h2 className="text-2xl font-bold text-[var(--text-dark)] dark:text-white">{selectedService.label}</h2>
                  </div>
                </div>
                <p className="text-[var(--text-body)] dark:text-gray-300 mb-6">
                  {selectedService.details}
                </p>
              </div>

              {/* Infographic */}
              <div className="mx-8 p-6 rounded-2xl bg-gradient-to-r from-primary/10 to-accent-purple/10 border border-primary/20">
                <div className="flex items-center justify-around">
                  <div className="text-center">
                    <div className="text-4xl font-extrabold gradient-text mb-2">{selectedService.infographic.metric}</div>
                    <div className="text-sm text-[var(--text-muted)]">{selectedService.infographic.label}</div>
                  </div>
                  <div className="w-px h-16 bg-[var(--border)]" />
                  <div className="text-center">
                    <div className="text-4xl font-extrabold text-accent-purple mb-2">24/7</div>
                    <div className="text-sm text-[var(--text-muted)]">Support</div>
                  </div>
                  <div className="w-px h-16 bg-[var(--border)]" />
                  <div className="text-center">
                    <div className="text-4xl font-extrabold text-orange-500 mb-2">100%</div>
                    <div className="text-sm text-[var(--text-muted)]">Transparent</div>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="p-8">
                <h3 className="text-lg font-bold mb-4 text-[var(--text-dark)] dark:text-white">Key Features</h3>
                <ul className="space-y-3">
                  {selectedService.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-[var(--text-body)] dark:text-gray-300">
                      <div className="w-6 h-6 flex items-center justify-center rounded-full bg-primary/20 text-primary flex-shrink-0">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex gap-4">
                  <a href="/contact-us" className="btn btn-primary flex-1 text-center">
                    Get Started
                  </a>
                  <button onClick={closeModal} className="btn btn-outline flex-1 text-center">
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  )
}
