'use client'

import SectionHeading from '@/components/SectionHeading';
import { motion } from 'framer-motion';

const innovations = [
  {
    title: 'High Velocity',
    desc: 'We ship code daily and iterate at the speed of the global market.',
    icon: 'bolt',
    color: 'primary',
    infographic: (
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" className="w-full h-full">
        <circle cx="60" cy="60" r="15" stroke="currentColor" strokeWidth="2" fill="none" />
        <motion.line x1="60" y1="60" x2="60" y2="20" stroke="currentColor" strokeWidth="3" strokeLinecap="round"
          animate={{ y2: [20, 15, 20] }} transition={{ duration: 1.5, repeat: Infinity }} />
        <motion.line x1="60" y1="60" x2="85" y2="35" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
          animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity }} />
        <motion.line x1="60" y1="60" x2="95" y2="60" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
          animate={{ x2: [95, 100, 95] }} transition={{ duration: 1.2, repeat: Infinity }} />
      </svg>
    )
  },
  {
    title: 'Remote First',
    desc: 'Talent has no borders. Work from anywhere in the world.',
    icon: 'public',
    color: 'secondary',
    infographic: (
      <svg width="100" height="100" viewBox="0 0 100 100" fill="none" className="w-full h-full">
        {[
          [30, 30], [50, 25], [70, 30], [40, 50], [60, 55], [35, 70], [65, 75]
        ].map(([cx, cy], i) => (
          <motion.circle
            key={i}
            cx={cx} cy={cy} r="3"
            fill="currentColor"
            animate={{ r: [3, 5, 3], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2 + i * 0.3, repeat: Infinity }}
          />
        ))}
        <line x1="30" y1="30" x2="70" y2="30" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        <line x1="40" y1="50" x2="60" y2="55" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      </svg>
    )
  },
  {
    title: 'Continuous Growth',
    desc: 'Dedicated annual budget for learning, conferences, and certifications for every team member.',
    icon: 'trending_up',
    color: 'tertiary',
    infographic: (
      <svg width="80" height="60" viewBox="0 0 80 60" fill="none" className="w-full h-full">
        <motion.path
          d="M10 50 L25 45 L35 40 L45 30 L55 35 L65 20 L70 25"
          stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        />
        <rect x="15" y="45" width="8" height="15" fill="currentColor" opacity="0.3" />
        <rect x="35" y="35" width="8" height="25" fill="currentColor" opacity="0.5" />
        <rect x="55" y="25" width="8" height="35" fill="currentColor" opacity="0.7" />
      </svg>
    )
  },
  {
    title: 'Ownership Mindset',
    desc: 'Every employee receives equity. You are an architect of the company\'s success, not just a passenger.',
    icon: 'verified',
    color: 'primary',
    infographic: (
      <svg width="100" height="100" viewBox="0 0 100 100" fill="none" className="w-full h-full">
        <motion.path
          d="M20 60 Q40 40 50 50 T80 30"
          stroke="currentColor" strokeWidth="2" fill="none"
          animate={{ pathLength: [0, 1, 0] }} transition={{ duration: 3, repeat: Infinity }} />
        <motion.circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="1" fill="none"
          animate={{ r: [20, 25, 20] }} transition={{ duration: 2, repeat: Infinity }} />
      </svg>
    )
  },
  {
    title: '0.2ms Latency',
    desc: 'Our latency peak - industry-leading speed for real-time bidding.',
    icon: 'speed',
    color: 'secondary',
    infographic: (
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className="w-full h-full">
        {[0, 0.3, 0.6].map((delay, i) => (
          <motion.circle
            key={i}
            cx="40" cy="40" r="10"
            stroke="currentColor" strokeWidth="2" fill="none"
            animate={{ r: [10, 30, 10], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay }}
          />
        ))}
      </svg>
    )
  }
];

export default function Innovation() {
  return (
    <section className="section section--light">
      <div className="container">
        <div className="section-header">
          <SectionHeading>
            Innovation is our <span className="gradient-text">baseline</span>.
          </SectionHeading>
          <p className="section-subtitle">We foster an environment where technical excellence meets radical transparency.</p>
        </div>
        <div className="card-grid grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[600px]">
          {innovations.map((item, idx) => (
            <motion.div
              key={idx}
              className={`relative overflow-hidden group card p-lg flex flex-col ${
                idx === 0 ? 'md:col-span-2 md:row-span-1 justify-end' :
                idx === 1 ? 'md:col-span-1 md:row-span-1 justify-between items-start bg-secondary text-on-primary' :
                idx === 2 ? 'md:col-span-1 md:row-span-2 flex-col gap-md bg-on-background' :
                idx === 3 ? 'md:col-span-2 md:row-span-1 items-center gap-lg' :
                'md:col-span-1 md:row-span-1 justify-center text-center'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              {/* Infographic background */}
              <div 
                className={`absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity ${
                  idx === 1 || idx === 2 ? 'text-on-primary' : 'text-on-background'
                }`}
                style={{ color: `var(--${item.color})` }}
              >
                {item.infographic}
              </div>
              
              {/* Icon */}
              {idx !== 3 && idx !== 4 && (
                <div className={`mb-4 ${idx === 1 ? 'text-on-primary' : ''}`}>
                  <span className={`material-symbols-outlined text-4xl ${
                    idx === 0 ? 'text-primary/20 group-hover:text-primary transition-colors' :
                    idx === 1 ? 'text-on-primary' :
                    idx === 2 ? 'text-background' : 'text-primary'
                  }`}>{item.icon}</span>
                </div>
              )}
              
              {/* Content */}
              <div className={idx === 3 ? 'flex items-center gap-lg' : ''}>
                {idx === 3 && (
                  <div className="hidden sm:block w-32 h-32 rounded-full border-4 border-primary/20 p-2 shrink-0">
                    <div className="w-full h-full rounded-full bg-primary flex items-center justify-center">
                      <span className="material-symbols-outlined text-on-primary text-4xl">verified</span>
                    </div>
                  </div>
                )}
                {idx === 4 ? (
                  <div>
                    <div className="text-on-background font-display-lg text-display-lg">0.2ms</div>
                    <div className="text-on-background font-label-md uppercase tracking-widest text-xs opacity-60">{item.title}</div>
                  </div>
                ) : (
                  <div>
                    <h3 className={`font-headline-md text-headline-md ${
                      idx === 1 ? 'text-on-primary' :
                      idx === 2 ? 'text-background' : 'text-on-background'
                    }`}>{item.title}</h3>
                    <p className={`font-body-md ${
                      idx === 1 ? 'text-label-sm text-on-primary/80' :
                      idx === 2 ? 'text-label-sm text-tertiary mt-base' : 'text-body-md text-tertiary'
                    }`}>{item.desc}</p>
                  </div>
                )}
              </div>
              
              {/* Special content for Continuous Growth card */}
              {idx === 2 && (
                <div className="mt-auto pt-md border-t border-outline-variant/30">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full border-2 border-on-background bg-primary/40"></div>
                    <div className="w-8 h-8 rounded-full border-2 border-on-background bg-secondary/40"></div>
                    <div className="w-8 h-8 rounded-full border-2 border-on-background bg-tertiary/40"></div>
                    <div className="w-8 h-8 rounded-full border-2 border-on-background bg-surface-container flex items-center justify-center text-[10px] text-on-background">+42</div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
