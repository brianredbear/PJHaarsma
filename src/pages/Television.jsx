import '../work-page.css'
import { Frame, Heading } from '../components/WorkPage.jsx'
import Seo from '../components/Seo.jsx'

const PRESS = [
  {
    src: '/original/tv/fast-company.avif',
    alt: 'Fast Company: How Con Man rallied geek fans',
    href: 'https://www.fastcocreate.com/3051619/how-con-man-rallied-geek-fans-and-defied-hollywood-convention',
    label: 'Fast Company',
  },
  {
    src: '/original/tv/orange-coast.avif',
    alt: 'Orange Coast Magazine: Talking with Con Man’s P.J. Haarsma',
    href: 'http://www.orangecoast.com/eventsartist-spotlight/talking-with-p-j-haarsma',
    label: 'Orange Coast',
  },
  {
    src: '/original/tv/review-fix.avif',
    alt: 'Review Fix Exclusive: PJ Haarsma talks Con Man',
    href: 'http://reviewfix.com/2015/10/review-fix-exclusive-pj-haarsma-talks-con-man-sneak-peek/',
    label: 'Review Fix',
  },
]

export default function Television() {
  return (
    <article className="pjh-g">
      <Seo
        title="Television | PJ Haarsma"
        description="Executive producer and co-showrunner of Con Man with Alan Tudyk and Nathan Fillion. Record-breaking crowdfund, then Lionsgate and Comic-Con HQ."
        path="/television"
        image="/original/tv-portrait.avif"
      />
      <section className="pjh-g-band pjh-g-band--gold pjh-g-band--lead" aria-labelledby="pjh-tv-hero-heading">
        <div className="pjh-g-inner">
          <div className="pjh-g-copy" data-reveal>
            <span className="pjh-g-kicker">On Screen</span>
            <Heading as="h1" id="pjh-tv-hero-heading">Television</Heading>
            <div className="pjh-g-body">
              <p>
                PJ Haarsma, along with his partners Alan Tudyk and Nathan Fillion,
                broke records when they crowdfunded Season 1 of Con Man to the
                tune of $3.2 million. Partnering with Lionsgate and their premium
                digital channel Comic-Con HQ, PJ expanded the fan base — and
                Season 2 became the No. 1 show on the channel. Season 3 is in
                development.
              </p>
            </div>
            <div className="pjh-g-actions">
              <a className="pjh-g-btn" href="http://conmantheseries.com" target="_blank" rel="noreferrer">
                Go to Con Man site
              </a>
              <a className="pjh-g-btn" href="https://store.conmantheseries.com" target="_blank" rel="noreferrer">
                Watch Con Man now
              </a>
            </div>
          </div>
          <Frame
            src="/original/tv-portrait.avif?v=2"
            alt="Alan Tudyk adrift in a paper boat above a giant creature"
            tilt="right"
            delay={120}
            eager
          />
        </div>
      </section>

      <section className="pjh-g-band pjh-g-band--paper" aria-labelledby="pjh-tv-s1-heading">
        <div className="pjh-g-inner pjh-g-inner--flip">
          <Frame
            src="/original/tv/season-1.avif"
            alt="Con Man Season One poster: Alan Tudyk under an umbrella as UFOs attack"
            tilt="left"
            size="md"
          />
          <div className="pjh-g-copy" data-reveal data-reveal-delay="120">
            <span className="pjh-g-kicker">Season One</span>
            <Heading id="pjh-tv-s1-heading">The convention circuit</Heading>
            <div className="pjh-g-body">
              <p>
                A decade has passed since Wray Nerely (Alan Tudyk) was an actor
                on the hit — well, cult hit — sci-fi show Spectrum. Wray’s career
                has stalled in the vacuum of space while his best friend and
                former co-star, Jack Moore (Nathan Fillion), has hit warp speed.
              </p>
              <p>
                Aided by his truly certifiable convention booker, Bobbie (Mindy
                Sterling), Wray navigates the sci-fi convention circuit alongside
                a host of colorful who’s-whos and has-beens. He struggles with the
                trappings of a stagnant career, the adoration of a rabid fanbase,
                and an industry that only sees him as a quirky spaceship pilot.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pjh-g-band pjh-g-band--gold" aria-labelledby="pjh-tv-s2-heading">
        <div className="pjh-g-inner">
          <div className="pjh-g-copy" data-reveal>
            <span className="pjh-g-kicker">Season Two</span>
            <Heading id="pjh-tv-s2-heading">Dr. Cop Lawyer</Heading>
            <div className="pjh-g-body">
              <p>
                Wray Nerely must confess to his best friend and A-list celebrity,
                Jack Moore, that he wants nothing to do with the Spectrum movie
                Jack is bent on producing. Meanwhile, Wray attempts to land a
                role in a primetime procedural drama, Dr. Cop Lawyer, that could
                jumpstart his career — from B-movie sci-fi actor to respected
                mainstream leading man.
              </p>
              <p>
                But can Wray maintain the respect of his Spectrum fans, former
                co-stars, and best friend Jack in the process? More importantly,
                does he even want to?
              </p>
            </div>
          </div>
          <Frame
            src="/original/tv/season-2.avif"
            alt="Con Man Season Two artwork"
            tilt="right"
            delay={120}
            size="md"
          />
        </div>
      </section>

      <section className="pjh-g-band pjh-g-band--paper" aria-labelledby="pjh-tv-quotes-heading">
        <div className="pjh-g-inner pjh-g-inner--stack">
          <div className="pjh-g-copy" data-reveal>
            <span className="pjh-g-kicker">Reviews</span>
            <Heading id="pjh-tv-quotes-heading">The word on Con Man</Heading>
          </div>
          <div className="pjh-g-quotes pjh-g-quotes--3 pjh-g-quotes--flush">
            <div className="pjh-g-reveal" data-reveal>
              <blockquote className="pjh-g-quote pjh-g-quote--left">
                <p>“Hysterical, character-driven, laugh fest.”</p>
                <cite>Nerdist</cite>
              </blockquote>
            </div>
            <div className="pjh-g-reveal" data-reveal data-reveal-delay="90">
              <blockquote className="pjh-g-quote pjh-g-quote--mid">
                <p>“A cyber Holy Grail!”</p>
                <cite>Fast Company</cite>
              </blockquote>
            </div>
            <div className="pjh-g-reveal" data-reveal data-reveal-delay="180">
              <blockquote className="pjh-g-quote pjh-g-quote--right">
                <p>“Drop whatever you are doing now and watch it.”</p>
                <cite>Outer Places</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <section className="pjh-g-band pjh-g-band--ink" aria-labelledby="pjh-tv-press-heading">
        <div className="pjh-g-inner pjh-g-inner--stack">
          <div className="pjh-g-copy" data-reveal>
            <span className="pjh-g-kicker">Press</span>
            <Heading id="pjh-tv-press-heading">Further reading</Heading>
          </div>
          <div className="pjh-g-quotes pjh-g-quotes--3 pjh-g-quotes--flush">
            {PRESS.map((item, i) => (
              <Frame
                key={item.label}
                src={item.src}
                alt={item.alt}
                href={item.href}
                tilt={i % 2 === 0 ? 'left' : 'right'}
                delay={i * 90}
              />
            ))}
          </div>
          <div className="pjh-g-reveal" data-reveal data-reveal-delay="80">
            <figure className="pjh-g-frame pjh-g-frame--left pjh-g-frame--paper">
              <img src="/original/tv/logos.avif" alt="Lionsgate, Comic-Con HQ, Redbear Films, Amazon Channels, iTunes, and Steam" loading="lazy" decoding="async" />
            </figure>
          </div>
        </div>
      </section>
    </article>
  )
}
