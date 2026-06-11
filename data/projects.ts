import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'real-time-chat',
    title: 'Real-Time Chat Application',
    description:
      'Scalable real-time chat backend handling 100+ active user chats per second with OTP-based authentication via Twilio.',
    longDescription:
      'Built a scalable backend with Node.js, Express, and MongoDB, handling 100+ active user chats per second. Optimized database transactions to resolve race conditions and handle concurrency, ensuring 100% data integrity during simultaneous chats. Implemented OTP verification via the Twilio API, processing 1,000+ OTPs daily with a 95% success rate.',
    techStack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Twilio', 'Firebase'],
    githubUrl: 'https://github.com/MUKUL-664STAR',
    featured: true,
    status: 'completed',
    category: 'Full Stack / Real-Time',
  },
  {
    id: 'hospital-management',
    title: 'Hospital Management System',
    description:
      'Web application to manage hospital operations — patient records, doctor schedules, and appointment booking.',
    longDescription:
      'Developed a full-featured hospital management web application with a Node.js and Express backend performing CRUD operations on patients, doctors, and appointments. Leveraged MongoDB for efficient data storage and management. The system handles patient records, doctor schedules, and appointment booking in a unified, streamlined interface.',
    techStack: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'JavaScript'],
    githubUrl: 'https://github.com/MUKUL-664STAR',
    featured: true,
    status: 'completed',
    category: 'Backend / Healthcare',
  },
  {
    id: 'bsg-shop',
    title: 'BSG Shop — E-Commerce Platform',
    description:
      'Full-featured e-commerce platform for The Bharat Scouts and Guides with Razorpay payments and Indian Post Office order tracking.',
    longDescription:
      'Built and deployed BSG Shop enabling seamless product browsing, cart management, Razorpay payment integration, and secure checkout. Developed dynamic order tracking by integrating the Indian Post Office API. Optimized the codebase for improved performance and faster API response times. Also built an interactive Handwashing web app for hygiene awareness.',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Razorpay', 'Indian Post Office API'],
    githubUrl: 'https://github.com/MUKUL-664STAR',
    featured: true,
    status: 'completed',
    category: 'Full Stack / E-Commerce',
  },
];
