import { useEffect, useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function usePageTitle(title) {
  useEffect(() => {
    document.title = title
    return () => {
      document.title = 'PJ Haarsma — Producer, Novelist, Game Creator'
    }
  }, [title])
}

export function Heading({ as: Tag = 'h2', id, children }) {
  return (
    <div className="pjh-g-head">
      <Tag id={id} className="pjh-g-heading">{children}</Tag>
      <div className="pjh-g-rule" aria-hidden="true">
        <svg viewBox="0 0 400 14" preserveAspectRatio="none">
          <path d="M1 5C25 2 50 7 80 4C110 1 145 8 180 3C220 6 255 2 290 5C325 8 360 3 399 4L399 10C365 13 330 9 295 12C255 8 220 13 185 9C145 12 110 8 75 11C45 8 20 12 1 9Z" />
          <path d="M1 4C25 6 50 3 80 6C110 4 145 2 180 6C220 3 255 7 290 4C325 2 360 7 399 5L399 11C365 9 330 12 295 8C255 12 220 7 185 12C145 8 110 12 75 7C45 12 20 8 1 10Z" />
          <path d="M1 6C25 1 50 8 80 3C110 6 145 4 180 2C220 8 255 3 290 7C325 4 360 2 399 6L399 9C365 14 330 8 295 13C255 7 220 14 185 8C145 13 110 7 75 12C45 6 20 13 1 8Z" />
          <path d="M1 5C25 4 50 2 80 7C110 3 145 7 180 5C220 2 255 5 290 2C325 7 360 5 399 3L399 12C365 10 330 13 295 9C255 11 220 9 185 13C145 9 110 11 75 8C45 11 20 7 1 11Z" />
        </svg>
      </div>
    </div>
  )
}

export function Frame({ src, alt, tilt = 'left', tone, delay, href, size }) {
  const figure = (
    <figure className={`pjh-g-frame pjh-g-frame--${tilt}${tone ? ` pjh-g-frame--${tone}` : ''}${size ? ` pjh-g-frame--${size}` : ''}`}>
      <img src={src} alt={alt} />
    </figure>
  )

  return (
    <div
      className={`pjh-g-reveal${size ? ` pjh-g-reveal--${size}` : ''}`}
      data-reveal
      data-reveal-delay={delay || undefined}
    >
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className="pjh-g-frame-link">
          {figure}
        </a>
      ) : figure}
    </div>
  )
}

export function RevealOnScroll() {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    const root = document.querySelector('[data-reveal-root]')
    if (!root) return undefined
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const nodes = [...root.querySelectorAll('[data-reveal]')]
    nodes.forEach((el) => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(20px)'
      el.style.transition = 'opacity 0.7s ease, transform 0.7s cubic-bezier(0.2, 0.7, 0.2, 1)'
      el.style.transitionDelay = el.dataset.revealDelay ? `${el.dataset.revealDelay}ms` : '0ms'
    })

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const el = entry.target
          el.style.opacity = '1'
          el.style.transform = 'none'
          el.classList.add('is-revealed')
          io.unobserve(el)
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )

    nodes.forEach((el) => io.observe(el))
    return () => {
      io.disconnect()
      nodes.forEach((el) => {
        el.style.opacity = ''
        el.style.transform = ''
        el.style.transition = ''
        el.style.transitionDelay = ''
        el.classList.remove('is-revealed')
      })
    }
  }, [pathname])

  return null
}
