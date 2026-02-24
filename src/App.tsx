import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Patent from './pages/Patent'
import Trademark from './pages/Trademark'
import Copyright from './pages/Copyright'
import Legal from './pages/Legal'
import About from './pages/About'
import Contact from './pages/Contact'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/patent" element={<Patent />} />
          <Route path="/trademark" element={<Trademark />} />
          <Route path="/copyright" element={<Copyright />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
