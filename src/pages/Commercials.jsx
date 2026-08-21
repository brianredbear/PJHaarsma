import '../work-page.css'
import { Frame, Heading, usePageTitle } from '../components/WorkPage.jsx'
import RedbearBears from '../components/RedbearBears.jsx'

const CLIENTS = [
  { src: '/original/commercials/tcb.jpg', alt: 'Taco Bell' },
  { src: '/original/commercials/sce.jpg', alt: 'Southern California Edison' },
  { src: '/original/commercials/ps.jpg', alt: 'Public Storage' },
  { src: '/original/commercials/lz.jpg', alt: 'LegalZoom' },
  { src: '/original/commercials/hp.jpg', alt: 'HP' },
  { src: '/original/commercials/bb.jpg', alt: 'Best Buy' },
  { src: '/original/commercials/inv.jpg', alt: 'Invisalign' },
  { src: '/original/commercials/frima.jpg', alt: 'Frima' },
  { src: '/original/commercials/il.jpg', alt: 'iLASIK' },
  { src: '/original/commercials/hn.jpg', alt: 'Health Net' },
]

export default function Commercials() {
  usePageTitle('Commercials | PJ Haarsma')

  return (
    <article className="pjh-g">
      <section className="pjh-g-band pjh-g-band--paper pjh-g-band--lead" aria-labelledby="pjh-c-hero-heading">
        <div className="pjh-g-inner pjh-g-inner--flip">
          <Frame
            src="/original/commercials.png"
            alt="Not all superheroes wear capes, some wear kilts"
            tilt="left"
          />
          <div className="pjh-g-copy" data-reveal data-reveal-delay="120">
            <span className="pjh-g-kicker">Advertising</span>
            <Heading as="h1" id="pjh-c-hero-heading">Commercials</Heading>
            <div className="pjh-g-body">
              <p>
                PJ Haarsma began creating content in 1987 as a fashion
                photographer. In the late 80’s he met Alex Bogusky, a young art
                director at Crispin &amp; Porter, and PJ has been involved in
                some form of advertising ever since.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pjh-g-band pjh-g-band--gold" aria-labelledby="pjh-c-redbear-heading">
        <div className="pjh-g-inner">
          <div className="pjh-g-copy" data-reveal>
            <span className="pjh-g-kicker">Production</span>
            <Heading id="pjh-c-redbear-heading">Redbear Films</Heading>
            <div className="pjh-g-body">
              <p>
                PJ works freelance on the agency side as well as working
                directly with the client. Having owned his own production
                company,{' '}
                <a href="https://redbear.tv" target="_blank" rel="noreferrer">
                  Redbear Films
                </a>
                , PJ brings great value to both sides of the coin. He can assist
                an agency with difficult jobs that need experience to pull it
                off, or help a brand bring their strategy to life outside the
                agency.
              </p>
              <p>
                In 2021 Haarsma, Andre Marcel, and Drew Lewis received a
                regional Emmy for the UCI Health commercial “Journey.”
              </p>
            </div>
            <a
              className="pjh-g-btn"
              href="https://redbear.tv"
              target="_blank"
              rel="noreferrer"
            >
              Go to Redbear’s site
            </a>
          </div>
          <div className="pjh-g-reveal pjh-g-reveal--md" data-reveal data-reveal-delay="120">
            <div className="pjh-g-redbear">
              <RedbearBears />
              <figure className="pjh-g-frame pjh-g-frame--paper">
                <img src="/original/commercials/redbear.png" alt="Redbear Films" />
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section className="pjh-g-band pjh-g-band--paper" aria-labelledby="pjh-c-quotes-heading">
        <div className="pjh-g-inner pjh-g-inner--stack">
          <div className="pjh-g-copy" data-reveal>
            <span className="pjh-g-kicker">Craftsmen</span>
            <Heading id="pjh-c-quotes-heading">The word on set</Heading>
          </div>
          <div className="pjh-g-quotes pjh-g-quotes--3 pjh-g-quotes--flush">
            <div className="pjh-g-reveal" data-reveal>
              <blockquote className="pjh-g-quote pjh-g-quote--left">
              <p>
                “I’ve had the great pleasure to work with PJ starting very early
                on in his career. It was apparent then as it is now he was a
                craftsman at whatever he put his mind to. In those days he was
                shooting photography and his black and white work was stunning
                and his printing technique was immaculate. Since then he’s gone
                on to film making and created an entire world with Orbis book
                series. All done with an incredible attention to detail. That’s
                just how he rolls. Hard to find craftsmen today. PJ is among
                those few.”
              </p>
              <cite>Dave Swartz, VP Creative Director — CP+B</cite>
              </blockquote>
            </div>
            <div className="pjh-g-reveal" data-reveal data-reveal-delay="90">
              <blockquote className="pjh-g-quote pjh-g-quote--mid">
              <p>
                “To put it mildly, PJ is a star. He’s a stellar producer, a
                detail-oriented problem solver and a prodigious generator of
                creative ideas. Not only is Mr. Haarsma one of the hardest and
                smartest working people I know, he’s also a sheer pleasure to be
                around — contributing both to great work and a great culture. I
                always look forward to working with PJ.”
              </p>
              <cite>Craig Evans, ECD — Wunderman West</cite>
              </blockquote>
            </div>
            <div className="pjh-g-reveal" data-reveal data-reveal-delay="180">
              <blockquote className="pjh-g-quote pjh-g-quote--right">
              <p>
                “The best producers earn their recommendations by being
                proactive and thorough. PJ Haarsma did just that. His
                contributions to projects went way beyond a typical producer;
                PJ concepts along with the creative team and helps formulate the
                execution of the idea from the start. If you are looking for
                someone who can take ideas, then add / evolve / solve / produce,
                PJ is your guy.”
              </p>
              <cite>Cecilia Gorman, Director of Creative Services, Oakley</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <section className="pjh-g-band pjh-g-band--ink" aria-labelledby="pjh-c-clients-heading">
        <div className="pjh-g-inner">
          <div className="pjh-g-copy" data-reveal>
            <span className="pjh-g-kicker">Brands</span>
            <Heading id="pjh-c-clients-heading">Clients</Heading>
            <div className="pjh-g-body">
              <p>
                There is a lot more to learn about PJ Haarsma’s production
                company. Head over to the Redbear Films site.
              </p>
            </div>
            <a
              className="pjh-g-btn pjh-g-btn--gold"
              href="https://redbear.tv"
              target="_blank"
              rel="noreferrer"
            >
              Learn more
            </a>
          </div>
          <div className="pjh-g-logos" data-reveal data-reveal-delay="80">
            {CLIENTS.map((client) => (
              <figure key={client.alt} className="pjh-g-logo">
                <img src={client.src} alt={client.alt} />
              </figure>
            ))}
          </div>
        </div>
      </section>
    </article>
  )
}
