import React, { useState } from "react";
import {
  FaPlane,
  FaMapMarkedAlt,
  FaHome,
  FaChalkboardTeacher,
  FaBriefcase,
  
  FaFileAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

// Images
import studyVisaImg from "../assets/study.jpg";
import touristVisaImg from "../assets/Touristt.jpg";
import prVisaImg from "../assets/pr.avif";
import ieltsImg from "../assets/Ielts.avif";
import workVisaImg from "../assets/workVisa.webp";

// Services Data with images and icons
const services = [
  {
    icon: <FaPlane className="text-4xl text-[#fbbf24]" />,
    title: "Study Visa",
    short: "Expert guidance for student visas to Canada, Australia, UK, and more.",
    full: "We provide personalized support for university applications, visa documentation, SOP writing, embassy interviews, financial planning, and accommodation assistance.",
    image: studyVisaImg,
  },
  {
    icon: <FaMapMarkedAlt className="text-4xl text-[#60a5fa]" />,
    title: "Tourist Visa",
    short: "We assist with travel visa documentation and embassy appointments.",
    full: "Get expert help with travel visa applications, itinerary planning, documentation, and interview preparation for leisure or business travel.",
    image: touristVisaImg,
  },
  {
    icon: <FaHome className="text-4xl text-[#34d399]" />,
    title: "Permanent Residency (PR)",
    short: "Explore PR pathways for countries like Canada and Australia.",
    full: "We assist in PR applications for skilled professionals, family sponsorships, and express entry programs, maximizing your immigration chances.",
    image: prVisaImg,
  },
  {
    icon: <FaChalkboardTeacher className="text-4xl text-[#f472b6]" />,
    title: "IELTS/PTE Coaching",
    short: "Boost your fluency, confidence, and exam strategies.",
    full: "Certified trainers help improve grammar, fluency, and strategies. We offer mock tests, daily practice, and one-on-one coaching to increase scores.",
    image: ieltsImg,
  },
  {
    icon: <FaBriefcase className="text-4xl text-[#a78bfa]" />,
    title: "Work Visa",
    short: "Professional visa solutions tailored for your career goals.",
    full: "We assist in securing global work permits, resume building, job sponsorships, and compliance support across industries.",
    image: workVisaImg,
  },
  
  
  {
    icon: <FaFileAlt className="text-4xl text-[#facc15]" />,
    title: "Document Assistance",
    short: "We help prepare all required documents for your visa journey.",
    full: "We verify and format SOPs, LORs, resumes, finances, and medicals per embassy standards for smooth processing.",
    image: touristVisaImg,
  },
];

const ServicesSection = () => {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-pink-500 text-transparent bg-clip-text animate-pulse">
          ✨ Our Premium Services
        </h2>
        <p className="text-gray-300 mt-3 text-lg max-w-2xl mx-auto">
          End-to-end solutions for study, travel, and permanent residency.
        </p>
      </motion.div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-6 text-white shadow-2xl transition transform hover:-translate-y-2 hover:shadow-pink-500/20 hover:bg-white/5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Image */}
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-40 object-cover rounded-2xl mb-4 shadow-xl"
            />

            {/* Icon */}
            <div className="flex items-center justify-center mb-4">
              <div className="bg-white/10 p-4 rounded-full shadow-lg">
                {service.icon}
              </div>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-cyan-300 text-center mb-2">
              {service.title}
            </h3>

            {/* Text */}
            <p className="text-sm text-gray-300 text-center mb-4">
              {expanded[index] ? service.full : service.short}
            </p>

            {/* Button */}
            <div className="text-center">
              <button
                onClick={() => toggleExpand(index)}
                className="text-sm text-pink-400 font-semibold hover:underline hover:scale-105 transition-transform duration-300"
              >
                {expanded[index] ? "▲ Show Less" : "▼ Read More"}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
