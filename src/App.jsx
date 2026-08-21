import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import PJHaarsmaHome from './pages/PJHaarsmaHome.jsx'
import Producer from './pages/Producer.jsx'
import Television from './pages/Television.jsx'
import Books from './pages/Books.jsx'
import Games from './pages/Games.jsx'
import Comics from './pages/Comics.jsx'
import Commercials from './pages/Commercials.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PJHaarsmaHome />} />
      <Route element={<Layout />}>
        <Route path="/television" element={<Television />} />
        <Route path="/games" element={<Games />} />
        <Route path="/commercial-production" element={<Commercials />} />
        <Route path="/comic-books" element={<Comics />} />
        <Route path="/pj-haarsma-books" element={<Books />} />
        <Route path="/pj-haarsma-producer" element={<Producer />} />
        <Route path="/producer" element={<Producer />} />
        <Route path="/books" element={<Books />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
