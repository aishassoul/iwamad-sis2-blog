import { useAuth } from '../context/AuthContext'

export default function Protected() {
  const { signOut } = useAuth()

  return (
    <main className="page-container protected-page">
      <section className="protected-card">
        <p className="eyebrow">PRIVATE SPACE</p>
        <h1>You made it<span>.</span></h1>
        <p>
          You are signed in and can access this protected page.
          This area demonstrates route protection with React Router.
        </p>
        <button
          className="primary-button"
          type="button"
          onClick={signOut}
        >
          Sign out
        </button>
      </section>
    </main>
  )
}
