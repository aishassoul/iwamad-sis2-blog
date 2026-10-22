import { useLocation, useNavigate } from 'react-router'
import { useAuth } from '../context/AuthContext'

export default function SignIn() {
  const { signIn } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const destination =
    (location.state as { from?: string } | null)?.from ?? '/protected'

  function handleSignIn() {
    signIn()
    navigate(destination, { replace: true })
  }

  return (
    <main className="page-container auth-page">
      <section className="auth-card">
        <p className="eyebrow">WELCOME BACK</p>
        <h1>Sign in<span>.</span></h1>
        <p>
          This is a demo sign-in for the protected area of the blog.
        </p>
        <button className="primary-button" type="button" onClick={handleSignIn}>
          Sign in and continue →
        </button>
      </section>
    </main>
  )
}
