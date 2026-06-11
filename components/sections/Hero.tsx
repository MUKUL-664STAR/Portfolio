'use client';

import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Download, Mail, ArrowDown, Github, Linkedin, Sparkles, MapPin, Eye, Code2 } from 'lucide-react';
import { profile } from '@/data/profile';
import { TYPING_STRINGS } from '@/constants';
import { scrollToSection } from '@/utils';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function HeroSection() {
  const typingSequence = TYPING_STRINGS.flatMap((s) => [s, 2000]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030712]"
    >
      {/* ── Background layers ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Dot grid */}
        <div className="absolute inset-0 dot-grid opacity-60" />

        {/* Radial vignette */}
        <div className="absolute inset-0 bg-radial-gradient" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(99,102,241,0.08) 0%, transparent 70%)' }} />

        {/* Animated color blobs */}
        <motion.div
          animate={{ x: [0, 70, 0], y: [0, -50, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-48 -right-48 w-[700px] h-[700px] rounded-full bg-blue-600/[0.07] blur-[100px]"
        />
        <motion.div
          animate={{ x: [0, -60, 0], y: [0, 60, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
          className="absolute -bottom-48 -left-48 w-[600px] h-[600px] rounded-full bg-violet-600/[0.07] blur-[100px]"
        />
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -40, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 8 }}
          className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-cyan-500/[0.05] blur-[80px]"
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-indigo-500/[0.06] blur-[60px]"
        />

        {/* Top glow line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-indigo-500/50 to-transparent" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center"
        >
          {/* Status pill */}
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border border-emerald-500/25 bg-emerald-500/8 text-emerald-400 shadow-lg shadow-emerald-500/10 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              Open to new opportunities
            </span>
          </motion.div>

          {/* Greeting + Name */}
          <motion.div variants={itemVariants} className="mb-5">
            <p className="text-base sm:text-lg font-medium text-gray-500 tracking-widest uppercase mb-3">
              Hello, world! I&apos;m
            </p>
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[96px] font-black leading-none tracking-tight">
              <span className="text-gradient-blue">Mukul</span>
              <br />
              <span className="text-white/90">Choudhary</span>
            </h1>
          </motion.div>

          {/* Typing role */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 mb-7"
          >
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-indigo-500" />
            <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-300 min-h-[40px] flex items-center">
              <TypeAnimation
                sequence={typingSequence}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"
              />
            </div>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-cyan-500" />
          </motion.div>

          {/* Meta badges */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-2 mb-7">
            {[
              { icon: Sparkles, label: `${profile.yearsOfExperience} Yrs Experience`, color: 'border-indigo-500/30 bg-indigo-500/8 text-indigo-300' },
              { icon: MapPin,    label: profile.location,                              color: 'border-gray-700 bg-gray-800/60 text-gray-400' },
              { icon: Code2,    label: '@ Alyke (XVISION IT)',                        color: 'border-blue-500/30 bg-blue-500/8 text-blue-300' },
            ].map(({ icon: Icon, label, color }) => (
              <span key={label} className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-sm font-medium border backdrop-blur-sm ${color}`}>
                <Icon className="w-3.5 h-3.5" />
                {label}
              </span>
            ))}
          </motion.div>

          {/* Bio */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-gray-400 max-w-2xl leading-relaxed mb-10 text-balance"
          >
            Backend Engineer with <span className="text-white font-medium">2.9 years</span> building scalable, high-performance systems.
            Skilled in <span className="text-blue-400 font-medium">Node.js</span>,{' '}
            <span className="text-cyan-400 font-medium">TypeScript</span>, real-time messaging, and cloud integrations.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-3 mb-10">
            <motion.a
              href="/resume/Mukul_Choudhary_Resume.pdf"
              download="Mukul_Choudhary_Resume.pdf"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-semibold text-base text-white bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 shadow-xl shadow-blue-600/30 hover:shadow-blue-500/50 transition-shadow duration-300"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </motion.a>

            <motion.a
              href="/resume/Mukul_Choudhary_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-semibold text-base text-indigo-300 border border-indigo-500/40 bg-indigo-500/8 hover:bg-indigo-500/15 hover:border-indigo-400/60 backdrop-blur-sm transition-all duration-300"
            >
              <Eye className="w-4 h-4" />
              View Resume
            </motion.a>

            <motion.button
              onClick={() => scrollToSection('#contact')}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-semibold text-base text-gray-300 border border-gray-700/80 bg-gray-800/60 hover:bg-gray-700/80 hover:border-gray-600 backdrop-blur-sm transition-all duration-300"
            >
              <Mail className="w-4 h-4" />
              Contact Me
            </motion.button>
          </motion.div>

          {/* Social icons */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-20">
            {[
              { href: profile.github, icon: Github, label: 'GitHub', hoverClass: 'hover:text-white hover:border-gray-500 hover:bg-gray-700' },
              { href: profile.linkedin, icon: Linkedin, label: 'LinkedIn', hoverClass: 'hover:text-blue-400 hover:border-blue-500/50 hover:bg-blue-500/10' },
              { href: `mailto:${profile.email}`, icon: Mail, label: 'Email', hoverClass: 'hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-cyan-500/10' },
            ].map(({ href, icon: Icon, label, hoverClass }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className={`p-3 rounded-xl border border-gray-700/80 bg-gray-800/50 text-gray-500 backdrop-blur-sm transition-all duration-200 ${hoverClass}`}
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll cue */}
          <motion.button
            variants={itemVariants}
            onClick={() => scrollToSection('#about')}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-1.5 text-gray-600 hover:text-gray-400 transition-colors"
            aria-label="Scroll down"
          >
            <span className="text-[10px] font-semibold tracking-[0.2em] uppercase">Scroll</span>
            <ArrowDown className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-950 to-transparent pointer-events-none" />
    </section>
  );
}
