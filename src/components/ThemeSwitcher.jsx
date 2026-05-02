'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function ThemeSwitcher() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    // Check localStorage for saved theme preference
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setIsDark(savedTheme === 'dark')
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setIsDark(prefersDark)
    }
  }, [])

  useEffect(() => {
    const root = document.documentElement
    // Dark mode attribute
    root.setAttribute('data-theme', isDark ? 'dark' : 'light')
    // Save to localStorage
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  return (
    <motion.button
      className="theme-mode-btn"
      onClick={() => setIsDark(!isDark)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      style={{
        width: '42px',
        height: '42px',
        borderRadius: '50%',
        background: isDark ? 'var(--bg-card)' : '#ffffff',
        border: isDark ? '2px solid rgba(255, 255, 255, 0.2)' : '2px solid rgba(0, 0, 0, 0.1)',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        color: isDark ? '#ffffff' : 'var(--text-dark)'
      }}
      title="Toggle Dark/Light Mode"
    >
      {isDark ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="4.22" x2="19.78" y2="5.64"/></svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3A7.07 7.07 0 0 0 21 12.79z"/></svg>
      )}
    </motion.button>
  )
}
