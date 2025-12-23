import Link from 'next/link'
import { ArrowUpRight, Github, ExternalLink, Sun } from 'lucide-react'

export default function ProjectsPage() {
  const projects = [
    
    {
      title: "elite-ball-knowledge",
      description: "Deep learning from scratch. No TensorFlow, no PyTorch.",
      technologies: ["Python", "NumPy", "Deep Learning"],
      github: "https://github.com/binaryecheos/elite-ball-knowledge",
      demo: "",
      status: "Completed"
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
        <h1 className="text-2xl font-bold mb-8 text-foreground">work</h1>

        <div className="grid gap-6">
          {projects.map((project, index) => (
            <div key={index} className="border border-border/50 rounded-2xl p-4 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 ease-in-out bg-card/50 backdrop-blur-sm">
              <div className="flex justify-between items-start mb-3">
                <h2 className="text-lg font-semibold text-card-foreground">{project.title}</h2>
                <span className={`px-2 py-0.5 rounded-full text-xs font-medium transition-all duration-300 ${
                  project.status === 'Completed'
                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 hover:bg-green-200 dark:hover:bg-green-800'
                    : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 hover:bg-yellow-200 dark:hover:bg-yellow-800'
                }`}>
                  {project.status}
                </span>
              </div>

              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-3">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 bg-secondary text-secondary-foreground rounded-full text-xs font-medium hover:bg-secondary/80 transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <Link
                  href={project.github}
                  target="_blank"
                  className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-all duration-300 ease-in-out hover:gap-2 group"
                >
                  <Github className="w-3.5 h-3.5 transition-transform duration-300 group-hover:scale-110" />
                  Code
                </Link>
                <Link
                  href={project.demo}
                  target="_blank"
                  className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-all duration-300 ease-in-out hover:gap-2 group"
                >
                  <ExternalLink className="w-3.5 h-3.5 transition-transform duration-300 group-hover:scale-110" />
                  Demo
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}