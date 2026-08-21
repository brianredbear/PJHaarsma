import { useEffect, useRef } from 'react'

const FRAME_COUNT = 111

function frameSrc(index: number) {
  return `/hero-frames/frame-${String(index).padStart(3, '0')}.avif?v=full`
}

export default function PortraitScrub() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d', { alpha: false })
    if (!ctx) return

    const frames = Array.from({ length: FRAME_COUNT }, () => new Image())
    let loadedRest = false
    let current = 0
    let raf = 0
    let idleId = 0

    const assign = (index: number) => {
      const image = frames[index]
      if (!image.src) image.src = frameSrc(index)
      return image
    }

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
      assign(index)
      if (!raf) raf = requestAnimationFrame(apply)
    }

    const loadRest = () => {
      if (loadedRest) return
      loadedRest = true
      for (let i = 1; i < FRAME_COUNT; i += 1) assign(i)
    }

    const fromX = (x: number) => {
      loadRest()
      const progress = Math.min(1, Math.max(0, x / window.innerWidth))
      show(Math.round(progress * (FRAME_COUNT - 1)))
    }

    const onMouseMove = (event: MouseEvent) => {
      fromX(event.clientX)
    }

    const onTouchMove = (event: TouchEvent) => {
      const touch = event.touches[0]
      if (touch) fromX(touch.clientX)
    }

    const first = assign(0)
    const onFirstLoad = () => draw(0)
    if (first.complete) draw(0)
    else first.addEventListener('load', onFirstLoad, { once: true })

    if ('requestIdleCallback' in window) {
      idleId = window.requestIdleCallback(loadRest, { timeout: 1500 })
    } else {
      idleId = window.setTimeout(loadRest, 250)
    }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('touchmove', onTouchMove, { passive: true })

    return () => {
      if (raf) cancelAnimationFrame(raf)
      if ('requestIdleCallback' in window) window.cancelIdleCallback(idleId)
      else window.clearTimeout(idleId)
      first.removeEventListener('load', onFirstLoad)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('touchmove', onTouchMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pjh-portrait__video"
      width={1280}
      height={720}
      aria-hidden="true"
    />
  )
}
