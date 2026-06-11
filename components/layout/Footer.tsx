'use client';

import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { profile } from '@/data/profile';
import { NAV_LINKS } from '@/constants';
import { scrollToSection } from '@/utils';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t" style={{ background: 'var(--bg-base)', borderColor: 'var(--border)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <div className="font-black text-2xl text-gray-900 dark:text-white mb-3">
              Mukul<span style={{ color:'#34d399' }}>.</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-500 max-w-xs leading-relaxed">
              Backend Engineer based in Noida, India. Building reliable systems that scale.
            </p>
            <div className="flex gap-2 mt-4">
              {[{ href:profile.github, icon:Github, label:'GitHub' },{ href:profile.linkedin, icon:Linkedin, label:'LinkedIn' },{ href:`mailto:${profile.email}`, icon:Mail, label:'Email' }].map(({ href, icon:Icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200" style={{ color:'#6b7280', background:'rgba(255,255,255,0.04)', border: '1px solid var(--border-card)' }}>
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">Navigation</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map(link => (
                <li key={link.label}>
                  <button onClick={() => scrollToSection(link.href)} className="text-sm text-gray-500 hover:text-emerald-400 transition-colors">
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">Contact</h3>
            <ul className="space-y-2">
              <li><a href={`mailto:${profile.email}`} className="text-sm text-gray-500 hover:text-emerald-400 transition-colors">{profile.email}</a></li>
              <li><a href={`tel:${profile.phone}`} className="text-sm text-gray-500 hover:text-teal-400 transition-colors">{profile.phone}</a></li>
              <li><span className="text-sm text-gray-600">{profile.location}</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-3" style={{ borderColor: 'var(--border-subtle)' }}>
          <p className="text-xs text-gray-500 dark:text-gray-600">&copy; {year} Mukul Choudhary. All rights reserved.</p>
          <p className="text-xs text-gray-600 flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-emerald-500 fill-current" /> using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
