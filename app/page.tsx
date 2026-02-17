'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, Github, Moon, Sun } from 'lucide-react'
import { useEffect, useState, useRef } from 'react'

// Neural network background component
function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Particle system
    interface Particle {
      x: number
      y: number
      vx: number
      vy: number
      life: number
      maxLife: number
    }

    const particles: Particle[] = []
    const particleCount = 30

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        life: Math.random() * 0.5 + 0.5,
        maxLife: 1,
      })
    }

    const isDarkMode = () => {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }

    const animate = () => {
      const isDark = isDarkMode()
      const bg = isDark ? 'rgba(15, 15, 15, 0.1)' : 'rgba(250, 250, 250, 0.1)'
      const lineColor = isDark ? 'rgba(160, 160, 160, 0.08)' : 'rgba(115, 115, 115, 0.08)'
      const nodeColor = isDark ? 'rgba(200, 200, 200, 0.15)' : 'rgba(100, 100, 100, 0.12)'

      ctx.fillStyle = bg
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach((p, i) => {
        p.x += p.vx
        p.y += p.vy
        p.life -= 0.005

        // Wrap around edges
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        // Respawn if dead
        if (p.life <= 0) {
          p.x = Math.random() * canvas.width
          p.y = Math.random() * canvas.height
          p.life = Math.random() * 0.5 + 0.5
        }

        // Draw particle
        ctx.fillStyle = nodeColor
        ctx.beginPath()
        ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2)
        ctx.fill()

        // Draw connections to nearby particles
        particles.forEach((other, j) => {
          if (i !== j) {
            const dx = other.x - p.x
            const dy = other.y - p.y
            const dist = Math.sqrt(dx * dx + dy * dy)

            if (dist < 100) {
              ctx.strokeStyle = lineColor
              ctx.lineWidth = 0.5
              ctx.beginPath()
              ctx.moveTo(p.x, p.y)
              ctx.lineTo(other.x, other.y)
              ctx.stroke()
            }
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  )
}

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
    <div className="min-h-screen bg-background text-foreground relative">
      <NeuralBackground />
      {/* Header */}
      <header className="border-b border-border/40 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
        <nav className="max-w-3xl mx-auto flex justify-between items-center px-6 py-6 text-sm">
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="font-semibold hover:text-muted transition-colors duration-200"
            >
              home
            </Link>
            <div className="flex gap-6 text-muted">
              <Link
                href="/projects"
                className="hover:text-foreground transition-colors duration-200 relative group"
              >
                work
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-foreground/30 group-hover:w-full transition-all duration-300" />
              </Link>
              <Link
                href="/blog"
                className="hover:text-foreground transition-colors duration-200 relative group"
              >
                notes
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-foreground/30 group-hover:w-full transition-all duration-300" />
              </Link>
            </div>
          </div>

          <button
            onClick={toggleTheme}
            className="p-1.5 hover:bg-border/40 rounded-lg transition-all duration-200 hover:scale-110"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </nav>
      </header>

      {/* Main */}
      <main className="max-w-3xl mx-auto px-6 py-16 relative z-10">
        {/* Hero */}
        <section className="space-y-8 mb-20 animate-fadeInUp-1">
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
              className="inline-flex items-center gap-2 font-medium text-foreground hover:text-muted transition-colors duration-200 group relative"
            >
              <span className="relative">
                View my work
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-current group-hover:w-full transition-all duration-300" />
              </span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </Link>
            <a
              href="mailto:gourav.sahu.1695@gmail.com"
              className="inline-flex items-center gap-2 font-medium text-foreground hover:text-muted transition-colors duration-200 group relative"
            >
              <span className="relative">
                Get in touch
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-current group-hover:w-full transition-all duration-300" />
              </span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </a>
          </div>
        </section>

        {/* Featured Project */}
        <section className="space-y-6 animate-fadeInUp-2">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">
            Recent Work
          </h2>

          <a
            href="https://github.com/binaryecheos"
            target="_blank"
            className="block group"
          >
            <div className="border border-border rounded-lg p-6 hover:border-foreground/40 hover:bg-border/20 transition-all duration-500 group-hover:shadow-sm group-hover:shadow-foreground/5">
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold flex items-center gap-2 mb-2 group-hover:text-muted transition-colors duration-300">
                    <Github className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                    dtc-route-rationalization
                  </h3>
                  <p className="text-muted text-sm leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                    Dynamic bus service rationalization using reinforcement learning and XGBoost 
                    to combat bus bunching and improve headway regularity in urban transit systems.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {['RL', 'XGBoost', 'Python', 'Optimization'].map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-border/60 px-2 py-1 rounded text-muted hover:bg-border hover:text-foreground transition-all duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted group-hover:text-foreground transition-all duration-300 flex-shrink-0 mt-1 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </div>
          </a>
        </section>

        {/* Projects Grid */}
        <section className="space-y-6 mt-20 animate-fadeInUp-3">
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
                className="border border-border rounded-lg p-4 hover:border-foreground/50 hover:bg-border/20 transition-all duration-400 group cursor-pointer"
              >
                <h4 className="font-medium text-sm group-hover:text-foreground transition-colors duration-300">{project.title}</h4>
                <p className="text-muted text-xs mt-1 group-hover:text-foreground/70 transition-colors duration-300">{project.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Social Links */}
        <section className="mt-20 pt-12 border-t border-border/40 animate-fadeInUp-4">
          <p className="text-sm text-muted mb-4">Let's connect</p>
          <div className="flex gap-6">
            <a
              href="https://github.com/binaryecheos"
              target="_blank"
              className="text-muted hover:text-foreground transition-colors duration-200 text-sm font-medium relative group"
            >
              GitHub
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-current group-hover:w-full transition-all duration-300" />
            </a>
            <a
              href="mailto:gourav.sahu.1695@gmail.com"
              className="text-muted hover:text-foreground transition-colors duration-200 text-sm font-medium relative group"
            >
              Email
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-current group-hover:w-full transition-all duration-300" />
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}
