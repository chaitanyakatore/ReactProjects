import { motion, useAnimation } from 'framer-motion';
import { CodeBracketIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

const ServiceCard = ({ service, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  const handleHoverStart = () => {
    setIsHovered(true);
    controls.start({
      y: -10,
      transition: { duration: 0.3 },
    });
  };

  const handleHoverEnd = () => {
    setIsHovered(false);
    controls.start({
      y: 0,
      transition: { duration: 0.3 },
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      animate={controls}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      className="relative bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl transform transition-transform duration-300" 
        style={{
          transform: isHovered ? 'scale(1.02)' : 'scale(1)',
        }}
      />
      
      <div className="relative z-10">
        <div className="flex items-center mb-6">
          <div className="p-3 bg-primary/10 rounded-lg mr-4">
            <service.icon className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
        </div>
        
        <p className="text-gray-600 mb-6">{service.description}</p>
        
        <ul className="space-y-3">
          {service.features.map((feature, idx) => (
            <motion.li
              key={feature}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * idx }}
              className="flex items-center text-gray-700"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 * idx }}
                className="mr-2"
              >
                <svg
                  className="h-5 w-5 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </motion.div>
              {feature}
            </motion.li>
          ))}
        </ul>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 w-full py-3 px-6 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
        >
          Learn More
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
            animate={{ x: isHovered ? 5 : 0 }}
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </motion.svg>
        </motion.button>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const services = [
    {
      title: 'For Students',
      icon: CodeBracketIcon,
      description: 'Complete final-year projects with comprehensive documentation and presentations',
      features: [
        'Source code development',
        'Detailed documentation',
        'Professional presentations',
        'Project deployment support',
        'Technical guidance',
      ],
    },
    {
      title: 'For Startups',
      icon: RocketLaunchIcon,
      description: 'End-to-end MVP development with professional deliverables',
      features: [
        'Product Requirements Document',
        'Figma designs',
        'Database schema',
        'Fully functional product',
        'Deployment and hosting',
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 relative overflow-hidden">
      <motion.div
        className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-6 py-2 bg-primary/10 rounded-full text-primary font-medium mb-6"
          >
            Our Services
          </motion.div>
          <h2 className="section-title">What We Offer</h2>
          <p className="section-subtitle">
            Comprehensive solutions tailored for students and startups
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 