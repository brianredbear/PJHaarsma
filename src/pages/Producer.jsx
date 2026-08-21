import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import Seo from '../components/Seo.jsx'

export default function Producer() {
  return (
    <article className="pjh-inner">
      <Seo
        title="Producer | PJ Haarsma"
        description="Emmy-winning producer and founder of Redbear Films. Film, television, and brand work from a Southern California company rooted in commercials and original series."
        path="/pj-haarsma-producer"
        image="/original/commercials.webp"
      />
      <PageHeader
        kicker="The Producer"
        title="Film, television, and brands — produced with the same tool chest."
        lede="PJ Haarsma is an internationally awarded producer and founder of Redbear Films, a Southern California company rooted in commercials, original series, and franchise-building."
      />

      <div className="pjh-prose" data-reveal>
        <p>
          He quit medical school and started as a fashion photographer in 1987,
          then became a commercial director, and finally a freelance producer.
          That path — still camera, then moving image, then producing —
          still shapes how he runs a set.
        </p>
        <p>
          After the success of The Softwire books and games, Haarsma made
          industry history in 2015 with Con Man: $1 million raised in the first
          twenty-four hours, $3.2 million overall, and the highest-funded web
          series across platforms at the time. The show, starring Nathan Fillion
          and Alan Tudyk, was optioned by Lionsgate and Comic-Con HQ.
        </p>
      </div>

      <div className="pjh-stack">
        <section className="pjh-card" data-reveal>
          <span className="pjh-eyebrow pjh-eyebrow--blue">Commercials</span>
          <h2>Redbear Films</h2>
          <p>
            Fifteen years of advertising for agencies and brands — from
            Hewlett-Packard and Nokia to original branded content. In 2021
            Haarsma, Andre Marcel, and Drew Lewis received a regional Emmy
            for the UCI Health commercial “Journey.”
          </p>
        </section>
        <section className="pjh-card" data-reveal data-reveal-delay="90">
          <span className="pjh-eyebrow pjh-eyebrow--red">Originals</span>
          <h2>Beyond the series</h2>
          <p>
            Credits include the feature Devious Beings (2002), Con Man: The Game,
            the award-winning comic Spectrum, and Retro Replay — a YouTube series
            starring Nolan North and Troy Baker, Webby-nominated and later
            distributed by Rooster Teeth.
          </p>
        </section>
      </div>

      <p className="pjh-inner__cta" data-reveal>
        <Link className="pjh-btn pjh-btn--red" to="/television">Watch Con Man →</Link>
        <Link className="pjh-btn pjh-btn--ghost" to="/commercial-production">Commercials →</Link>
      </p>
    </article>
  )
}
