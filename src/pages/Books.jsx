import '../work-page.css'
import { Frame, Heading, usePageTitle } from '../components/WorkPage.jsx'

const NOVELS = [
  {
    kicker: '2006',
    title: 'Virus on Orbis 1',
    src: '/original/books/virus.webp',
    alt: 'Virus on Orbis 1 cover',
    band: 'paper',
    flip: true,
    href: 'https://couchsoup.com/product/virus-on-orbis-1/',
    blurb: [
      'JT has always known there was something different about him, even before he and two hundred other kids landed on the first ring of Orbis. But once their spaceship lands, he is identified as the first-ever “softwire” — a human with the ability to enter and communicate with computers through his mind — and becomes the focus of intergalactic intrigue.',
      'Johnny and the rest of the refugee orphans are put to work in alien factories, and very quickly things go very wrong. When the all-knowing, all-controlling, and technologically “perfect” central computer starts malfunctioning, suspicious eyes turn to JT.',
    ],
    isbn: 'ISBN-13: 9780763627096 / Young adult science fiction / Age 10 and up',
    quote: '“Skillfully crafted.” — School Library Journal',
    awards: [
      'ABC New Voices Honoree',
      'New York Public Library Book for the Teen Age',
      'South Carolina Junior Book Award finalist',
      'Cybil Award finalist',
      'Hal Clement Excellence in Children’s Science Fiction finalist',
    ],
  },
  {
    kicker: '2008',
    title: 'Betrayal on Orbis 2',
    src: '/original/books/betrayal.webp',
    alt: 'Betrayal on Orbis 2 cover',
    band: 'gold',
    flip: false,
    href: 'https://couchsoup.com/product/betrayal-on-orbis-2-hardcopy/',
    blurb: [
      'On Orbis 2, JT has a new home and a new job, one that pushes his softwire abilities to painful limits. JT is the only one who can communicate with the Samirans, large aquatic aliens who have cooled the crystals on Orbis for nearly two thousand rotations.',
      'What he learns is that the prosperity of Orbis is built on a brutal system of enforced labor — and that everyone seems to have something to hide. Can JT appease the Samirans before their threat is realized?',
    ],
    isbn: 'ISBN-13: 9780763627102 / PB 978-0763642693 / Young adult science fiction',
    quote: '“A strong science fiction read for the teen set.” — Booklist',
    awards: ['YALSA finalist'],
  },
  {
    kicker: '2009',
    title: 'Wormhole Pirates on Orbis 3',
    src: '/original/books/pirates.webp',
    alt: 'Wormhole Pirates on Orbis 3 cover',
    band: 'paper',
    flip: true,
    href: 'https://couchsoup.com/product/wormhole-pirates-on-orbis-3-hardcover/',
    blurb: [
      'After two rotations working as knudniks on the Rings of Orbis, JT and his friends are anxious about what awaits them on Orbis 3. But before their shuttle even lands, they are attacked by a ruthless band of wormhole pirates.',
      'On Orbis 3 the kids learn they will have to go to school — along with bullying and resentful Citizens who would like nothing more than to see them suffer. And someone seems to be luring JT into a deadly game where the stakes are higher than he can imagine.',
    ],
    isbn: 'ISBN-13: 978-0-7636-2711-9 / PB 978-0763647773 / Young adult science fiction',
    quote: '“A perfect book!” — Stationkstm',
    awards: ['“Simply Genius” — Teen Book Blog'],
  },
  {
    kicker: '2010',
    title: 'Awakening on Orbis 4',
    src: '/original/books/awakening.webp',
    alt: 'Awakening on Orbis 4 cover',
    band: 'gold',
    flip: false,
    href: 'https://couchsoup.com/product/awakening-on-orbis-4-hardcover/',
    blurb: [
      'All JT ever wanted was a normal life on the Rings of Orbis with his sister Ketheria and his friends Max and Theodore. Now, as the fourth and final rotation of their work rule begins, JT knows that his sister is the Scion — and that he is expected to become her protector, training as a Space Jumper who can jump through time and space.',
      'But JT isn’t sure he wants to take on the role the Keepers and the Trading Council have created for him. As war on the Rings becomes inevitable, even his Space Jumper skills might not be enough to protect his sister and his friends.',
    ],
    isbn: 'ISBN-13: 978-0763627126 / Young adult science fiction',
    quote: '“The best in the series.” — Tween Tribune',
    awards: [],
  },
]

