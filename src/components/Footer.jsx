'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import BoxesBackground from './BoxesBackground'

function Year() {
  const [year, setYear] = useState(2026)
  useEffect(() => setYear(new Date().getFullYear()), [])
  return <>{year}</>
}

export default function Footer() {
  return (
    <footer className="footer">
      {/* Animated Box Pattern Background */}
      <BoxesBackground />

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
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
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
          <p>&copy; <Year /> Adzapster. All rights reserved. Precision in Every Impression.</p>
        </div>
      </div>
    </footer>
  )
}
