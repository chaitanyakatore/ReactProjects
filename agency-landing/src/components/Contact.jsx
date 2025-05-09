import { motion } from "framer-motion";
import { useState } from "react";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  CheckCircleIcon,
  XCircleIcon,
  ArrowPathIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [focusedField, setFocusedField] = useState(null);

  const projectTypes = [
    { value: "mvp", label: "MVP Development" },
    { value: "webapp", label: "Web Application" },
    { value: "mobile", label: "Mobile App" },
    { value: "ecommerce", label: "E-Commerce Solution" },
    { value: "design", label: "UI/UX Design" },
    { value: "other", label: "Other" },
  ];

  const budgetRanges = [
    { value: "less5k", label: "Less than $5K" },
    { value: "5k-10k", label: "$5K - $10K" },
    { value: "10k-25k", label: "$10K - $25K" },
    { value: "25k-50k", label: "$25K - $50K" },
    { value: "more50k", label: "More than $50K" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        projectType: "",
        budget: "",
        message: "",
      });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFocus = (field) => {
    setFocusedField(field);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-white to-indigo-50 relative overflow-hidden"
    >
      {/* Background elements */}
      <motion.div
        className="absolute top-40 right-0 w-96 h-96 bg-indigo-200 rounded-full blur-3xl opacity-20"
        animate={{
          y: [0, -40, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-0 left-0 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-20"
        animate={{
          y: [0, 30, 0],
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
            LET'S TALK
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Get in Touch
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Have a project in mind? Let's discuss how we can help you transform
            your idea into reality.
          </motion.p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-5">
              {/* Contact Information Section */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="md:col-span-2 bg-gradient-to-br from-indigo-600 to-purple-600 text-white p-8 md:p-12"
              >
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-6">
                      Contact Information
                    </h3>
                    <p className="mb-12 opacity-90">
                      Fill out the form and our team will get back to you within
                      24 hours.
                    </p>

                    <div className="space-y-6">
                      <div className="flex items-start">
                        <div className="p-2 bg-white/10 rounded-lg mr-4">
                          <EnvelopeIcon className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-medium opacity-90 text-sm">
                            Email
                          </h4>
                          <a
                            href="mailto:contact@youragency.com"
                            className="hover:underline"
                          >
                            contact@youragency.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="p-2 bg-white/10 rounded-lg mr-4">
                          <PhoneIcon className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-medium opacity-90 text-sm">
                            Phone
                          </h4>
                          <a href="tel:+1234567890" className="hover:underline">
                            +1 (234) 567-890
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="p-2 bg-white/10 rounded-lg mr-4">
                          <MapPinIcon className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-medium opacity-90 text-sm">
                            Location
                          </h4>
                          <p>San Francisco, CA</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12">
                    <h4 className="font-medium mb-4">Connect With Us</h4>
                    <div className="flex space-x-4">
                      <a
                        href="#"
                        className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                        aria-label="LinkedIn"
                      >
                        <FaLinkedin className="h-5 w-5" />
                      </a>
                      <a
                        href="#"
                        className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                        aria-label="Twitter"
                      >
                        <FaTwitter className="h-5 w-5" />
                      </a>
                      <a
                        href="#"
                        className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                        aria-label="GitHub"
                      >
                        <FaGithub className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Form Section */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="md:col-span-3 p-8 md:p-12"
              >
                {submitStatus === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                      <CheckCircleIcon className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Thank You!
                    </h3>
                    <p className="text-gray-600 mb-8">
                      Your message has been received. We'll get back to you
                      shortly.
                    </p>
                    <button
                      onClick={() => setSubmitStatus(null)}
                      className="px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : submitStatus === "error" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center"
                  >
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                      <XCircleIcon className="w-8 h-8 text-red-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Something Went Wrong
                    </h3>
                    <p className="text-gray-600 mb-8">
                      There was an error sending your message. Please try again.
                    </p>
                    <button
                      onClick={() => setSubmitStatus(null)}
                      className="px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors"
                    >
                      Try Again
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <div
                          className={`relative ${
                            focusedField === "name"
                              ? "ring-2 ring-indigo-300 rounded-lg"
                              : ""
                          }`}
                        >
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            onFocus={() => handleFocus("name")}
                            onBlur={handleBlur}
                            required
                            placeholder="John Doe"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                          />
                          <motion.span
                            initial={{ width: "0%" }}
                            animate={{
                              width: focusedField === "name" ? "100%" : "0%",
                            }}
                            transition={{ duration: 0.3 }}
                            className="absolute bottom-0 left-0 h-0.5 bg-indigo-600 rounded-full"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <div
                          className={`relative ${
                            focusedField === "email"
                              ? "ring-2 ring-indigo-300 rounded-lg"
                              : ""
                          }`}
                        >
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            onFocus={() => handleFocus("email")}
                            onBlur={handleBlur}
                            required
                            placeholder="john@example.com"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                          />
                          <motion.span
                            initial={{ width: "0%" }}
                            animate={{
                              width: focusedField === "email" ? "100%" : "0%",
                            }}
                            transition={{ duration: 0.3 }}
                            className="absolute bottom-0 left-0 h-0.5 bg-indigo-600 rounded-full"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="projectType"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Project Type <span className="text-red-500">*</span>
                        </label>
                        <div
                          className={`relative ${
                            focusedField === "projectType"
                              ? "ring-2 ring-indigo-300 rounded-lg"
                              : ""
                          }`}
                        >
                          <select
                            id="projectType"
                            name="projectType"
                            value={formData.projectType}
                            onChange={handleChange}
                            onFocus={() => handleFocus("projectType")}
                            onBlur={handleBlur}
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 appearance-none bg-white"
                          >
                            <option value="">Select project type</option>
                            {projectTypes.map((type) => (
                              <option key={type.value} value={type.value}>
                                {type.label}
                              </option>
                            ))}
                          </select>
                          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <ChevronDownIcon className="h-5 w-5 text-gray-400" />
                          </div>
                          <motion.span
                            initial={{ width: "0%" }}
                            animate={{
                              width:
                                focusedField === "projectType" ? "100%" : "0%",
                            }}
                            transition={{ duration: 0.3 }}
                            className="absolute bottom-0 left-0 h-0.5 bg-indigo-600 rounded-full"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="budget"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Budget Range
                        </label>
                        <div
                          className={`relative ${
                            focusedField === "budget"
                              ? "ring-2 ring-indigo-300 rounded-lg"
                              : ""
                          }`}
                        >
                          <select
                            id="budget"
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            onFocus={() => handleFocus("budget")}
                            onBlur={handleBlur}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 appearance-none bg-white"
                          >
                            <option value="">Select budget range</option>
                            {budgetRanges.map((budget) => (
                              <option key={budget.value} value={budget.value}>
                                {budget.label}
                              </option>
                            ))}
                          </select>
                          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <ChevronDownIcon className="h-5 w-5 text-gray-400" />
                          </div>
                          <motion.span
                            initial={{ width: "0%" }}
                            animate={{
                              width: focusedField === "budget" ? "100%" : "0%",
                            }}
                            transition={{ duration: 0.3 }}
                            className="absolute bottom-0 left-0 h-0.5 bg-indigo-600 rounded-full"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Message <span className="text-red-500">*</span>
                      </label>
                      <div
                        className={`relative ${
                          focusedField === "message"
                            ? "ring-2 ring-indigo-300 rounded-lg"
                            : ""
                        }`}
                      >
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          onFocus={() => handleFocus("message")}
                          onBlur={handleBlur}
                          required
                          rows={5}
                          placeholder="Tell us about your project and what you're looking to achieve..."
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                        />
                        <motion.span
                          initial={{ width: "0%" }}
                          animate={{
                            width: focusedField === "message" ? "100%" : "0%",
                          }}
                          transition={{ duration: 0.3 }}
                          className="absolute bottom-0 left-0 h-0.5 bg-indigo-600 rounded-full"
                        />
                      </div>
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center ${
                        isSubmitting ? "opacity-80" : ""
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <ArrowPathIcon className="w-5 h-5 mr-2 animate-spin" />
                          Sending Message...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </motion.button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>

          {/* Additional Info Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Office Hours
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday</span>
                  <span className="font-medium">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-medium">Closed</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">FAQ</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-medium text-gray-900">
                    How soon can you start on my project?
                  </p>
                  <p className="text-gray-600 text-sm mt-1">
                    We typically begin new projects within 1-2 weeks after
                    finalizing requirements.
                  </p>
                </div>
                <div>
                  <p className="font-medium text-gray-900">
                    What's your development process?
                  </p>
                  <p className="text-gray-600 text-sm mt-1">
                    We follow an agile methodology with weekly updates and
                    regular demos throughout the development process.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
