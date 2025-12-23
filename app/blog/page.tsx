import Link from 'next/link'
import { ArrowUpRight, Sun } from 'lucide-react'

export default function BlogPage() {
  const posts = [
    {
      title: "AI in Software Development",
      date: "December 15, 2025",
      excerpt: "How artificial intelligence is transforming the way we write and maintain code.",
      slug: "ai-in-software-development"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="py-6">
        <nav className="max-w-4xl mx-auto flex justify-between items-center px-4 text-sm font-medium">
          <div className="flex items-center gap-4 text-muted-foreground">
            <Link
              href="/"
              className="p-2 rounded-xl hover:bg-secondary/50 hover:text-foreground transition-all duration-300 ease-in-out hover:scale-105"
            >
              ← Back
            </Link>
            <Link
              href="/projects"
              className="px-4 py-2 rounded-xl hover:bg-secondary/50 hover:text-foreground transition-all duration-300 ease-in-out hover:scale-105"
            >
              work
            </Link>
            <Link
              href="/blog"
              className="px-4 py-2 rounded-xl hover:bg-secondary/50 hover:text-foreground transition-all duration-300 ease-in-out hover:scale-105"
            >
              notes
            </Link>
          </div>

          <button className="p-2 rounded-xl hover:bg-secondary/50 transition-all duration-300 ease-in-out hover:scale-105">
            <Sun className="w-5 h-5 text-muted-foreground" />
          </button>
        </nav>
      </header>

      {/* Main */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold mb-8 text-foreground">notes</h1>

        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.slug} className="border-b border-border/50 pb-8 last:border-b-0 group">
              <h2 className="text-lg font-semibold mb-2">
                <Link
                  href={`/blog/${post.slug}`}
                  className="hover:text-primary transition-all duration-300 ease-in-out group-hover:translate-x-1 inline-block"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="text-xs text-muted-foreground mb-4 opacity-80">{post.date}</p>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-all duration-300 ease-in-out hover:gap-3 group text-sm"
              >
                Read more
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
              </Link>
            </article>
          ))}
        </div>
      </main>
    </div>
  )
}