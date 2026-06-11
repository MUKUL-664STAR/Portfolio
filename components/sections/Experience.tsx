'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import { experiences } from '@/data/experience';

// dot colour per job index
const dotGradients = [
  'from-indigo-500 to-blue-500',
  'from-blue-500 to-cyan-500',
  'from-emerald-500 to-teal-500',
  'from-violet-500 to-purple-500',
];
const dotGlows = [
  'shadow-indigo-500/40',
  'shadow-blue-500/40',
  'shadow-emerald-500/40',
  'shadow-violet-500/40',
];
const accentBorders = [
  'border-l-indigo-500/60',
  'border-l-blue-500/60',
  'border-l-emerald-500/60',
  'border-l-violet-500/60',
];
const typeColours: Record<string, string> = {
  'Full-time':  'bg-blue-500/10 text-blue-300 border-blue-500/20',
  'Internship': 'bg-violet-500/10 text-violet-300 border-violet-500/20',
};

export default function ExperienceSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="experience" className="py-24 bg-[#060b18] relative overflow-hidden">
      {/* bg accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[300px] h-[600px] bg-indigo-600/[0.04] blur-[100px] rounded-full" />
        <div className="absolute right-0 top-1/3 w-[250px] h-[400px] bg-cyan-600/[0.04] blur-[80px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Work Experience" subtitle="Where I've worked and what I've built." />

        <div ref={ref} className="relative max-w-3xl mx-auto">
          {/* Vertical timeline line */}
          <div className="absolute left-5 top-5 bottom-5 w-px bg-gradient-to-b from-indigo-500 via-blue-500 via-cyan-500 to-transparent hidden sm:block" />

          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.company + idx}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.65, delay: idx * 0.13, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative sm:pl-20 mb-6 last:mb-0"
            >
              {/* Timeline dot */}
              <div className={`absolute left-0 top-6 w-11 h-11 rounded-2xl bg-gradient-to-br ${dotGradients[idx % 4]} flex items-center justify-center shadow-lg ${dotGlows[idx % 4]} hidden sm:flex z-10`}>
                <Briefcase className="w-4.5 h-4.5 text-white" />
              </div>

              {/* Card */}
              <motion.div
                whileHover={{ y: -3, x: 2 }}
                transition={{ duration: 0.2 }}
                className={`card-shine rounded-2xl bg-gray-900 border border-gray-800 border-l-2 ${accentBorders[idx % 4]} p-5 sm:p-6 hover:border-gray-700 hover:shadow-2xl transition-all duration-300`}
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{exp.role}</h3>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-semibold text-indigo-400">{exp.company}</span>
                      <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border ${typeColours[exp.type] ?? 'bg-gray-500/10 text-gray-300 border-gray-500/20'}`}>
                        {exp.type}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5 sm:items-end shrink-0 text-sm text-gray-500">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.startDate} — {exp.endDate}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </div>
                    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold border ${dotGradients[idx % 4].includes('indigo') ? 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20' : dotGradients[idx % 4].includes('emerald') ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20' : dotGradients[idx % 4].includes('violet') ? 'bg-violet-500/10 text-violet-300 border-violet-500/20' : 'bg-blue-500/10 text-blue-300 border-blue-500/20'}`}>
                      {exp.duration}
                    </span>
                  </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-4">{exp.description}</p>

                {/* Responsibilities */}
                <div className="mb-5">
                  <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((r, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -8 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: idx * 0.13 + i * 0.05 + 0.3 }}
                        className="flex items-start gap-2 text-sm text-gray-400"
                      >
                        <ChevronRight className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                        {r}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded-lg text-xs font-medium bg-gray-800 border border-gray-700 text-gray-300 hover:border-indigo-500/40 hover:text-indigo-300 transition-colors duration-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
