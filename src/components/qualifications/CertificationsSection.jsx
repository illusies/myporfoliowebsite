import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { ExternalLink, Download } from 'lucide-react';

const CertificationsSection = ({ certificationsData }) => {
  const { toast } = useToast();

  const handleDownloadCertificate = (certTitle) => {
    toast({
      title: "Certificate Download",
      description: `🚧 ${certTitle} certificate download isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀`
    });
  };

  const handleViewCredential = (certTitle) => {
    toast({
      title: "View Credential",
      description: `🚧 ${certTitle} credential verification isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀`
    });
  };

  return (
    <section className="mb-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Professional Certifications</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Project-based certifications and demonstrated expertise across various technologies and domains.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificationsData.map((cert, index) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover-glow"
          >
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div className="text-3xl">{cert.badge}</div>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                  {cert.type}
                </span>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{cert.title}</h3>
                <p className="text-sm text-gray-600 font-medium">{cert.issuer}</p>
                <p className="text-xs text-gray-500">{cert.date}</p>
              </div>
              
              <p className="text-sm text-gray-600 leading-relaxed">{cert.description}</p>
              
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleViewCredential(cert.title)}
                  className="flex items-center gap-2 text-xs"
                >
                  <ExternalLink className="h-3 w-3" />
                  View
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleDownloadCertificate(cert.title)}
                  className="flex items-center gap-2 text-xs"
                >
                  <Download className="h-3 w-3" />
                  Download
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CertificationsSection;