import { useEffect, useRef } from 'react'

const FRAME_COUNT = 111

function frameSrc(index: number) {
  return `/hero-frames/frame-${String(index).padStart(3, '0')}.webp?v=full`
}

export default function PortraitScrub() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

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

    const fromX = (x: number) => {
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
    window.addEventListener('touchmove', onTouchMove, { passive: true })

    return () => {
      if (raf) cancelAnimationFrame(raf)
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
