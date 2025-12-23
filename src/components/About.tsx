import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Calendar, Briefcase, GraduationCap } from 'lucide-react';
import { personalInfo, certifications } from '../data/portfolio';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { label: 'Années d\'études', value: '5', icon: GraduationCap },
    { label: 'Projets Data', value: '10+', icon: Briefcase },
    { label: 'Certifications', value: '2', icon: Calendar },
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative">
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
            À propos de <span className="gradient-text">moi</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Passionné par les données et leur pouvoir de transformation
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-card p-6 md:p-8">
              <p className="text-dark-200 leading-relaxed mb-6">
                Actuellement en 4ème année à l'<span className="text-primary-400 font-medium">ESIEA Paris</span>,
                je me spécialise en Data Science et Intelligence Artificielle. Mon parcours m'a permis de
                développer une expertise solide en analyse de données, machine learning et visualisation.
              </p>
              <p className="text-dark-200 leading-relaxed mb-6">
                Mon semestre d'échange à <span className="text-accent-400 font-medium">KMUTT Bangkok</span> m'a
                ouvert à de nouvelles perspectives en Data Science et NLP, tout en développant ma capacité
                à travailler dans un environnement international.
              </p>
              <p className="text-dark-200 leading-relaxed">
                En parallèle, j'ai co-fondé <span className="text-primary-400 font-medium">Webentis DM</span>,
                une agence digitale où j'accompagne des clients dans leurs projets de data visualization
                et d'automatisation.
              </p>

              <div className="flex items-center gap-2 mt-6 text-dark-400">
                <MapPin className="w-4 h-4" />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            {/* Certifications */}
            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold mb-4 text-white">Certifications</h3>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-dark-800/50 border border-dark-700/50"
                  >
                    <div className="p-2 rounded-lg bg-gradient-to-br from-primary-500/20 to-accent-500/20">
                      <cert.icon className="w-4 h-4 text-primary-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">{cert.name}</p>
                      <p className="text-xs text-dark-400">{cert.issuer} • {cert.date}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Stats & Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="glass-card p-4 text-center glow-box"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-5 h-5 text-primary-400" />
                  </div>
                  <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs text-dark-400 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Visual Element */}
            <div className="glass-card p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-500/5" />
              <div className="relative">
                <h3 className="text-lg font-semibold mb-6 text-white">Ce que je recherche</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary-500 mt-2" />
                    <div>
                      <p className="text-white font-medium">Stage Data Science / Data Analysis</p>
                      <p className="text-sm text-dark-400">4-5 mois à partir d'avril 2026</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent-500 mt-2" />
                    <div>
                      <p className="text-white font-medium">Environnement innovant</p>
                      <p className="text-sm text-dark-400">Projets ML, IA, Big Data</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary-400 mt-2" />
                    <div>
                      <p className="text-white font-medium">Impact business</p>
                      <p className="text-sm text-dark-400">Data-driven decision making</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
