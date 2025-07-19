import React from 'react';
import { motion } from 'framer-motion';

const SkillsMatrixSection = ({ skillsMatrixData }) => {
  return (
    <section className="mb-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Technical Competencies</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Comprehensive skill set across multiple domains and technologies.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillsMatrixData.map((skillGroup, index) => (
          <motion.div
            key={skillGroup.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover-glow"
          >
            <h3 className="text-lg font-bold text-gray-900 mb-4">{skillGroup.category}</h3>
            <div className="space-y-2">
              {skillGroup.items.map((skill, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                  <span className="text-sm text-gray-600">{skill}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsMatrixSection;