'use client';

import {
  SiNodedotjs, SiExpress, SiJavascript, SiTypescript, SiReact,
  SiPostgresql, SiMongodb, SiFirebase,
  SiElasticsearch, SiGit, SiPostman, SiSwagger,
  SiRazorpay, SiJsonwebtokens, SiRedis,
  SiDocker, SiGithub,
} from '@icons-pack/react-simple-icons';

/** Maps a technology name to a Simple Icons React component + brand color */
const TECH_ICON_MAP: Record<string, { icon: React.ElementType; color: string }> = {
  // Backend languages & runtimes
  'Node.js':        { icon: SiNodedotjs,    color: '#339933' },
  'NodeJS':         { icon: SiNodedotjs,    color: '#339933' },
  'Express.js':     { icon: SiExpress,      color: '#000000' },
  'Express':        { icon: SiExpress,      color: '#000000' },
  'JavaScript':     { icon: SiJavascript,   color: '#F7DF1E' },
  'TypeScript':     { icon: SiTypescript,   color: '#3178C6' },
  'React':          { icon: SiReact,        color: '#61DAFB' },
  'React.js':       { icon: SiReact,        color: '#61DAFB' },
  // Databases
  'PostgreSQL':     { icon: SiPostgresql,   color: '#4169E1' },
  'MongoDB':        { icon: SiMongodb,      color: '#47A248' },
  'Firestore':      { icon: SiFirebase,     color: '#FFCA28' },
  'Firebase':       { icon: SiFirebase,     color: '#FFCA28' },
  // Cloud & DevOps — AWS has no simple-icon in v13; shown as text-only fallback
  'Elasticsearch':  { icon: SiElasticsearch,color: '#005571' },
  'ElasticSearch':  { icon: SiElasticsearch,color: '#005571' },
  'Docker':         { icon: SiDocker,       color: '#2496ED' },
  'Redis':          { icon: SiRedis,        color: '#DC382D' },
  // Tools
  'Git':            { icon: SiGit,          color: '#F05032' },
  'GitHub':         { icon: SiGithub,       color: '#181717' },
  'Postman':        { icon: SiPostman,      color: '#FF6C37' },
  'Swagger':        { icon: SiSwagger,      color: '#85EA2D' },
  // Integrations — Twilio has no simple-icon in v13; shown as text-only fallback
  'Razorpay':       { icon: SiRazorpay,     color: '#02042B' },
  'JWT':            { icon: SiJsonwebtokens,color: '#000000' },
  'JWT / OTP':      { icon: SiJsonwebtokens,color: '#000000' },
  // Fallback handled by caller
};

interface TechIconProps {
  name: string;
  size?: number;
  showLabel?: boolean;
  className?: string;
}

export function getTechIcon(name: string) {
  return TECH_ICON_MAP[name] ?? null;
}

export default function TechIcon({ name, size = 16, showLabel = false, className = '' }: TechIconProps) {
  const entry = TECH_ICON_MAP[name];
  if (!entry) return showLabel ? <span className={className}>{name}</span> : null;

  const { icon: Icon, color } = entry;
  return (
    <span className={`inline-flex items-center gap-1.5 ${className}`}>
      <Icon width={size} height={size} style={{ color, flexShrink: 0 }} />
      {showLabel && <span>{name}</span>}
    </span>
  );
}
