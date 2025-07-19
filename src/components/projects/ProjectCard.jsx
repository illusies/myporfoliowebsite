import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ProjectCard = ({ project, isFeatured = false }) => {
  const { toast } = useToast();

  const handleGithubClick = () => {
    toast({
      title: "GitHub Repository",
      description: "🚧 GitHub integration isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const cardClasses = `project-card bg-white rounded-xl shadow-lg hover-glow border border-gray-200 overflow-hidden`;

  return (
    <motion.div
      variants={cardVariants}
      className={cardClasses}
    >
      <div className="aspect-video bg-gray-100">
        <img  className="w-full h-full object-cover" alt={`${project.title} project screenshot`} src="https://images.unsplash.com/photo-1572177812156-58036aae439c" />
      </div>
      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className={`font-bold text-gray-900 mb-2 ${isFeatured ? 'text-xl' : 'text-lg'}`}>{project.title}</h3>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
              {project.category}
            </span>
          </div>
        </div>
        <p className={`text-gray-600 leading-relaxed ${isFeatured ? '' : 'text-sm line-clamp-3'}`}>
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1">
          {project.tech.slice(0, 3).map((tech) => (
            <span key={tech} className="px-2 py-1 bg-gray-50 text-gray-600 text-xs font-medium rounded">
              {tech}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="px-2 py-1 bg-gray-50 text-gray-600 text-xs font-medium rounded">
              +{project.tech.length - 3}
            </span>
          )}
        </div>
        <div className="flex gap-3 pt-2">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-900 hover:text-gray-700 font-medium text-sm transition-colors"
          >
            <ExternalLink className="h-4 w-4" />
            Live Demo
          </a>
          <button
            onClick={handleGithubClick}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 font-medium text-sm transition-colors"
          >
            <Github className="h-4 w-4" />
            Code
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;