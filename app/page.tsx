'use client'

import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowUpRight,
  Github,
  Sun,
} from 'lucide-react'

/* ------------------------------
   Inline placeholder data
------------------------------ */
const placeholderImages = {
  githubCat: {
    imageUrl: '/git-bi.jpeg', // replace with real path
    description: 'GitHub preview',
    imageHint: 'github illustration',
  },
}

/* ------------------------------
   Reusable inline Card
------------------------------ */
function Card({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={`rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 ease-in-out ${className}`}
    >
      {children}
    </div>
  )
}

/* ------------------------------
   Logo (from AppLayout)
------------------------------ */
function Logo() {
  return (
    <Image
      src="/gs-logo.jpeg" // replace with real path
      alt="Logo"
      width={24}
      height={24}
    />
  )
}

/* ------------------------------
   Page
------------------------------ */
export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Radial glow */}
      <div className="absolute top-0 left-0 w-full h-[50vh] bg-[radial-gradient(ellipse_50%_50%_at_50%_0%,rgba(217,128,47,0.25),rgba(255,255,255,0))] -z-10" />

      {/* Header */}
      <header className="py-6">
        <nav className="max-w-4xl mx-auto flex justify-between items-center px-4 text-sm font-medium">
          <div className="flex items-center gap-4 text-muted-foreground">
            <Link
              href="/"
              className="p-2 rounded-xl hover:bg-secondary/50 hover:text-foreground transition-all duration-300 ease-in-out hover:scale-105"
            >
              <Logo />
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
            Gourav Sahu
          </h1>

          <p className="text-primary">
            machine learning engineer & researcher. cs undergrad.
          </p>

          <p className="text-base leading-relaxed">
            ml papers. notebooks. backend repos.
            turning models into shippable systems.
            llms, apis, production constraints.
            interested in the research × engineering edge.
            build stuff. ship stuff. repeat.
            tech, f1, geopolitics, misc. current focus area is on 
            small language models and learning optimization.
          </p>

          <p className="text-sm">
           ⚠️ currently under construction. not in a rush.
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

          {/* Scribble divider */}
          <div className="pt-2 pb-4">
            <div className="w-12 border-t border-dashed border-muted-foreground rotate-[1deg] translate-x-1">
              <div className="w-12 border-t border-dashed border-muted-foreground -rotate-[2deg] -translate-x-2 -translate-y-0.5" />
            </div>
          </div>

          <p>
            feel free to reach me out at{' '}
            <a
              href="mailto:gourav.sahu.1695@gmail.com"
              className="font-semibold text-primary hover:underline"
            >
              email
            </a>
            .
          </p>
        </section>

        {/* Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* GitHub */}
          <a
            href="https://github.com/binaryecheos"
            target="_blank"
            className="md:col-span-2 group"
          >
            <Card className="p-6 border-primary/20 hover:border-primary/50 transition-all duration-500 h-full">
              <div className="flex justify-between">
                <div>
                  <h3 className="text-lg font-bold text-primary flex items-center gap-2">
                    <Github className="transition-transform duration-300 group-hover:scale-110" /> GitHub
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    my experiments (aka projects)
                  </p>
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>

              <div className="mt-4 flex justify-center">
                <Image
                  src={placeholderImages.githubCat.imageUrl}
                  alt={placeholderImages.githubCat.description}
                  width={400}
                  height={200}
                  className="rounded-xl transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </Card>
          </a>

          {/* Contribution Graph */}
          <Card className="p-4 border-primary/20 flex flex-col justify-between">
            <div className="space-y-1">
              {Array.from({ length: 7 }).map((_, r) => (
                <div key={r} className="flex gap-1 justify-end">
                  {Array.from({ length: 18 }).map((_, c) => (
                    <div
                      key={c}
                      className="w-3 h-3 rounded-sm bg-green-900"
                      style={{ opacity: Math.random() }}
                    />
                  ))}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs mt-4 text-muted-foreground">
              <p>Stars: <span className="text-primary font-semibold">9</span></p>
              <p>Followers: <span className="text-primary font-semibold">3</span></p>
              <p>PRs: <span className="text-primary font-semibold">2</span></p>
              <p>Issues: <span className="text-primary font-semibold">0</span></p>
            </div>
          </Card>

          {/* Status */}
          <Card className="p-6 border-primary/20 flex items-center justify-center">
            <div className="flex flex-col items-center gap-2">
              <div className="relative">
                <div className="absolute w-3 h-3 bg-red-500 rounded-full animate-ping" />
                <div className="w-3 h-3 bg-red-500 rounded-full" />
              </div>
              <h3 className="text-lg font-semibold text-primary">
                offline
              </h3>
              <p className="text-sm text-muted-foreground">
                (@binaryecheos)
              </p>
            </div>
          </Card>

          {/* Latest Project */}
          <Card className="md:col-span-2 p-6 ring-1 ring-purple-500/50 flex justify-between items-end hover:ring-purple-400 transition-all duration-500 group">
            <div>
              <h3 className="text-lg font-bold text-primary">
                Latest Project
              </h3>
              <p className="text-2xl font-semibold text-muted-foreground mt-2 group-hover:text-foreground transition-colors duration-300">
                dtc-route-rationalization
              </p>
            </div>
            <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Card>
        </section>
      </main>
    </div>
  )
}
