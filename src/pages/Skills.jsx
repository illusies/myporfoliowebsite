
import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { 
  Code2, 
  Database, 
  Shield, 
  Cloud,
  Users,
  Target,
  MessageSquare,
  Clock,
  Lightbulb,
  CheckCircle,
  Layers,
  Server
} from 'lucide-react';

const Skills = () => {
  const technicalSkills = [
    {
      category: 'Frontend Development',
      icon: Layers,
      skills: [
        { name: 'React & Next.js', level: 95 },
        { name: 'JavaScript (ES6+)', level: 95 },
        { name: 'HTML5 & CSS3', level: 95 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Framer Motion', level: 80 },
        { name: 'Webflow & UI/UX', level: 85 }
      ]
    },
    {
      category: 'Backend Development',
      icon: Server,
      skills: [
        { name: 'Node.js & Express.js', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'RESTful & GraphQL APIs', level: 85 },
        { name: 'Authentication (JWT, OAuth)', level: 90 },
        { name: 'Server Management', level: 75 }
      ]
    },
    {
      category: 'Databases',
      icon: Database,
      skills: [
        { name: 'PostgreSQL', level: 85 },
        { name: 'MySQL', level: 80 },
        { name: 'MongoDB', level: 75 },
        { name: 'Firebase & Supabase', level: 80 },
        { name: 'Database Design & ORMs', level: 85 }
      ]
    },
    {
      category: 'DevOps & Tools',
      icon: Cloud,
      skills: [
        { name: 'Git & GitHub', level: 95 },
        { name: 'Docker', level: 70 },
        { name: 'Vercel & Netlify', level: 90 },
        { name: 'VS Code & DevTools', level: 95 },
        { name: 'CI/CD Principles', level: 70 }
      ]
    }
  ];

  const softSkills = [
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Excellent at working in cross-functional teams and leading development projects.'
    },
    {
      icon: MessageSquare,
      title: 'Communication',
      description: 'Strong verbal and written communication skills for technical and non-technical audiences.'
    },
    {
      icon: Target,
      title: 'Problem Solving',
      description: 'Analytical thinking and creative problem-solving approach to complex challenges.'
    },
    {
      icon: Clock,
      title: 'Time Management',
      description: 'Efficient project management and ability to meet deadlines while maintaining quality.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Constantly exploring new technologies and implementing creative solutions.'
    },
    {
      icon: CheckCircle,
      title: 'Attention to Detail',
      description: 'Meticulous approach to code quality, testing, and user experience optimization.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Skills & Expertise - John McDove</title>
        <meta name="description" content="Explore John McDove's technical skills in full-stack development, cybersecurity, and modern web technologies, plus soft skills and professional certifications." />
      </Helmet>

      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Skills & Expertise
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A comprehensive overview of my technical abilities, professional skills, 
              and continuous learning journey in web development and cybersecurity.
            </p>
          </motion.div>

          <section className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">Technical Skills</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Proficiency levels in various technologies and frameworks I work with regularly.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {technicalSkills.map((category, categoryIndex) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-xl shadow-lg border border-border p-6 hover-glow"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-primary rounded-lg">
                      <category.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{category.category}</h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="space-y-2"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-foreground">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-secondary rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: skillIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-primary h-2 rounded-full skill-bar"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">Professional Skills</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Essential soft skills that complement my technical expertise and drive project success.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-xl shadow-lg border border-border p-6 hover-glow text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-xl mb-4">
                    <skill.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{skill.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{skill.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <section>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold text-foreground mb-8">What I Bring to Your Project</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <div className="space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-xl">
                    <Code2 className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Full-Stack Expertise</h3>
                  <p className="text-muted-foreground">
                    End-to-end development capabilities from frontend user interfaces to backend systems and databases.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-xl">
                    <Shield className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Security-First Approach</h3>
                  <p className="text-muted-foreground">
                    Built-in security considerations and cybersecurity expertise to protect your applications and data.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-xl">
                    <Lightbulb className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Innovation & Quality</h3>
                  <p className="text-muted-foreground">
                    Creative problem-solving and commitment to delivering high-quality, maintainable code.
                  </p>
                </div>
              </div>
            </motion.div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Skills;
