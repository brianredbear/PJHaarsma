import { useEffect, useRef, useState } from 'react'
import '../work-page.css'
import { Frame, Heading } from '../components/WorkPage.jsx'
import Seo from '../components/Seo.jsx'

const TOILETS = 1809493

function ToiletStat() {
  const ref = useRef(null)
  const [count, setCount] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setCount(TOILETS)
      return
    }

    let started = false
    let frame = 0
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started) return
        started = true
        const start = performance.now()
        const duration = 1600
        const tick = (now) => {
          const progress = Math.min(1, (now - start) / duration)
          const eased = 1 - (1 - progress) ** 3
          setCount(Math.round(TOILETS * eased))
          if (progress < 1) frame = requestAnimationFrame(tick)
        }
        frame = requestAnimationFrame(tick)
      },
      { threshold: 0.45 },
    )

    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div className="pjh-g-reveal" data-reveal>
      <div className="pjh-g-stat" ref={ref}>
        <p className="pjh-g-stat__label">The number of toilets</p>
        <p className="pjh-g-stat__num">{count.toLocaleString()}</p>
        <p className="pjh-g-stat__label">cleaned by Joss in the game.</p>
      </div>
    </div>
  )
}

export default function Games() {
  return (
    <article className="pjh-g">
      <Seo
        title="Games | PJ Haarsma"
        description="Writer, designer, and producer of video games — from mobile and web titles to console. Creator of The Super Hero Squad Show game and the Softwire universe games."
        path="/games"
        image="/original/games.avif"
      />
      <section className="pjh-g-band pjh-g-band--hero" aria-labelledby="pjh-g-hero-heading">
        <div className="pjh-g-inner">
          <div className="pjh-g-copy" data-reveal>
            <span className="pjh-g-kicker">Interactive</span>
            <Heading as="h1" id="pjh-g-hero-heading">Games</Heading>
            <div className="pjh-g-body">
              <p>
                Games have always been a passion of PJ’s. He created the first
                online game for a book and was featured on the cover of the{' '}
                <a href="https://www.nytimes.com/2008/10/06/books/06games.html" target="_blank" rel="noreferrer">
                  New York Times
                </a>{' '}
                for his results. Most recently PJ and the Con Man crew published
                their first mobile game, Con Man: The Game. PJ has several other
                games in development and has also used his writing skills to
                create worlds for AAA console games.
              </p>
            </div>
          </div>
          <Frame
            src="/original/games.avif"
            alt="Fans chase convention guests in a comic book panel"
            tilt="right"
            delay={120}
            eager
          />
        </div>
      </section>

      <section className="pjh-g-band pjh-g-band--gold" aria-labelledby="pjh-g-conman-heading">
        <div className="pjh-g-inner">
          <div className="pjh-g-copy" data-reveal>
            <span className="pjh-g-kicker">Mobile</span>
            <Heading id="pjh-g-conman-heading">Con Man the Game!</Heading>
            <div className="pjh-g-body">
              <p>
                PJ Haarsma produced CON MAN: THE GAME for iTunes and Google.
                The game was developed by Frima Studios, who PJ had written for
                in the past. The hilarious mobile game — inspired by the hit
                Lionsgate / Comic-Con HQ show CON MAN — lets players build and
                host the greatest comic book convention in the history of the
                world, with a little help from Nathan Fillion, Alan Tudyk, and
                fun celebrity surprises. It was a finalist for Game of the Year
                at the Mobile Excellence Awards.
              </p>
            </div>
            <div className="pjh-g-play">
              <a
                className="pjh-g-btn"
                href="http://conmantheseries.com/game/"
                target="_blank"
                rel="noreferrer"
              >
                Play it now!
              </a>
              <div className="pjh-g-stores">
                <a href="http://apple.co/2bHvqt6" target="_blank" rel="noreferrer">
                  <img src="/original/games/badge-apple.avif" alt="Download on the App Store" loading="lazy" decoding="async" />
                </a>
                <a href="http://bit.ly/2bxYcvG" target="_blank" rel="noreferrer">
                  <img src="/original/games/badge-google.avif" alt="Get it on Google Play" loading="lazy" decoding="async" />
                </a>
              </div>
            </div>
          </div>
          <Frame
            src="/original/games/con-man-kevin-smith.avif"
            alt="Con Man: The Game screenshot of a convention floor"
            tilt="right"
            delay={120}
          />
        </div>
        <div className="pjh-g-inner pjh-g-inner--stat">
          <ToiletStat />
          <Frame src="/original/games/con-man-wray.avif" alt="Who Wore it Better? Con Man: The Game art" tilt="left" delay={90} />
          <Frame src="/original/games/con-man-wray-bag.avif" alt="Wray Nerely with a convention bag" tilt="right" delay={180} />
        </div>
      </section>

      <section className="pjh-g-band pjh-g-band--paper" aria-labelledby="pjh-g-orbis-heading">
        <div className="pjh-g-inner pjh-g-inner--flip">
          <Frame
            src="/original/games/orbis-hatchling.avif"
            alt="A Rings of Orbis creature hatching from an egg"
            tilt="left"
            tone="paper"
          />
          <div className="pjh-g-copy" data-reveal data-reveal-delay="120">
            <span className="pjh-g-kicker">2006</span>
            <Heading id="pjh-g-orbis-heading">Rings of Orbis</Heading>
            <div className="pjh-g-body">
              <p>
                The Rings of Orbis was the first game ever created for a Young
                Adult Novel. PJ designed the game, all of the item art, and even
                coded large portions of it. It was a home-grown effort that still
                had loyal players after 10 years of play. The game was featured
                on the cover of the{' '}
                <a href="https://www.nytimes.com/2008/10/06/books/06games.html" target="_blank" rel="noreferrer">
                  New York Times
                </a>
                , and received many accolades from educators who used the game to
                attract reluctant readers.
              </p>
            </div>
          </div>
        </div>
        <div className="pjh-g-inner pjh-g-quotes pjh-g-quotes--2">
          <div className="pjh-g-reveal" data-reveal>
            <blockquote className="pjh-g-quote pjh-g-quote--left">
              <p>
                “Haarsma’s games allow marketers a wide variety of involvement
                which makes his games extremely attractive.”
              </p>
              <cite>Stephen Stewart, Senior Creative Director — TMP Worldwide</cite>
            </blockquote>
          </div>
          <div className="pjh-g-reveal" data-reveal data-reveal-delay="120">
            <blockquote className="pjh-g-quote pjh-g-quote--right">
              <p>
                “Be prepared to be utterly exhausted: I have students setting
                their alarms for 5AM to get a jump on the trading for the day.”
              </p>
              <cite>Alan Brand, Reading Specialist</cite>
            </blockquote>
          </div>
        </div>
        <div className="pjh-g-inner pjh-g-shots pjh-g-shots--4">
          <Frame src="/original/games/orbis-rings.avif" alt="The Rings of Orbis hanging in space" tilt="left" />
          <Frame src="/original/games/orbis-spaceport.avif" alt="Rings of Orbis spaceport" tilt="right" delay={80} />
          <Frame src="/original/games/orbis-ship.avif" alt="A Rings of Orbis spacecraft" tilt="left" delay={160} />
          <Frame src="/original/games/orbis-keepers.avif" alt="Keepers concept art from Rings of Orbis" tilt="right" delay={240} />
        </div>
      </section>

      <section className="pjh-g-band pjh-g-band--ink" aria-labelledby="pjh-g-cards-heading">
        <div className="pjh-g-inner pjh-g-inner--flip">
          <Frame
            src="/original/games/cards-house.avif"
            alt="A pyramid of playing cards in the Looking Glass Wars world"
            tilt="right"
          />
          <div className="pjh-g-copy" data-reveal data-reveal-delay="120">
            <span className="pjh-g-kicker">With Frank Beddor</span>
            <Heading id="pjh-g-cards-heading">Card Soldier Wars</Heading>
            <div className="pjh-g-body">
              <p>
                PJ helped author and producer{' '}
                <a href="http://frankbeddor.com" target="_blank" rel="noreferrer">
                  Frank Beddor
                </a>{' '}
                (There’s Something About Mary) translate his New York Times
                best-selling book series into an online game. Filled with
                beautiful art from some of the biggest names in concept art,
                Card Soldier Wars lets fans of the Looking Glass Wars lose
                themselves inside Frank’s world.
              </p>
            </div>
          </div>
        </div>
      </section>
    </article>
  )
}
