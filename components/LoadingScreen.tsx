'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2 } from 'lucide-react';

export default function LoadingScreen() {
  const [show, setShow] = useState(true);
  useEffect(() => { const t = setTimeout(() => setShow(false), 1800); return () => clearTimeout(t); }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ opacity:0 }}
          transition={{ duration:0.4 }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center"
          style={{ background:'#080e14' }}
        >
          <motion.div initial={{ opacity:0, scale:0.8 }} animate={{ opacity:1, scale:1 }} transition={{ duration:0.5 }} className="flex flex-col items-center gap-5">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background:'linear-gradient(135deg,#059669,#0d9488)' }}>
              <Code2 className="w-8 h-8 text-white" />
            </div>
            <div className="text-xl font-black text-white tracking-tight">
              Mukul<span style={{ color:'#34d399' }}>.</span>
            </div>
            <div className="w-40 h-1 rounded-full overflow-hidden" style={{ background:'rgba(255,255,255,0.06)' }}>
              <motion.div className="h-full rounded-full" initial={{ width:'0%' }} animate={{ width:'100%' }} transition={{ duration:1.5, ease:'easeInOut' }} style={{ background:'linear-gradient(to right,#059669,#0d9488)' }} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
