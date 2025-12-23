import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, TrendingUp } from 'lucide-react';
import { projects } from '../data/portfolio';

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900/30 to-dark-950" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Mes <span className="gradient-text">Projets</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Projets Data Science et Machine Learning
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass-card overflow-hidden card-hover glow-box"
            >
              {/* Project Image/Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-primary-500/20 to-accent-500/20 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <TrendingUp className="w-16 h-16 text-primary-500/30 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent" />

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="px-2.5 py-1 text-xs font-medium rounded-md bg-primary-500/90 text-white">
                      Featured
                    </span>
                  </div>
                )}

                {/* Links */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-dark-900/80 backdrop-blur-sm text-white hover:bg-primary-500 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-dark-900/80 backdrop-blur-sm text-white hover:bg-primary-500 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-dark-300 text-sm mb-4 line-clamp-3">
                  {project.longDescription}
                </p>

                {/* Metrics */}
                {project.metrics && (
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div
                        key={key}
                        className="text-center p-2 rounded-lg bg-dark-800/50"
                      >
                        <div className="text-sm font-bold text-primary-400">{value}</div>
                        <div className="text-xs text-dark-400">{key}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-medium rounded-md bg-dark-800 text-dark-300 border border-dark-700"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 text-xs font-medium rounded-md bg-dark-800 text-dark-400 border border-dark-700">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/yacineallam"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <Github className="w-4 h-4" />
            Voir plus sur GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
