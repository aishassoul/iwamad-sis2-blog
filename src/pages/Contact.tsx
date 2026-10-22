import { useState, type FormEvent } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="page-container contact-page">
      <section className="page-heading">
        <p className="eyebrow">SAY HELLO</p>
        <h1>Let's talk<span>.</span></h1>
        <p>
          Have a thought, an idea, or a question? Leave a little note below.
        </p>
      </section>

      {submitted ? (
        <div className="success-message" role="status">
          Thank you for your message! This demo form has been submitted.
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Your name</label>
          <input id="name" name="name" required placeholder="Your name" />

          <label htmlFor="email">Email address</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
          />

          <label htmlFor="message">Your message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            placeholder="Write your note..."
          />

          <button className="primary-button" type="submit">
            Send message →
          </button>
        </form>
      )}
    </main>
  )
}
