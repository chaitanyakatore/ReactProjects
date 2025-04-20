import { motion } from 'framer-motion';
import { TrophyIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline';

const About = () => {
  const stats = [
    { number: '100+', label: 'Projects Delivered' },
    { number: '5+', label: 'Years Experience' },
    { number: '50+', label: 'Happy Clients' },
  ];

  const highlights = [
    {
      icon: TrophyIcon,
      title: 'Hackathon Winners',
      description: 'Our team has won multiple prestigious hackathons, showcasing our innovative problem-solving skills.',
    },
    {
      icon: BuildingOfficeIcon,
      title: 'Top Tech Experience',
      description: 'Our developers have worked with leading tech companies, bringing industry best practices to every project.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">About Us</h2>
          <p className="section-subtitle">
            We're a team of hackathon winners and developers from top tech companies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="flex items-start">
                <div className="p-3 bg-primary/10 rounded-lg mr-4">
                  <highlight.icon className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600">{highlight.description}</p>
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
            Work With Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 