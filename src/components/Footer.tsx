import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo, navLinks } from '../data/portfolio';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-dark-800/50">
      <div className="absolute inset-0 bg-gradient-to-t from-dark-950 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <a href="#home" className="text-2xl font-bold gradient-text">
              YA
            </a>
            <p className="mt-4 text-dark-400 text-sm max-w-xs">
              Étudiant ingénieur passionné par la Data Science et le Machine Learning.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-dark-400 hover:text-primary-400 transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-4">Réseaux</h4>
            <div className="flex gap-3">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-dark-800 border border-dark-700 text-dark-300 hover:text-primary-400 hover:border-primary-500/50 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-dark-800 border border-dark-700 text-dark-300 hover:text-primary-400 hover:border-primary-500/50 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-xl bg-dark-800 border border-dark-700 text-dark-300 hover:text-primary-400 hover:border-primary-500/50 transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-dark-800/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-dark-400 text-sm">
            © {currentYear} Yacine ALLAM. Tous droits réservés.
          </p>
          <p className="text-dark-500 text-sm flex items-center gap-1">
            Fait avec <Heart className="w-4 h-4 text-red-500" /> à Paris
          </p>
        </div>
      </div>
    </footer>
  );
}
