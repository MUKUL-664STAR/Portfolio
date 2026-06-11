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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: '#080e14' }}
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 dot-grid opacity-50" />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 55% at 50% 0%, rgba(16,185,129,0.07) 0%, transparent 70%)' }} />
        <motion.div animate={{ x: [0,60,0], y: [0,-45,0], scale: [1,1.15,1] }} transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }} className="absolute -top-48 -right-48 w-[650px] h-[650px] rounded-full blur-[110px]" style={{ background: 'rgba(16,185,129,0.07)' }} />
        <motion.div animate={{ x: [0,-55,0], y: [0,55,0], scale: [1,1.2,1] }} transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut', delay: 5 }} className="absolute -bottom-48 -left-48 w-[600px] h-[600px] rounded-full blur-[100px]" style={{ background: 'rgba(20,184,166,0.07)' }} />
        <motion.div animate={{ x: [0,35,0], y: [0,-35,0] }} transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 9 }} className="absolute top-1/3 left-1/4 w-[450px] h-[450px] rounded-full blur-[90px]" style={{ background: 'rgba(245,158,11,0.04)' }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-28" style={{ background: 'linear-gradient(to bottom, rgba(16,185,129,0.55), transparent)' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 w-full">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col items-center text-center">

          {/* Status pill */}
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border backdrop-blur-sm" style={{ borderColor: 'rgba(16,185,129,0.3)', background: 'rgba(16,185,129,0.08)', color: '#34d399' }}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              Open to new opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.div variants={itemVariants} className="mb-5">
            <p className="text-base sm:text-lg font-medium text-gray-500 tracking-widest uppercase mb-3">Hello, world! I&apos;m</p>
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[96px] font-black leading-none tracking-tight">
              <span className="text-gradient">Mukul</span>
              <br />
              <span className="text-white/90">Choudhary</span>
            </h1>
          </motion.div>

          {/* Typing role */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-7">
            <div className="h-px w-8" style={{ background: 'linear-gradient(to right, transparent, #10b981)' }} />
            <div className="text-xl sm:text-2xl md:text-3xl font-semibold min-h-[40px] flex items-center">
              <TypeAnimation sequence={typingSequence} wrapper="span" cursor={true} repeat={Infinity} style={{ background: 'linear-gradient(to right, #34d399, #2dd4bf)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }} />
            </div>
            <div className="h-px w-8" style={{ background: 'linear-gradient(to left, transparent, #14b8a6)' }} />
          </motion.div>

          {/* Meta badges */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-2 mb-7">
            {[
              { icon: Sparkles, label: `${profile.yearsOfExperience} Yrs Experience`, st: { borderColor:'rgba(16,185,129,0.3)', background:'rgba(16,185,129,0.07)', color:'#6ee7b7' } },
              { icon: MapPin,   label: profile.location,                              st: { borderColor:'rgba(255,255,255,0.08)', background:'rgba(255,255,255,0.04)', color:'#9ca3af' } },
              { icon: Code2,   label: '@ Alyke (XVISION IT)',                        st: { borderColor:'rgba(20,184,166,0.3)', background:'rgba(20,184,166,0.07)', color:'#5eead4' } },
            ].map(({ icon: Icon, label, st }) => (
              <span key={label} className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-sm font-medium border backdrop-blur-sm" style={st}>
                <Icon className="w-3.5 h-3.5" />{label}
              </span>
            ))}
          </motion.div>

          {/* Bio */}
          <motion.p variants={itemVariants} className="text-base sm:text-lg text-gray-400 max-w-2xl leading-relaxed mb-10 text-balance">
            Backend Engineer with <span className="text-white font-medium">2.9 years</span> building scalable, high-performance systems. Skilled in{' '}
            <span className="font-medium" style={{ color:'#34d399' }}>Node.js</span>,{' '}
            <span className="font-medium" style={{ color:'#2dd4bf' }}>TypeScript</span>, real-time messaging, and cloud integrations.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-3 mb-10">
            <motion.a href="/resume/Mukul_Choudhary_Resume.pdf" download="Mukul_Choudhary_Resume.pdf" whileHover={{ scale:1.05, y:-2 }} whileTap={{ scale:0.96 }} className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-semibold text-base text-white" style={{ background:'linear-gradient(135deg,#059669,#0d9488)', boxShadow:'0 8px 32px rgba(16,185,129,0.28)' }}>
              <Download className="w-4 h-4" />Download Resume
            </motion.a>
            <motion.a href="/resume/Mukul_Choudhary_Resume.pdf" target="_blank" rel="noopener noreferrer" whileHover={{ scale:1.05, y:-2 }} whileTap={{ scale:0.96 }} className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-semibold text-base backdrop-blur-sm transition-all duration-300" style={{ color:'#6ee7b7', border:'1px solid rgba(16,185,129,0.35)', background:'rgba(16,185,129,0.07)' }}>
              <Eye className="w-4 h-4" />View Resume
            </motion.a>
            <motion.button onClick={() => scrollToSection('#contact')} whileHover={{ scale:1.05, y:-2 }} whileTap={{ scale:0.96 }} className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-semibold text-base backdrop-blur-sm transition-all duration-300" style={{ color:'#d1d5db', border:'1px solid rgba(255,255,255,0.1)', background:'rgba(255,255,255,0.04)' }}>
              <Mail className="w-4 h-4" />Contact Me
            </motion.button>
          </motion.div>

          {/* Socials */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-20">
            {[
              { href: profile.github,           icon: Github,   label: 'GitHub' },
              { href: profile.linkedin,          icon: Linkedin, label: 'LinkedIn' },
              { href: `mailto:${profile.email}`, icon: Mail,     label: 'Email' },
            ].map(({ href, icon: Icon, label }) => (
              <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer" whileHover={{ scale:1.12, y:-3 }} whileTap={{ scale:0.92 }} aria-label={label} className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300" style={{ color:'#6b7280', border:'1px solid rgba(255,255,255,0.09)', background:'rgba(255,255,255,0.04)' }}>
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll cue */}
          <motion.button variants={itemVariants} onClick={() => scrollToSection('#about')} animate={{ y:[0,6,0] }} transition={{ duration:2, repeat:Infinity }} className="flex flex-col items-center gap-1 text-gray-600 hover:text-emerald-400 transition-colors">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <ArrowDown className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none" style={{ background: 'linear-gradient(to top, #080e14, transparent)' }} />
    </section>
  );
}
