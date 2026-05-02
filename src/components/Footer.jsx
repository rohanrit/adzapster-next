'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

function Year() {
  const [year, setYear] = useState(2026)
  useEffect(() => setYear(new Date().getFullYear()), [])
  return <>{year}</>
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="nav-logo">
              <img src="/images/adzapster-logo-sm.png" alt="Adzapster Logo" style={{ height: '40px', width: 'auto' }} />
            </Link>
            <p>Engineering the future of programmatic advertising with precision and scale.</p>
            <div className="footer-socials">
              <a href="#facebook" className="social-link" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.236 2.686.236v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#twitter" className="social-link" aria-label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.154l-6.827 7.733 8.04 10.267h-6.303l-4.94-6.437L4.9 20.517H1.745l7.174-8.131L2.5 2.25h6.486l4.435 5.873L18.244 2.25zm-1.28 16.061h1.716L9.04 3.732H7.28l9.684 14.579z"/>
                </svg>
              </a>
              <a href="#linkedin" className="social-link" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.769v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.902V9h3.644v1.561h.052c.508-.96 1.749-1.967 3.605-1.967 3.848 0 4.578 2.526 4.578 5.813v7.045zM5.337 7.433a2.2 2.2 0 11-.002-4.4 2.2 2.2 0 010 4.4zm1.885 13.019H3.453V9h3.769v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#instagram" className="social-link" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.646.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.756-4.899 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.777-1.698-4.926-4.926-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.756 4.899-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.052 7.052.072 8.332.072 8.741.072 12c0 3.259-.014 3.668-.072 4.948-.2 4.356 2.412 4.899 4.926C20.332 23.928 20.741 24 24 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-4.926.058-1.28.07-1.689.07-4.949 0-3.259-.014-3.668-.072-4.948-.2-4.356-2.412-4.899-4.926C20.668.072 20.259.072 17 0zm-4.5 7.5a4.5 4.5 0 014.5 4.5 4.5 4.5 0 01-4.5 4.5 4.5 4.5 0 01-4.5-4.5 4.5 4.5 0 014.5-4.5zM12 9a3 3 0 100 6 3 3 0 000-6zm6.5-4.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Platform</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about-us">About Us</Link></li>
              <li><Link href="/blog">Our Blog</Link></li>
              <li><Link href="/careers">Careers</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Support</h4>
            <ul>
              <li><Link href="/contact-us">Contact Us</Link></li>
              <li><Link href="/#faq">FAQs</Link></li>
              <li><Link href="/legal-policies#privacy">Privacy Policy</Link></li>
              <li><Link href="/legal-policies#terms">Terms of Service</Link></li>
              <li><Link href="/legal-policies#cookie">Cookie Policy</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Location</h4>
            <ul>
              <li>One World Trade Center</li>
              <li>Suite 85</li>
              <li>New York, NY 10007</li>
              <li>United States</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; <Year /> AdTech Dynamics. All rights reserved. Precision in Every Impression.</p>
        </div>
      </div>
    </footer>
  )
}
