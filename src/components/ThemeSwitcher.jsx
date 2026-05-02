'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const themes = [
  { name: 'Original', color: '#F36428', dark: '#d4541e', light: '#FF8A50', glow: 'rgba(243, 100, 40, 0.18)' },
  { name: 'Neon Green', color: '#b5ff6d', dark: '#8bc34a', light: '#d4ff9d', glow: 'rgba(181, 255, 109, 0.25)' },
  { name: 'Teal Blue', color: '#13e195', dark: '#0fb177', light: '#67f3c1', glow: 'rgba(19, 225, 149, 0.25)' },
  { name: 'Neon Yellow', color: '#fff312', dark: '#d4cc00', light: '#fff865', glow: 'rgba(255, 243, 18, 0.25)' },
  { name: 'Neon Blue', color: '#8df0cc', dark: '#5ec9a3', light: '#bcf9e3', glow: 'rgba(141, 240, 204, 0.25)' },
  { name: 'Purple', color: '#aa69fe', dark: '#8147d1', light: '#c59aff', glow: 'rgba(170, 105, 254, 0.25)' },
]

export default function ThemeSwitcher() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeTheme, setActiveTheme] = useState(themes[0])
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const root = document.documentElement
    
    // Theme colors
    root.style.setProperty('--primary', activeTheme.color)
    root.style.setProperty('--primary-dark', activeTheme.dark)
    root.style.setProperty('--primary-light', activeTheme.light)
    root.style.setProperty('--primary-glow', activeTheme.glow)
    
    // Dynamic shape variables
    root.style.setProperty('--shape-primary-border', `${activeTheme.color}66`)
    root.style.setProperty('--shape-primary-bg', `${activeTheme.color}14`)
    
    // Dark mode attribute
    root.setAttribute('data-theme', isDark ? 'dark' : 'light')
  }, [activeTheme, isDark])

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

      {/* Color Palette Toggle */}
      <motion.button
        className="theme-toggle-btn"
        onClick={() => setIsOpen(!isOpen)}
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
          color: 'var(--primary)',
        }}
        title="Accent Colors"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z"/></svg>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="theme-options"
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.8 }}
            style={{
              position: 'absolute',
              right: '60px',
              top: '0',
              background: 'var(--bg-white)',
              padding: '12px',
              borderRadius: 'var(--radius-lg)',
              boxShadow: 'var(--shadow-lg)',
              border: '1px solid var(--border)',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              minWidth: '160px'
            }}
          >
            <p style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '1px' }}>Select Theme</p>
            {themes.map((t) => (
              <button
                key={t.name}
                onClick={() => {
                  setActiveTheme(t)
                  setIsOpen(false)
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '8px',
                  borderRadius: 'var(--radius-sm)',
                  background: activeTheme.name === t.name ? 'rgba(0,0,0,0.03)' : 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  width: '100%',
                  transition: 'background 0.2s'
                }}
              >
                <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: t.color, border: '1px solid rgba(0,0,0,0.1)' }} />
                <span style={{ fontSize: '0.85rem', fontWeight: activeTheme.name === t.name ? 600 : 500, color: 'var(--text-dark)' }}>{t.name}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
