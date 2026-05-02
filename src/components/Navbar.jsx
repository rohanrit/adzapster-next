'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/#services', label: 'Services' },
  { href: '/#pricing', label: 'Pricing' },
  { href: '/about-us', label: 'About' },
  { href: '/careers', label: 'Careers' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact-us', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <div className={`navbar-wrapper desktop-only ${scrolled ? 'scrolled' : ''}`}>
        <motion.nav
          className={`navbar ${scrolled ? 'scrolled' : ''}`}
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="nav-container">
            <Link href="/" className="nav-logo">
              <svg className="logo-icon" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2.5" />
                <path d="M12 28L20 12L28 28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="15" y1="23" x2="25" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span className="logo-text">AdTech <span className="accent">Dynamics</span></span>
            </Link>

            <ul className="nav-menu">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`nav-link ${pathname === link.href ? 'active' : ''}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="nav-actions">
              <Link href="/contact-us" className="nav-cta">
                Get Started
              </Link>
            </div>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Top Header */}
      <div className="mobile-top-header mobile-only">
        <Link href="/" className="nav-logo">
          <svg className="logo-icon" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="18" stroke="var(--primary)" strokeWidth="2.5" />
            <path d="M12 28L20 12L28 28" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="15" y1="23" x2="25" y2="23" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span className="logo-text">AdTech <span className="accent">Dynamics</span></span>
        </Link>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="material-symbols-outlined">{menuOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            className="mobile-menu-overlay"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <ul className="mobile-nav-menu">
              {links.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="mobile-nav-link"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  href="/contact-us" 
                  className="mobile-nav-cta"
                  onClick={() => setMenuOpen(false)}
                >
                  Get Started
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Bottom Dock Menu */}
      <div className="mobile-dock-wrapper mobile-only">
        <nav className="mobile-dock">
          <ul className="mobile-dock-menu">
            <li key="home">
              <Link href="/" className={`mobile-dock-link ${pathname === '/' ? 'active' : ''}`}>
                <span className="material-symbols-outlined">home</span>
                <span className="label">Home</span>
              </Link>
            </li>
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`mobile-dock-link ${pathname === link.href ? 'active' : ''}`}
                >
                  <span className="material-symbols-outlined">
                    {link.label === 'About' ? 'info' : 
                     link.label === 'Careers' ? 'work' : 
                     link.label === 'Blog' ? 'article' : 
                     link.label === 'Contact' ? 'mail' : 'link'}
                  </span>
                  <span className="label">{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  )
}
