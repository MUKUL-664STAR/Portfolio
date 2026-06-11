import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        gray: {
          850: '#1a1f2e',
          925: '#0d1117',
          950: '#0a0e1a',
        },
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        float: 'float 3s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 4s ease infinite',
        'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      backgroundImage: {
        'grid-pattern':
          "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: '64px 64px',
      },
      boxShadow: {
        'blue-glow': '0 0 40px rgba(59, 130, 246, 0.15)',
        'cyan-glow': '0 0 40px rgba(6, 182, 212, 0.15)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
