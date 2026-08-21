export default function PageHeader({ kicker, kickerClass = 'pjh-eyebrow--red', title, lede }) {
  return (
    <header className="pjh-inner__head" data-reveal>
      <span className={`pjh-eyebrow ${kickerClass}`}>{kicker}</span>
      <h1 className="pjh-work__title">{title}</h1>
      {lede ? <p className="pjh-inner__lede">{lede}</p> : null}
    </header>
  )
}
