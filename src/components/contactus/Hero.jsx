'use client';

import { motion } from 'framer-motion';
import FloatingShapes from '@/components/FloatingShapes';
import { MailIcon, PhoneIcon, MapPinIcon, MessageSquareIcon } from 'lucide-react';

const contactShapes = [
  { type: 'cube', size: 60, color: 'purple', position: { top: '10%', left: '8%' }, depth: 0.3, rotate: { x: 20, y: -25 } },
  { type: 'donut', size: 90, thickness: 15, color: 'pink', position: { top: '15%', right: '10%' }, depth: 0.5, rotate: { x: 50, z: 40 } },
  { type: 'pyramid', size: 50, color: 'orange', position: { bottom: '25%', left: '12%' }, depth: 0.4, rotate: { x: -12, y: 30 } },
];

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  return (
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
            <div className="card p-6 md:p-8 bg-gradient-to-br from-[var(--bg-navbar)] to-[#251844] text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-gray-600 mb-6">You will get.</h3>
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
        </div>
        <motion.div className="contact-hero-visual" variants={fadeUp}>
          <div className="avatar-infographic responsive-infographic">
            {/* Central Avatar Circle */}
            <div className="avatar-center">
              <div className="avatar-ring ring-1" />
              <div className="avatar-ring ring-2" />
              <div className="avatar-ring ring-3" />
              <div className="avatar-core">
                <svg className="avatar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                </svg>
              </div>
              <div className="avatar-glow" />
            </div>
            {/* Floating Contact Nodes */}
            <motion.div className="contact-node node-email" animate={{ y: [0, -12, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
              <MailIcon className="node-icon" />
              <span className="node-label">24h Response</span>
            </motion.div>
            <motion.div className="contact-node node-phone" animate={{ y: [0, 12, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}>
              <PhoneIcon className="node-icon" />
              <span className="node-label">Free Consult</span>
            </motion.div>
            <motion.div className="contact-node node-chat" animate={{ y: [0, -8, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}>
              <MessageSquareIcon className="node-icon" />
              <span className="node-label">Live Support</span>
            </motion.div>
            <motion.div className="contact-node node-location" animate={{ y: [0, 10, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}>
              <MapPinIcon className="node-icon" />
              <span className="node-label">Global Team</span>
            </motion.div>
            {/* Connection Lines SVG */}
            <svg className="connection-lines" viewBox="0 0 400 400" fill="none" preserveAspectRatio="xMidYMid meet">
              <motion.circle cx="200" cy="200" r="140" stroke="var(--primary)" strokeWidth="1.5" strokeDasharray="6 6" fill="none" opacity="0.15" animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "center" }} />
              <motion.circle cx="200" cy="200" r="100" stroke="var(--purple)" strokeWidth="1" strokeDasharray="4 4" fill="none" opacity="0.12" animate={{ rotate: -360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "center" }} />
              <motion.path d="M200 60 L200 340 M60 200 L340 200" stroke="var(--border)" strokeWidth="1" strokeDasharray="8 8" opacity="0.2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} />
            </svg>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
