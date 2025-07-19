import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const AdditionalExpertise = () => {
  const { toast } = useToast();

  return (
    <section className="mt-20 bg-gray-50 rounded-2xl p-8 md:p-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Additional Expertise</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Beyond these featured projects, I also specialize in security awareness training 
          and Jamaica travel guide services.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-3">🔐 Security Awareness Training</h3>
            <p className="text-gray-600 mb-4">
              Comprehensive cybersecurity training programs for businesses and individuals, 
              covering best practices, threat awareness, and security protocols.
            </p>
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => toast({
                title: "Security Training",
                description: "🚧 Security training resources aren't implemented yet—but don't worry! You can request them in your next prompt! 🚀"
              })}
            >
              Learn More
            </Button>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-3">🇯🇲 Jamaica Travel Guide</h3>
            <p className="text-gray-600 mb-4">
              Personalized travel planning and cultural discovery services for Jamaica, 
              featuring authentic experiences and local insights.
            </p>
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => toast({
                title: "Travel Guide",
                description: "🚧 Travel guide services aren't implemented yet—but don't worry! You can request them in your next prompt! 🚀"
              })}
            >
              Explore Jamaica
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AdditionalExpertise;