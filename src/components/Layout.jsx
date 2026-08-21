import { Outlet } from 'react-router-dom'
import Nav from './Nav.jsx'
import Footer from './Footer.jsx'
import { RevealOnScroll } from './WorkPage.jsx'

export default function Layout() {
  return (
    <div className="pjh" data-reveal-root>
      <RevealOnScroll />
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
