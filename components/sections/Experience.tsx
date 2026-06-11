'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Building2, BadgeCheck, Calendar } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import { experiences } from '@/data/experience';

const accentColors = ['#34d399','#2dd4bf','#fbbf24','#a78bfa'];
const borderColors = ['rgba(16,185,129,0.35)','rgba(20,184,166,0.35)','rgba(245,158,11,0.35)','rgba(139,92,246,0.35)'];
const dotBgs       = ['rgba(16,185,129,0.15)','rgba(20,184,166,0.15)','rgba(245,158,11,0.12)','rgba(139,92,246,0.12)'];

export default function ExperienceSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <section id="experience" className="py-24 relative overflow-hidden" style={{ background: '#0a1118' }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full blur-[100px]" style={{ background: 'rgba(16,185,129,0.04)' }} />
        <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] rounded-full blur-[90px]" style={{ background: 'rgba(20,184,166,0.04)' }} />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Experience" subtitle="My professional journey — companies, roles, and impact." />

        <div ref={ref} className="relative mt-4">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px" style={{ background: 'linear-gradient(to bottom, #10b981, #14b8a6, rgba(16,185,129,0.1))' }} />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={`${exp.company}-${i}`}
                initial={{ opacity:0, x:-30 }} animate={inView?{opacity:1,x:0}:{}} transition={{ duration:0.6, delay: i*0.12 }}
                className="relative pl-16"
              >
                {/* Dot */}
                <div className="absolute left-0 top-5 w-12 h-12 rounded-xl flex items-center justify-center border" style={{ background: dotBgs[i%4], borderColor: borderColors[i%4] }}>
                  <Briefcase className="w-5 h-5" style={{ color: accentColors[i%4] }} />
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ x:4, scale:1.01 }}
                  className="card-shine p-5 rounded-2xl border transition-all duration-300 border-l-2"
                  style={{ background:'#0d1520', borderColor:'rgba(255,255,255,0.07)', borderLeftColor: accentColors[i%4] }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="font-bold text-white text-base">{exp.role}</h3>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <Building2 className="w-3.5 h-3.5" style={{ color: accentColors[i%4] }} />
                        <span className="text-sm font-medium" style={{ color: accentColors[i%4] }}>{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <div className="flex items-center gap-1.5 text-xs text-gray-500">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.startDate} – {exp.endDate}
                      </div>
                      <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: dotBgs[i%4], color: accentColors[i%4] }}>{exp.type}</span>
                    </div>
                  </div>

                  <p className="text-sm text-gray-400 leading-relaxed mb-3">{exp.description}</p>

                  <ul className="space-y-1.5 mb-3">
                    {exp.responsibilities.slice(0,3).map((h: string, j: number) => (
                      <li key={j} className="flex items-start gap-2 text-xs text-gray-400">
                        <BadgeCheck className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: accentColors[i%4] }} />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.slice(0,6).map((tech) => (
                      <span key={tech} className="text-xs px-2 py-0.5 rounded-full border" style={{ background:'rgba(255,255,255,0.04)', borderColor:'rgba(255,255,255,0.1)', color:'#9ca3af' }}>{tech}</span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
