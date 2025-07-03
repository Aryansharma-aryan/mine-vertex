import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  FaPlaneDeparture,
  FaUserGraduate,
  FaUniversity,
  FaGlobe,
} from "react-icons/fa";

// Premium Stat Card Component
const StatCard = ({ icon: Icon, end, suffix, label }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="w-full h-44 p-6 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md shadow-2xl text-white flex flex-col items-center justify-center transition-all duration-300"
  >
    <Icon className="text-4xl mb-2 text-orange-400 drop-shadow-md" />
    <h4 className="text-3xl font-bold tracking-wide">
      <CountUp end={end} duration={2.5} />{suffix}
    </h4>
    <p className="text-center text-sm mt-1">{label}</p>
  </motion.div>
);

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden py-20 px-4 sm:px-8 md:px-16 text-white">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#0a1f3c] via-[#132c45] to-[#ff7a00] animate-gradientMove"></div>
      <div className="absolute inset-0 z-0 bg-white/5 backdrop-blur-md"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 max-w-7xl mx-auto">
        {/* LEFT: About Text Content */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/10 text-white p-8 sm:p-10 rounded-3xl shadow-xl border border-white/20 backdrop-blur-lg w-full md:w-1/2"
        >
          <h3 className="text-lg sm:text-xl font-semibold mb-2 text-orange-400 uppercase">
            About Us
          </h3>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-snug">
            Your Global Education Partner – Vertex Study Visa KKR
          </h2>
          <p className="text-base md:text-lg text-white/80 mb-8 leading-relaxed">
            At Vertex Study Visa KKR, we are passionate about helping students and professionals achieve their global ambitions. With years of experience and a highly qualified team, we provide personalized visa consultation, documentation support, and language training. We believe in transparent service, ethical guidance, and long-term success for our clients.
          </p>
          <button className="bg-[#ff7a00] text-white px-6 py-3 rounded-xl hover:bg-orange-600 transition-all duration-300 shadow-lg">
            START YOUR VISA JOURNEY TODAY
          </button>
        </motion.div>

        {/* RIGHT: Animated Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full md:w-1/2">
          <StatCard
            icon={FaPlaneDeparture}
            end={750}
            suffix="+"
            label="Study Visas Approved Globally"
          />
          <StatCard
            icon={FaGlobe}
            end={8}
            suffix="+"
            label="Years of Expertise in Visa Consultation"
          />
          <StatCard
            icon={FaUserGraduate}
            end={1000}
            suffix="+"
            label="Successful Tourist & Visitor Visa Cases"
          />
          <StatCard
            icon={FaUniversity}
            end={50}
            suffix="+"
            label="Partnered Colleges & Universities Worldwide"
          />
        </div>
      </div>

      {/* Gradient Animation Keyframes */}
      <style>{`
        .animate-gradientMove {
          background-size: 400% 400%;
          animation: gradientBG 15s ease infinite;
        }
        @keyframes gradientBG {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
}
