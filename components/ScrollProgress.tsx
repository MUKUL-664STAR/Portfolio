'use client';

import { motion, useScroll } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-0.5 z-[100] origin-left"
      style={{ scaleX: scrollYProgress, background: 'linear-gradient(to right, #059669, #0d9488, #d97706)' }}
    />
  );
}
