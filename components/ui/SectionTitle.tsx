'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Props { title: string; subtitle?: string; }

export default function SectionTitle({ title, subtitle }: Props) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity:0, y:20 }}
      animate={inView?{opacity:1,y:0}:{}}
      transition={{ duration:0.6 }}
      className="mb-12 text-center"
    >
      <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-3 tracking-tight">{title}</h2>
      <div className="mx-auto h-1 rounded-full w-16 gradient-animate" style={{ background:'linear-gradient(to right, #059669, #0d9488, #d97706)' }} />
      {subtitle && <p className="mt-4 text-gray-400 text-base md:text-lg max-w-2xl mx-auto">{subtitle}</p>}
    </motion.div>
  );
}
