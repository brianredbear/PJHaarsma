import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Nav from './Nav.jsx'
import Footer from './Footer.jsx'
import { RevealOnScroll } from './WorkPage.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default function Layout() {
  return (
    <div className="pjh" data-reveal-root>
      <ScrollToTop />
      <RevealOnScroll />
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
