import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  FaPlaneDeparture,
  FaUserGraduate,
  FaUniversity,
  FaGlobe,
} from "react-icons/fa";

// Animation Variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { rotateY: -90, opacity: 0 },
  visible: {
    rotateY: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const iconVariants = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 20,
    },
  },
};

export default function AboutSection() {
  return (
    <section className="bg-gradient-to-br from-orange-500 to-orange-600 py-20 px-4 sm:px-8 md:px-16 text-white relative overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 max-w-7xl mx-auto">
        
        {/* Left Content */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white text-black p-8 sm:p-10 rounded-3xl shadow-2xl w-full md:w-1/2"
        >
          <motion.h3
            className="text-lg sm:text-xl font-semibold mb-2 text-orange-600 uppercase"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            About Us
          </motion.h3>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Empowering Global Dreams – Vertex Study Overseas
          </motion.h2>
          <motion.p
            className="text-base md:text-lg text-gray-700 mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            Vertex Study Overseas is dedicated to transforming your dreams into global achievements. With 8+ years of hands-on experience, our team has guided thousands through the study visa journey. Whether you're applying for a student, tourist, or permanent visa, we offer personalized assistance with 100% transparency and support. We collaborate with 50+ renowned institutions worldwide.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#0a1f3c] text-white px-6 py-3 rounded-xl hover:bg-[#132b47] transition-all duration-300 shadow-lg"
          >
            START YOUR VISA JOURNEY TODAY
          </motion.button>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full md:w-1/2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Card 1 */}
          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.05, rotateZ: 1 }}
            className="bg-white text-[#0a1f3c] p-6 rounded-2xl shadow-xl flex flex-col items-center justify-center transform-gpu transition duration-300"
          >
            <motion.div variants={iconVariants}>
              <FaPlaneDeparture className="text-4xl mb-3 text-orange-500" />
            </motion.div>
            <h4 className="text-3xl font-bold">
              <CountUp end={1200} duration={2} separator="," />+
            </h4>
            <p className="text-center text-sm mt-1">Global Study Visas Approved</p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.05, rotateZ: 1 }}
            className="bg-white text-[#0a1f3c] p-6 rounded-2xl shadow-xl flex flex-col items-center justify-center transform-gpu transition duration-300"
          >
            <motion.div variants={iconVariants}>
              <FaGlobe className="text-4xl mb-3 text-orange-500" />
            </motion.div>
            <h4 className="text-3xl font-bold">
              <CountUp end={10} duration={2} />+
            </h4>
            <p className="text-center text-sm mt-1">Years of Industry Experience</p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.05, rotateZ: 1 }}
            className="bg-white text-[#0a1f3c] p-6 rounded-2xl shadow-xl flex flex-col items-center justify-center transform-gpu transition duration-300"
          >
            <motion.div variants={iconVariants}>
              <FaUserGraduate className="text-4xl mb-3 text-orange-500" />
            </motion.div>
            <h4 className="text-3xl font-bold">
              <CountUp end={1800} duration={2} separator="," />+
            </h4>
            <p className="text-center text-sm mt-1">Tourist & Visitor Visas Delivered</p>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.05, rotateZ: 1 }}
            className="bg-white text-[#0a1f3c] p-6 rounded-2xl shadow-xl flex flex-col items-center justify-center transform-gpu transition duration-300"
          >
            <motion.div variants={iconVariants}>
              <FaUniversity className="text-4xl mb-3 text-orange-500" />
            </motion.div>
            <h4 className="text-3xl font-bold">
              <CountUp end={60} duration={2} />+
            </h4>
            <p className="text-center text-sm mt-1">Partner Universities Worldwide</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
