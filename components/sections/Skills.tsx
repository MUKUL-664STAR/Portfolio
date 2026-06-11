'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Server, Database, Cloud, Wrench } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import TechIcon, { getTechIcon } from '@/components/ui/TechIcon';
import { skillCategories } from '@/data/skills';
import React from 'react';

const iconMap: Record<string, React.ElementType> = { Server, Database, Cloud, Wrench };

const catConfig: Record<string, { accent: string; bg: string; border: string; barFrom: string; barTo: string }> = {
  Backend:         { accent:'#34d399', bg:'rgba(16,185,129,0.08)',  border:'rgba(16,185,129,0.2)',  barFrom:'#059669', barTo:'#0d9488' },
  Database:        { accent:'#2dd4bf', bg:'rgba(20,184,166,0.08)',  border:'rgba(20,184,166,0.2)',  barFrom:'#0d9488', barTo:'#0891b2' },
  'Cloud & DevOps':{ accent:'#fbbf24', bg:'rgba(245,158,11,0.08)',  border:'rgba(245,158,11,0.2)',  barFrom:'#d97706', barTo:'#b45309' },
  'Tools & Testing':{ accent:'#a78bfa', bg:'rgba(139,92,246,0.08)', border:'rgba(139,92,246,0.2)', barFrom:'#7c3aed', barTo:'#6d28d9' },
};
export default function SkillsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <section id="skills" className="py-24 relative overflow-hidden" style={{ background: 'var(--bg-base)' }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(16,185,129,0.3), transparent)' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px]" style={{ background: 'rgba(16,185,129,0.04)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Skills" subtitle="Technologies and tools I work with day-to-day." />

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-4">
          {skillCategories.map((cat, ci) => {
            const cfg = catConfig[cat.category] ?? catConfig['Backend'];
            const Icon = iconMap[cat.icon] ?? Server;
            return (
              <motion.div
                key={cat.category}
                initial={{ opacity:0, y:30 }} animate={inView?{opacity:1,y:0}:{}} transition={{ duration:0.6, delay: ci*0.1 }}
                whileHover={{ y:-4, scale:1.01 }}
                className="card-shine relative p-5 rounded-2xl border transition-all duration-300 overflow-hidden"
                style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: `linear-gradient(to right, ${cfg.barFrom}, ${cfg.barTo})` }} />

                {/* Icon */}
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 border" style={{ background: cfg.bg, borderColor: cfg.border }}>
                  <Icon className="w-5 h-5" style={{ color: cfg.accent }} />
                </div>

                <h3 className="font-bold text-white text-sm mb-3">{cat.category}</h3>

                <div className="space-y-2.5">
                  {cat.skills.map((sk) => {
                    const hasIcon = !!getTechIcon(sk.name);
                    return (
                    <div key={sk.name}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
                          {hasIcon
                            ? <TechIcon name={sk.name} size={13} />
                            : <span className="w-3.5 h-3.5 rounded-sm inline-block" style={{ background: cfg.bg }} />}
                          {sk.name}
                        </span>
                        <span className="text-xs font-medium px-1.5 py-0.5 rounded-full" style={{ background: cfg.bg, color: cfg.accent }}>
                          {sk.level === 4 ? 'Expert' : sk.level === 3 ? 'Advanced' : 'Intermediate'}
                        </span>
                      </div>
                      <div className="h-1.5 rounded-full" style={{ background:'rgba(255,255,255,0.06)' }}>
                        <motion.div
                          className="h-full rounded-full"
                          style={{ background: `linear-gradient(to right, ${cfg.barFrom}, ${cfg.barTo})` }}
                          initial={{ width:0 }}
                          animate={inView ? { width: sk.level === 4 ? '95%' : sk.level === 3 ? '82%' : '68%' } : { width: 0 }}
                          transition={{ duration:1, delay: ci*0.1 + 0.3, ease:'easeOut' }}
                        />
                      </div>
                    </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
