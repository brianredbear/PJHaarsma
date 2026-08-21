import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { NAV } from '../data/site.js'
import InkRule from './InkRule.jsx'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="pjh-nav">
      <div className="pjh-nav__inner">
        <Link to="/" className="pjh-logo" onClick={() => setMenuOpen(false)}>
          <img src="/logo.svg" alt="PJ Haarsma" className="pjh-logo__img" />
        </Link>

        <nav className="pjh-nav__links" aria-label="Primary">
          {NAV.map((n) => (
            <NavLink key={n.label} to={n.href} className="pjh-nav__link">
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="pjh-nav__tools">
          <button
            className="pjh-nav__burger"
            type="button"
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className="pjh-nav__mobile">
          {NAV.map((n) => (
            <Link key={n.label} to={n.href} onClick={() => setMenuOpen(false)}>
              {n.label}
            </Link>
          ))}
        </div>
      ) : null}
      <InkRule className="pjh-nav__rule" />
    </header>
  )
}
