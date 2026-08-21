export default function SocialLinks() {
  return (
    <nav className="vs-social" aria-label="Social links">
      <a className="vs-fb" href="https://www.facebook.com/pjhaarsma" aria-label="Facebook" rel="noopener noreferrer">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="#f6f0e0" aria-hidden="true">
          <path d="M14.9 3h-2.4C9.9 3 8.6 4.7 8.6 7.2V9.4H6.5v3.5h2.1V21h3.7v-8.1h2.5l.5-3.5h-3V7.4c0-.8.3-1.2 1.2-1.2h1.8V3z" />
        </svg>
      </a>
      <a className="vs-li" href="https://www.linkedin.com/in/pjhaarsma" aria-label="LinkedIn" rel="noopener noreferrer">
        <svg viewBox="0 0 24 24" width="21" height="21" fill="#f6f0e0" aria-hidden="true">
          <path d="M4 9.2h3.6V21H4V9.2zM5.8 3.4a2.1 2.1 0 110 4.2 2.1 2.1 0 010-4.2zM10 9.2h3.5v1.6c.7-1.2 2-1.9 3.6-1.9 2.7 0 4.4 1.7 4.4 4.9V21h-3.6v-6.5c0-1.6-.6-2.5-2-2.5-1.4 0-2.3 1-2.3 2.6V21H10V9.2z" />
        </svg>
      </a>
      <a className="vs-ig" href="https://www.instagram.com/pjhaarsma/" aria-label="Instagram" rel="noopener noreferrer">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#17140f" strokeWidth="2.4" aria-hidden="true">
          <rect x="3.4" y="3.4" width="17.2" height="17.2" rx="5" />
          <circle cx="12" cy="12" r="4.1" />
          <circle cx="17.1" cy="6.9" r="1.3" fill="#17140f" stroke="none" />
        </svg>
      </a>
    </nav>
  )
}
