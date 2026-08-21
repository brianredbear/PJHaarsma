import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <article className="pjh-inner">
      <span className="pjh-eyebrow pjh-eyebrow--red" data-reveal>404</span>
      <h1 className="pjh-hero__title" data-reveal data-reveal-delay="80">Wrong panel.</h1>
      <p className="pjh-inner__lede" data-reveal data-reveal-delay="140">That page isn’t in this issue.</p>
      <Link className="pjh-btn pjh-btn--red" to="/" data-reveal data-reveal-delay="200">
        Back to the cover →
      </Link>
    </article>
  )
}
