
import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { ArrowRight, Download, Github, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Home = () => {
  const { toast } = useToast();

  const featuredProjects = [
    {
      title: 'Cyberfield Services',
      description: 'Professional cybersecurity services website with modern design and comprehensive service offerings.',
      tech: ['React', 'Webflow', 'CSS'],
      link: 'http://cyberfield-services.webflow.io/',
      image: 'Professional cybersecurity website with dark theme and security icons'
    },
    {
      title: 'Bytehon',
      description: 'Interactive Python tutorial platform designed to make learning programming engaging and accessible.',
      tech: ['Python', 'JavaScript', 'HTML/CSS'],
      link: 'https://bytehon.netlify.app/',
      image: 'Python tutorial website with code examples and interactive elements'
    },
    {
      title: 'RoadReady Parts',
      description: 'E-commerce platform for automotive parts with advanced search and filtering capabilities.',
      tech: ['React', 'Node.js', 'Database'],
      link: 'https://frolicking-bienenstitch-1ccb43.netlify.app/',
      image: 'Automotive parts e-commerce website with product catalog'
    }
  ];

  const handleDownloadResume = () => {
    toast({
      title: "Resume Download",
      description: "🚧 Resume download isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <>
      <Helmet>
        <title>John McDove - Full-Stack Developer Portfolio</title>
        <meta name="description" content="Welcome to John McDove's portfolio. Full-stack developer specializing in modern web technologies, cybersecurity, and innovative digital solutions." />
      </Helmet>

      <div className="min-h-screen">
        <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-lg text-primary font-medium"
                >
                  Hello, I'm
                </motion.p>
                
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-responsive-xl font-bold text-gradient"
                >
                  John McDove
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-responsive-lg text-foreground max-w-3xl mx-auto"
                >
                  Full-Stack Developer & Digital Innovator
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
                >
                  Passionate about creating exceptional web experiences, cybersecurity solutions, 
                  and educational platforms that make technology accessible to everyone.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <Link to="/projects">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-medium flex items-center gap-2 transition-all hover:scale-105">
                    View My Work
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                
                <Button
                  variant="outline"
                  onClick={handleDownloadResume}
                  className="px-8 py-3 rounded-lg font-medium flex items-center gap-2 transition-all hover:scale-105"
                >
                  <Download className="h-4 w-4" />
                  Download Resume
                </Button>
                
                <a href="https://github.com/illusies" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="ghost"
                    className="px-8 py-3 rounded-lg font-medium flex items-center gap-2 transition-all hover:scale-105"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </Button>
                </a>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-muted-foreground rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Featured Projects
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A showcase of my recent work in web development, cybersecurity, and educational technology.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="project-card bg-card rounded-xl shadow-lg hover-glow p-6 border border-border"
                >
                  <div className="space-y-4">
                    <div className="aspect-video bg-secondary rounded-lg overflow-hidden">
                      <img  
                        className="w-full h-full object-cover"
                        alt={`${project.title} project screenshot`}
                       src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                    </div>
                    
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium text-sm transition-colors"
                      >
                        View Project
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Link to="/projects">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-medium flex items-center gap-2 mx-auto transition-all hover:scale-105">
                  View All Projects
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-secondary px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  About Me
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm a passionate full-stack developer with expertise in modern web technologies, 
                  cybersecurity, and educational platform development. My goal is to create 
                  innovative solutions that make technology more accessible and secure for everyone.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  From building comprehensive cybersecurity services to developing interactive 
                  learning platforms, I bring creativity and technical excellence to every project.
                </p>
                <Link to="/about">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-all hover:scale-105">
                    Learn More About Me
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-square bg-background rounded-2xl overflow-hidden">
                  <img  
                    className="w-full h-full object-cover"
                    alt="John McDove professional headshot"
                   src="https://images.unsplash.com/photo-1603969409447-ba86143a03f6" />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-card p-4 rounded-xl shadow-lg border border-border">
                  <p className="text-sm font-medium text-foreground">5+ Years Experience</p>
                  <p className="text-xs text-muted-foreground">Full-Stack Development</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
