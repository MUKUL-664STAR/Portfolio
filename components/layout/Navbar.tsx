'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download, Eye, Code2 } from 'lucide-react';
import { NAV_LINKS } from '@/constants';
import { scrollToSection } from '@/utils';
import ThemeToggle from '@/components/ThemeToggle';

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActive]  = useState('hero');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => { entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }); },
      { threshold: 0.4 }
    );
    document.querySelectorAll('section[id]').forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNav = (href: string) => { scrollToSection(href); setMobileOpen(false); };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'border-b' : ''}`}
      style={scrolled ? { background: 'var(--nav-bg)', backdropFilter:'blur(20px)', WebkitBackdropFilter:'blur(20px)', borderColor: 'var(--border)' } : {}}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => handleNav('#hero')} className="font-black text-xl text-gray-900 dark:text-white hover:opacity-90 transition-opacity">
          Mukul<span style={{ color:'#34d399' }}>.</span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(link => {
            const isActive = activeSection === link.href.replace('#','');
            return (
              <button
                key={link.label}
                onClick={() => handleNav(link.href)}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                style={isActive ? { color:'#059669', background:'rgba(16,185,129,0.1)' } : { color:'var(--color-3)' }}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle />
          <a
            href="/resume/Mukul_Choudhary_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-medium border transition-all duration-200"
            style={{ color:'#6ee7b7', border:'1px solid rgba(16,185,129,0.3)', background:'rgba(16,185,129,0.07)' }}
          >
            <Eye className="w-3.5 h-3.5" />View
          </a>
          <a
            href="/resume/Mukul_Choudhary_Resume.pdf"
            download="Mukul_Choudhary_Resume.pdf"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ background:'linear-gradient(135deg,#059669,#0d9488)' }}
          >
            <Download className="w-3.5 h-3.5" />Resume
          </a>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setMobileOpen(v => !v)} className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center transition-all" style={{ color:'#9ca3af', background:'rgba(255,255,255,0.05)', border: '1px solid var(--border-card)' }}>
          {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity:0, height:0 }} animate={{ opacity:1, height:'auto' }} exit={{ opacity:0, height:0 }}
            className="md:hidden overflow-hidden border-b"
            style={{ background: 'var(--nav-bg)', backdropFilter:'blur(20px)', borderColor: 'var(--border)' }}
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {NAV_LINKS.map(link => {
                const isActive = activeSection === link.href.replace('#','');
                return (
                  <button key={link.label} onClick={() => handleNav(link.href)} className="text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all"
                    style={isActive ? { color:'#059669', background:'rgba(16,185,129,0.1)' } : { color:'var(--color-3)' }}>
                    {link.label}
                  </button>
                );
              })}
              <div className="flex gap-2 mt-2 pt-2 border-t" style={{ borderColor: 'var(--border)' }}>
                <a href="/resume/Mukul_Choudhary_Resume.pdf" target="_blank" rel="noopener noreferrer" className="flex-1 py-2.5 rounded-xl text-sm font-medium text-center border transition-all" style={{ color:'#6ee7b7', borderColor:'rgba(16,185,129,0.3)', background:'rgba(16,185,129,0.07)' }}>
                  View Resume
                </a>
                <a href="/resume/Mukul_Choudhary_Resume.pdf" download className="flex-1 py-2.5 rounded-xl text-sm font-semibold text-center text-white transition-opacity hover:opacity-90" style={{ background:'linear-gradient(135deg,#059669,#0d9488)' }}>
                  Download
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
