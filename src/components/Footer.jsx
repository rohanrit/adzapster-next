import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="nav-logo">
              <svg className="logo-icon" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2.5" />
                <path d="M12 28L20 12L28 28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="15" y1="23" x2="25" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span className="logo-text">AdTech <span className="accent">Dynamics</span></span>
            </Link>
            <p>Engineering the future of programmatic advertising with precision and scale.</p>
            <div className="footer-socials">
              {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
                <a key={social} href={`#${social}`} className="social-link">
                  <span className="material-symbols-outlined">{social === 'facebook' ? 'facebook' : social === 'twitter' ? 'X' : social}</span>
                </a>
              ))}
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
          <p>&copy; {new Date().getFullYear()} AdTech Dynamics. All rights reserved. Precision in Every Impression.</p>
        </div>
      </div>
    </footer>
  )
}
