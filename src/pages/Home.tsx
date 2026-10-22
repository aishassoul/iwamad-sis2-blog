import { Link } from 'react-router'

export default function Home() {
  return (
    <main>
      <section className="hero">
        <p className="eyebrow">A LITTLE SPACE ON THE INTERNET</p>
        <h1>
          Thoughts, stories
          <br />
          & little <span>discoveries.</span>
        </h1>
        <p className="hero-description">
          Welcome to little notes — a personal blog about student life,
          personal growth, creativity, and the small things that make
          everyday life meaningful.
        </p>
        <Link className="primary-button" to="/posts">
          Explore the blog →
        </Link>
        <div className="hero-decoration" aria-hidden="true">
          ✳
        </div>
      </section>

      <section className="home-note">
        <span className="note-icon" aria-hidden="true">
          ✎
        </span>
        <div>
          <h2>A place to pause and reflect</h2>
          <p>
            New ideas, honest thoughts, and little reminders to keep
            learning and growing every day.
          </p>
        </div>
      </section>
    </main>
  )
}
