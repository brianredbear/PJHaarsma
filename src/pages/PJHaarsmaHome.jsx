import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import PortraitScrub from '../components/PortraitScrub'
import InkRule from '../components/InkRule.jsx'
import SocialLinks from '../components/SocialLinks.jsx'
import { RevealOnScroll } from '../components/WorkPage.jsx'

/**
 * PJ Haarsma — Homepage
 * Comic-book / Marblism-inspired redesign.
 *
 * Self-contained: all styles live in the <style> block below.
 */

const NAV = [
  { label: 'TV', href: '/television' },
  { label: 'Games', href: '/games' },
  { label: 'Commercials', href: '/commercial-production' },
  { label: 'Comics', href: '/comic-books' },
  { label: 'Books', href: '/pj-haarsma-books' },
]

function Section({ bg = 'paper', divider = 'line', children }) {
  return (
    <section className={`pjh-band pjh-band--${bg} pjh-band--${divider}`}>
      <div className="pjh-band__inner">{children}</div>
    </section>
  )
}

function WorkCopy({ kicker, title, children, href, button = 'yellow', headingId }) {
  return (
    <div className="pjh-work__copy" data-reveal>
      <span className="pjh-work__kicker">{kicker}</span>
      <div className="pjh-work__head">
        <h2 id={headingId} className="pjh-work__heading">{title}</h2>
        <div className="pjh-work__rule" aria-hidden="true">
          <svg viewBox="0 0 400 14" preserveAspectRatio="none">
            <path d="M1 5C25 2 50 7 80 4C110 1 145 8 180 3C220 6 255 2 290 5C325 8 360 3 399 4L399 10C365 13 330 9 295 12C255 8 220 13 185 9C145 12 110 8 75 11C45 8 20 12 1 9Z" />
            <path d="M1 4C25 6 50 3 80 6C110 4 145 2 180 6C220 3 255 7 290 4C325 2 360 7 399 5L399 11C365 9 330 12 295 8C255 12 220 7 185 12C145 8 110 12 75 7C45 12 20 8 1 10Z" />
            <path d="M1 6C25 1 50 8 80 3C110 6 145 4 180 2C220 8 255 3 290 7C325 4 360 2 399 6L399 9C365 14 330 8 295 13C255 7 220 14 185 8C145 13 110 7 75 12C45 6 20 13 1 8Z" />
            <path d="M1 5C25 4 50 2 80 7C110 3 145 7 180 5C220 2 255 5 290 2C325 7 360 5 399 3L399 12C365 10 330 13 295 9C255 11 220 9 185 13C145 9 110 11 75 8C45 11 20 7 1 11Z" />
          </svg>
        </div>
      </div>
      <div className="pjh-work__body">{children}</div>
      <Link to={href} className={`pjh-work__btn pjh-work__btn--${button}`}>
        See more!
      </Link>
    </div>
  )
}

function WorkFrame({ src, alt, tilt = 'left' }) {
  return (
    <div className="pjh-work__reveal" data-reveal data-reveal-delay="120">
      <div className={`pjh-work__frame pjh-work__frame--${tilt}`}>
        <img src={src} alt={alt} />
      </div>
    </div>
  )
}

