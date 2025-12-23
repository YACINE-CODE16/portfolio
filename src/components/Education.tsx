import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, BookOpen } from 'lucide-react';
import { education } from '../data/portfolio';

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="education" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900/50 to-dark-950" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Ma <span className="gradient-text">Formation</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Parcours académique et spécialisations
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 card-hover glow-box relative overflow-hidden"
            >
              {/* Background Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-full blur-2xl" />

              {/* Logo Placeholder */}
              <div className="relative mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center">
                  <span className="text-xl font-bold gradient-text">{edu.logo}</span>
                </div>
              </div>

              {/* Content */}
              <div className="relative">
                <div className="flex items-center gap-2 text-sm text-dark-400 mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>{edu.period}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1">{edu.school}</h3>
                <p className="text-primary-400 font-medium mb-3">{edu.degree}</p>
                <p className="text-dark-300 text-sm mb-4">{edu.description}</p>

                {/* Courses */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-dark-400">
                    <BookOpen className="w-4 h-4" />
                    <span>Cours principaux</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course) => (
                      <span
                        key={course}
                        className="px-2 py-1 text-xs font-medium rounded-md bg-dark-800 text-dark-300 border border-dark-700"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
