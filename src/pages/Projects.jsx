import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { projectsData, projectCategories } from '@/data/projectsData';
import ProjectFilters from '@/components/projects/ProjectFilters';
import FeaturedProjects from '@/components/projects/FeaturedProjects';
import AllProjectsGrid from '@/components/projects/AllProjectsGrid';
import AdditionalExpertise from '@/components/projects/AdditionalExpertise';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = useMemo(() => {
    return projectsData.filter(project => {
      const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.tech.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  return (
    <>
      <Helmet>
        <title>Projects - John McDove</title>
        <meta name="description" content="Explore John McDove's portfolio of web development projects including cybersecurity solutions, educational platforms, e-commerce sites, and AI-powered tools." />
      </Helmet>

      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              My Projects
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A comprehensive showcase of my work in web development, cybersecurity, 
              education technology, and innovative digital solutions.
            </p>
          </motion.div>

          <ProjectFilters
            categories={projectCategories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />

          {selectedCategory === 'All' && searchTerm === '' && (
            <FeaturedProjects projects={projectsData} />
          )}

          <AllProjectsGrid projects={filteredProjects} selectedCategory={selectedCategory} />

          <AdditionalExpertise />
        </div>
      </div>
    </>
  );
};

export default Projects;