import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '../data/portfolio';

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = Object.values(skills);

  return (
    <section id="skills" className="py-20 md:py-32 relative">
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
            Mes <span className="gradient-text">Compétences</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Technologies et outils que je maîtrise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="glass-card p-6 glow-box"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20">
                  <category.icon className="w-5 h-5 text-primary-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.items.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-dark-200">{skill.name}</span>
                      <span className="text-xs text-dark-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-dark-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                          ease: "easeOut",
                        }}
                        className="h-full rounded-full bg-gradient-to-r from-primary-500 to-accent-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <h3 className="text-lg font-semibold text-white mb-6">Autres compétences</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Data Cleaning', 'Feature Engineering', 'Statistical Analysis',
              'A/B Testing', 'ETL Pipelines', 'API Integration',
              'Agile/Scrum', 'Data Storytelling', 'Business Intelligence'
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + index * 0.05 }}
                className="skill-tag"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
