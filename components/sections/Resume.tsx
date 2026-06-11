'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, FileText, CheckCircle, Eye } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import { profile } from '@/data/profile';

const highlights = [
  'Node.js & Express.js backend architecture',
  'TypeScript for type-safe, maintainable code',
  'REST API design & performance optimization',
  'Real-time messaging with Firestore & Firebase',
  'Payment integration via Razorpay',
  'Product analytics — Adapty & Meta',
  'Cloud services — AWS & Elasticsearch',
  'Authentication systems (JWT / OTP)',
];

export default function ResumeSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="resume" className="py-24 bg-[#060b18] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Resume" subtitle="View online or download a PDF copy of my resume." />

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold text-white mb-4">
              What&apos;s in my resume?
            </h3>
            <ul className="space-y-3">
              {highlights.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -15 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.07 + 0.2, duration: 0.4 }}
                  className="flex items-center gap-3 text-gray-300"
                >
                  <CheckCircle className="w-4 h-4 text-blue-500 shrink-0" />
                  <span className="text-sm">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Resume Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col items-center gap-6 p-8 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-2xl shadow-blue-500/30"
          >
            <div className="p-4 rounded-2xl bg-white/20 backdrop-blur-sm">
              <FileText className="w-12 h-12" />
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold mb-1">Mukul Choudhary</h3>
              <p className="text-blue-100 text-sm">Backend Engineer | Node.js | TypeScript | AWS | Firebase</p>
              <p className="text-blue-200 text-xs mt-1">2.9 Years Experience</p>
            </div>

            {/* View + Download buttons */}
            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <motion.a
                href={profile.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="flex items-center justify-center gap-2 flex-1 py-3 px-4 rounded-xl bg-white/20 hover:bg-white/30 border border-white/30 text-white font-semibold text-sm backdrop-blur-sm transition-all duration-300"
              >
                <Eye className="w-4 h-4" />
                View Resume
              </motion.a>

              <motion.a
                href={profile.resumePath}
                download="Mukul_Choudhary_Resume.pdf"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="flex items-center justify-center gap-2 flex-1 py-3 px-4 rounded-xl bg-white text-blue-600 font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Download className="w-4 h-4" />
                Download PDF
              </motion.a>
            </div>

            <p className="text-blue-200 text-xs">PDF format • Updated June 2025</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

