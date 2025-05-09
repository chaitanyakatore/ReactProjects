import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

const Portfolio = () => {
  // Sample project data - replace with your actual projects
  const allProjects = [
    {
      id: 1,
      title: "E-Commerce MVP",
      category: "Startup",
      image: "/api/placeholder/600/400",
      description:
        "A complete e-commerce platform with inventory management and payment integration.",
      tags: ["React", "Node.js", "MongoDB"],
      link: "#",
      codeLink: "#",
    },
    {
      id: 2,
      title: "Healthcare Dashboard",
      category: "Enterprise",
      image: "/api/placeholder/600/400",
      description:
        "Patient management system with analytics and reporting features.",
      tags: ["Vue.js", "Express", "PostgreSQL"],
      link: "#",
      codeLink: "#",
    },
    {
      id: 3,
      title: "Finance Tracker",
      category: "SaaS",
      image: "/api/placeholder/600/400",
      description:
        "Personal finance application with budget tracking and investment insights.",
      tags: ["React", "Firebase", "Tailwind"],
      link: "#",
      codeLink: "#",
    },
    {
      id: 4,
      title: "Real Estate Platform",
      category: "Startup",
      image: "/api/placeholder/600/400",
      description:
        "Rental and property management solution with virtual tours.",
      tags: ["Next.js", "Node.js", "MongoDB"],
      link: "#",
      codeLink: "#",
    },
    {
      id: 5,
      title: "Learning Management System",
      category: "Education",
      image: "/api/placeholder/600/400",
      description: "Online course platform with integrated assessment tools.",
      tags: ["React", "Express", "MySQL"],
      link: "#",
      codeLink: "#",
    },
    {
      id: 6,
      title: "Fitness Tracker",
      category: "Mobile",
      image: "/api/placeholder/600/400",
      description:
        "Workout and nutrition tracking app with progress visualization.",
      tags: ["React Native", "GraphQL", "MongoDB"],
      link: "#",
      codeLink: "#",
    },
  ];

  const categories = [
    "All",
    ...new Set(allProjects.map((project) => project.category)),
  ];

  const [projects, setProjects] = useState(allProjects);
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [isLoading, setIsLoading] = useState(false);

  // Filter projects by category
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      if (activeCategory === "All") {
        setProjects(allProjects);
      } else {
        setProjects(
          allProjects.filter((project) => project.category === activeCategory)
        );
      }
      setVisibleProjects(6);
      setIsLoading(false);
    }, 500);
  }, [activeCategory]);

  // Load more projects
  const loadMore = () => {
    setVisibleProjects((prev) => prev + 3);
  };

  return (
    <section
      id="portfolio"
      className="py-24 bg-gradient-to-b from-white to-indigo-50 relative overflow-hidden"
    >
      {/* Background elements */}
      <motion.div
        className="absolute top-32 right-0 w-96 h-96 bg-indigo-200 rounded-full blur-3xl opacity-20"
        animate={{
          y: [0, 50, 0],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-200 rounded-full blur-3xl opacity-20"
        animate={{
          y: [0, 40, 0],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-10"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
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
            OUR WORK
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Featured Projects
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            We specialize in building MVPs and full-scale applications for
            startups and enterprises. Our expertise spans across various
            industries and technologies.
          </motion.p>
        </div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading
            ? // Loading skeleton
              [...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl overflow-hidden shadow-lg h-96 animate-pulse"
                >
                  <div className="h-48 bg-gray-200"></div>
                  <div className="p-6">
                    <div className="h-5 bg-gray-200 rounded w-1/2 mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                  </div>
                </div>
              ))
            : projects.slice(0, visibleProjects).map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg group"
                >
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 w-full flex justify-between items-center">
                        <span className="text-white text-sm font-medium">
                          {project.category}
                        </span>
                        <div className="flex gap-2">
                          <a
                            href={project.codeLink}
                            className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 transition-colors"
                          >
                            <CodeBracketIcon className="w-4 h-4 text-white" />
                          </a>
                          <a
                            href={project.link}
                            className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 transition-colors"
                          >
                            <ArrowTopRightOnSquareIcon className="w-4 h-4 text-white" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
        </div>

        {/* Load more button */}
        {!isLoading && visibleProjects < projects.length && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <button
              onClick={loadMore}
              className="px-8 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors flex items-center gap-2 mx-auto"
            >
              Load More
              <ChevronDownIcon className="w-4 h-4" />
            </button>
          </motion.div>
        )}

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-24 bg-white rounded-2xl shadow-xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <h3 className="text-4xl font-bold text-indigo-600 mb-2">50+</h3>
            <p className="text-gray-600">Projects Completed</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-indigo-600 mb-2">30+</h3>
            <p className="text-gray-600">Happy Clients</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-indigo-600 mb-2">5+</h3>
            <p className="text-gray-600">Years Experience</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-indigo-600 mb-2">12</h3>
            <p className="text-gray-600">Team Members</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
