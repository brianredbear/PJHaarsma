import { Link } from 'react-router-dom'
import '../work-page.css'
import { Frame, Heading } from '../components/WorkPage.jsx'
import RedbearBears from '../components/RedbearBears.jsx'
import Seo from '../components/Seo.jsx'

const STATS = [
  { num: '$1M', top: 'Raised in 24 hours', bottom: 'on Con Man Season 1' },
  { num: '$3.2M', top: 'Overall crowdfund', bottom: 'highest-funded web series' },
  { num: '2015', top: 'Industry history', bottom: 'optioned by Lionsgate' },
]

export default function Producer() {
  return (
    <article className="pjh-g">
      <Seo
        title="Producer | PJ Haarsma"
        description="Emmy-winning producer and founder of Redbear Films. Film, television, and brand work from a Southern California company rooted in commercials and original series."
        path="/pj-haarsma-producer"
        image="/original/producer.avif"
      />

      <section className="pjh-g-band pjh-g-band--paper pjh-g-band--lead" aria-labelledby="pjh-p-hero-heading">
        <div className="pjh-g-inner pjh-g-inner--flip">
          <Frame
            src="/original/producer.avif"
            alt="PJ Haarsma"
            tilt="left"
            eager
          />
          <div className="pjh-g-copy" data-reveal data-reveal-delay="120">
            <Heading as="h1" id="pjh-p-hero-heading">Producer</Heading>
            <div className="pjh-g-body">
              <p>
                Film, television, and brands — produced with the same tool chest.
                PJ Haarsma is an internationally awarded producer and founder of
                Redbear Films, a Southern California company rooted in commercials,
                original series, and franchise-building.
              </p>
            </div>
            <div className="pjh-g-actions">
              <Link className="pjh-g-btn" to="/television">Watch Con Man</Link>
              <Link className="pjh-g-btn" to="/commercial-production">Commercials</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="pjh-g-band pjh-g-band--gold" aria-labelledby="pjh-p-path-heading">
        <div className="pjh-g-inner">
          <div className="pjh-g-copy" data-reveal>
            <span className="pjh-g-kicker">Origin</span>
            <Heading id="pjh-p-path-heading">Still camera, then moving image</Heading>
            <div className="pjh-g-body">
              <p>
                He quit medical school and started as a fashion photographer in
                1987, then became a commercial director, and finally a freelance
                producer. That path — still camera, then moving image, then
                producing — still shapes how he runs a set.
              </p>
            </div>
          </div>
          <Frame
            src="/original/commercials.avif?v=2"
            alt="Not all superheroes wear capes, some wear kilts"
            tilt="right"
            delay={120}
          />
        </div>
      </section>

      <section className="pjh-g-band pjh-g-band--paper" aria-labelledby="pjh-p-conman-heading">
        <div className="pjh-g-inner pjh-g-inner--flip">
          <Frame
            src="/original/tv/season-1.avif"
            alt="Con Man Season One poster: Alan Tudyk under an umbrella as UFOs attack"
            tilt="left"
            size="md"
          />
          <div className="pjh-g-copy" data-reveal data-reveal-delay="120">
            <span className="pjh-g-kicker">Original series</span>
            <Heading id="pjh-p-conman-heading">Con Man</Heading>
            <div className="pjh-g-body">
              <p>
                After the success of The Softwire books and games, Haarsma made
                industry history in 2015 with Con Man: $1 million raised in the
                first twenty-four hours, $3.2 million overall, and the
                highest-funded web series across platforms at the time.
              </p>
              <p>
                The show, starring Nathan Fillion and Alan Tudyk, was optioned
                by Lionsgate and Comic-Con HQ.
              </p>
            </div>
            <Link className="pjh-g-btn" to="/television">Watch Con Man</Link>
          </div>
        </div>
        <div className="pjh-g-inner pjh-g-inner--stat">
          {STATS.map((stat, i) => (
            <div className="pjh-g-reveal" data-reveal data-reveal-delay={i * 90} key={stat.num}>
              <div className="pjh-g-stat">
                <p className="pjh-g-stat__label">{stat.top}</p>
                <p className="pjh-g-stat__num">{stat.num}</p>
                <p className="pjh-g-stat__label">{stat.bottom}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="pjh-g-band pjh-g-band--gold" aria-labelledby="pjh-p-redbear-heading">
        <div className="pjh-g-inner">
          <div className="pjh-g-copy" data-reveal>
            <span className="pjh-g-kicker">Commercials</span>
            <Heading id="pjh-p-redbear-heading">Redbear Films</Heading>
            <div className="pjh-g-body">
              <p>
                Fifteen years of advertising for agencies and brands — from
                Hewlett-Packard and Nokia to original branded content. In 2021
                Haarsma, Andre Marcel, and Drew Lewis received a regional Emmy
                for the UCI Health commercial “Journey.”
              </p>
            </div>
            <div className="pjh-g-actions">
              <a className="pjh-g-btn" href="https://redbear.tv" target="_blank" rel="noopener noreferrer">
                Go to Redbear’s site
              </a>
              <Link className="pjh-g-btn" to="/commercial-production">Commercials</Link>
            </div>
          </div>
          <div className="pjh-g-reveal pjh-g-reveal--md" data-reveal data-reveal-delay="120">
            <div className="pjh-g-redbear">
              <RedbearBears />
              <figure className="pjh-g-frame pjh-g-frame--paper">
                <img src="/original/commercials/redbear.avif" alt="Redbear Films" loading="lazy" decoding="async" />
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section className="pjh-g-band pjh-g-band--ink" aria-labelledby="pjh-p-originals-heading">
        <div className="pjh-g-inner">
          <div className="pjh-g-copy" data-reveal>
            <span className="pjh-g-kicker">Originals</span>
            <Heading id="pjh-p-originals-heading">Beyond the series</Heading>
            <div className="pjh-g-body">
              <p>
                Credits include the feature Devious Beings (2002), Con Man: The
                Game, the award-winning comic Spectrum, and Retro Replay — a
                YouTube series starring Nolan North and Troy Baker,
                Webby-nominated and later distributed by Rooster Teeth.
              </p>
            </div>
            <div className="pjh-g-actions">
              <Link className="pjh-g-btn pjh-g-btn--gold" to="/games">Games</Link>
              <Link className="pjh-g-btn pjh-g-btn--gold" to="/comic-books">Comics</Link>
            </div>
          </div>
          <div className="pjh-g-cover-pair">
            <Frame
              src="/original/games/con-man-wray.avif"
              alt="Wray Nerely from Con Man: The Game"
              tilt="left"
            />
            <Frame
              src="/original/comics.avif"
              alt="Spectrum comic issue covers"
              tilt="right"
              delay={90}
            />
          </div>
        </div>
      </section>
    </article>
  )
}
