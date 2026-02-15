import Link from 'next/link'
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react'

export default function ProjectsPage() {
  const projects = [
    {
      title: "dtc-route-rationalization",
      description: "Dynamic bus service rationalization using reinforcement learning and XGBoost to combat bus bunching and improve headway regularity in urban transit systems.",
      technologies: ["RL", "XGBoost", "Python", "Optimization"],
      github: "https://github.com/binaryecheos/dtc-route-rationalization",
      demo: "",
      status: "Ongoing",
    },
    {
      title: "elite-ball-knowledge",
      description: "Deep learning fundamentals built from scratch using NumPy. No frameworks, pure implementation of neural networks and optimization algorithms.",
      technologies: ["Python", "NumPy", "Deep Learning"],
      github: "https://github.com/binaryecheos/elite-ball-knowledge",
      demo: "",
      status: "Ongoing",
    },
    {
      title: "Healthetico",
      description: "AI-powered healthcare platform providing personalized patient care recommendations and predictive health analytics using GenAI.",
      technologies: ["Next.js", "Flask", "GenAI", "Python"],
      github: "https://github.com/binaryecheos/SU-NATIONAL-HACKATHON",
      demo: "https://su-national-hackathon.vercel.app/",
      status: "Completed",
    },
    {
      title: "Machine Learning Pipeline",
      description: "Production-grade ML pipeline for price prediction with MLflow integration, automated testing, and continuous deployment.",
      technologies: ["MLOps", "CI/CD", "Python", "MLflow"],
      github: "https://github.com/binaryecheos/Price-Prediction-Model",
      demo: "",
      status: "Ongoing",
    },
    {
      title: "Disease Prediction System",
      description: "Medical diagnosis system integrating NLP for symptom analysis, XGBoost classification, and SHAP explainability with real-time doctor connection.",
      technologies: ["NER", "HuggingFace", "SHAP", "XGBoost"],
      github: "https://github.com/binaryecheos/symptom-disease-predictor-",
      demo: "",
      status: "In Progress",
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
                className="font-semibold text-foreground"
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
        </nav>
      </header>

      {/* Main */}
      <main className="max-w-3xl mx-auto px-6 py-16">
        <div className="space-y-4 mb-16">
          <h1 className="text-4xl font-bold tracking-tight">work & projects</h1>
          <p className="text-muted text-lg">
            A collection of projects spanning machine learning, backend systems, and research implementation.
          </p>
        </div>

        <div className="grid gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-border rounded-lg p-6 hover:border-foreground/50 hover:bg-border/20 transition-all duration-300 group"
            >
              <div className="flex justify-between items-start gap-4 mb-4">
                <div className="flex-1">
                  <h2 className="text-xl font-semibold tracking-tight mb-2">
                    {project.title}
                  </h2>
                  <p className="text-muted leading-relaxed text-sm mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-border/60 px-2.5 py-1 rounded text-muted font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-muted transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-muted transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>

                {/* Status Badge */}
                <div className="flex-shrink-0">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap ${
                    project.status === 'Completed'
                      ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                      : project.status === 'Ongoing'
                      ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                      : 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}