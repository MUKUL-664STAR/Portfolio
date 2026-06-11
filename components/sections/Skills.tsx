'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Server, Database, Cloud, Wrench } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import { skillCategories } from '@/data/skills';

const iconMap: Record<string, React.ElementType> = { Server, Database, Cloud, Wrench };

// per-category visual config
const catConfig: Record<string, { gradient: string; glow: string; bar: string; badge: string; ring: string }> = {
  Backend: {
    gradient: 'from-blue-500 to-cyan-400',
    glow: 'shadow-blue-500/30',
    bar: 'from-blue-500 to-cyan-400',
    badge: 'bg-blue-500/10 text-blue-300 border-blue-500/20',
    ring: 'group-hover:shadow-blue-500/20',
  },
  Database: {
    gradient: 'from-emerald-400 to-teal-400',
    glow: 'shadow-emerald-500/30',
    bar: 'from-emerald-400 to-teal-400',
    badge: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
    ring: 'group-hover:shadow-emerald-500/20',
  },
  'Cloud & DevOps': {
    gradient: 'from-orange-400 to-amber-400',
    glow: 'shadow-orange-500/30',
    bar: 'from-orange-400 to-amber-400',
    badge: 'bg-orange-500/10 text-orange-300 border-orange-500/20',
    ring: 'group-hover:shadow-orange-500/20',
  },
  'Tools & Testing': {
    gradient: 'from-violet-500 to-purple-400',
    glow: 'shadow-violet-500/30',
    bar: 'from-violet-500 to-purple-400',
    badge: 'bg-violet-500/10 text-violet-300 border-violet-500/20',
    ring: 'group-hover:shadow-violet-500/20',
  },
};

const DEFAULT_CONFIG = catConfig['Backend'];

export default function SkillsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <section id="skills" className="py-24 bg-gray-950 relative overflow-hidden">
      {/* subtle bg accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-indigo-500/40 to-transparent" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[200px] rounded-full bg-indigo-600/[0.04] blur-[80px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Skills & Technologies"
          subtitle="Tools and technologies I use to build scalable backend systems."
        />

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillCategories.map((cat, catIdx) => {
            const Icon = iconMap[cat.icon] || Server;
            const cfg = catConfig[cat.category] || DEFAULT_CONFIG;

            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: catIdx * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ y: -6 }}
                className={`group relative card-shine rounded-2xl bg-gray-900 border border-gray-800 p-6 hover:border-gray-700 hover:shadow-2xl ${cfg.ring} transition-all duration-300`}
              >
                {/* top accent line */}
                <div className={`absolute top-0 left-6 right-6 h-px bg-gradient-to-r ${cfg.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full`} />

                {/* icon */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2.5 rounded-xl bg-gradient-to-br ${cfg.gradient} text-white shadow-lg ${cfg.glow}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-white text-sm">{cat.category}</h3>
                </div>

                {/* skill bars */}
                <div className="space-y-4">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-sm text-gray-300 font-medium">{skill.name}</span>
                        <span className={`text-xs font-semibold px-1.5 py-0.5 rounded-md border ${cfg.badge}`}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-1.5 rounded-full bg-gray-800 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1.1, delay: catIdx * 0.1 + sIdx * 0.09 + 0.3, ease: 'easeOut' }}
                          className={`h-full rounded-full bg-gradient-to-r ${cfg.bar}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Pill cloud */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mt-14 flex flex-wrap justify-center gap-2.5"
        >
          {skillCategories.flatMap((c) => c.skills).map((skill, i) => {
            const colours = [
              'hover:text-blue-400 hover:border-blue-500/50 hover:bg-blue-500/8',
              'hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-emerald-500/8',
              'hover:text-orange-400 hover:border-orange-500/50 hover:bg-orange-500/8',
              'hover:text-violet-400 hover:border-violet-500/50 hover:bg-violet-500/8',
            ];
            return (
              <motion.span
                key={skill.name}
                whileHover={{ scale: 1.08, y: -3 }}
                className={`px-4 py-1.5 rounded-full text-sm font-medium bg-gray-900 border border-gray-700/80 text-gray-400 cursor-default transition-all duration-200 ${colours[i % 4]}`}
              >
                {skill.name}
              </motion.span>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

