import { useState } from "react";
import { motion } from "framer-motion";
import {
  TrophyIcon,
  BuildingOfficeIcon,
  CodeBracketIcon,
  UserGroupIcon,
  AcademicCapIcon,
  LightBulbIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/outline";

const About = () => {
  const [activeTab, setActiveTab] = useState("story");

  const stats = [
    {
      id: 1,
      number: "100+",
      label: "Projects Delivered",
      icon: CodeBracketIcon,
    },
    { id: 2, number: "5+", label: "Years Experience", icon: TrophyIcon },
    { id: 3, number: "50+", label: "Happy Clients", icon: UserGroupIcon },
    { id: 4, number: "24/7", label: "Support", icon: BriefcaseIcon },
  ];

  const highlights = [
    {
      icon: TrophyIcon,
      title: "Hackathon Winners",
      description:
        "Our team has won multiple prestigious hackathons, showcasing our innovative problem-solving skills.",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: BuildingOfficeIcon,
      title: "Top Tech Experience",
      description:
        "Our developers have worked with leading tech companies, bringing industry best practices to every project.",
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: LightBulbIcon,
      title: "Innovative Solutions",
      description:
        "We specialize in transforming complex ideas into user-friendly MVPs with scalable architectures.",
      color: "from-indigo-500 to-blue-500",
    },
    {
      icon: AcademicCapIcon,
      title: "Continuous Learning",
      description:
        "Our team stays at the cutting edge through constant skill development and certification programs.",
      color: "from-blue-500 to-indigo-500",
    },
  ];

  const tabContent = {
    story: {
      title: "Our Story",
      content: (
        <>
          <p className="mb-4">
            Founded in 2019, our agency grew from a small team of passionate
            developers to a full-service digital product development company. We
            started with a simple mission: to help startups and enterprises
            transform their ideas into impactful digital products.
          </p>
          <p>
            Today, we've successfully delivered over 100 projects across various
            industries, from fintech to healthcare, e-commerce to education. Our
            approach combines technical excellence with strategic thinking,
            ensuring every product we build drives real business results.
          </p>
        </>
      ),
    },
    approach: {
      title: "Our Approach",
      content: (
        <>
          <p className="mb-4">
            We follow a collaborative and iterative development process that
            puts your business goals first:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>
              <span className="font-medium">Discovery:</span> Understanding your
              vision, users, and market
            </li>
            <li>
              <span className="font-medium">Strategy:</span> Defining the
              minimum viable product and technology stack
            </li>
            <li>
              <span className="font-medium">Design:</span> Creating intuitive
              user experiences and interfaces
            </li>
            <li>
              <span className="font-medium">Development:</span> Building
              scalable and maintainable products
            </li>
            <li>
              <span className="font-medium">Launch:</span> Deploying and
              optimizing for performance
            </li>
          </ul>
        </>
      ),
    },
    team: {
      title: "Our Team",
      content: (
        <>
          <p className="mb-4">
            Our diverse team brings together specialists across frontend,
            backend, mobile, and UI/UX design. Many of our developers have
            previously worked at leading tech companies, bringing
            enterprise-grade expertise to every project we undertake.
          </p>
          <p>
            We value continuous learning, collaboration, and technical
            excellence. Every team member undergoes regular training to stay
            current with the latest technologies and best practices in software
            development.
          </p>
        </>
      ),
    },
  };

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-indigo-50 to-white relative overflow-hidden"
    >
      {/* Background elements */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-20"
        animate={{
          y: [0, -50, 0],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-24 left-0 w-72 h-72 bg-indigo-200 rounded-full blur-3xl opacity-20"
        animate={{
          y: [0, 40, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-indigo-600 font-semibold mb-2"
          >
            WHO WE ARE
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            About Our Agency
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            We specialize in turning innovative ideas into market-ready MVPs and
            scalable applications that solve real business problems.
          </motion.p>
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center"
            >
              <div className="mx-auto mb-4 w-12 h-12 flex items-center justify-center bg-indigo-100 rounded-full text-indigo-600">
                <stat.icon className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-bold text-indigo-600 mb-1">
                {stat.number}
              </h3>
              <p className="text-gray-600 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Tab section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden mb-20"
        >
          <div className="flex border-b border-gray-200">
            {Object.keys(tabContent).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-4 px-6 font-medium transition-colors duration-300 ${
                  activeTab === tab
                    ? "text-indigo-600 border-b-2 border-indigo-600"
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >
                {tabContent[tab].title}
              </button>
            ))}
          </div>
          <div className="p-8 md:p-10">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-gray-700"
            >
              {tabContent[activeTab].content}
            </motion.div>
          </div>
        </motion.div>

        {/* Highlights grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg group"
            >
              <div className={`h-2 bg-gradient-to-r ${highlight.color}`}></div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mb-4 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                  <highlight.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {highlight.title}
                </h3>
                <p className="text-gray-600">{highlight.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to build your next big idea?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Partner with us to transform your vision into a market-ready MVP or
            scale your existing product.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-indigo-600 text-white font-medium rounded-full hover:bg-indigo-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
