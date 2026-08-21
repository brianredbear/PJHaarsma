import '../work-page.css'
import { Frame, Heading, usePageTitle } from '../components/WorkPage.jsx'

export default function Comics() {
  usePageTitle('Comic Books | PJ Haarsma')

  return (
    <article className="pjh-g">
      <section className="pjh-g-band pjh-g-band--paper pjh-g-band--lead" aria-labelledby="pjh-cx-hero-heading">
        <div className="pjh-g-inner pjh-g-inner--flip">
          <Frame
            src="/original/comics.png"
            alt="Spectrum comic issue covers"
            tilt="left"
          />
          <div className="pjh-g-copy" data-reveal data-reveal-delay="120">
            <span className="pjh-g-kicker">In Print</span>
            <Heading as="h1" id="pjh-cx-hero-heading">Comics</Heading>
            <div className="pjh-g-body">
              <p>
                PJ Haarsma is the writer of the Spectrum comics along with
                producing partner Alan Tudyk. The Spectrum comics take place in
                the same world as PJ’s Softwire novels. They tell the story of
                Ketheria after she leaves the Rings of Orbis in search of the
                Knull.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pjh-g-band pjh-g-band--gold" aria-labelledby="pjh-cx-spectrum-heading">
        <div className="pjh-g-inner">
          <div className="pjh-g-copy" data-reveal>
            <span className="pjh-g-kicker">Synopsis</span>
            <Heading id="pjh-cx-spectrum-heading">Spectrum</Heading>
            <div className="pjh-g-body">
              <p>
                Con Man, launched by Alan Tudyk and Nathan Fillion, exposed the
                world to an epic science fiction saga at its heart. Now the story
                of Spectrum is being told in an exciting four-book series.
              </p>
              <p>
                A vicious attack from an invading alien force is unleashed on
                Earth. The human race suffers catastrophic casualties, but the
                apocryphal dreams of Captain James Raaker (Nathan Fillion) warn
                him that the suffering has just begun. Their only hope lies with
                an untested spaceship built by a madman with his stolen alien
                technology.
              </p>
            </div>
            <a
              className="pjh-g-btn"
              href="https://store.conmantheseries.com/collections/types?q=Comics"
              target="_blank"
              rel="noreferrer"
            >
              Learn more
            </a>
          </div>
          <div className="pjh-g-cover-pair">
            <Frame
              src="/original/comics/spectrum-0.jpg"
              alt="Spectrum issue 0 cover, written by PJ Haarsma and Alan Tudyk"
              href="https://store.conmantheseries.com/products/spectrum-comic-issue-0"
              tilt="left"
            />
            <Frame
              src="/original/comics/spectrum-1.jpg"
              alt="Spectrum issue 1"
              href="https://store.conmantheseries.com/products/spectrum-comic-issue-1"
              tilt="right"
              delay={90}
            />
          </div>
        </div>
      </section>

      <section className="pjh-g-band pjh-g-band--ink" aria-labelledby="pjh-cx-motion-heading">
        <div className="pjh-g-inner">
          <div className="pjh-g-copy" data-reveal>
            <span className="pjh-g-kicker">Motion Comics</span>
            <Heading id="pjh-cx-motion-heading">Digital comic of the year</Heading>
            <div className="pjh-g-body">
              <p>
                PJ teamed up with{' '}
                <a href="http://www.madefire.com" target="_blank" rel="noreferrer">
                  Madefire
                </a>{' '}
                to create an animated version of his Spectrum comics. The result
                was an award-winning collaboration. The Spectrum animated comic
                won digital comic of the year.
              </p>
            </div>
          </div>
          <Frame
            src="/original/comics/award.png"
            alt="Pipedream Comics presents Digital Comic of the Year"
            tilt="right"
            tone="paper"
            delay={120}
            size="md"
          />
        </div>
      </section>
    </article>
  )
}
