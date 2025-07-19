import React from 'react';
import { motion } from 'framer-motion';

const ServicesSection = ({ servicesData }) => {
  return (
    <section className="mt-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-4">How I Can Help</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          I offer a range of services to help bring your digital projects to life.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {servicesData.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover-glow text-center"
          >
            <div className="text-3xl mb-4">{service.icon}</div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">{service.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;