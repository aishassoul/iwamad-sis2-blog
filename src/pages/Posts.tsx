import PostCard from '../components/PostCard'
import { posts } from '../data/posts'

export default function Posts() {
  return (
    <main className="page-container">
      <section className="page-heading">
        <p className="eyebrow">THE BLOG</p>
        <h1>All the little notes<span>.</span></h1>
        <p>Stories and ideas about learning, growing, and everyday life.</p>
      </section>

      <section className="posts-grid" aria-label="Blog posts">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </section>
    </main>
  )
}
