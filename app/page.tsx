'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, Github, Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function HomePage() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    setIsDark(window.matchMedia('(prefers-color-scheme: dark)').matches)
  }, [])

  const toggleTheme = () => {
    const html = document.documentElement
    html.style.colorScheme = isDark ? 'light' : 'dark'
    setIsDark(!isDark)
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border/40">
        <nav className="max-w-3xl mx-auto flex justify-between items-center px-6 py-6 text-sm">
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="font-semibold hover:text-muted transition-colors"
            >
              home
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
                className="hover:text-foreground transition-colors"
              >
                notes
              </Link>
            </div>
          </div>

          <button
            onClick={toggleTheme}
            className="p-1.5 hover:bg-border/40 rounded-lg transition-colors"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </nav>
      </header>

      {/* Main */}
      <main className="max-w-3xl mx-auto px-6 py-16">
        {/* Hero */}
        <section className="space-y-8 mb-20">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">
              Gourav Sahu
            </h1>
            <p className="text-lg text-muted">
              Neural Systems Engineer.
            </p>
          </div>

          <p className="text-base leading-relaxed text-muted max-w-2xl">
            Building production ML systems at the intersection of research and engineering. 
            Focused on small language models, optimization, and turning academic papers into 
            working systems. Currently exploring how to make AI more efficient and practical.
          </p>

          {/* CTA Links */}
          <div className="flex gap-6 pt-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 font-medium hover:text-muted transition-colors group"
            >
              View my work
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <a
              href="mailto:gourav.sahu.1695@gmail.com"
              className="inline-flex items-center gap-2 font-medium hover:text-muted transition-colors group"
            >
              Get in touch
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </section>

        {/* Featured Project */}
        <section className="space-y-6">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">
            Recent Work
          </h2>

          <a
            href="https://github.com/binaryecheos"
            target="_blank"
            className="block group"
          >
            <div className="border border-border rounded-lg p-6 hover:border-foreground/50 hover:bg-border/20 transition-all duration-300">
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold flex items-center gap-2 mb-2">
                    <Github className="w-5 h-5" />
                    dtc-route-rationalization
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    Dynamic bus service rationalization using reinforcement learning and XGBoost 
                    to combat bus bunching and improve headway regularity in urban transit systems.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {['RL', 'XGBoost', 'Python', 'Optimization'].map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-border/60 px-2 py-1 rounded text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted group-hover:text-foreground transition-colors flex-shrink-0 mt-1" />
              </div>
            </div>
          </a>
        </section>

        {/* Projects Grid */}
        <section className="space-y-6 mt-20">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">
            Other Projects
          </h2>

          <div className="grid gap-4">
            {[
              {
                title: 'elite-ball-knowledge',
                desc: 'Deep learning fundamentals from scratch using NumPy',
              },
              {
                title: 'Healthetico',
                desc: 'AI-powered healthcare platform with GenAI and predictive analytics',
              },
              {
                title: 'ML Pipeline',
                desc: 'Production ML pipeline with MLflow and automated CI/CD deployment',
              },
            ].map((project) => (
              <div
                key={project.title}
                className="border border-border rounded-lg p-4 hover:border-foreground/50 hover:bg-border/20 transition-all"
              >
                <h4 className="font-medium text-sm">{project.title}</h4>
                <p className="text-muted text-xs mt-1">{project.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Social Links */}
        <section className="mt-20 pt-12 border-t border-border/40">
          <p className="text-sm text-muted mb-4">Let's connect</p>
          <div className="flex gap-6">
            <a
              href="https://github.com/binaryecheos"
              target="_blank"
              className="text-muted hover:text-foreground transition-colors text-sm font-medium"
            >
              GitHub
            </a>
            <a
              href="mailto:gourav.sahu.1695@gmail.com"
              className="text-muted hover:text-foreground transition-colors text-sm font-medium"
            >
              Email
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}
