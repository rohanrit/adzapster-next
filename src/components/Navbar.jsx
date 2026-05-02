'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeSwitcher from './ThemeSwitcher'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about-us', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/blog', label: 'Blog' },
  { href: '/careers', label: 'Careers' },
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
              <img src="/images/adzapster-logo-sm.png" alt="Adzapster Logo" style={{ height: '40px', width: 'auto' }} />
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
              <ThemeSwitcher />
            </div>
          </div>
        </motion.nav>
      </div>

       {/* Mobile Top Header */}
       <div className="mobile-top-header mobile-only">
         <Link href="/" className="nav-logo">
           <img src="/images/adzapster-logo-sm.png" alt="Adzapster Logo" style={{ height: '40px', width: 'auto' }} />
         </Link>
         <div className="mobile-header-actions">
           <ThemeSwitcher />
           <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
             <span className="material-symbols-outlined">{menuOpen ? 'close' : 'menu'}</span>
           </button>
         </div>
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
