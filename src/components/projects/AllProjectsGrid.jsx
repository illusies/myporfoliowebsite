import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const AllProjectsGrid = ({ projects, selectedCategory }) => {
  return (
    <section>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-2xl font-bold text-gray-900 mb-8"
      >
        {selectedCategory === 'All' ? 'All Projects' : `${selectedCategory} Projects`}
      </motion.h2>

      {projects.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <p className="text-gray-600 text-lg">No projects found matching your criteria.</p>
        </motion.div>
      ) : (
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>
      )}
    </section>
  );
};

export default AllProjectsGrid;