export default function PJHaarsmaHome() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="pjh" data-reveal-root>
      <style>{CSS}</style>
      <RevealOnScroll />

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

      <Section bg="paper" divider="none">
        <div className="pjh-hero">
          <div className="pjh-hero__text">
            <h1 className="pjh-hero__title" data-reveal>
              PJ<br />HAARSMA
            </h1>
            <p className="pjh-hero__sub" data-reveal data-reveal-delay="80">
              PJ Haarsma is a leader in the digital age of business &amp; entertainment.
              He is an Emmy winning Producer, Video Game Creator, and Science Fiction Author.
            </p>
            <div className="pjh-hero__cta" data-reveal data-reveal-delay="160">
              <Link to="/pj-haarsma-producer" className="pjh-btn pjh-btn--red">
                See more!
              </Link>
            </div>
          </div>

          <div className="pjh-hero__panel" data-reveal data-reveal-delay="120">
            <div className="pjh-portrait" aria-label="Portrait of PJ Haarsma">
              <PortraitScrub />
              <div className="pjh-portrait__halftone" aria-hidden="true" />
            </div>

            <div className="pjh-bubble" aria-hidden="true">
              <p>“I produced Con Man with Alan Tudyk and Nathan Fillion.”</p>
            </div>

            <div className="pjh-sticker pjh-sticker--emmy" aria-hidden="true">
              <span>🏆</span> EMMY WINNER
            </div>
            <div className="pjh-sticker pjh-sticker--scifi" aria-hidden="true">
              SCI-FI ⚡
            </div>
          </div>
        </div>
      </Section>

      <section className="pjh-work pjh-work--tv" aria-labelledby="pjh-tv-heading">
        <div className="pjh-work__slab">
          <div className="pjh-work__inner">
            <WorkCopy kicker="On Screen" title="Television" href="/television" button="white" headingId="pjh-tv-heading">
              <p>
                PJ Haarsma is the Executive Producer and Co-Showrunner of
                Lionsgate&apos;s hit show, Con Man starring Alan Tudyk and Nathan
                Fillion. The second season is available on the SyFy Channel
                iTunes and Amazon Channels.
              </p>
            </WorkCopy>
            <WorkFrame
              src="/original/tv-portrait.png"
              alt="Alan Tudyk adrift in a paper boat above a giant creature"
              tilt="left"
            />
          </div>
        </div>
      </section>

      <section className="pjh-work pjh-work--paper pjh-work--commercials" aria-labelledby="pjh-commercials-heading">
        <div className="pjh-work__inner pjh-work__inner--flip">
          <WorkFrame
            src="/original/commercials.png"
            alt="Not all superheroes wear capes, some wear kilts"
            tilt="left"
          />
          <WorkCopy kicker="Advertising" title="Commercials" href="/commercial-production" headingId="pjh-commercials-heading">
            <p>
              PJ Haarsma has never strayed far from advertising. He quit med school
              and started as a fashion photographer in 1987. He then became a
              commercial director, and finally a freelance producer. He owns the
              production company,{' '}
              <a href="https://redbear.tv">Redbear Films</a> located in Southern
              California.
            </p>
          </WorkCopy>
        </div>
      </section>

      <section className="pjh-work pjh-work--games" aria-labelledby="pjh-games-heading">
        <div className="pjh-work__inner">
          <WorkCopy kicker="Interactive" title="Games" href="/games" button="white" headingId="pjh-games-heading">
            <p>
              PJ Haarsma has written, designed, and produced video games from
              mobile, to web-based and triple AAA console games.
            </p>
          </WorkCopy>
          <WorkFrame
            src="/original/games.png"
            alt="Fans chase convention guests in a comic book panel"
            tilt="right"
          />
        </div>
      </section>

      <section className="pjh-work pjh-work--paper pjh-work--comics" aria-labelledby="pjh-comics-heading">
        <div className="pjh-work__inner pjh-work__inner--flip">
          <WorkFrame
            src="/original/comics.png"
            alt="Spectrum comic issue covers"
            tilt="left"
          />
          <WorkCopy kicker="In Print" title="Comics" href="/comic-books" headingId="pjh-comics-heading">
            <p>
              PJ Haarsma&apos;s recent award winning comic, Spectrum is out in
              stores now. The animated digital version won Best Comic of the Year
              for 2016.
            </p>
          </WorkCopy>
        </div>
      </section>

      <section className="pjh-work pjh-work--books" aria-labelledby="pjh-books-heading">
        <div className="pjh-work__inner pjh-work__inner--flip">
          <WorkFrame
            src="/original/books.png"
            alt="The Softwire book covers"
            tilt="right"
          />
          <WorkCopy kicker="Novels" title="Books" href="/pj-haarsma-books" button="gold" headingId="pjh-books-heading">
            <p>
              PJ has also published four award winning novels with Candlewick/
              Random House. The Softwire series is a young adult quartet set in
              outer space and provides the world for the Spectrum comics.
            </p>
          </WorkCopy>
        </div>
      </section>

      <Section bg="paper" divider="line">
        <footer className="pjh-footer">
          <div className="pjh-footer__inner" data-reveal>
            <div className="pjh-footer__brand">
              <img src="/logo.svg" alt="PJ Haarsma" className="pjh-logo__img" />
              <p>Connect with PJ across the multiverse.</p>
            </div>
            <SocialLinks />
          </div>
          <div className="pjh-footer__bar">
            ALL RIGHTS RESERVED © PJ HAARSMA {new Date().getFullYear()}
          </div>
        </footer>
      </Section>
    </div>
  )
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Bangers&family=IBM+Plex+Sans:wght@400;500;600;700;800&family=Life+Savers:ital,wght@0,400;0,700;1,400;1,700&display=swap');

