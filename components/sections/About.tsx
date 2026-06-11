'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Zap, Globe, Cpu, Briefcase, MapPin, Calendar, GraduationCap } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import { profile } from '@/data/profile';

const techStack = [
  'Node.js', 'Express.js', 'JavaScript', 'TypeScript', 'React', 'Three.js',
  'PostgreSQL', 'MongoDB', 'Firestore', 'AWS', 'Firebase', 'Elasticsearch',
  'Redash', 'Razorpay', 'Adapty', 'JWT / OTP', 'REST APIs', 'Swagger',
];

const highlights = [
  { icon: Code2, title: 'Backend Engineering',      desc: 'Scalable APIs and microservices with Node.js & TypeScript.',          color: 'text-blue-400',    bg: 'bg-blue-500/10 border-blue-500/20' },
  { icon: Zap,   title: 'Performance Optimization', desc: 'Query optimization, caching, and efficient code refactoring.',         color: 'text-cyan-400',    bg: 'bg-cyan-500/10 border-cyan-500/20' },
  { icon: Globe, title: 'API Architecture',          desc: 'RESTful APIs, auth systems, and robust third-party integrations.',     color: 'text-violet-400',  bg: 'bg-violet-500/10 border-violet-500/20' },
  { icon: Cpu,   title: 'AI Integrations',           desc: 'Connecting LLM APIs and AI features into production services.',        color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/20' },
];

export default function AboutSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <section id="about" className="py-24 bg-gray-950 relative overflow-hidden">
      {/* background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full bg-violet-600/[0.04] blur-[100px]" />
        <div className="absolute top-0 left-0 w-[400px] h-[300px] rounded-full bg-blue-600/[0.04] blur-[80px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="About Me" subtitle="A little about who I am and what I bring to the table." />

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* ── Left: Avatar + Stats ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col items-center lg:items-start gap-7"
          >
            {/* Avatar with rotating ring */}
            <div className="relative">
              <div className="w-44 h-44 rounded-3xl bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-500 flex items-center justify-center text-white text-5xl font-black shadow-2xl shadow-blue-600/40">
                {profile.avatarInitials}
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-3 rounded-3xl border border-dashed border-indigo-500/30"
              />
              <div className="absolute -bottom-3 -right-3 px-3 py-1.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-bold shadow-lg shadow-emerald-500/40">
                Available
              </div>
            </div>

            {/* Quick stats grid */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
              {[
                { icon: Briefcase,      label: 'Experience',  value: profile.yearsOfExperience + ' Yrs', accent: 'text-blue-400' },
                { icon: MapPin,         label: 'Location',    value: 'Noida, IN',                       accent: 'text-cyan-400' },
                { icon: GraduationCap,  label: 'Education',   value: 'B.Tech CSE',                      accent: 'text-violet-400' },
                { icon: Calendar,       label: 'Status',      value: 'Open to Work',                    accent: 'text-emerald-400' },
              ].map(({ icon: Icon, label, value, accent }) => (
                <div key={label} className="flex flex-col gap-1 p-4 rounded-2xl bg-gray-900 border border-gray-800 hover:border-gray-700 transition-colors">
                  <Icon className={`w-4 h-4 ${accent} mb-1`} />
                  <span className="text-xs text-gray-500">{label}</span>
                  <span className="text-sm font-semibold text-white">{value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Right: Bio + Highlights + Stack ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="space-y-6"
          >
            {/* Bio */}
            <div className="space-y-4 text-gray-400 leading-relaxed text-[15px]">
              <p className="text-lg text-gray-300">
                I&apos;m a <span className="text-indigo-400 font-semibold">Backend Engineer</span> with{' '}
                <span className="text-white font-semibold">2.9 years of experience</span> designing, building, and
                optimizing scalable applications using{' '}
                <span className="text-blue-400 font-medium">Node.js</span>,{' '}
                <span className="text-blue-400 font-medium">Express.js</span>, and{' '}
                <span className="text-cyan-400 font-medium">TypeScript</span>.
              </p>
              <p>
                Skilled in REST API development, real-time messaging, payment integration (
                <span className="text-purple-400 font-medium">Razorpay</span>), product analytics (
                <span className="text-purple-400 font-medium">Adapty</span>,{' '}
                <span className="text-purple-400 font-medium">Meta</span>), and cloud services (
                <span className="text-cyan-400 font-medium">AWS</span>,{' '}
                <span className="text-cyan-400 font-medium">Firebase</span>,{' '}
                <span className="text-cyan-400 font-medium">Elasticsearch</span>).
              </p>
              <p>
                Currently building backend systems at{' '}
                <span className="text-blue-400 font-semibold">Alyke (XVISION IT)</span> — the world&apos;s
                first friendship app — with a strong focus on performance, scalability, and clean,
                maintainable code.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500/8 border border-amber-500/20 text-amber-400 text-sm font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
                </span>
                Currently looking for a job switch.
              </div>
            </div>

            {/* Highlight cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map(({ icon: Icon, title, desc, color, bg }) => (
                <div key={title} className={`p-4 rounded-2xl bg-gray-900 border ${bg} hover:brightness-110 transition-all duration-300`}>
                  <div className={`inline-flex p-2 rounded-xl mb-2 ${bg}`}>
                    <Icon className={`w-4 h-4 ${color}`} />
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-1">{title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>

            {/* Tech tags */}
            <div>
              <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">Tech I Work With</h4>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, i) => {
                  const colours = [
                    'hover:text-blue-400 hover:border-blue-500/50',
                    'hover:text-cyan-400 hover:border-cyan-500/50',
                    'hover:text-violet-400 hover:border-violet-500/50',
                    'hover:text-emerald-400 hover:border-emerald-500/50',
                  ];
                  return (
                    <span key={tech} className={`px-3 py-1 rounded-full text-xs font-medium bg-gray-900 border border-gray-800 text-gray-400 transition-all duration-200 ${colours[i % 4]}`}>
                      {tech}
                    </span>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
