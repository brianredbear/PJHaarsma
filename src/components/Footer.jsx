import { Link } from 'react-router-dom'
import SocialLinks from './SocialLinks.jsx'
import { NAV } from '../data/site.js'

export default function Footer() {
  return (
    <footer className="pjh-footer">
      <div className="pjh-footer__shell">
        <div className="pjh-footer__inner" data-reveal>
          <div className="pjh-footer__brand">
            <Link to="/" className="pjh-logo">
              PJ Haarsma
            </Link>
            <p>Connect with PJ across the multiverse.</p>
          </div>
          <nav className="pjh-footer__nav" aria-label="Footer">
            {NAV.map((n) => (
              <Link key={n.label} to={n.href} className="pjh-footer__link">
                {n.label}
              </Link>
            ))}
          </nav>
          <SocialLinks />
        </div>
        <div className="pjh-footer__bar">
          ALL RIGHTS RESERVED © PJ HAARSMA {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  )
}
