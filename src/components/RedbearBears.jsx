import { useEffect, useRef } from 'react'
import lottie from 'lottie-web'

const CDN = 'https://ex755m4h4au.exactdn.com/wp-content/uploads'

const BEARS = [
  {
    key: 'marketing',
    href: 'https://marketing.redbear.tv/',
    label: 'Integrated Marketing',
    files: {
      runIn: `${CDN}/2025/09/01_RunIn.json`,
      idle: `${CDN}/2025/09/02_Idle.json`,
      hover: `${CDN}/2025/09/03_Hover.json`,
      click: `${CDN}/2025/09/04_Click.json`,
    },
  },
  {
    key: 'production',
    href: 'https://production.redbear.tv/',
    label: 'Production Studio',
    files: {
      runIn: `${CDN}/2025/10/prod_01_RunIn.json`,
      idle: `${CDN}/2025/10/prod_02_Idle.json`,
      hover: `${CDN}/2025/10/production_new_03_Hover.json`,
      click: `${CDN}/2025/10/prod_04_Click.json`,
    },
  },
  {
    key: 'publishing',
    href: 'https://publishing.redbear.tv/',
    label: 'Book Publishing',
    files: {
      runIn: `${CDN}/2025/10/pub_01_RunIn.json`,
      idle: `${CDN}/2025/10/pub_02_Idle.json`,
      hover: `${CDN}/2025/10/pub_03_Hover.json`,
      click: `${CDN}/2025/10/pub_04_Click.json`,
    },
  },
  {
    key: 'original',
    href: 'https://originals.redbear.tv/',
    label: 'Original Content',
    files: {
      runIn: `${CDN}/2025/09/Original_01_RunIn.json`,
      idle: `${CDN}/2025/09/Original_02_Idle.json`,
      hover: `${CDN}/2025/09/Original_03_Hover.json`,
      click: `${CDN}/2025/09/Original_04_Click.json`,
    },
  },
  {
    key: 'government',
    href: 'https://government.redbear.tv/',
    label: 'Government Contracts',
    files: {
      runIn: `${CDN}/2025/10/gov_01_RunIn.json`,
      idle: `${CDN}/2025/10/gov_02_Idle.json`,
      hover: `${CDN}/2025/10/gov_03_Hover.json`,
      click: `${CDN}/2025/10/gov_04_Click.json`,
    },
  },
]

const rawCache = {}

function withoutStage(data) {
  if (!data) return data
  return {
    ...data,
    layers: (data.layers || []).filter((layer) => layer.nm !== 'BG'),
  }
}

async function loadJson(url) {
  if (!rawCache[url]) {
    const res = await fetch(url, { cache: 'force-cache', mode: 'cors', credentials: 'omit' })
    rawCache[url] = await res.json()
  }
  return withoutStage(rawCache[url])
}

export default function RedbearBears() {
  const rowRef = useRef(null)
  const slots = useRef([])

  useEffect(() => {
    const row = rowRef.current
    if (!row) return undefined
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const nodes = slots.current.filter(Boolean)
    let cancelled = false
    const players = []

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        io.disconnect()
        start()
      },
      { threshold: 0.2 },
    )
    io.observe(row)

    async function start() {
      try {
        await Promise.all(BEARS.flatMap((bear) => Object.values(bear.files).map(loadJson)))
      } catch {
        return
      }
      if (cancelled) return

      BEARS.forEach((bear, i) => {
        const container = nodes[i]
        const wrap = container?.parentElement
        if (!container || !wrap) return

        let anim = null
        let hovering = false
        let clicking = false

        function play(part, { loop = false, onComplete } = {}) {
          if (anim) {
            anim.destroy()
            anim = null
          }
          anim = lottie.loadAnimation({
            container,
            renderer: 'svg',
            loop,
            autoplay: true,
            animationData: withoutStage(rawCache[bear.files[part]]),
            rendererSettings: { preserveAspectRatio: 'xMidYMid meet' },
          })
          if (onComplete) anim.addEventListener('complete', onComplete)
          return anim
        }

        function idle() {
          if (clicking) return
          play('idle', { loop: true })
        }

        if (reduce) {
          play('idle', { loop: true })
        } else {
          window.setTimeout(() => {
            if (cancelled) return
            play('runIn', { onComplete: () => { if (!hovering && !clicking) idle() } })
          }, i * 110)
          wrap.addEventListener('pointerenter', () => {
            if (clicking) return
            hovering = true
            play('hover', { loop: true })
          })
          wrap.addEventListener('pointerleave', () => {
            hovering = false
            if (!clicking) idle()
          })
        }

        wrap.addEventListener('click', async (event) => {
          if (event.metaKey || event.ctrlKey || event.shiftKey) return
          event.preventDefault()
          if (clicking) return
          clicking = true
          if (!reduce) {
            await new Promise((resolve) => play('click', { onComplete: resolve }))
          }
          window.open(bear.href, '_blank', 'noopener,noreferrer')
          clicking = false
          idle()
        })

        players.push(() => {
          if (anim) anim.destroy()
        })
      })
    }

    return () => {
      cancelled = true
      io.disconnect()
      players.forEach((destroy) => destroy())
    }
  }, [])

  return (
    <div className="pjh-g-redbear__bears" ref={rowRef} aria-label="Redbear divisions">
      {BEARS.map((bear, i) => (
        <a
          key={bear.key}
          className="pjh-g-redbear__bear"
          href={bear.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={bear.label}
        >
          <div ref={(el) => { slots.current[i] = el }} />
        </a>
      ))}
    </div>
  )
}
