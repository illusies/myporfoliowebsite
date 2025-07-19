import React from 'react';
import { motion } from 'framer-motion';

const ContactInfo = ({ contactInfoData }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="bg-white rounded-xl shadow-lg border border-gray-200 p-6"
    >
      <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>
      
      <div className="space-y-4">
        {contactInfoData.map((info) => (
          <div key={info.label} className="flex items-center gap-4">
            <div className="p-3 bg-gray-100 rounded-lg">
              <info.icon className="h-5 w-5 text-gray-700" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">{info.label}</p>
              {info.href ? (
                <a
                  href={info.href}
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {info.value}
                </a>
              ) : (
                <p className="text-sm text-gray-600">{info.value}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default ContactInfo;