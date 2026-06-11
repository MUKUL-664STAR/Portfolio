'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2, Eye, Download } from 'lucide-react';
import { NAV_LINKS } from '@/constants';
import { scrollToSection, cn } from '@/utils';
import ThemeToggle from '@/components/ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detect active section
      const sections = NAV_LINKS.map((l) => l.href.replace('#', ''));
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    scrollToSection(href);
    setIsOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-gray-950/80 backdrop-blur-xl border-b border-gray-800/60 shadow-xl shadow-black/20'
          : 'bg-transparent'
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <motion.button
          onClick={() => handleNavClick('#hero')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 font-bold text-xl text-gray-900 dark:text-white cursor-pointer"
        >
          <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/30">
            <Code2 className="w-5 h-5" />
          </span>
          <span className="hidden sm:inline">
            Mukul<span className="text-blue-500">.</span>
          </span>
        </motion.button>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const id = link.href.replace('#', '');
            const isActive = activeSection === id;
            return (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className={cn(
                    'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                    isActive
                      ? 'text-indigo-400 bg-indigo-500/10'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800'
                  )}
                >
                  {link.label}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <ThemeToggle />

          {/* Desktop: View + Download buttons */}
          <div className="hidden md:flex items-center gap-2">
            <motion.a
              href="/resume/Mukul_Choudhary_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-blue-500/40 text-blue-400 text-sm font-semibold hover:bg-blue-500/10 hover:border-blue-400 transition-all duration-200"
            >
              <Eye className="w-3.5 h-3.5" />
              View
            </motion.a>
            <motion.a
              href="/resume/Mukul_Choudhary_Resume.pdf"
              download="Mukul_Choudhary_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-200"
            >
              <Download className="w-3.5 h-3.5" />
              Resume
            </motion.a>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-gray-950/95 backdrop-blur-xl border-b border-gray-800/60"
          >
            <ul className="flex flex-col px-4 py-4 gap-1">
              {NAV_LINKS.map((link) => {
                const id = link.href.replace('#', '');
                const isActive = activeSection === id;
                return (
                  <li key={link.href}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className={cn(
                        'w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200',
                        isActive
                          ? 'text-indigo-400 bg-indigo-500/10'
                          : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                      )}
                    >
                      {link.label}
                    </button>
                  </li>
                );
              })}
              <li className="pt-2 flex gap-2">
                <a
                  href="/resume/Mukul_Choudhary_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 flex-1 px-4 py-3 rounded-xl border border-blue-500/40 text-blue-400 text-sm font-semibold hover:bg-blue-500/10 transition-all"
                >
                  <Eye className="w-4 h-4" />
                  View
                </a>
                <a
                  href="/resume/Mukul_Choudhary_Resume.pdf"
                  download="Mukul_Choudhary_Resume.pdf"
                  className="flex items-center justify-center gap-1.5 flex-1 px-4 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm font-semibold"
                >
                  <Download className="w-4 h-4" />
                  Download
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
