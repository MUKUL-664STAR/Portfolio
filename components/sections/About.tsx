'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Zap, Globe, Cpu, Briefcase, MapPin, Calendar, GraduationCap } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import { profile } from '@/data/profile';

const techStack = [
  'Node.js', 'Express.js', 'JavaScript', 'TypeScript', 'React',
  'PostgreSQL', 'MongoDB', 'Firestore', 'AWS', 'Firebase',
  'Elasticsearch', 'Razorpay', 'JWT / OTP', 'REST APIs', 'Swagger',
];

const highlights = [
  { icon: Code2, title: 'Backend Engineering',      desc: 'Scalable APIs & microservices with Node.js & TypeScript.',        color: '#34d399', bg: 'rgba(16,185,129,0.08)',  border: 'rgba(16,185,129,0.2)' },
  { icon: Zap,   title: 'Performance Optimization', desc: 'Query tuning, caching, and efficient refactoring.',               color: '#2dd4bf', bg: 'rgba(20,184,166,0.08)', border: 'rgba(20,184,166,0.2)' },
  { icon: Globe, title: 'API Architecture',          desc: 'RESTful APIs, auth systems, and third-party integrations.',       color: '#fbbf24', bg: 'rgba(245,158,11,0.08)', border: 'rgba(245,158,11,0.2)' },
  { icon: Cpu,   title: 'AI Integrations',           desc: 'Connecting LLM APIs and AI features into production services.',   color: '#a78bfa', bg: 'rgba(139,92,246,0.08)', border: 'rgba(139,92,246,0.2)' },
];

export default function AboutSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <section id="about" className="py-24 relative overflow-hidden" style={{ background: 'var(--bg-surface)' }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full blur-[100px]" style={{ background: 'rgba(20,184,166,0.05)' }} />
        <div className="absolute top-0 left-0 w-[400px] h-[300px] rounded-full blur-[80px]" style={{ background: 'rgba(16,185,129,0.04)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="About Me" subtitle="A little background on who I am and what drives me." />

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start mt-4">

          {/* LEFT — avatar + stats */}
          <motion.div initial={{ opacity:0, x:-40 }} animate={inView?{opacity:1,x:0}:{}} transition={{ duration:0.7 }} className="flex flex-col items-center gap-6">
            {/* Avatar ring */}
            <div className="relative">
              <div className="w-44 h-44 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #059669, #0d9488)', boxShadow: '0 0 60px rgba(16,185,129,0.25)' }}>
                <span className="text-5xl font-black text-white">MC</span>
              </div>
              <div className="absolute inset-0 rounded-full border-2 border-dashed animate-spin" style={{ borderColor: 'rgba(16,185,129,0.3)', animationDuration: '18s' }} />
              <div className="absolute -bottom-1 -right-1 px-2.5 py-1 rounded-full text-xs font-semibold" style={{ background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.4)', color: '#34d399' }}>
                Available
              </div>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
              {[
                { icon: Briefcase,     val: '2.9+',    label: 'Years Exp.',   c:'#34d399' },
                { icon: GraduationCap, val: 'B.Tech',  label: 'CS — 2022',    c:'#2dd4bf' },
                { icon: MapPin,        val: 'Noida',   label: 'India',        c:'#fbbf24' },
                { icon: Calendar,      val: 'Feb 2025',label: 'Current Role', c:'#a78bfa' },
              ].map(({ icon: Icon, val, label, c }) => (
                <div key={label} className="flex flex-col items-center p-4 rounded-2xl border" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
                  <Icon className="w-5 h-5 mb-1.5" style={{ color: c }} />
                  <span className="text-lg font-bold text-white">{val}</span>
                  <span className="text-xs text-gray-500 dark:text-gray-500">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — bio + highlights */}
          <motion.div initial={{ opacity:0, x:40 }} animate={inView?{opacity:1,x:0}:{}} transition={{ duration:0.7, delay:0.15 }} className="flex flex-col gap-6">
            <div className="space-y-4 text-gray-400 text-base leading-relaxed">
              <p>
                I&apos;m a <span className="font-semibold" style={{ color:'#34d399' }}>Backend Engineer</span> with {profile.yearsOfExperience} years of experience designing and shipping production-grade APIs and distributed systems.
              </p>
              <p>
                Currently at <span className="font-semibold text-white">XVISION IT / Alyke</span>, I build real-time features, notification pipelines, OTA update systems, and AI-integrated services — all focused on reliability and developer experience.
              </p>
              <p>
                I hold a <span className="font-semibold" style={{ color:'#2dd4bf' }}>B.Tech in Computer Science</span> and thrive in environments that demand clean architecture, thoughtful API design, and fast iteration.
              </p>
            </div>

            {/* Highlight cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map(({ icon: Icon, title, desc, color, bg, border }) => (
                <motion.div key={title} whileHover={{ y:-3, scale:1.02 }} className="p-4 rounded-2xl border transition-all duration-200" style={{ background: bg, borderColor: border }}>
                  <Icon className="w-5 h-5 mb-2" style={{ color }} />
                  <div className="text-sm font-semibold text-gray-900 dark:text-white mb-1">{title}</div>
                  <div className="text-xs text-gray-500 leading-relaxed">{desc}</div>
                </motion.div>
              ))}
            </div>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2 pt-1">
              {techStack.map((tech, i) => {
                const colours = ['rgba(16,185,129,0.15)', 'rgba(20,184,166,0.15)', 'rgba(245,158,11,0.12)', 'rgba(139,92,246,0.12)'];
                const text    = ['#34d399','#2dd4bf','#fbbf24','#a78bfa'];
                return (
                  <motion.span key={tech} whileHover={{ scale:1.08 }} className="px-3 py-1 rounded-full text-xs font-medium border transition-all cursor-default" style={{ background: colours[i%4], color: text[i%4], borderColor: colours[i%4].replace('0.15','0.35').replace('0.12','0.3') }}>
                    {tech}
                  </motion.span>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
