import { useState } from 'react'
import { Link } from 'react-router'
import type { Post } from '../data/posts'

type PostCardProps = {
  post: Post
}

export default function PostCard({ post }: PostCardProps) {
  const [likes, setLikes] = useState(0)

  return (
    <article className="post-card">
      <span className="post-category">{post.category}</span>
      <h2>
        <Link to={`/posts/${post.id}`}>{post.title}</Link>
      </h2>
      <p>{post.excerpt}</p>
      <div className="post-meta">
        <span>{post.date}</span>
        <span>{post.readTime}</span>
      </div>
      <div className="post-card-actions">
        <Link className="read-more" to={`/posts/${post.id}`}>
          Read article →
        </Link>
        <button
          className="like-button"
          type="button"
          onClick={() => setLikes((currentLikes) => currentLikes + 1)}
          aria-label={`Like ${post.title}`}
        >
          ♥ {likes}
        </button>
      </div>
    </article>
  )
}
