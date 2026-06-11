'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = stored ? stored === 'dark' : prefersDark;
    setDark(isDark);
    document.documentElement.classList.toggle('dark', isDark);
    setMounted(true);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  // Render a same-size placeholder until client has read localStorage
  if (!mounted) {
    return <div className="w-8 h-8 rounded-xl" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }} />;
  }

  return (
    <motion.button
      onClick={toggle}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle dark mode"
      className="relative p-2 rounded-xl transition-colors duration-200"
      style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', color: dark ? '#fbbf24' : '#6b7280' }}
    >
      <motion.span
        initial={false}
        animate={{ rotate: dark ? 0 : 180, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="flex"
      >
        {dark ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
      </motion.span>
    </motion.button>
  );
}
