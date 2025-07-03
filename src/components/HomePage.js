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
    <div className="font-sans text-white overflow-x-hidden max-w-screen">
      {/* Hero Section */}
      <div
        className="relative min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${hero})` }}
      >
        {/* Glowing Animated Dots */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          {[...Array(25)].map((_, i) => (
            <span
              key={i}
              className="absolute w-2 h-2 bg-orange-400 rounded-full opacity-70 animate-pulse-dot"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        {/* Floating Gradient Blobs */}
        <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <span
              key={i}
              className="absolute w-32 h-32 bg-gradient-to-br from-orange-500 to-yellow-300 opacity-10 rounded-full animate-floating"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.4}s`,
                animationDuration: `${4 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#0a1f3c] bg-opacity-80 z-10"></div>

        {/* Hero Content */}
        <div className="relative z-20 flex flex-col min-h-screen">
          {/* Top Contact Bar */}
          <div className="flex flex-wrap items-center justify-between px-4 sm:px-6 py-2 border-b border-gray-700 text-base font-medium">
            <div className="flex gap-4 flex-wrap items-center text-white/90 text-sm sm:text-base drop-shadow-md">
              <span className="transition hover:text-orange-500 font-medium">
                📞 <strong className="text-orange-400">Phone:</strong>{" "}
                <span className=" text-white shadow-[0_0_6px_rgba(255,90,0,0.6)]">
                  8053555546, 9996140555
                </span>
              </span>
              <span className="transition hover:text-orange-500 font-medium">
                📧 <strong className="text-orange-400">Email:</strong>{" "}
                <span className="text-yellow-300 font-semibold shadow-[0_0_6px_rgba(255,90,0,0.6)]">
                  vertexstudyvisa@gmail.com
                </span>
              </span>
            </div>
            <div className="flex gap-4 text-orange-500 text-xl">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
                (Icon, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.95 }}
                    className="hover:text-white transition"
                  >
                    <Icon className="cursor-pointer" />
                  </motion.div>
                )
              )}
            </div>
          </div>

          {/* Navbar Header */}
          <motion.header
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120, duration: 0.4 }}
            className="flex items-center justify-between px-4 sm:px-6 py-4 flex-wrap gap-4"
          >
            <motion.img
              src={logo}
              alt="Vertex Logo"
              className="w-24 object-contain drop-shadow-md"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            />

            <motion.nav
              className="hidden md:flex gap-6 text-base lg:text-xl font-semibold tracking-wide"
              initial="hidden"
              animate="visible"
              variants={{
                visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
                hidden: { opacity: 0 },
              }}
            >
              {[
                "/",
                "/services",
                "/test-preparation",
                "/about",
                "/contact",
                "/Faq",
                "/team",
              ].map((path, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <Link
                    to={path}
                    className="hover:text-orange-400 transition whitespace-nowrap"
                  >
                    {path === "/"
                      ? "Home"
                      : path === "/Faq"
                      ? "FAQ"
                      : path
                          .slice(1)
                          .replace("-", " ")
                          .replace(/\b\w/g, (c) => c.toUpperCase())}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>

            <motion.div
              className="hidden md:block"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Link to="/quote">
                <button className="px-5 py-2 rounded-xl bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold text-sm shadow-md hover:shadow-lg transition duration-300">
                  Get A Quote
                </button>
              </Link>
            </motion.div>

            {/* Mobile Icon */}
            <div
              className="md:hidden text-2xl text-orange-400 cursor-pointer"
              onClick={toggleSidebar}
            >
              <FaBars />
            </div>
          </motion.header>

          {/* Mobile Sidebar */}
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
                  <FaTimes
                    onClick={toggleSidebar}
                    className="text-white text-xl cursor-pointer"
                  />
                </div>
                {[
                  "/",
                  "/services",
                  "/test-preparation",
                  "/about",
                  "/contact",
                  "/Faq",
                  "/team",
                ].map((path, i) => (
                  <Link
                    key={i}
                    to={path}
                    onClick={toggleSidebar}
                    className="text-base font-semibold hover:text-orange-400"
                  >
                    {path === "/"
                      ? "Home"
                      : path
                          .slice(1)
                          .replace("-", " ")
                          .replace(/\b\w/g, (c) => c.toUpperCase())}
                  </Link>
                ))}
                <Link to="/quote" onClick={toggleSidebar}>
                  <button className="relative mt-4 px-7 py-3 text-white font-semibold text-base rounded-xl 
                    bg-gradient-to-br from-[#2c0f00] via-[#ff6b00] to-[#ff944d] 
                    shadow-[0_0_25px_rgba(255,130,40,0.5),_0_0_50px_rgba(255,120,0,0.35)] 
                    border border-orange-100/10 ring-1 ring-orange-500/20 
                    backdrop-blur-sm overflow-hidden transition-all duration-300 transform hover:-translate-y-1 
                    hover:shadow-[0_0_40px_rgba(255,140,40,0.7),_0_0_80px_rgba(255,100,0,0.4)]">
                    <span className="absolute inset-0 bg-gradient-to-br from-[#ff6a00]/20 via-[#ff8800]/20 to-[#ff5e00]/20 
                      blur-2xl opacity-50 rounded-xl pointer-events-none z-0" />
                    <span className="absolute top-0 left-0 w-full h-full rounded-xl bg-white/10 opacity-10 
                      pointer-events-none z-0" />
                    <span className="relative z-10 tracking-wide">Get A Quote</span>
                  </button>
                </Link>
              </motion.aside>
            )}
          </AnimatePresence>

          {/* Hero Content */}
          <motion.section
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center justify-center flex-1 px-4 sm:px-6 md:px-16 text-center"
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Achieve Your Dream to Study Abroad with{" "}
              <span className="text-[#ff5a00] drop-shadow-lg">
                Vertex Study Visa
              </span>
            </motion.h2>

            <motion.h1
              className="text-[32px] sm:text-[48px] md:text-[64px] leading-tight font-extrabold mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#ff5a00] via-[#ff7b00] to-[#ff5a00]"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
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
                typeSpeed={50}
                deleteSpeed={40}
                delaySpeed={800}
              />
            </motion.h1>

            <motion.p
              className="text-base md:text-lg text-white/80 max-w-2xl mb-10 leading-relaxed tracking-wide font-medium drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              We specialize in{" "}
              <span className="text-orange-400 font-semibold">Study Visas</span>
              ,{" "}
              <span className="text-yellow-300 font-semibold">
                Tourist Visas
              </span>
              , and{" "}
              <span className="text-pink-400 font-semibold">
                Permanent Residency (PR)
              </span>{" "}
              guidance. Join thousands of students we've helped succeed across
              the globe.
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Link to="/consultant">
                <button className="relative px-8 py-4 text-white font-semibold text-lg rounded-xl backdrop-blur-md bg-white/10 border border-white/20 overflow-hidden shadow-[0_12px_32px_rgba(255,90,0,0.5)] scale-[1.03] ring-1 ring-orange-400/40 group transition-all duration-300">
                  <span className="absolute inset-0 bg-gradient-to-r from-[#ff5a00]/30 via-[#ff8800]/30 to-[#ff5a00]/30 blur-xl opacity-60 transition-all duration-500 pointer-events-none" />
                  <span className="absolute inset-0 rounded-xl border border-orange-500 opacity-15 pointer-events-none" />
                  <span className="relative z-10">GET FREE CONSULTATION</span>
                </button>
              </Link>
            </motion.div>
          </motion.section>
        </div>
      </div>

      {/* Sections */}
      {[
        AboutSection,
        WhyChooseVertex,
        ServicesSection,
        FounderSection,
        GuidanceSection,
        CountriesWeServe,
        TestPreparation,
        Team,
        SuccessStory,
        ConsultationSection,
      ].map((Section, i) => (
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

      {/* Animation Styles */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-20px) scale(1.1); }
          100% { transform: translateY(0px) scale(1); }
        }

        @keyframes pulse-dot {
          0% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.6); opacity: 0.2; }
          100% { transform: scale(1); opacity: 0.7; }
        }

        .animate-floating {
          animation-name: float;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }

        .animate-pulse-dot {
          animation-name: pulse-dot;
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
        }
      `}</style>
    </div>
  );
}
