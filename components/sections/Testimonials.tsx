'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Quote } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import { testimonials } from '@/data/testimonials';

// Deterministic seed so server and client agree on initial render;
// client re-randomises after mount.
const SEEDED: number[] = Array.from({ length: 52 * 7 }, (_, i) => i % 5);

function ContributionGraph() {
  const [cells, setCells] = useState<number[]>(SEEDED);

  useEffect(() => {
    setCells(Array.from({ length: 52 * 7 }, () => Math.floor(Math.random() * 5)));
  }, []);

  const colors = [
    'bg-gray-200 dark:bg-gray-700',
    'bg-blue-200 dark:bg-blue-900',
    'bg-blue-300 dark:bg-blue-700',
    'bg-blue-400 dark:bg-blue-600',
    'bg-blue-600 dark:bg-blue-400',
  ];

  return (
    <div className="flex gap-1 flex-wrap justify-center">
      {cells.map((intensity, i) => (
        <div
          key={i}
          title={`${intensity} contributions`}
          className={`w-3 h-3 rounded-sm ${colors[intensity]}`}
        />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden" style={{ background: 'var(--bg-base)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Testimonials"
          subtitle="What colleagues and collaborators say about working with me."
        />

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              whileHover={{ y: -4 }}
              className="relative p-6 rounded-2xl border transition-all duration-300"
              style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
            >
              {/* Quote icon */}
              <Quote className="absolute top-5 right-5 w-8 h-8" style={{ color:'rgba(16,185,129,0.1)' }} />

              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-5 italic">
                &ldquo;{t.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0" style={{ background:'linear-gradient(135deg,#059669,#0d9488)' }}>
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900 dark:text-white">{t.name}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-500">
                    {t.role} · {t.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub Contribution Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            GitHub Contributions
          </h3>
          <div className="rounded-2xl p-6 flex flex-col items-center justify-center min-h-[120px] gap-3 border" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
            <ContributionGraph />
            <p className="text-xs text-gray-500 dark:text-gray-400">
              GitHub contribution graph placeholder — connect your GitHub for live data
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
