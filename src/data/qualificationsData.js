import React from 'react';
import { Award, BookOpen, Code2, Shield, GraduationCap } from 'lucide-react';

export const educationData = [
  {
    degree: 'Bachelor of Science (B.Sc.), Computer Science',
    institution: 'University of the Commonwealth Caribbean',
    period: '2015 - 2019',
    description: 'A comprehensive curriculum focused on core computer science principles, software engineering, database management, and networking. Specialized in web and mobile application development.',
    highlights: [
      'Graduated with First Class Honours.',
      'Developed a passion for full-stack development and cybersecurity.',
      'Completed a final year project on secure e-commerce platforms.',
      'Actively participated in coding clubs and hackathons.'
    ]
  }
];

export const certificationsData = [
  {
    title: 'Advanced React Development',
    issuer: 'Project-Based Certification',
    date: '2023',
    type: 'Technical',
    description: 'Demonstrated through multiple complex React applications including state management, hooks, and modern patterns.',
    badge: '🏆'
  },
  {
    title: 'Full-Stack Web Development',
    issuer: 'Portfolio Demonstration',
    date: '2022',
    type: 'Technical',
    description: 'Comprehensive full-stack development skills proven through end-to-end application development.',
    badge: '💻'
  },
  {
    title: 'Cybersecurity Implementation',
    issuer: 'Cyberfield Services',
    date: '2021',
    type: 'Security',
    description: 'Practical cybersecurity implementation and security awareness training development.',
    badge: '🔐'
  },
  {
    title: 'Educational Technology Development',
    issuer: 'Bytehon & Ceetorial Platforms',
    date: '2022',
    type: 'Education',
    description: 'Created comprehensive programming tutorial platforms with interactive learning features.',
    badge: '📚'
  },
  {
    title: 'E-commerce Development',
    issuer: 'RoadReady Parts Project',
    date: '2023',
    type: 'Technical',
    description: 'Advanced e-commerce platform development with payment integration and inventory management.',
    badge: '🛒'
  },
  {
    title: 'AI Integration & Development',
    issuer: 'BoltMiner & SmartResumeMatch',
    date: '2024',
    type: 'AI/ML',
    description: 'AI-powered application development including machine learning integration and data analysis.',
    badge: '🤖'
  }
];

export const skillsMatrixData = [
  {
    category: 'Programming Languages',
    items: ['JavaScript/ES6+', 'Python', 'HTML5', 'CSS3', 'C Programming', 'SQL']
  },
  {
    category: 'Frontend Technologies',
    items: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'UI/UX Design', 'Webflow']
  },
  {
    category: 'Backend Technologies',
    items: ['Node.js', 'Express.js', 'RESTful APIs', 'Database Design', 'Server Management', 'Authentication']
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Firebase', 'Supabase']
  },
  {
    category: 'Cybersecurity',
    items: ['Web App Security', 'Threat Assessment', 'Risk Management', 'Security Training', 'OWASP Top 10']
  },
  {
    category: 'Tools & Platforms',
    items: ['Git/GitHub', 'Docker', 'Netlify', 'Vercel', 'Wix Studio', 'VS Code']
  }
];

export const achievementsData = [
  {
    title: 'Launched Cyberfield Services',
    description: 'Successfully established and launched a cybersecurity consultancy providing comprehensive security solutions.',
    year: '2021',
    icon: Shield
  },
  {
    title: 'Created Educational Platforms',
    description: 'Developed Bytehon and Ceetorial, interactive programming tutorial platforms used by learners worldwide.',
    year: '2022',
    icon: BookOpen
  },
  {
    title: 'Built 9+ Production Applications',
    description: 'Designed and developed multiple full-stack applications across various industries and use cases.',
    year: '2019-2024',
    icon: Code2
  },
  {
    title: 'First Class Honours Graduate',
    description: 'Graduated with top academic distinction from the University of the Commonwealth Caribbean.',
    year: '2019',
    icon: GraduationCap
  }
];