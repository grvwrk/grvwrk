import Link from 'next/link'
import { ArrowUpRight, Sun } from 'lucide-react'

interface BlogPost {
  title: string
  date: string
  excerpt: string
  slug: string
  content: string
}

const blogPosts: BlogPost[] = [
  {
    title: "How I'm Learning to Think Like an ML Researcher (As a 2nd-Year Student)",
    date: "December 23, 2025",
    excerpt: "The journey from ML tutorials to real research thinking, rebuilding ideas from scratch, and turning them into working projects.",
    slug: "learning-to-think-like-ml-researcher",
    content: `
The last few months have felt like stepping out of “ML tutorials” and into the deep end. Instead of just finishing courses, I’ve been reading actual papers, ripping out the ideas, rewriting them from scratch, and turning them into projects I’m not embarrassed to demo.

---

Starting from the math (for real this time)

At some point it clicked that if I want to do serious ML research, I can’t treat math like background noise running in another tab. So I went back to basics: linear algebra, probability, optimization, and the early chapters of Goodfellow’s Deep Learning—not to pass exams, but to actually understand what my networks are doing.

Now when training blows up, it’s not just “ugh, lower the LR and pray.” I can usually point to something specific: vanishing gradients in an RNN, overfitting because of a sloppy split, bad initialization, or just cursed data.

---

Using papers as build guides, not holy texts

Recently my reading has gone pretty deep into sequence models, nested learning ideas, and how continuous latent spaces + hierarchies actually make models think. I started with classical RNNs, then moved through LSTMs/GRUs and sequence-to-sequence setups, and now I’m more interested in how these things are optimized and structured than just “does it overfit less.”

The main mindset shift: papers aren’t “too advanced for future me” anymore. I treat them like build guides. Skim the main idea, understand the architecture and objective, then open a notebook and try to rebuild a small version. It usually breaks a few times, but that read → implement → debug loop is where the concepts actually stick.

---

Nested learning and models that learn at different speeds

One concept I’ve been obsessed with lately is nested learning—thinking of a model not as one big monolithic learner, but as a stack of smaller learning problems running at different time scales. The idea is that some parts of the system adapt fast (like “short-term memory”), while others update slowly and act more like long-term structure.

Once you see optimizers and architectures this way, things like momentum, adaptive learning rates, or multi-level objectives start to feel like nested optimization problems instead of random tricks. You’re basically asking: which parts of this model should react instantly to new data, and which parts should move only when the signal is strong and consistent?

I’ve been playing with this mentally even when using “normal” architectures—thinking about layers, modules, or even latent variables as living on different time scales, and designing training loops that respect that instead of hammering everything with the same update schedule.

---

Continuous latent spaces and hierarchical representations

Another rabbit hole: continuous latent spaces and hierarchical representation learning. Generative models and RL papers talk a lot about compressing high-dimensional observations into lower-dimensional continuous states that still capture the important structure.

What interests me is not just “cool images in the latent space,” but how these spaces become more structured and semantic as you go up the hierarchy. Higher-level latent variables tend to capture coarse, semantic stuff (what is happening, what concept is present), while lower levels handle the gritty details (texture, noise, small variations).

Once you start thinking like this, you stop seeing your model as a flat stack of layers and more like a nested hierarchy of abstractions: top latents decide “scene / intent / concept,” mid-level latents refine structure, and lower levels fill in the exact details. That view shows up everywhere—from hierarchical VAEs and diffusion models with latent priors to energy-based models with joint latent spaces—and it’s shaping how I think about model design in general.

---

Trying to act like a research engineer (while still in college)

All of this is slowly rewiring how I see my work. I don’t really feel like “just a student learning ML” anymore. I’m trying to behave like a junior research engineer who happens to still be in college:

- Start from real problems or real questions—how models represent things, how they adapt over time, how hierarchy and latent structure show up—instead of only chasing leaderboard scores.
- Read enough literature to stand on other people’s shoulders, then aggressively simplify the ideas into something my hardware and brain can actually run.
- Treat every project like an experiment: define baselines, choose metrics, keep track of what broke, and always ask “Would this setup still make sense if I scaled it up or deployed it?”.

Next steps are pretty clear in my head: go deeper into nested/continuous latent models, experiment more with hierarchical representations in practical setups, and start open-sourcing more of this thinking so people can poke holes in it.

Right now, my “research era” is mostly late-night reading, half-working prototypes, weird bugs, and just enough insight to keep me hooked. And honestly, for a 2nd-year trying to debug his own brain into an ML researcher, that feels like exactly the right amount of chaos.
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
      <main className="max-w-4xl mx-auto px-4 py-12 flex flex-col gap-16">
        {/* Intro */}
        <section className="space-y-6 max-w-2xl text-muted-foreground">
          <h1 className="text-2xl font-bold text-primary">
            {post.title}
          </h1>

          <p className="text-primary">
            {post.date}
          </p>

          <div className="text-base leading-relaxed text-muted-foreground">
            {post.content.split('\n').map((line, index) => {
              if (line.startsWith('# ')) {
                return <h2 key={index} className="text-xl font-semibold mt-8 mb-4 text-primary">{line.substring(2)}</h2>
              }
              if (line.startsWith('## ')) {
                return <h3 key={index} className="text-lg font-medium mt-6 mb-3 text-primary">{line.substring(3)}</h3>
              }
              if (line.startsWith('### ')) {
                return <h4 key={index} className="text-base font-medium mt-4 mb-2 text-primary">{line.substring(4)}</h4>
              }
              if (line.startsWith('- ')) {
                return <li key={index} className="ml-4 mb-2">{line.substring(2)}</li>
              }
              if (line.trim() === '') {
                return <br key={index} />
              }
              if (line.startsWith('1. ')) {
                return <li key={index} className="ml-4 mb-2 list-decimal">{line.substring(3)}</li>
              }
              return <p key={index} className="mb-4">{line}</p>
            })}
          </div>

          <p className="text-sm">
            End of post.
          </p>

          {/* Links */}
          <div className="flex gap-4 font-semibold">
            <Link
              href="/blog"
              className="group flex items-center text-primary hover:text-foreground transition"
            >
              notes
              <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/projects"
              className="group flex items-center text-primary hover:text-foreground transition"
            >
              work + exp.
              <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}