'use client'

import { motion } from 'framer-motion'

export default function Infographic() {
  return (
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
  )
}
