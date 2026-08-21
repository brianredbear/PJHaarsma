import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

function resetScroll() {
  window.scrollTo(0, 0)
  const scrolling = document.scrollingElement
  if (scrolling) scrolling.scrollTop = 0
  document.documentElement.scrollTop = 0
  document.body.scrollTop = 0
  const root = document.getElementById('root')
  if (root) root.scrollTop = 0
}

function isInternalNavLink(anchor) {
  if (!anchor || anchor.hasAttribute('download')) return false
  if (anchor.target && anchor.target !== '_self') return false
  const href = anchor.getAttribute('href')
  if (!href || href.startsWith('mailto:') || href.startsWith('tel:')) return false

  let url
  try {
    url = new URL(anchor.href)
  } catch {
    return false
  }

  if (url.origin !== window.location.origin) return false
  if (url.hash && url.pathname === window.location.pathname) return false
  return true
}

export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useLayoutEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
  }, [])

  useLayoutEffect(() => {
    const onClick = (event) => {
      if (event.defaultPrevented || event.button !== 0) return
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
      const anchor = event.target.closest('a[href]')
      if (!isInternalNavLink(anchor)) return
      resetScroll()
    }

    document.addEventListener('click', onClick, true)
    return () => document.removeEventListener('click', onClick, true)
  }, [])

  useLayoutEffect(() => {
    if (hash) {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)))
      if (el) {
        el.scrollIntoView()
        return undefined
      }
    }

    resetScroll()
    const frame = window.requestAnimationFrame(() => {
      resetScroll()
      window.requestAnimationFrame(resetScroll)
    })
    return () => window.cancelAnimationFrame(frame)
  }, [pathname, hash])

  return null
}
