import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

interface BlogPost {
  title: string
  date: string
  excerpt: string
  slug: string
  content: string
}

const blogPosts: BlogPost[] = [
  {
    title: "how i'm learning to think like an ml researcher (as a 2nd-year student)",
    date: "December 23, 2025",
    excerpt: "The journey from ML tutorials to real research thinking, rebuilding ideas from scratch, and turning them into working projects.",
    slug: "learning-to-think-like-ml-researcher",
    content: `
the last few months have felt like stepping out of “ml tutorials” and into the deep end. Instead of just finishing courses, i’ve been reading actual papers, ripping out the ideas, rewriting them from scratch, and turning them into projects i’m not embarrassed to demo.

---

starting from the math (for real this time)

at some point it clicked that if i want to do serious ml research, i can’t treat math like background noise running in another tab. so i went back to basics: linear algebra, probability, optimization, and the early chapters of goodfellow’s deep learning, not to pass exams, but to actually understand what my networks are doing.

now when training blows up, it’s not just “ugh, lower the lr and pray.” i can usually point to something specific: vanishing gradients in an rnn, overfitting because of a sloppy split, bad initialization, or just cursed data.

---

using papers as build guides, not holy texts

recently my reading has gone pretty deep into sequence models, nested learning ideas, and how continuous latent spaces + hierarchies actually make models think. i started with classical rnns, then moved through lstms/grus and sequence-to-sequence setups, and now i’m more interested in how these things are optimized and structured than just “does it overfit less.”

the main mindset shift: papers aren’t “too advanced for future me” anymore. i treat them like build guides. skim the main idea, understand the architecture and objective, then open a notebook and try to rebuild a small version. it usually breaks a few times, but that read → implement → debug loop is where the concepts actually stick.

---

nested learning and models that learn at different speeds

one concept i’ve been obsessed with lately is nested learning, thinking of a model not as one big monolithic learner, but as a stack of smaller learning problems running at different time scales. the idea is that some parts of the system adapt fast (like “short-term memory”), while others update slowly and act more like long-term structure.

once you see optimizers and architectures this way, things like momentum, adaptive learning rates, or multi-level objectives start to feel like nested optimization problems instead of random tricks. you’re basically asking: which parts of this model should react instantly to new data, and which parts should move only when the signal is strong and consistent?

i’ve been playing with this mentally even when using “normal” architectures, thinking about layers, modules, or even latent variables as living on different time scales, and designing training loops that respect that instead of hammering everything with the same update schedule.

---

continuous latent spaces and hierarchical representations

another rabbit hole: continuous latent spaces and hierarchical representation learning. generative models and rl papers talk a lot about compressing high-dimensional observations into lower-dimensional continuous states that still capture the important structure.

what interests me is not just “cool images in the latent space,” but how these spaces become more structured and semantic as you go up the hierarchy. higher-level latent variables tend to capture coarse, semantic stuff (what is happening, what concept is present), while lower levels handle the gritty details (texture, noise, small variations).

once you start thinking like this, you stop seeing your model as a flat stack of layers and more like a nested hierarchy of abstractions: top latents decide “scene / intent / concept,” mid-level latents refine structure, and lower levels fill in the exact details. that view shows up everywhere, from hierarchical vaes and diffusion models with latent priors to energy-based models with joint latent spaces, and it’s shaping how i think about model design in general.

---

trying to act like a research engineer (while still in college)

all of this is slowly rewiring how i see my work. i don’t really feel like “just a student learning ml” anymore. i’m trying to behave like a junior research engineer who happens to still be in college:

- start from real problems or real questions: how models represent things, how they adapt over time, how hierarchy and latent structure show up, instead of only chasing leaderboard scores.
- read enough literature to stand on other people’s shoulders, then aggressively simplify the ideas into something my hardware and brain can actually run.
- treat every project like an experiment: define baselines, choose metrics, keep track of what broke, and always ask “would this setup still make sense if i scaled it up or deployed it?”.

next steps are pretty clear in my head: go deeper into nested/continuous latent models, experiment more with hierarchical representations in practical setups, and start open-sourcing more of this thinking so people can poke holes in it.

right now, my “research era” is mostly late-night reading, half-working prototypes, weird bugs, and just enough insight to keep me hooked.
    `
  }
]

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = blogPosts.find(p => p.slug === slug)

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-primary hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border/40">
        <nav className="max-w-3xl mx-auto flex justify-between items-center px-6 py-6 text-sm">
          <div className="flex items-center gap-8">
            <Link
              href="/blog"
              className="text-muted hover:text-foreground transition-colors"
            >
              ← Blog
            </Link>
            <div className="flex gap-6 text-muted">
              <Link
                href="/projects"
                className="hover:text-foreground transition-colors"
              >
                work
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Main */}
      <main className="max-w-2xl mx-auto px-6 py-16">
        {/* Header */}
        <article className="space-y-8">
          <div className="space-y-4">
            <time className="text-sm text-muted">{post.date}</time>
            <h1 className="text-3xl font-bold tracking-tight">
              {post.title}
            </h1>
            <p className="text-lg text-muted leading-relaxed">
              {post.excerpt}
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none space-y-6">
            {post.content.split('\n\n').map((paragraph, idx) => {
              // Handle dividers
              if (paragraph.trim() === '---') {
                return <hr key={idx} className="border-t border-border/40 my-8" />
              }

              // Handle headings
              if (paragraph.startsWith('# ')) {
                return (
                  <h2 key={idx} className="text-2xl font-bold pt-4">
                    {paragraph.substring(2)}
                  </h2>
                )
              }

              if (paragraph.startsWith('## ')) {
                return (
                  <h3 key={idx} className="text-xl font-semibold pt-2">
                    {paragraph.substring(3)}
                  </h3>
                )
              }

              // Regular paragraphs
              return (
                <p key={idx} className="text-base leading-relaxed text-muted">
                  {paragraph}
                </p>
              )
            })}
          </div>

          {/* Footer */}
          <div className="space-y-8 pt-8 mt-8 border-t border-border/40">
            <p className="text-sm text-muted">
              End of article.
            </p>

            <div className="flex gap-4">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 font-medium hover:text-muted transition-colors group"
              >
                ← Back to Blog
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 font-medium hover:text-muted transition-colors group"
              >
                See my work
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </article>
      </main>
    </div>
  )
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}