
import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { educationData, certificationsData, skillsMatrixData, achievementsData } from '@/data/qualificationsData';
import EducationSection from '@/components/qualifications/EducationSection';
import CertificationsSection from '@/components/qualifications/CertificationsSection';
import SkillsMatrixSection from '@/components/qualifications/SkillsMatrixSection';
import AchievementsSection from '@/components/qualifications/AchievementsSection';

const Qualifications = () => {
  return (
    <>
      <Helmet>
        <title>Qualifications & Certifications - John McDove</title>
        <meta name="description" content="Explore John McDove's educational background, professional certifications, technical qualifications, and achievements in full-stack development and cybersecurity." />
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
              Qualifications & Certifications
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A comprehensive overview of my educational background, professional certifications, 
              and technical qualifications in web development and cybersecurity.
            </p>
          </motion.div>

          <EducationSection educationData={educationData} />
          <CertificationsSection certificationsData={certificationsData} />
          <SkillsMatrixSection skillsMatrixData={skillsMatrixData} />
          <AchievementsSection achievementsData={achievementsData} />
        </div>
      </div>
    </>
  );
};

export default Qualifications;
