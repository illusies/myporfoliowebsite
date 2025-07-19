
import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Clock } from 'lucide-react';
import { contactInfoData, socialLinksData, servicesData } from '@/data/contactData';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';
import SocialLinks from '@/components/contact/SocialLinks';
import ServicesSection from '@/components/contact/ServicesSection';
import CtaSection from '@/components/contact/CtaSection';

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Me - John McDove</title>
        <meta name="description" content="Get in touch with John McDove for web development projects, cybersecurity consulting, or collaboration opportunities. Available for freelance and full-time work." />
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
              Let's Work Together
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to bring your ideas to life? I'm available for new projects and collaborations. 
              Let's discuss how we can create something amazing together.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
            <div className="space-y-8">
              <ContactInfo contactInfoData={contactInfoData} />
              <SocialLinks socialLinksData={socialLinksData} />
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-card rounded-xl p-6 border border-border"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-bold text-foreground">Response Time</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  I typically respond to all inquiries within 24 hours. For urgent projects, 
                  please mention it in your message subject line.
                </p>
              </motion.div>
            </div>
          </div>

          <ServicesSection servicesData={servicesData} />
          <CtaSection />
        </div>
      </div>
    </>
  );
};

export default Contact;
