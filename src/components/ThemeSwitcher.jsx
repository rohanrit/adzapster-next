'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function ThemeSwitcher() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const root = document.documentElement
    // Dark mode attribute
    root.setAttribute('data-theme', isDark ? 'dark' : 'light')
  }, [isDark])

  return (
    <div className="theme-switcher-container" style={{ position: 'fixed', right: '24px', top: '50%', transform: 'translateY(-50%)', zIndex: 9999, display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {/* Dark Mode Toggle */}
      <motion.button
        className="theme-mode-btn"
        onClick={() => setIsDark(!isDark)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{
          width: '52px',
          height: '52px',
          borderRadius: '50%',
          background: 'var(--bg-card)',
          border: '2.5px solid var(--border)',
          boxShadow: 'var(--shadow-md)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          color: 'var(--text-dark)'
        }}
        title="Toggle Dark/Light Mode"
      >
        {isDark ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="4.22" x2="19.78" y2="5.64"/></svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
        )}
      </motion.button>
    </div>
  )
}
