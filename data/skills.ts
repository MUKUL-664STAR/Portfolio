import { SkillCategory } from '@/types';

export const skillCategories: SkillCategory[] = [
  {
    category: 'Backend',
    icon: 'Server',
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'Node.js', level: 93 },
      { name: 'Express.js', level: 91 },
      { name: 'JavaScript', level: 93 },
      { name: 'TypeScript', level: 87 },
      { name: 'REST APIs', level: 94 },
      { name: 'C++', level: 70 },
    ],
  },
  {
    category: 'Database',
    icon: 'Database',
    color: 'from-emerald-500 to-teal-500',
    skills: [
      { name: 'PostgreSQL', level: 82 },
      { name: 'MongoDB', level: 88 },
      { name: 'Firestore', level: 83 },
    ],
  },
  {
    category: 'Cloud & DevOps',
    icon: 'Cloud',
    color: 'from-orange-500 to-amber-500',
    skills: [
      { name: 'AWS', level: 72 },
      { name: 'Firebase', level: 85 },
      { name: 'Elasticsearch', level: 73 },
      { name: 'OTA Updates', level: 70 },
    ],
  },
  {
    category: 'Tools & Testing',
    icon: 'Wrench',
    color: 'from-purple-500 to-violet-500',
    skills: [
      { name: 'Git', level: 91 },
      { name: 'Postman', level: 89 },
      { name: 'Swagger', level: 83 },
      { name: 'Cucumber JS', level: 72 },
    ],
  },
];
