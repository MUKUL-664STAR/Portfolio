'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, Linkedin, Github, Send, MapPin, CheckCircle, AlertCircle } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import { profile } from '@/data/profile';

interface FormState { name: string; email: string; subject: string; message: string; }
type Status = 'idle' | 'success' | 'error';

const contactLinks = [
  { icon: Mail,     label: 'Email',    value: 'chmukul2002@gmail.com',               href: `mailto:${profile.email}`,  accent:'#34d399', bg:'rgba(16,185,129,0.1)',  border:'rgba(16,185,129,0.25)' },
  { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/mukul-choudhary',     href: profile.linkedin,            accent:'#2dd4bf', bg:'rgba(20,184,166,0.1)',  border:'rgba(20,184,166,0.25)' },
  { icon: Github,   label: 'GitHub',   value: 'github.com/MUKUL-664STAR',            href: profile.github,              accent:'#fbbf24', bg:'rgba(245,158,11,0.1)', border:'rgba(245,158,11,0.25)' },
  { icon: Phone,    label: 'Phone',    value: '+91 7505302688',                       href: `tel:${profile.phone}`,      accent:'#a78bfa', bg:'rgba(139,92,246,0.1)', border:'rgba(139,92,246,0.25)' },
];

export default function ContactSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [form, setForm]     = useState<FormState>({ name:'', email:'', subject:'', message:'' });
  const [status, setStatus] = useState<Status>('idle');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1200));
    setStatus('success');
    setLoading(false);
    setForm({ name:'', email:'', subject:'', message:'' });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden" style={{ background:'#0a1118' }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background:'linear-gradient(to right, transparent, rgba(16,185,129,0.3), transparent)' }} />
        <div className="absolute top-1/3 left-0 w-[400px] h-[400px] rounded-full blur-[100px]" style={{ background:'rgba(16,185,129,0.04)' }} />
        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] rounded-full blur-[90px]" style={{ background:'rgba(20,184,166,0.04)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Get In Touch" subtitle="I'm open to new opportunities. Let's connect and talk." />

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-5 gap-10 mt-4">

          {/* LEFT */}
          <motion.div initial={{ opacity:0, x:-30 }} animate={inView?{opacity:1,x:0}:{}} transition={{ duration:0.7 }} className="lg:col-span-2 flex flex-col gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">Let&apos;s Talk</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                Whether you have a project in mind, a role to discuss, or just want to say hello — my inbox is always open.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {contactLinks.map(({ icon: Icon, label, value, href, accent, bg, border }) => (
                <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer" whileHover={{ x:4, scale:1.01 }} className="group flex items-center gap-4 p-4 rounded-2xl border transition-all duration-200" style={{ background:'#0d1520', borderColor:'rgba(255,255,255,0.07)' }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border" style={{ background: bg, borderColor: border }}>
                    <Icon className="w-4.5 h-4.5" style={{ color: accent }} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide">{label}</div>
                    <div className="text-sm font-medium text-gray-300 group-hover:transition-colors" style={{ '--hover-color': accent } as React.CSSProperties}>{value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-500">
              <MapPin className="w-4 h-4 text-emerald-400" />
              <span>{profile.location} — Available remotely worldwide</span>
            </div>
          </motion.div>

          {/* RIGHT — form */}
          <motion.div initial={{ opacity:0, x:30 }} animate={inView?{opacity:1,x:0}:{}} transition={{ duration:0.7, delay:0.15 }} className="lg:col-span-3">
            <div className="p-6 rounded-2xl border" style={{ background:'#0d1520', borderColor:'rgba(255,255,255,0.07)' }}>
              <h3 className="text-lg font-bold text-white mb-5">Send a Message</h3>

              {status === 'success' && (
                <div className="flex items-center gap-3 p-4 rounded-xl mb-5" style={{ background:'rgba(16,185,129,0.1)', border:'1px solid rgba(16,185,129,0.3)', color:'#34d399' }}>
                  <CheckCircle className="w-5 h-5 shrink-0" />
                  <span className="text-sm">Message sent! I&apos;ll get back to you soon.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[{name:'name',placeholder:'Your Name',label:'Name'},{name:'email',placeholder:'you@example.com',label:'Email'}].map(f => (
                    <div key={f.name}>
                      <label className="block text-xs font-medium text-gray-500 mb-1.5">{f.label}</label>
                      <input name={f.name} type={f.name==='email'?'email':'text'} placeholder={f.placeholder} value={(form as unknown as Record<string,string>)[f.name]} onChange={handleChange} required className="w-full px-4 py-2.5 rounded-xl text-sm text-white placeholder-gray-600 outline-none transition-all" style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.09)' }} />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1.5">Subject</label>
                  <input name="subject" type="text" placeholder="What's this about?" value={form.subject} onChange={handleChange} required className="w-full px-4 py-2.5 rounded-xl text-sm text-white placeholder-gray-600 outline-none transition-all" style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.09)' }} />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1.5">Message</label>
                  <textarea name="message" rows={5} placeholder="Tell me about your project or opportunity…" value={form.message} onChange={handleChange} required className="w-full px-4 py-2.5 rounded-xl text-sm text-white placeholder-gray-600 outline-none transition-all resize-none" style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.09)' }} />
                </div>
                <button type="submit" disabled={loading} className="w-full py-3 rounded-xl font-semibold text-sm text-white flex items-center justify-center gap-2 transition-opacity hover:opacity-90 disabled:opacity-60" style={{ background:'linear-gradient(135deg,#059669,#0d9488)' }}>
                  {loading ? <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <Send className="w-4 h-4" />}
                  {loading ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
