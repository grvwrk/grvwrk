import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export default function BlogPage() {
  const posts = [
    {
      title: "how i'm learning to think like an ml researcher (as a 2nd-year student)",
      date: "December 23, 2025",
      excerpt: "the journey from ml tutorials to real research thinking, rebuilding ideas from scratch, and turning them into working projects.",
      slug: "learning-to-think-like-ml-researcher"
    }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border/40">
        <nav className="max-w-3xl mx-auto flex justify-between items-center px-6 py-6 text-sm">
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="text-muted hover:text-foreground transition-colors"
            >
              ← Back
            </Link>
            <div className="flex gap-6 text-muted">
              <Link
                href="/projects"
                className="hover:text-foreground transition-colors"
              >
                work
              </Link>
              <Link
                href="/blog"
                className="font-semibold text-foreground"
              >
                notes
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Main */}
      <main className="max-w-3xl mx-auto px-6 py-16">
        <div className="space-y-4 mb-16">
          <h1 className="text-4xl font-bold tracking-tight">notes & articles</h1>
          <p className="text-muted text-lg">
            Thoughts on learning, research, and building ML systems.
          </p>
        </div>

        <div className="space-y-1">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block p-6 border border-border rounded-lg hover:border-foreground/50 hover:bg-border/20 transition-all duration-300 group"
            >
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1 min-w-0">
                  <div className="text-sm text-muted mb-2">{post.date}</div>
                  <h2 className="text-xl font-semibold tracking-tight mb-3 group-hover:text-muted transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-muted text-base leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted group-hover:text-foreground transition-colors flex-shrink-0 mt-1" />
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}