.pjh {
  --paper: #FBF3E4;
  --ink: #141414;
  --red: #FF4D3D;
  --blue: #2D6CFF;
  --yellow: #FFD23F;
  --purple: #7B4DFF;
  --green: #2FB673;
  --work: #FFFDF7;
  --panel: #FFFFFF;
  --shadow: 6px 6px 0 var(--ink);
  --shadow-sm: 4px 4px 0 var(--ink);
  --border: 3px solid var(--ink);
  --font-slussen-bold: "slussenBold", "slussenBold Fallback";
  --font-display: var(--font-slussen-bold);
  --font-sfx: 'Bangers', system-ui, sans-serif;
  --font-body: "IBM Plex Sans", sans-serif;
  background: var(--paper);
  color: var(--ink);
  font-family: var(--font-body);
  line-height: 1.55;
  overflow-x: clip;
  min-height: 100vh;
  width: 100%;
  max-width: 100%;
}
.pjh * { box-sizing: border-box; }
.pjh a { color: inherit; text-decoration: none; }
.pjh h1, .pjh h2, .pjh h3, .pjh h4, .pjh h5, .pjh h6 {
  font-family: var(--font-slussen-bold);
}
.pjh p { font-family: "IBM Plex Sans", sans-serif; }

.pjh-band {
  position: relative;
  width: 100%;
  padding-block: clamp(4rem, 9vw, 7rem);
}
.pjh-band__inner {
  width: min(100% - 2.5rem, 1200px);
  margin-inline: auto;
}
.pjh-band--line { border-top: 3px solid var(--ink); }
.pjh-band--none { border-top: 0; }
.pjh-band--zigzag { border-top: 0; }
.pjh-band--paper {
  background: var(--paper);
  background-image: radial-gradient(rgba(20,20,20,0.05) 1.2px, transparent 1.3px);
  background-size: 14px 14px;
}
.pjh-band--ink { background: var(--ink); color: var(--paper); }

