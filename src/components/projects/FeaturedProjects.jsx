import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const FeaturedProjects = ({ projects }) => {
  return (
    <section className="mb-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-2xl font-bold text-gray-900 mb-8"
      >
        Featured Projects
      </motion.h2>
      
      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {projects.filter(p => p.featured).slice(0, 2).map((project) => (
          <ProjectCard key={project.title} project={project} isFeatured={true} />
        ))}
      </motion.div>
    </section>
  );
};

export default FeaturedProjects;