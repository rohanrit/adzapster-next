'use client'

import { motion } from 'framer-motion'

const connectorData = [
  { from: 0, to: 1, delay: 0 },
  { from: 1, to: 2, delay: 0.2 },
  { from: 2, to: 3, delay: 0.4 },
  { from: 3, to: 4, delay: 0.6 },
  { from: 4, to: 5, delay: 0.8 },
  { from: 5, to: 6, delay: 1.0 },
  { from: 6, to: 7, delay: 1.2 },
  { from: 7, to: 8, delay: 1.4 },
  { from: 8, to: 9, delay: 1.6 },
  { from: 0, to: 3, delay: 0.5 },
  { from: 1, to: 4, delay: 0.7 },
  { from: 2, to: 5, delay: 0.9 },
]

export default function GridInfographic({ services }) {
  const getPosition = (index) => {
    const col = index % 3
    const row = Math.floor(index / 3)
    return {
      x: `${col * 50 + 25}%`,
      y: `${row * 100 + 50}%`,
    }
  }

  return (
    <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
      <svg className="absolute inset-0 w-full h-full" style={{ minHeight: '100%' }}>
        {connectorData.map((conn, idx) => {
          const fromPos = getPosition(conn.from)
          const toPos = getPosition(conn.to)
          return (
            <motion.line
              key={idx}
              x1={fromPos.x}
              y1={fromPos.y}
              x2={toPos.x}
              y2={toPos.y}
              stroke="url(#servicesGradient)"
              strokeWidth="1.5"
              strokeOpacity="0.15"
              strokeDasharray="6 4"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: conn.delay,
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
          )
        })}
        <defs>
          <linearGradient id="servicesGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#13e195" />
            <stop offset="50%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#F97316" />
          </linearGradient>
        </defs>
      </svg>

      {/* Floating data pills */}
      {['24/7', '99.9%', '15ms', '12x ROAS'].map((text, idx) => (
        <motion.div
          key={text}
          className="absolute backdrop-blur-sm bg-white/60 dark:bg-gray-800/60 rounded-full px-3 py-1 border border-gray-200/50 dark:border-gray-700/50 shadow-sm"
          style={{
            left: `${15 + idx * 25}%`,
            top: `${20 + (idx % 2) * 60}%`,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.8 + idx * 0.15, duration: 0.5 }}
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            y: {
              duration: 3 + idx * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
            },
            ...{ delay: 1.8 + idx * 0.15, duration: 0.5 },
          }}
        >
          <span className="text-xs font-bold text-emerald-600">{text}</span>
        </motion.div>
      ))}
    </div>
  )
}
