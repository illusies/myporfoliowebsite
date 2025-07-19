import React from 'react';
import { motion } from 'framer-motion';

const AchievementsSection = ({ achievementsData }) => {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Achievements</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Notable accomplishments and milestones in my development career.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {achievementsData.map((achievement, index) => (
          <motion.div
            key={achievement.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover-glow"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gray-900 rounded-lg">
                <achievement.icon className="h-6 w-6 text-white" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-bold text-gray-900">{achievement.title}</h3>
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded">
                    {achievement.year}
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AchievementsSection;