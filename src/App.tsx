import { Navigate, Route, Routes, useLocation } from 'react-router'
import Navbar from './components/Navbar'
import { useAuth } from './context/AuthContext'
import Contact from './pages/Contact'
import Home from './pages/Home'
import PostDetail from './pages/PostDetail'
import Posts from './pages/Posts'
import Protected from './pages/Protected'
import SignIn from './pages/SignIn'

function ProtectedRoute() {
  const { isSignedIn } = useAuth()
  const location = useLocation()

  if (!isSignedIn) {
    return (
      <Navigate
        to="/signin"
        replace
        state={{ from: location.pathname }}
      />
    )
  }

  return <Protected />
}

function NotFound() {
  return (
    <main className="page-container message-page">
      <p className="eyebrow">404 — PAGE NOT FOUND</p>
      <h1>Lost in the notes<span>.</span></h1>
      <p>The page you are looking for does not exist.</p>
      <a className="primary-button" href="/iwamad-sis2-blog/">
        Back home
      </a>
    </main>
  )
}

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<PostDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/protected" element={<ProtectedRoute />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <footer className="site-footer">
        <p>little notes © 2026</p>
        <p>Made with curiosity and a little creativity.</p>
      </footer>
    </>
  )
}
