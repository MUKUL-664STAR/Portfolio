'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/utils';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionTitle({ title, subtitle, align = 'center', className }: SectionTitleProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={cn('mb-14', align === 'center' ? 'text-center' : 'text-left', className)}
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-400 text-base md:text-lg max-w-2xl leading-relaxed mx-auto">
          {subtitle}
        </p>
      )}
      {/* Animated gradient underline */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={inView ? { scaleX: 1, opacity: 1 } : {}}
        transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
        style={{ originX: align === 'center' ? 0.5 : 0 }}
        className={cn(
          'mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 gradient-animate',
          align === 'center' ? 'mx-auto' : ''
        )}
      />
    </motion.div>
  );
}

