
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/illusies',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/john-mcdove-bsc-40088b125',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: 'mailto:john.mcdove@example.com',
      label: 'Email'
    }
  ];

  return (
    <footer className="bg-card text-card-foreground py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <span className="text-2xl font-bold text-foreground">John McDove</span>
            <p className="text-muted-foreground max-w-md">
              Full-stack developer passionate about creating innovative web solutions 
              and building exceptional user experiences.
            </p>
          </div>

          <div className="space-y-4">
            <span className="text-lg font-semibold text-foreground">Quick Links</span>
            <div className="grid grid-cols-2 gap-2">
              <Link to="/projects" className="text-muted-foreground hover:text-foreground transition-colors">
                Projects
              </Link>
              <Link to="/skills" className="text-muted-foreground hover:text-foreground transition-colors">
                Skills
              </Link>
              <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <span className="text-lg font-semibold text-foreground">Connect</span>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-secondary rounded-lg hover:bg-accent transition-colors group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-foreground" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 John McDove. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm mt-2 md:mt-0">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
