import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Header } from './components/Header'
import { HomePage } from './pages/HomePage'
import { ProjectPage } from './pages/ProjectPage'

export default function App() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1)
      const node = document.getElementById(id)
      if (node) {
        node.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }

    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: 'auto' })
    }
  }, [location.pathname, location.hash])

  return (
    <div className="page">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/work/:slug" element={<ProjectPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  )
}
