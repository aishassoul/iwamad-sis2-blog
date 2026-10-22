import { Link, useParams } from 'react-router'
import { useState } from 'react'
import { posts } from '../data/posts'

export default function PostDetail() {
  const { id } = useParams()
  const post = posts.find((item) => item.id === Number(id))
  const [likes, setLikes] = useState(0)

  if (!post) {
    return (
      <main className="page-container message-page">
        <p className="eyebrow">POST NOT FOUND</p>
        <h1>Nothing here<span>.</span></h1>
        <p>Sorry, we could not find a post with that number.</p>
        <Link className="primary-button" to="/posts">
          Back to all posts
        </Link>
      </main>
    )
  }

  return (
    <main className="page-container article-page">
      <Link className="back-link" to="/posts">
        ← All posts
      </Link>

      <article>
        <p className="eyebrow">{post.category}</p>
        <h1>{post.title}<span>.</span></h1>
        <div className="post-meta article-meta">
          <span>{post.date}</span>
          <span>{post.readTime}</span>
        </div>

        <p className="article-excerpt">{post.excerpt}</p>
        <div className="article-content">
          <p>{post.content}</p>
        </div>

        <button
          className="like-button article-like"
          type="button"
          onClick={() => setLikes((currentLikes) => currentLikes + 1)}
          aria-label={`Like ${post.title}`}
        >
          ♥ {likes} likes
        </button>
      </article>
    </main>
  )
}
