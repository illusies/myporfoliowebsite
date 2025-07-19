import React from 'react';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';

const SocialLinks = ({ socialLinksData }) => {
  const { toast } = useToast();

  const handleSocialClick = (platform) => {
    toast({
      title: `${platform} Profile`,
      description: `🚧 ${platform} integration isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀`
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="bg-white rounded-xl shadow-lg border border-gray-200 p-6"
    >
      <h3 className="text-xl font-bold text-gray-900 mb-6">Connect With Me</h3>
      
      <div className="space-y-3">
        {socialLinksData.map((social) => (
          <button
            key={social.label}
            onClick={() => handleSocialClick(social.label)}
            className="w-full flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors text-left"
          >
            <div className="p-2 bg-gray-100 rounded-lg">
              <social.icon className="h-5 w-5 text-gray-700" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">{social.label}</p>
              <p className="text-sm text-gray-600">{social.username}</p>
            </div>
          </button>
        ))}
      </div>
    </motion.div>
  );
};

export default SocialLinks;