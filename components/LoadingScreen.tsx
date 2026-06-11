'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2 } from 'lucide-react';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-gray-950"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 200 }}
            className="flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 shadow-2xl shadow-blue-500/40 mb-6"
          >
            <Code2 className="w-10 h-10 text-white" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col items-center gap-2"
          >
            <h1 className="text-2xl font-bold text-white">
              Mukul<span className="text-blue-400">.</span>
            </h1>
            <p className="text-gray-400 text-sm">Backend Developer</p>
          </motion.div>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '160px' }}
            transition={{ delay: 0.6, duration: 1, ease: 'easeInOut' }}
            className="mt-8 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
