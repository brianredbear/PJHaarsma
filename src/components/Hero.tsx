import { useEffect, useRef, useState } from 'react'
import { useTypewriter } from '../hooks/useTypewriter'

const FRAME_COUNT = 111
const EMAIL = 'hello@mainframe.co'
const TYPEWRITER_TEXT =
  'Glad you stopped in. Good taste tends to find us. Now, what are we building?'

const PILLS = [
  'Pitch us an idea',
  'Come work here',
  'Send a brief hello',
  'See how we operate',
] as const

function frameSrc(index: number) {
  return `/hero-frames/frame-${String(index).padStart(3, '0')}.avif?v=full`
}

function CopyIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <rect x="4" y="4" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.2" />
      <rect x="1" y="1" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  )
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [pillsVisible, setPillsVisible] = useState(false)
  const { displayed, done } = useTypewriter(TYPEWRITER_TEXT)

  useEffect(() => {
    const timeoutId = window.setTimeout(() => setPillsVisible(true), 400)
    return () => window.clearTimeout(timeoutId)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d', { alpha: false })
    if (!ctx) return

    const frames = Array.from({ length: FRAME_COUNT }, (_, index) => {
      const image = new Image()
      image.src = frameSrc(index)
      return image
    })

    let current = 0
    let raf = 0

    const draw = (index: number) => {
      const image = frames[index]
      if (!image?.complete || image.naturalWidth === 0) return
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
    }

    const apply = () => {
      raf = 0
      draw(current)
    }

    const show = (index: number) => {
      current = index
      if (!raf) raf = requestAnimationFrame(apply)
    }

    const onMouseMove = (event: MouseEvent) => {
      const progress = Math.min(1, Math.max(0, event.clientX / window.innerWidth))
      show(Math.round(progress * (FRAME_COUNT - 1)))
    }

    frames.forEach((image, index) => {
      if (image.complete) {
        if (index === 0) draw(0)
        return
      }
      image.addEventListener(
        'load',
        () => {
          if (index === current) draw(index)
        },
        { once: true },
      )
    })

    window.addEventListener('mousemove', onMouseMove)

    return () => {
      if (raf) cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  function copyEmail() {
    void navigator.clipboard.writeText(EMAIL)
  }

  return (
    <section className="mf-hero">
      <canvas
        ref={canvasRef}
        className="mf-hero__video"
        width={1280}
        height={720}
        aria-hidden="true"
      />

      <div className="mf-hero__content">
        <p className="mf-hero__intro">
          Hey there, meet A.R.I.A,
          <br />
          Mainframe&apos;s Adaptive Response Interface Agent
        </p>

        <p className="mf-hero__type">
          {displayed}
          {!done && <span className="mf-hero__cursor" />}
        </p>

        <div
          className="mf-hero__pills"
          style={{
            opacity: pillsVisible ? 1 : 0,
            transform: pillsVisible ? 'translateY(0)' : 'translateY(8px)',
          }}
        >
          {PILLS.map((label) => (
            <button key={label} type="button" className="mf-pill">
              {label}
            </button>
          ))}
          <button type="button" className="mf-pill mf-pill--outline" onClick={copyEmail}>
            <span>
              Reach us: <span className="mf-pill__email">{EMAIL}</span>
            </span>
            <CopyIcon />
          </button>
        </div>
      </div>
    </section>
  )
}
