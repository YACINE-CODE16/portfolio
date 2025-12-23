import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, Linkedin, Github, MapPin, Send } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: Phone,
      label: 'Téléphone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone.replace(/\s/g, '')}`,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/yacine-allam',
      href: personalInfo.linkedin,
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/yacineallam',
      href: personalInfo.github,
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 relative">
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
            Me <span className="gradient-text">Contacter</span>
          </h2>
          <p className="section-subtitle mx-auto">
            N'hésitez pas à me contacter pour discuter d'opportunités
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-white mb-2">Parlons de votre projet</h3>
              <p className="text-dark-300 mb-8">
                Je suis actuellement à la recherche d'un stage de 4-5 mois en Data Science
                ou Data Analysis à partir d'avril 2026. Contactez-moi pour discuter !
              </p>

              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target={item.label === 'Email' || item.label === 'Téléphone' ? undefined : '_blank'}
                    rel={item.label === 'Email' || item.label === 'Téléphone' ? undefined : 'noopener noreferrer'}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-primary-500/50 transition-all duration-300 group"
                  >
                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 group-hover:from-primary-500/30 group-hover:to-accent-500/30 transition-all duration-300">
                      <item.icon className="w-5 h-5 text-primary-400" />
                    </div>
                    <div>
                      <p className="text-sm text-dark-400">{item.label}</p>
                      <p className="text-white font-medium group-hover:text-primary-400 transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-dark-700/50">
                <div className="flex items-center gap-2 text-dark-400">
                  <MapPin className="w-4 h-4" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form / CTA */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="glass-card p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-500/5" />

              <div className="relative">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-primary-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Envoyez-moi un message</h3>
                  <p className="text-dark-400 text-sm">
                    Je vous répondrai dans les plus brefs délais
                  </p>
                </div>

                <a
                  href={`mailto:${personalInfo.email}?subject=Opportunité de stage - Data Science&body=Bonjour Yacine,%0D%0A%0D%0AJe vous contacte concernant...`}
                  className="btn-primary w-full justify-center"
                >
                  <Mail className="w-4 h-4" />
                  Envoyer un email
                </a>

                <div className="relative my-8">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-dark-700/50" />
                  </div>
                  <div className="relative flex justify-center">
                    <span className="px-4 bg-dark-800 text-dark-400 text-sm">ou</span>
                  </div>
                </div>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full justify-center"
                >
                  <Linkedin className="w-4 h-4" />
                  Connectons-nous sur LinkedIn
                </a>

                {/* Availability */}
                <div className="mt-8 p-4 rounded-xl bg-dark-800/50 border border-dark-700/50">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                      <div className="absolute inset-0 w-3 h-3 rounded-full bg-green-500 animate-ping" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">Disponible pour un stage</p>
                      <p className="text-xs text-dark-400">À partir d'avril 2026 • 4-5 mois</p>
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
