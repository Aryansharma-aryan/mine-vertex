import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import logo from "../assets/vertexlogo.png";
import hero from "../assets/heroo.png";

// Section Components
import AboutSection from "../pages/AboutSection";
import WhyChooseVertex from "../pages/WhyChoose";
import ServicesSection from "../pages/ServicesSection";
import FounderSection from "../pages/Founder";
import GuidanceSection from "../pages/GuidanceSection";
import CountriesWeServe from "../pages/Countries";
import TestPreparation from "../pages/TestPrepration";
import SuccessStory from "../pages/SuccessStory";
import ConsultationSection from "../pages/Faq";
import Team from "../pages/Team";

export default function HomePage() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <div className="font-sans text-white">
      {/* Hero Section */}
      <div
        className="relative min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${hero})` }}
      >
        {/* Animated Blurred Circles */}
        <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <span
              key={i}
              className="absolute w-32 h-32 bg-orange-500 opacity-10 rounded-full blur-3xl animate-floating"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.4}s`,
                animationDuration: `${4 + Math.random() * 6}s`,
              }}
            />
          ))}
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#0a1f3c] bg-opacity-80 z-10"></div>

        {/* Hero Content */}
        <div className="relative z-20 flex flex-col min-h-screen">
          {/* Top Contact Bar */}
          <div className="flex flex-wrap items-center justify-between px-6 py-2 border-b border-gray-700 text-sm">
            <div className="flex gap-6 flex-wrap items-center text-white/90 text-sm">
  <span className="hover:text-orange-400 transition">
    <strong className="text-orange-400">Phone:</strong> 8053555546
  </span>
  <span className="hover:text-orange-400 transition">
    <strong className="text-orange-400">Email:</strong> vertexstudyvisa@gmail.com
  </span>
</div>
           <div className="flex gap-3 text-orange-500 text-lg">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="cursor-pointer" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Header */}
          <motion.header
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 80, duration: 0.6 }}
            className="flex items-center justify-between px-6 py-4"
          >
            <motion.img
              src={logo}
              alt="Vertex Logo"
              className="w-20 sm:w-24 md:w-28 object-contain drop-shadow-xl"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              whileHover={{ scale: 1.1 }}
            />

            <motion.nav
              className="hidden md:flex gap-6 text-sm font-medium"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 },
                },
                hidden: { opacity: 0 },
              }}
            >
              {["/", "/services", "/test-preparation", "/about", "/contact", "/Faq", "/team"].map((path, i) => (
                <motion.div
                  key={i}
                  variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                >
                  <Link to={path} className="hover:text-orange-400 transition">
                    {path === "/"
                      ? "Home"
                      : path === "/Faq"
                      ? "FAQ"
                      : path.slice(1).replace("-", " ").replace(/\b\w/g, c => c.toUpperCase())}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>

            <motion.div
              className="hidden md:block"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Link to="/quote">
                <button className="bg-orange-500 text-white font-semibold px-5 py-2 rounded-md hover:bg-orange-600 transition text-sm">
                  GET A QUOTE
                </button>
              </Link>
            </motion.div>

            <div className="md:hidden text-2xl text-orange-400 cursor-pointer" onClick={toggleSidebar}>
              <FaBars />
            </div>
          </motion.header>

          <AnimatePresence>
            {isSidebarOpen && (
              <motion.aside
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "100%", opacity: 0 }}
                transition={{ type: "tween", duration: 0.3 }}
                className="fixed top-0 right-0 w-64 h-full bg-[#0a1f3c] z-50 shadow-lg flex flex-col p-6 gap-6"
              >
                <div className="flex justify-between items-center mb-4">
                  <FaTimes onClick={toggleSidebar} className="text-white text-xl cursor-pointer" />
                </div>
                {["/", "/services", "/test-preparation", "/about", "/contact", "/Faq", "/team"].map((path, i) => (
                  <Link key={i} to={path} onClick={toggleSidebar}>
                    {path === "/" ? "Home" : path.slice(1).replace("-", " ").replace(/\b\w/g, c => c.toUpperCase())}
                  </Link>
                ))}
                <Link to="/quote" onClick={toggleSidebar}>
                  <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 font-semibold">
                    Get A Quote
                  </button>
                </Link>
              </motion.aside>
            )}
          </AnimatePresence>

          {/* Hero Content Section */}
          <motion.section
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center justify-center flex-1 px-6 md:px-16 text-center"
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-md"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Achieve Your Dream to Study Abroad with{" "}
              <span className="text-[#ff5a00] drop-shadow-lg">Vertex Study Visa</span>
            </motion.h2>

            <motion.h1
              className="relative text-shimmer text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#ff5a00] via-[#ff7b00] to-[#ff5a00]"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Typewriter
                words={[
                  "Vertex Study Visa",
                  "Study in Canada 🇨🇦",
                  "Australia Admissions 🇦🇺",
                  "USA, UK & Europe 🌍",
                  "Visa Experts & PR Guidance",
                ]}
                loop={Infinity}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1200}
              />

              <style jsx>{`
                .text-shimmer {
                  text-shadow: 0 0 4px #ff5a00, 0 0 6px rgba(255, 90, 0, 0.3);
                }

                @keyframes shimmer-text {
                  0% {
                    background-position: -200% 0;
                  }
                  100% {
                    background-position: 200% 0;
                  }
                }
              `}</style>
            </motion.h1>

            <motion.p
              className="text-base md:text-lg text-white/80 max-w-xl mb-8 drop-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              Your trusted partner for study visas, tourist visas, and permanent residency guidance. Trusted by thousands of students worldwide.
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Link to="/consultant">
                <button className="bg-[#ff5a00] hover:bg-orange-600 transition text-white font-bold px-8 py-4 rounded-lg text-lg shadow-lg drop-shadow-[2px_2px_6px_rgba(0,0,0,0.5)]">
                  GET FREE CONSULTATION
                </button>
              </Link>
            </motion.div>
          </motion.section>
        </div>
      </div>

      {/* Other Sections */}
      {[AboutSection, WhyChooseVertex, ServicesSection, FounderSection, GuidanceSection, CountriesWeServe, TestPreparation, Team, SuccessStory, ConsultationSection].map((Section, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
        >
          <Section />
        </motion.div>
      ))}

      {/* Floating animation keyframes */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-20px) scale(1.1);
          }
          100% {
            transform: translateY(0px) scale(1);
          }
        }

        .animate-floating {
          animation-name: float;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }
      `}</style>
    </div>
  );
}
