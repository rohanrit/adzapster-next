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
           <>
             <motion.div
               className="mobile-menu-backdrop"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               onClick={() => setMenuOpen(false)}
             />
             <motion.div
               className="mobile-menu-panel"
               initial={{ x: '100%' }}
               animate={{ x: 0 }}
               exit={{ x: '100%' }}
               transition={{ type: 'spring', damping: 30, stiffness: 300 }}
             >
               <div className="mobile-menu-header">
                 <Link href="/" className="nav-logo" onClick={() => setMenuOpen(false)}>
                   <img src="/images/adzapster-logo-sm.png" alt="Adzapster Logo" style={{ height: '40px', width: 'auto' }} />
                 </Link>
                 <button className="mobile-menu-close" onClick={() => setMenuOpen(false)}>
                   <span className="material-symbols-outlined">close</span>
                 </button>
               </div>
               <motion.ul
                 className="mobile-nav-menu"
                 initial="hidden"
                 animate="visible"
                 variants={{
                   hidden: {},
                   visible: {
                     transition: {
                       staggerChildren: 0.08,
                     },
                   },
                 }}
               >
                 {links.map((link) => (
                   <motion.li
                     key={link.href}
                     variants={{
                       hidden: { opacity: 0, x: 20 },
                       visible: { opacity: 1, x: 0 },
                     }}
                     transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                   >
                     <Link
                       href={link.href}
                       className={`mobile-nav-link ${pathname === link.href ? 'active' : ''}`}
                       onClick={() => setMenuOpen(false)}
                     >
                       {link.label}
                       {pathname === link.href && <span className="mobile-nav-indicator" />}
                     </Link>
                   </motion.li>
                 ))}
                 <motion.li
                   variants={{
                     hidden: { opacity: 0, x: 20 },
                     visible: { opacity: 1, x: 0 },
                   }}
                   transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                 >
                   <Link
                     href="/contact-us"
                     className="mobile-nav-cta"
                     onClick={() => setMenuOpen(false)}
                   >
                     Get Started
                   </Link>
                 </motion.li>
               </motion.ul>
             </motion.div>
           </>
         )}
       </AnimatePresence>
     </>
   )
}
