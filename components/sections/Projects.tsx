'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Sparkles, ArrowUpRight } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import { projects } from '@/data/projects';

const cardConfigs = [
  { gradient: 'from-blue-600 via-indigo-600 to-cyan-500', glow: 'hover:shadow-blue-600/20', top: 'from-blue-500 to-cyan-400', iconBg: 'bg-blue-500/10 border-blue-500/20 text-blue-300' },
  { gradient: 'from-violet-600 via-purple-600 to-pink-500', glow: 'hover:shadow-violet-600/20', top: 'from-violet-500 to-purple-400', iconBg: 'bg-violet-500/10 border-violet-500/20 text-violet-300' },
  { gradient: 'from-emerald-600 via-teal-600 to-cyan-500', glow: 'hover:shadow-emerald-600/20', top: 'from-emerald-500 to-teal-400', iconBg: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-300' },
];

export default function ProjectsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="projects" className="py-24 bg-gray-950 relative overflow-hidden">
      {/* bg accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[400px] h-[300px] bg-violet-600/[0.05] blur-[100px] rounded-full" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] bg-blue-600/[0.05] blur-[100px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Featured Projects"
          subtitle="Real-world systems showcasing engineering depth, scalability, and problem-solving."
        />

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, idx) => {
            const cfg = cardConfigs[idx % cardConfigs.length];
            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, delay: idx * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ y: -8 }}
                className={`card-shine group relative flex flex-col rounded-2xl bg-gray-900 border border-gray-800 overflow-hidden hover:border-gray-700 hover:shadow-2xl ${cfg.glow} transition-all duration-400`}
              >
                {/* Gradient top bar */}
                <div className={`h-1 w-full bg-gradient-to-r ${cfg.top} shrink-0`} />

                {/* Header with gradient overlay */}
                <div className="relative p-5 pb-3">
                  <div className={`absolute inset-0 bg-gradient-to-br ${cfg.gradient} opacity-[0.06] group-hover:opacity-[0.1] transition-opacity duration-300`} />
                  <div className="relative">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <span className="text-xs font-medium text-gray-500 uppercase tracking-widest">
                        {project.category}
                      </span>
                      <div className="flex items-center gap-1.5 shrink-0">
                        {project.featured && (
                          <span className="flex items-center gap-1 px-2 py-0.5 rounded-lg bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-medium">
                            <Sparkles className="w-2.5 h-2.5" />
                            Featured
                          </span>
                        )}
                        <span className="px-2 py-0.5 rounded-lg text-xs font-medium bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                          Completed
                        </span>
                      </div>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Body */}
                <div className="flex flex-col flex-1 px-5 pb-5">
                  <p className="text-sm text-gray-400 leading-relaxed mb-4 line-clamp-4">
                    {project.longDescription}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.techStack.map((tech) => (
                      <span key={tech} className={`px-2 py-0.5 rounded-md text-xs font-medium border ${cfg.iconBg}`}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* GitHub CTA */}
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className={`mt-auto flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r ${cfg.gradient} text-white text-sm font-semibold opacity-90 hover:opacity-100 shadow-lg transition-all duration-200`}
                    >
                      <Github className="w-4 h-4" />
                      View on GitHub
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </motion.a>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* More links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          {[
            { label: 'View All Projects on GitHub', desc: 'Explore all repositories', href: 'https://github.com/MUKUL-664STAR', primary: true },
            { label: 'Tech Blog — Coming Soon',      desc: 'Articles on backend engineering',       href: '#',                                   primary: false },
          ].map(({ label, desc, href, primary }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center gap-4 px-6 py-4 rounded-2xl border transition-all duration-300 ${primary ? 'border-indigo-500/30 bg-indigo-500/5 hover:bg-indigo-500/10 hover:border-indigo-400/50' : 'border-gray-800 bg-gray-900/50 hover:bg-gray-800/80 hover:border-gray-700'}`}
            >
              <Github className={`w-5 h-5 shrink-0 ${primary ? 'text-indigo-400' : 'text-gray-500'}`} />
              <div>
                <div className={`font-semibold text-sm ${primary ? 'text-indigo-300 group-hover:text-indigo-200' : 'text-gray-300 group-hover:text-white'} transition-colors`}>{label}</div>
                <div className="text-xs text-gray-500 mt-0.5">{desc}</div>
              </div>
              <ArrowUpRight className="w-4 h-4 ml-auto text-gray-600 group-hover:text-gray-400 transition-colors" />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


const statusColors: Record<string, string> = {
  completed: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  'in-progress': 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
  planned: 'bg-gray-500/10 text-gray-400 border-gray-500/20',
};

const categoryColors = [
  'from-blue-600 to-cyan-500',
  'from-purple-600 to-violet-500',
  'from-emerald-600 to-teal-500',
];
