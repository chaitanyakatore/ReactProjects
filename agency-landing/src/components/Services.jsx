import { motion, useAnimation, AnimatePresence } from "framer-motion";
import {
  CodeBracketIcon,
  RocketLaunchIcon,
  AcademicCapIcon,
  LightBulbIcon,
  PresentationChartLineIcon,
  ServerStackIcon,
  SparklesIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";

// Animated particles background
const ParticlesBackground = () => {
  const particleCount = 30;
  const particles = Array.from({ length: particleCount });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((_, i) => {
        const size = Math.random() * 6 + 2;
        const initialX = Math.random() * 100;
        const initialY = Math.random() * 100;

        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-indigo-400 opacity-20"
            style={{
              width: size,
              height: size,
              left: `${initialX}%`,
              top: `${initialY}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 15 + 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        );
      })}
    </div>
  );
};

const ServiceCard = ({ service, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();
  const iconControls = useAnimation();

  const handleHoverStart = () => {
    setIsHovered(true);
    controls.start({
      y: -12,
      scale: 1.03,
      transition: { duration: 0.4, type: "spring", stiffness: 300 },
    });
    iconControls.start({
      rotate: [0, 10, -10, 0],
      scale: [1, 1.1, 1],
      transition: { duration: 0.6 },
    });
  };

  const handleHoverEnd = () => {
    setIsHovered(false);
    controls.start({
      y: 0,
      scale: 1,
      transition: { duration: 0.3, type: "spring", stiffness: 300 },
    });
  };

  // Background colors for different service types
  const getBgGradient = (index) => {
    const gradients = [
      "from-indigo-50 to-purple-50",
      "from-cyan-50 to-blue-50",
      "from-fuchsia-50 to-pink-50",
      "from-amber-50 to-yellow-50",
    ];
    return gradients[index % gradients.length];
  };

  // Icon background colors
  const getIconBg = (index) => {
    const backgrounds = [
      "from-indigo-100 to-purple-100",
      "from-cyan-100 to-blue-100",
      "from-fuchsia-100 to-pink-100",
      "from-amber-100 to-yellow-100",
    ];
    return backgrounds[index % backgrounds.length];
  };

  // Button gradient colors
  const getButtonGradient = (index) => {
    const gradients = [
      "from-indigo-500 to-purple-600",
      "from-cyan-500 to-blue-600",
      "from-fuchsia-500 to-pink-600",
      "from-amber-500 to-yellow-600",
    ];
    return gradients[index % gradients.length];
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      viewport={{ once: true, margin: "-100px" }}
      animate={controls}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 overflow-hidden group`}
    >
      {/* 3D perspective wrapper */}
      <div
        className="absolute inset-0 bg-gradient-to-br opacity-80 z-0"
        style={{
          background: `radial-gradient(circle at center, white 0%, #f5f3ff 100%)`,
        }}
      ></div>

      {/* Animated glowing dots */}
      <div className="absolute -top-10 -right-10 w-20 h-20 bg-indigo-500 rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
      <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-purple-500 rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity"></div>

      {/* Beautiful glass-effect border */}
      <motion.div
        className="absolute inset-0 border-2 border-transparent rounded-2xl pointer-events-none"
        animate={{
          boxShadow: isHovered
            ? [
                "0 0 0 rgba(99, 102, 241, 0)",
                "0 0 20px rgba(99, 102, 241, 0.2)",
                "0 0 0 rgba(99, 102, 241, 0)",
              ]
            : "0 0 0 rgba(99, 102, 241, 0)",
          borderColor: isHovered
            ? [
                "rgba(99, 102, 241, 0)",
                "rgba(99, 102, 241, 0.3)",
                "rgba(99, 102, 241, 0)",
              ]
            : "rgba(99, 102, 241, 0)",
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      <div className="relative z-10">
        <div className="flex items-start mb-6">
          <motion.div
            className={`p-4 bg-gradient-to-br ${getIconBg(
              index
            )} rounded-2xl mr-4 shadow-sm`}
            animate={iconControls}
            whileHover={{
              boxShadow: "0 0 15px rgba(99, 102, 241, 0.3)",
            }}
          >
            <service.icon className="h-8 w-8 text-indigo-600" />
          </motion.div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
              {service.title}
            </h3>
            <p className="text-indigo-600 font-medium">{service.subtitle}</p>
          </div>
        </div>

        <p className="text-gray-600 mb-6 leading-relaxed">
          {service.description}
        </p>

        <div className="mb-8">
          <div className="flex items-center mb-3">
            <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
              Key Features
            </h4>
            <div className="ml-2 h-px bg-gradient-to-r from-indigo-200 to-transparent flex-grow"></div>
          </div>
          <ul className="space-y-3">
            {service.features.map((feature, idx) => (
              <motion.li
                key={feature}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * idx + 0.2 }}
                viewport={{ once: true }}
                className="flex items-start text-gray-700"
              >
                <div className="mr-3 mt-0.5 flex-shrink-0">
                  <svg
                    className={`h-5 w-5 text-indigo-500`}
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
                </div>
                <span className="group-hover:text-gray-900 transition-colors">
                  {feature}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.a
          href="#contact"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.4)",
          }}
          whileTap={{ scale: 0.98 }}
          className={`inline-block w-full py-3 px-6 bg-gradient-to-r ${getButtonGradient(
            index
          )} text-white rounded-xl font-medium transition-all flex items-center justify-center gap-2 group relative overflow-hidden`}
        >
          {/* Background shine effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="absolute inset-0 translate-x-full group-hover:translate-x-[-180%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          </div>

          <span className="relative z-10">Get Started</span>
          <motion.div
            animate={{
              x: isHovered ? 5 : 0,
            }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative z-10"
          >
            <ArrowRightIcon className="h-5 w-5" />
          </motion.div>
        </motion.a>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const [activeTab, setActiveTab] = useState("all");

  const services = [
    {
      title: "Student Projects",
      subtitle: "Academic Excellence",
      icon: AcademicCapIcon,
      category: "education",
      description:
        "We help students complete their final-year projects with comprehensive documentation, presentations, and deployment support to ensure academic success.",
      features: [
        "Complete source code development",
        "Detailed technical documentation",
        "Professional presentation design",
        "Project deployment assistance",
        "1-on-1 technical guidance",
        "Plagiarism-free solutions",
      ],
    },
    {
      title: "Startup MVPs",
      subtitle: "From Idea to Market",
      icon: RocketLaunchIcon,
      category: "startup",
      description:
        "Transform your startup idea into a fully functional MVP with all the professional deliverables you need to attract investors and early adopters.",
      features: [
        "Product Requirements Document",
        "High-quality Figma designs",
        "Optimized database schema",
        "Fully functional web/mobile app",
        "Cloud deployment & hosting",
        "Technical documentation",
      ],
    },
    {
      title: "Web Development",
      subtitle: "Modern & Scalable",
      icon: CodeBracketIcon,
      category: "development",
      description:
        "Custom web applications built with modern technologies that scale with your business needs and user growth.",
      features: [
        "React/Next.js frontends",
        "Node.js/Express backends",
        "Responsive mobile-first design",
        "API integration",
        "Performance optimization",
        "Ongoing maintenance",
      ],
    },
    {
      title: "UI/UX Design",
      subtitle: "Beautiful & Functional",
      icon: LightBulbIcon,
      category: "design",
      description:
        "User-centered designs that combine aesthetics with functionality to create seamless user experiences.",
      features: [
        "User research & personas",
        "Wireframing & prototyping",
        "UI design systems",
        "Interactive prototypes",
        "Usability testing",
        "Design-to-code handoff",
      ],
    },
    {
      title: "Cloud Solutions",
      subtitle: "Scalable & Secure",
      icon: ServerStackIcon,
      category: "development",
      description:
        "Enterprise-grade cloud infrastructure and deployment solutions that ensure your applications run smoothly and securely.",
      features: [
        "AWS/Azure/GCP deployment",
        "Kubernetes orchestration",
        "Serverless architecture",
        "CI/CD pipeline setup",
        "Cost optimization",
        "24/7 monitoring & alerts",
      ],
    },
    {
      title: "Data Analytics",
      subtitle: "Insights & Intelligence",
      icon: PresentationChartLineIcon,
      category: "data",
      description:
        "Transform your raw data into actionable insights with our comprehensive data analytics and visualization solutions.",
      features: [
        "Data pipeline development",
        "Custom dashboards",
        "Business intelligence",
        "Predictive analytics",
        "ML model integration",
        "Data-driven decision support",
      ],
    },
  ];

  const filteredServices =
    activeTab === "all"
      ? services
      : services.filter((service) => service.category === activeTab);

  // Animated gradient text for heading
  const GradientText = ({ children, className }) => {
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setRotation((prev) => (prev + 1) % 360);
      }, 50);

      return () => clearInterval(interval);
    }, []);

    return (
      <h2
        className={`text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent ${className}`}
        style={{
          backgroundImage: `linear-gradient(${rotation}deg, #4f46e5, #7c3aed, #d946ef, #4f46e5)`,
          backgroundSize: "200% 200%",
        }}
      >
        {children}
      </h2>
    );
  };

  // Tab interface for filtering services
  const tabs = [
    { id: "all", label: "All Services" },
    { id: "education", label: "Education" },
    { id: "startup", label: "Startups" },
    { id: "development", label: "Development" },
    { id: "design", label: "Design" },
    { id: "data", label: "Data" },
  ];

  return (
    <section
      id="services"
      className="py-24 relative overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 20% 20%, rgba(224, 231, 255, 0.4) 0%, rgba(255, 255, 255, 0) 25%),
          radial-gradient(circle at 80% 80%, rgba(239, 246, 255, 0.4) 0%, rgba(255, 255, 255, 0) 25%),
          linear-gradient(to bottom, #f5f3ff 0%, white 100%)
        `,
      }}
    >
      {/* Animated particles */}
      <ParticlesBackground />

      {/* Floating gradient blobs */}
      <motion.div
        className="absolute top-20 left-1/4 w-64 h-64 bg-purple-200 rounded-full blur-3xl opacity-20"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-10 right-1/4 w-80 h-80 bg-indigo-200 rounded-full blur-3xl opacity-20"
        animate={{
          x: [0, -40, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 right-10 w-56 h-56 bg-blue-200 rounded-full blur-3xl opacity-20"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-6 py-2 bg-indigo-100/70 backdrop-blur-sm rounded-full text-indigo-600 font-medium mb-6 border border-indigo-200/50"
          >
            <motion.div
              animate={{
                rotate: [0, 180, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="mr-2"
            >
              <SparklesIcon className="h-5 w-5 text-indigo-500" />
            </motion.div>
            Premium Services
          </motion.div>

          <GradientText>Solutions Tailored for You</GradientText>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Whether you're a student needing project help or a startup building
            your MVP, we've got you covered with end-to-end solutions that
            elevate your work.
          </motion.p>

          {/* Service tabs */}
          <div className="flex flex-wrap justify-center mt-10 mb-6 gap-2">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? "bg-indigo-600 text-white shadow-md"
                    : "bg-white text-gray-600 hover:bg-indigo-50 border border-gray-200"
                }`}
              >
                {tab.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredServices.map((service, index) => (
              <ServiceCard
                key={service.title}
                service={service}
                index={index}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Enhanced CTA with 3D effects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 text-center bg-gradient-to-r from-indigo-50 to-purple-50 p-12 rounded-3xl relative overflow-hidden shadow-lg"
        >
          {/* Background glow */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-indigo-300 rounded-full blur-3xl opacity-20"
              animate={{
                y: [0, 10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Don't see exactly what you need?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Our team of experts is ready to build a custom solution tailored
              to your unique requirements.
            </p>
            <motion.a
              href="#contact"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 30px -10px rgba(79, 70, 229, 0.3)",
              }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-medium shadow-lg transition-all relative overflow-hidden group"
            >
              {/* Button shine effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute inset-0 translate-x-full group-hover:translate-x-[-180%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              </div>

              <RocketLaunchIcon className="h-6 w-6 mr-2" />
              <span className="relative z-10">
                Let's Build Something Amazing
              </span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
