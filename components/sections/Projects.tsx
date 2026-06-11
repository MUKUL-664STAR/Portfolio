'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import { projects } from '@/data/projects';

const cardCfg = [
  { accent:'#34d399', bg:'rgba(16,185,129,0.08)',  border:'rgba(16,185,129,0.2)',  btnFrom:'#059669', btnTo:'#0d9488', badgeBg:'rgba(16,185,129,0.1)', badgeText:'#6ee7b7' },
  { accent:'#2dd4bf', bg:'rgba(20,184,166,0.08)',  border:'rgba(20,184,166,0.2)',  btnFrom:'#0d9488', btnTo:'#0891b2', badgeBg:'rgba(20,184,166,0.1)', badgeText:'#5eead4' },
  { accent:'#fbbf24', bg:'rgba(245,158,11,0.08)',  border:'rgba(245,158,11,0.2)',  btnFrom:'#d97706', btnTo:'#b45309', badgeBg:'rgba(245,158,11,0.1)', badgeText:'#fcd34d' },
];

export default function ProjectsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="projects" className="py-24 relative overflow-hidden" style={{ background: 'var(--bg-base)' }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[110px]" style={{ background: 'rgba(20,184,166,0.05)' }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[90px]" style={{ background: 'rgba(16,185,129,0.04)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Projects" subtitle="Selected work — real problems, real solutions." />

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {projects.map((proj, i) => {
            const cfg = cardCfg[i % cardCfg.length];
            return (
              <motion.div
                key={proj.id}
                initial={{ opacity:0, y:40 }} animate={inView?{opacity:1,y:0}:{}} transition={{ duration:0.6, delay: i*0.12 }}
                whileHover={{ y:-6, scale:1.015 }}
                className="card-shine flex flex-col rounded-2xl border overflow-hidden transition-all duration-300"
                style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
              >
                {/* Top accent bar */}
                <div className="h-0.5 w-full" style={{ background: `linear-gradient(to right, ${cfg.btnFrom}, ${cfg.btnTo})` }} />

                {/* Card header */}
                <div className="p-5 pb-3">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center border" style={{ background: cfg.bg, borderColor: cfg.border }}>
                      <span className="font-black text-lg" style={{ color: cfg.accent }}>{proj.title[0]}</span>
                    </div>
                    <div className="flex gap-2">
                      {proj.githubUrl && (
                        <a href={proj.githubUrl} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200" style={{ color:'#6b7280', background:'rgba(255,255,255,0.04)', border: '1px solid var(--border-card)' }}>
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {proj.liveUrl && (
                        <a href={proj.liveUrl} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200" style={{ color:'#6b7280', background:'rgba(255,255,255,0.04)', border: '1px solid var(--border-card)' }}>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                  <h3 className="font-bold text-white text-base mb-1.5">{proj.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{proj.description}</p>
                </div>

                {/* Tech badges */}
                <div className="px-5 pb-4 flex flex-wrap gap-1.5 flex-1">
                  {proj.techStack.map((tech: string) => (
                    <span key={tech} className="text-xs px-2 py-0.5 rounded-full" style={{ background: cfg.badgeBg, color: cfg.badgeText }}>
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="p-4 pt-0">
                  <a
                    href={proj.githubUrl ?? '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 rounded-xl text-sm font-semibold text-white flex items-center justify-center gap-2 transition-opacity hover:opacity-90"
                    style={{ background: `linear-gradient(135deg, ${cfg.btnFrom}, ${cfg.btnTo})` }}
                  >
                    <Github className="w-4 h-4" />View on GitHub
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
