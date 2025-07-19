import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const CtaSection = () => {
  const { toast } = useToast();

  return (
    <section className="mt-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gray-900 rounded-2xl p-8 md:p-12 text-center text-white"
      >
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          Whether you need a complete web application, cybersecurity consultation, 
          or educational platform development, I'm here to help make it happen.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium">
            Start a Project
          </Button>
          <Button 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-medium"
            onClick={() => toast({
              title: "Schedule Call",
              description: "🚧 Call scheduling isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
            })}
          >
            Schedule a Call
          </Button>
        </div>
      </motion.div>
    </section>
  );
};

export default CtaSection;