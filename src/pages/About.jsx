
import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Code2, Shield, GraduationCap, Globe, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Code2,
      title: 'Innovation',
      description: 'Constantly exploring new technologies and methodologies to create cutting-edge solutions.'
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Prioritizing cybersecurity and data protection in every project I undertake.'
    },
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'Passionate about making technology education accessible and engaging for everyone.'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Building solutions that can make a positive difference worldwide.'
    }
  ];

  const journey = [
    {
      year: '2019',
      title: 'Graduated & Started Professional Journey',
      description: 'Graduated with a B.Sc. in Computer Science and began my career as a full-stack developer.'
    },
    {
      year: '2020',
      title: 'Deep Dive into Full-Stack',
      description: 'Expanded my skills in both frontend (React) and backend (Node.js, Python) technologies.'
    },
    {
      year: '2021',
      title: 'Cybersecurity Focus & Entrepreneurship',
      description: 'Launched Cyberfield Services, specializing in web security and consulting.'
    },
    {
      year: '2022',
      title: 'Building Educational Platforms',
      description: 'Created Bytehon and Ceetorial to share my passion for coding with a wider audience.'
    },
    {
      year: '2023',
      title: 'Advanced E-commerce & AI Projects',
      description: 'Developed complex e-commerce sites and began exploring AI-powered tools.'
    },
    {
      year: '2024',
      title: 'Innovating with AI & Modern Tech',
      description: 'Continuing to push boundaries with AI/ML, Next.js, and other modern frameworks.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Me - John McDove</title>
        <meta name="description" content="Learn about John McDove's journey as a full-stack developer, his passion for cybersecurity, education, and creating innovative web solutions." />
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
              About Me
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A creative and security-conscious Full-Stack Developer with a passion for building innovative, user-centric, and robust web solutions.
            </p>
          </motion.div>

          <section className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-bold text-foreground mb-6">My Story</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  From my first "Hello, World!" to architecting complex, secure applications, my journey in tech has been driven by a relentless curiosity and a desire to solve real-world problems. After graduating with a B.Sc. in Computer Science, I dove headfirst into the world of full-stack development, embracing the challenge of mastering both client-side and server-side technologies.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  My passion for creating secure digital environments led me to launch Cyberfield Services, a venture focused on web security. At the same time, I found immense joy in demystifying technology for others, which inspired me to build educational platforms like Bytehon and Ceetorial.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Today, I thrive on bringing ideas to life—whether it's a sophisticated e-commerce site, an intelligent AI-powered tool, or a secure web application. I'm always learning, always building, and always excited for the next challenge.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-[4/5] bg-secondary rounded-2xl overflow-hidden">
                  <img  
                    className="w-full h-full object-cover"
                    alt="John McDove working on a project"
                   src="https://images.unsplash.com/photo-1581094794329-c8112a89af12" />
                </div>
              </motion.div>
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
              <h2 className="text-3xl font-bold text-foreground mb-4">Core Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide my work and drive my passion for technology.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center space-y-4 p-6 rounded-xl hover:bg-accent transition-colors"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-xl">
                    <value.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
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
              <h2 className="text-3xl font-bold text-foreground mb-4">My Journey</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Key milestones in my development career and personal growth.
              </p>
            </motion.div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-border hidden md:block"></div>

              <div className="space-y-12">
                {journey.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex flex-col md:flex-row items-center gap-8 ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    <div className="flex-1 space-y-3">
                      <div className="bg-card p-6 rounded-xl shadow-lg border border-border hover-glow">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="px-3 py-1 bg-primary text-primary-foreground text-sm font-bold rounded-full">
                            {item.year}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                      </div>
                    </div>

                    <div className="hidden md:block w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10"></div>

                    <div className="flex-1"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-secondary rounded-2xl p-8 md:p-12"
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">Beyond Coding</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  When I'm not building the next great web application, here's what keeps me inspired.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-xl">
                    <Globe className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Travel & Culture</h3>
                  <p className="text-muted-foreground">
                    Exploring my home country of Jamaica and discovering new cultures that inspire my creative process.
                  </p>
                </div>

                <div className="text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-xl">
                    <GraduationCap className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Continuous Learning</h3>
                  <p className="text-muted-foreground">
                    Always studying new technologies and methodologies to stay at the forefront of development.
                  </p>
                </div>

                <div className="text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-xl">
                    <Heart className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Community</h3>
                  <p className="text-muted-foreground">
                    Contributing to open-source projects and mentoring aspiring developers.
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

export default About;