.pjh .pjh-work {
  --work-ink: #201e1d;
  --work-gold: #F5C518;
  --work-red: #ec3013;
  --work-paper: #f3f2f2;
  position: relative;
  display: block;
  width: 100%;
  max-width: none;
  margin: 0;
  padding: 0;
  color: var(--work-ink);
  --work-dots: radial-gradient(rgba(20,20,20,0.08) 1.2px, transparent 1.3px);
  background-color: var(--work-paper);
  background-image: var(--work-dots);
  background-size: 14px 14px;
  font-family: "IBM Plex Sans", sans-serif;
  box-sizing: border-box;
  isolation: isolate;
}
.pjh .pjh-work--tv {
  z-index: 1;
}
.pjh .pjh-work--tv .pjh-work__slab {
  position: relative;
  width: 100%;
  max-width: none;
  margin: 0;
  background-color: var(--work-gold);
  background-image: var(--work-dots);
  background-size: 14px 14px;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 3.2vw));
  padding: clamp(72px, 9vw, 150px) 0 clamp(80px, 10vw, 160px);
}
.pjh .pjh-work--paper {
  padding: clamp(72px, 9vw, 130px) 0;
  margin-top: -1px;
}
.pjh .pjh-work--games {
  background-color: #6f8fa6;
  clip-path: polygon(0 0, 100% 3vw, 100% 100%, 0 100%);
  margin-top: -2vw;
  padding: clamp(80px, 10vw, 150px) 0 clamp(90px, 11vw, 160px);
  z-index: 1;
}
.pjh .pjh-work--books {
  --work-dots: radial-gradient(rgba(251,243,228,0.14) 1.2px, transparent 1.3px);
  background-color: var(--work-ink);
  color: var(--work-paper);
  clip-path: polygon(0 3vw, 100% 0, 100% 100%, 0 100%);
  margin-top: -2vw;
  padding: clamp(90px, 11vw, 160px) 0 clamp(64px, 8vw, 120px);
  z-index: 1;
}
.pjh-work__inner {
  width: min(100% - 2.5rem, 1200px);
  margin-inline: auto;
  padding-inline: 0;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.05fr);
  gap: clamp(32px, 5vw, 72px);
  align-items: center;
}
.pjh-work__inner--flip {
  grid-template-columns: minmax(0, 1.05fr) minmax(0, 1fr);
}
.pjh-work__reveal {
  min-width: 0;
}
.pjh-work__copy {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: clamp(18px, 2.2vw, 28px);
  min-width: 0;
}
.pjh-work__kicker {
  font-family: var(--font-slussen-bold);
  font-weight: 700;
  font-size: 12px;
  letter-spacing: .28em;
  text-transform: uppercase;
  background: var(--work-ink);
  color: var(--work-gold);
  padding: 6px 12px;
}
.pjh-work--books .pjh-work__kicker {
  background: var(--work-gold);
  color: var(--work-ink);
}
.pjh .pjh-work__heading {
  margin: 0;
  font-family: var(--font-sfx);
  font-weight: 400;
  font-size: clamp(36px, 4.6vw, 64px);
  line-height: 1;
  letter-spacing: .03em;
  text-transform: uppercase;
}
.pjh-work--books .pjh-work__heading {
  color: var(--work-gold);
}
.pjh-work--games .pjh-work__heading {
  color: #fff;
}
.pjh-work--games .pjh-work__body {
  color: #fff;
}
.pjh-work__head {
  display: flex;
  flex-direction: column;
  width: max-content;
  max-width: 100%;
}
.pjh-work__heading {
  width: max-content;
  max-width: 100%;
}
.pjh-work__rule {
  width: 100%;
  height: 10px;
  color: var(--work-ink);
  line-height: 0;
  animation: comic-rule-jitter .48s steps(1) infinite;
}
.pjh-work__rule svg {
  display: block;
  width: 100%;
  height: 100%;
  overflow: visible;
}
.pjh-work__rule path {
  fill: currentColor;
  opacity: 0;
  animation: comic-rule-frame .48s steps(1) infinite;
}
.pjh-work__rule path:nth-child(1) { animation-delay: 0s; }
.pjh-work__rule path:nth-child(2) { animation-delay: .12s; }
.pjh-work__rule path:nth-child(3) { animation-delay: .24s; }
.pjh-work__rule path:nth-child(4) { animation-delay: .36s; }
.pjh-work--books .pjh-work__rule {
  color: var(--work-gold);
}
.pjh-work--games .pjh-work__rule {
  color: #fff;
}
@keyframes comic-rule-frame {
  0%, 24.9% { opacity: 1; }
  25%, 100% { opacity: 0; }
}
@keyframes comic-rule-jitter {
  0% { transform: rotate(-0.4deg) translate(0, 0); }
  25% { transform: rotate(0.35deg) translate(0.4px, -0.5px); }
  50% { transform: rotate(-0.2deg) translate(-0.5px, 0.4px); }
  75% { transform: rotate(0.45deg) translate(0.3px, 0.3px); }
  100% { transform: rotate(-0.4deg) translate(0, 0); }
}
.pjh-work__body {
  margin: 0;
  max-width: 42ch;
}
.pjh-work__body p {
  margin: 0;
  font-family: "IBM Plex Sans", sans-serif;
  font-size: clamp(16px, 1.4vw, 20px);
  font-weight: 400;
  line-height: 1.5;
  text-wrap: pretty;
}
.pjh-work--tv .pjh-work__body { max-width: 34ch; }
.pjh-work--tv .pjh-work__body p { font-size: clamp(17px, 1.5vw, 22px); line-height: 1.45; }
.pjh-work__body a {
  color: var(--work-red);
  font-weight: 700;
  border-bottom: 2px solid var(--work-red);
}
.pjh-work__btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: "IBM Plex Sans", "IBM Plex Sans Fallback", sans-serif;
  font-weight: 800;
  font-size: 1rem;
  line-height: 1;
  letter-spacing: .01em;
  text-transform: uppercase;
  color: var(--work-ink);
  background-color: var(--work-gold);
  border: 4px solid var(--work-ink);
  border-radius: 6px;
  box-shadow: 8px 8px 0 var(--work-ink);
  padding: 16px 36px;
  transform: rotate(-3deg);
  transition: transform .12s ease, box-shadow .12s ease;
}
.pjh-work__btn--white {
  background-color: #fff;
}
.pjh-work__btn--gold {
  background-color: var(--work-gold);
  color: var(--work-ink);
  border-color: var(--work-ink);
  box-shadow: 8px 8px 0 var(--work-red);
}
.pjh-work__btn:hover {
  transform: rotate(-3deg) translate(3px, 3px);
  box-shadow: 5px 5px 0 var(--work-ink);
}
.pjh-work__btn--gold:hover {
  box-shadow: 5px 5px 0 var(--work-red);
}
.pjh-work__btn:active {
  transform: rotate(-3deg) translate(7px, 7px);
  box-shadow: 1px 1px 0 var(--work-ink);
}
.pjh-work__btn--gold:active {
  box-shadow: 1px 1px 0 var(--work-red);
}
.pjh-work__frame {
  border: 4px solid var(--work-ink);
  box-shadow: 14px 14px 0 var(--work-ink);
  background: #fff;
  line-height: 0;
  overflow: hidden;
}
.pjh-work__frame--left { transform: rotate(-1.5deg); }
.pjh-work__frame--right { transform: rotate(1.5deg); }
.pjh-work--books .pjh-work__frame {
  border-color: var(--work-gold);
  box-shadow: 14px 14px 0 var(--work-gold);
  background: #111;
}
.pjh-work--paper .pjh-work__frame {
  aspect-ratio: 16 / 10;
}
.pjh-work--tv .pjh-work__frame,
.pjh-work--games .pjh-work__frame,
.pjh-work--comics .pjh-work__frame,
.pjh-work--books .pjh-work__frame,
.pjh-work--commercials .pjh-work__frame {
  aspect-ratio: auto;
  background: #111;
}
.pjh-work__frame img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: saturate(1.06) contrast(1.04);
}
.pjh-work--tv .pjh-work__frame img,
.pjh-work--games .pjh-work__frame img,
.pjh-work--comics .pjh-work__frame img,
.pjh-work--books .pjh-work__frame img,
.pjh-work--commercials .pjh-work__frame img {
  height: auto;
  object-fit: contain;
  filter: none;
}
.pjh-band--work { background: var(--work); }

