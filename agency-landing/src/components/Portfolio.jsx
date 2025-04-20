import { motion } from 'framer-motion';

const Portfolio = () => {
  const projects = [
    {
      title: 'E-Commerce MVP',
      category: 'Startup',
      image: '/portfolio/ecommerce.jpg',
      description: 'A complete e-commerce platform with inventory management and payment integration.',
    },
    {
      title: 'AI-Based Student Project',
      category: 'Student',
      image: '/portfolio/ai-project.jpg',
      description: 'Machine learning project for automated image classification and analysis.',
    },
    {
      title: 'Healthcare App',
      category: 'Startup',
      image: '/portfolio/healthcare.jpg',
      description: 'Mobile app for patient management and appointment scheduling.',
    },
    {
      title: 'Smart Home System',
      category: 'Student',
      image: '/portfolio/smart-home.jpg',
      description: 'IoT-based home automation system with mobile control.',
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Our Portfolio</h2>
          <p className="section-subtitle">
            Explore our recent projects and see what we can do for you
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl shadow-lg"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block px-3 py-1 text-sm font-medium text-white bg-primary/80 rounded-full mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-200">{project.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a href="#contact" className="btn-primary">
            Start Your Project
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio; 