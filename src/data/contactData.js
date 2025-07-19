import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

export const contactInfoData = [
  {
    icon: Mail,
    label: 'Email',
    value: 'john.mcdove@example.com',
    href: 'mailto:john.mcdove@example.com'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: 'Available upon request',
    href: null
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Kingston, Jamaica (Available Worldwide)',
    href: null
  }
];

export const socialLinksData = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/illusies',
    username: '@illusies'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/john-mcdove-bsc-40088b125',
    username: 'John McDove, BSc.'
  }
];

export const servicesData = [
  {
    title: 'Web Development',
    description: 'Full-stack web applications using modern technologies',
    icon: '💻'
  },
  {
    title: 'Cybersecurity Consulting',
    description: 'Security audits, training, and implementation',
    icon: '🔐'
  },
  {
    title: 'Educational Platforms',
    description: 'Interactive learning and tutorial development',
    icon: '📚'
  },
  {
    title: 'E-commerce Solutions',
    description: 'Complete online store development and optimization',
    icon: '🛒'
  }
];