.pjh-zigzag {
  position: absolute;
  top: -24px;
  left: 0;
  width: 100%;
  height: 24px;
  color: var(--ink);
  display: block;
  pointer-events: none;
}

.pjh-section-head {
  display: grid;
  justify-items: center;
  gap: 0.85rem;
  text-align: center;
  margin-bottom: 2.5rem;
}
.pjh-section-head__title {
  margin: 0;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: clamp(2rem, 5vw, 3.2rem);
  line-height: 1.1;
}
.pjh-band--ink .pjh-section-head__title { color: var(--paper); }
.pjh-scribble {
  width: 180px;
  height: 14px;
  color: var(--red);
}

.pjh-btn {
  display: inline-flex; align-items: center; justify-content: center; gap: .4em;
  font-family: "IBM Plex Sans", "IBM Plex Sans Fallback", sans-serif;
  font-weight: 800; font-size: 1rem; line-height: 1;
  letter-spacing: .01em; text-transform: uppercase;
  padding: .85rem 1.6rem;
  color: var(--ink);
  background-color: var(--yellow);
  border: 4px solid var(--ink); border-radius: 6px;
  box-shadow: 7px 7px 0 var(--ink);
  cursor: pointer;
  transform: rotate(-2.5deg);
  transition: transform .12s ease, box-shadow .12s ease;
}
.pjh-btn:hover { transform: rotate(-2.5deg) translate(3px,3px); box-shadow: 4px 4px 0 var(--ink); }
.pjh-btn:active { transform: rotate(-2.5deg) translate(6px,6px); box-shadow: 1px 1px 0 var(--ink); }
.pjh-btn--sm { padding: .45rem .95rem; border-width: 3px; box-shadow: 5px 5px 0 var(--ink); }
.pjh-btn--sm:hover { box-shadow: 3px 3px 0 var(--ink); }
.pjh-btn--red {
  background-color: var(--red);
  color: var(--yellow);
}
.pjh-btn--ghost {
  background-color: var(--panel);
  color: var(--ink);
  transform: rotate(2deg);
}
.pjh-btn--ghost:hover { transform: rotate(2deg) translate(3px,3px); }
.pjh-btn--ghost:active { transform: rotate(2deg) translate(6px,6px); }