const GUIDES = [
  {
    src: '/original/books/teacher.webp',
    alt: 'Softwire teacher’s study guide',
    href: 'https://pjhaarsma.com/softwire-guides/Softwire_novel_study_sm.pdf.zip',
    label: 'Free teacher’s study guide',
  },
  {
    src: '/original/books/discussion.webp',
    alt: 'Softwire small discussion guide',
    href: 'https://pjhaarsma.com/softwire-guides/softwire_discussion_guide.pdf.zip',
    label: 'Free small discussion guide',
  },
  {
    src: '/original/books/jaal.webp',
    alt: 'JAAL review of The Softwire',
    href: 'https://pjhaarsma.com/softwire-guides/Journal-Adolescent-Adult-Literacy-PJ-Haarsma-interview.pdf.zip',
    label: 'Read the JAAL review',
  },
]

function NovelBand({ book }) {
  const copy = (
    <div className="pjh-g-copy" data-reveal data-reveal-delay={book.flip ? '120' : undefined}>
      <span className="pjh-g-kicker">{book.kicker}</span>
      <Heading id={`pjh-bk-${book.kicker}`}>{book.title}</Heading>
      <div className="pjh-g-body">
        {book.blurb.map((p) => (
          <p key={p.slice(0, 24)}>{p}</p>
        ))}
      </div>
      {book.quote ? <p className="pjh-g-isbn">{book.quote}</p> : null}
      {book.awards.length ? (
        <ul className="pjh-g-awards">
          {book.awards.map((award) => (
            <li key={award}>{award}</li>
          ))}
        </ul>
      ) : null}
      <p className="pjh-g-isbn">{book.isbn}</p>
      <a className="pjh-g-btn" href={book.href} target="_blank" rel="noreferrer">
        Get the book
      </a>
    </div>
  )

  const cover = (
    <Frame src={book.src} alt={book.alt} tilt={book.flip ? 'left' : 'right'} delay={book.flip ? undefined : 120} size="md" />
  )

  return (
    <section className={`pjh-g-band pjh-g-band--${book.band}`} aria-labelledby={`pjh-bk-${book.kicker}`}>
      <div className={`pjh-g-inner${book.flip ? ' pjh-g-inner--flip' : ''}`}>
        {book.flip ? (
          <>
            {cover}
            {copy}
          </>
        ) : (
          <>
            {copy}
            {cover}
          </>
        )}
      </div>
    </section>
  )
}

export default function Books() {
  usePageTitle('Books | PJ Haarsma')

  return (
    <article className="pjh-g">
      <section className="pjh-g-band pjh-g-band--ink pjh-g-band--lead" aria-labelledby="pjh-bk-hero-heading">
        <div className="pjh-g-inner pjh-g-inner--flip">
          <Frame
            src="/original/books.webp"
            alt="The Softwire book covers"
            tilt="right"
            size="md"
          />
          <div className="pjh-g-copy" data-reveal data-reveal-delay="120">
            <span className="pjh-g-kicker">Novels</span>
            <Heading as="h1" id="pjh-bk-hero-heading">The Softwire</Heading>
            <div className="pjh-g-body">
              <p>
                PJ Haarsma is the author of the popular Softwire series. The
                series has won many awards and nominations, and the first book
                was selected by the New York Public Library as a prestigious
                Book for the Teen Age. PJ was also the winner of the ABC New
                Voices Honoree. He is currently working on a fifth book in the
                series as well as an adult book series for his Spectrum comics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {NOVELS.map((book) => (
        <NovelBand key={book.title} book={book} />
      ))}

      <section className="pjh-g-band pjh-g-band--ink" aria-labelledby="pjh-bk-guides-heading">
        <div className="pjh-g-inner pjh-g-inner--stack">
          <div className="pjh-g-copy" data-reveal>
            <span className="pjh-g-kicker">Classroom</span>
            <Heading id="pjh-bk-guides-heading">Guides &amp; reviews</Heading>
            <div className="pjh-g-body">
              <p>
                Free teacher and discussion guides, plus the Journal of Adolescent
                &amp; Adult Literacy interview.
              </p>
            </div>
          </div>
          <div className="pjh-g-quotes pjh-g-quotes--3 pjh-g-quotes--flush">
            {GUIDES.map((guide, i) => (
              <Frame
                key={guide.label}
                src={guide.src}
                alt={guide.alt}
                href={guide.href}
                tilt={i % 2 === 0 ? 'left' : 'right'}
                delay={i * 90}
              />
            ))}
          </div>
        </div>
      </section>
    </article>
  )
}