.pjh-eyebrow {
  display: inline-block;
  font-family: var(--font-sfx); letter-spacing: .04em;
  font-size: 1.1rem; padding: .2rem .8rem;
  color: #fff; border: var(--border); border-radius: 999px;
  transform: rotate(-2deg); box-shadow: var(--shadow-sm);
}
.pjh-eyebrow--red { background: var(--red); }
.pjh-eyebrow--blue { background: var(--blue); }
.pjh-eyebrow--yellow { background: var(--yellow); color: var(--ink); }
.pjh-eyebrow--purple { background: var(--purple); }
.pjh-eyebrow--green { background: var(--green); }

.pjh-nav {
  position: sticky;
  top: 0;
  z-index: 50;
  background-color: #201e1d;
  background-image: radial-gradient(rgba(251,243,228,0.14) 1.2px, transparent 1.3px);
  background-size: 14px 14px;
  border-bottom: 0;
  min-height: 70px;
  padding-top: env(safe-area-inset-top);
}
.pjh-nav__inner {
  max-width: 1200px; margin: 0 auto; padding: 0 1.25rem;
  min-height: 70px;
  display: flex; align-items: center; justify-content: space-between; gap: 1rem;
}
.pjh-logo { display: inline-flex; align-items: center; min-width: 0; }
.pjh-logo__img { display: block; height: 48px; width: auto; max-width: min(220px, 52vw); }
.pjh-nav__links { display: flex; align-items: stretch; gap: 0; margin-left: auto; }
.pjh-nav__tools { display: flex; align-items: center; gap: .15rem; flex-shrink: 0; }
.pjh .pjh-nav__link {
  font-family: var(--font-sfx);
  font-weight: 300;
  font-size: 16px;
  letter-spacing: .03em;
  text-transform: uppercase;
  color: #fff;
  paint-order: stroke fill;
  display: flex; align-items: center;
  height: 70px;
  padding: 0 23px;
  box-shadow: inset 0 0 0 0 transparent;
  transition: color .15s ease, box-shadow .15s ease;
}
.pjh .pjh-nav__link:hover, .pjh .pjh-nav__link.active {
  color: #e74c3c;
  box-shadow: inset 0 4px 0 0 #e74c3c;
}
.pjh-nav__search-wrap { display: flex; align-items: center; gap: .6rem; padding: 0 12px 0 8px; }
.pjh-nav__search {
  display: inline-flex; align-items: center; justify-content: center;
  background: none; border: 0; padding: .4rem; cursor: pointer; color: #fff;
}
.pjh-nav__search:hover { color: #e74c3c; }
.pjh-nav__search-form input {
  font-family: var(--font-sfx);
  font-size: 15px;
  letter-spacing: .03em;
  color: #fff;
  border: 0;
  border-bottom: 2px solid #fff;
  background: transparent;
  padding: .25rem .2rem;
  width: 10rem;
  outline: none;
}
.pjh-nav__burger {
  display: none; flex-direction: column; gap: 4px;
  background: none; border: none; cursor: pointer; padding: .4rem;
}
.pjh-nav__burger span { width: 26px; height: 3px; background: #fff; border-radius: 3px; }
.pjh-nav__mobile {
  display: flex; flex-direction: column; gap: 0; padding: .25rem 1.25rem 1rem;
  border-top: 1px solid rgba(251,243,228,.16);
  background-color: #201e1d;
  background-image: radial-gradient(rgba(251,243,228,0.14) 1.2px, transparent 1.3px);
  background-size: 14px 14px;
}
.pjh .pjh-nav__mobile a {
  font-family: var(--font-sfx);
  font-weight: 300;
  letter-spacing: .03em;
  text-transform: uppercase;
  padding: .7rem 0;
  border-bottom: 1px solid rgba(251,243,228,.12);
  color: #fff;
  paint-order: stroke fill;
}
.pjh .pjh-nav__mobile a:hover { color: #e74c3c; }
.pjh-nav__rule {
  position: absolute;
  left: 0;
  right: 0;
  bottom: -6px;
  height: 12px;
  color: #ece3d2;
  line-height: 0;
  pointer-events: none;
  z-index: 2;
}
.pjh-nav__rule path {
  fill: currentColor;
  opacity: 0;
}
.pjh-nav__rule path:nth-child(1) { opacity: 1; }
.pjh-nav__rule svg {
  display: block;
  width: 100%;
  height: 100%;
  overflow: visible;
}

.pjh-band .pjh-hero {
  display: grid; grid-template-columns: 1.05fr .95fr; gap: 3rem; align-items: center;
  max-width: none; width: 100%; margin: 0; padding: 0;
}
.pjh .pjh-hero__title {
  font-family: var(--font-sfx);
  font-weight: 400;
  font-size: clamp(2.7rem, 12vw, 7.25rem); line-height: .92; margin: 1rem 0 1.2rem;
  letter-spacing: .03em;
}
.pjh-hero__sub {
  font-family: "IBM Plex Sans", "IBM Plex Sans Fallback", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: clamp(16px, 1.4vw, 20px);
  line-height: 1.5;
  max-width: 42ch;
  margin-bottom: 1.6rem;
}
.pjh-hero__sub .dot { color: var(--red); }
.pjh-hero__cta { display: flex; gap: .8rem; flex-wrap: wrap; }
.pjh-hero__panel { position: relative; }

.pjh-portrait {
  position: relative; aspect-ratio: 4/5; border: var(--border); border-radius: 18px;
  background: linear-gradient(135deg, var(--blue), var(--purple));
  box-shadow: var(--shadow); overflow: hidden;
  display: flex; align-items: center; justify-content: center;
}
.pjh-portrait__video {
  position: absolute; inset: 0; width: 100%; height: 100%;
  object-fit: cover; object-position: center 18%; pointer-events: none;
}
.pjh-portrait__halftone {
  position: absolute; inset: 0; pointer-events: none;
  background-image: radial-gradient(rgba(255,255,255,.35) 2px, transparent 2.2px);
  background-size: 16px 16px; mix-blend-mode: overlay;
}
.pjh-bubble {
  position: absolute; left: -8%; bottom: 8%; max-width: 220px;
  background: #fff; border: var(--border); border-radius: 16px;
  padding: .8rem 1rem; box-shadow: var(--shadow-sm); font-weight: 700; font-size: .95rem;
}
.pjh-bubble::after {
  content: ""; position: absolute; right: 30px; bottom: -16px;
  border-width: 16px 14px 0 0; border-style: solid;
  border-color: var(--ink) transparent transparent transparent;
}
.pjh-sticker {
  position: absolute; font-family: var(--font-sfx); letter-spacing: .03em;
  border: var(--border); border-radius: 999px; padding: .35rem .8rem;
  box-shadow: var(--shadow-sm); font-size: 1rem; display: inline-flex; align-items: center; gap: .3rem;
  animation: pjh-float 4s ease-in-out infinite;
}
.pjh-sticker--emmy { top: -14px; right: 8%; background: var(--yellow); transform: rotate(6deg); }
.pjh-sticker--scifi { top: 40%; right: -8%; background: var(--red); color:#fff; transform: rotate(-8deg); animation-delay: .8s; }
@keyframes pjh-float { 0%,100% { translate: 0 0; } 50% { translate: 0 -8px; } }

.pjh-band .pjh-footer { margin: 0; padding: 0; border: 0; background: transparent; }
.pjh-footer__inner {
  display: flex; justify-content: space-between; align-items: center; gap: 2rem; flex-wrap: wrap;
}
.pjh-footer__brand p { font-weight: 600; margin-top: .4rem; max-width: 26ch; }
.vs-social { display: flex; gap: 14px; }
.vs-social a {
  display: grid; place-items: center;
  width: 46px; height: 46px;
  border: 2px solid #17140f; border-radius: 50%;
  box-shadow: 4px 4px 0 #17140f;
  text-decoration: none;
  transition: transform .12s steps(2);
}
.vs-social a:focus-visible { outline: 2px solid #17140f; outline-offset: 3px; }
.vs-fb { background: #d4322a; transform: rotate(-4deg); }
.vs-li { background: #1f4fa8; transform: rotate(3deg); }
.vs-ig { background: #e8a33d; transform: rotate(-2deg); }
.vs-fb:hover { transform: rotate(-4deg) translate(-2px,-2px); }
.vs-li:hover { transform: rotate(3deg) translate(-2px,-2px); }
.vs-ig:hover { transform: rotate(-2deg) translate(-2px,-2px); }
.pjh-footer__bar {
  border-top: 2px dashed var(--ink); text-align: center;
  padding: 1.5rem 0 0; margin-top: 2rem;
  font-family: var(--font-display); font-weight: 600; font-size: .8rem; letter-spacing: .05em;
}

@media (max-width: 860px) {
  .pjh-nav__links { display: none; }
  .pjh-nav__burger { display: flex; }
  .pjh-nav__inner { padding: 0 1rem; gap: .6rem; }
  .pjh-logo__img { height: 36px; max-width: min(180px, 58vw); }
  .pjh-nav__search-form input { width: 7.5rem; color: #fff; }
  .pjh-band.pjh-band--paper.pjh-band--none { padding-block: 2rem 2.4rem; }
  .pjh-band .pjh-hero {
    display: flex;
    flex-direction: column;
    gap: 1.15rem;
    align-items: stretch;
  }
  .pjh-hero__text { display: contents; }
  .pjh .pjh-hero__title {
    order: 1;
    margin: 0;
    font-size: clamp(2.4rem, 12vw, 4.4rem);
    line-height: .9;
    max-width: 100%;
  }
  .pjh-hero__panel {
    order: 2;
    width: 100%;
    max-width: min(380px, 100%);
    margin: .35rem auto .15rem;
    padding: 14px 10px 6px;
  }
  .pjh-hero__sub {
    order: 3;
    max-width: none;
    margin-bottom: 0;
    font-size: 1rem;
  }
  .pjh-hero__cta { order: 4; }
  .pjh-bubble {
    left: 6%;
    bottom: 7%;
    max-width: min(210px, 74%);
    font-size: .82rem;
    padding: .65rem .8rem;
  }
  .pjh-sticker { font-size: .85rem; padding: .28rem .65rem; }
  .pjh-sticker--emmy { top: 2px; right: 6%; }
  .pjh-sticker--scifi { top: 42%; right: 0; }
  .pjh-work__inner,
  .pjh-work__inner--flip {
    grid-template-columns: 1fr;
    gap: 1.6rem;
  }
  .pjh-work__inner--flip .pjh-work__copy { order: 1; }
  .pjh-work__inner--flip .pjh-work__reveal,
  .pjh-work__inner--flip .pjh-work__frame { order: 2; }
  .pjh .pjh-work--tv .pjh-work__slab,
  .pjh .pjh-work--paper,
  .pjh .pjh-work--games,
  .pjh .pjh-work--books {
    padding-block: 3.4rem 3.8rem;
  }
  .pjh .pjh-work__heading { font-size: clamp(2rem, 11vw, 3.2rem); }
  .pjh-work__frame { box-shadow: 8px 8px 0 var(--ink); }
  .pjh-work--books .pjh-work__frame { box-shadow: 8px 8px 0 var(--work-gold); }
  .pjh-work__btn { padding: 14px 28px; }
}
@media (max-width: 520px) {
  .pjh-footer__inner { flex-direction: column; align-items: flex-start; }
  .pjh-nav__search-wrap { padding: 0 4px 0 0; }
  .pjh-hero__panel { padding: 12px 4px 4px; }
  .pjh-portrait { border-radius: 14px; }
}
@media (prefers-reduced-motion: reduce) {
  .pjh-sticker { animation: none; }
  .pjh-btn, .vs-social a, .pjh-work__btn { transition: none; }
  .pjh-work__rule,
  .pjh-work__rule path { animation: none; }
  .pjh-work__rule path:nth-child(1) { opacity: 1; }
  .pjh-work__rule path:nth-child(n+2) { opacity: 0; }
}
`
