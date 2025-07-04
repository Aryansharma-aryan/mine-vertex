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
<span className="transition font-semibold text-white flex items-center gap-2">
  📞 <strong className="text-[#00c97d]">Phone:</strong>{" "}
  <a
    href="tel:+918053555546"
    className="text-[#ffd3a3] hover:text-white font-bold transition duration-200 relative"
  >
    <span className="drop-shadow-[0_0_6px_rgba(255,211,163,0.6)]">8053555546</span>
    <span className="absolute inset-x-0 -bottom-0.5 h-[2px] w-0 bg-gradient-to-r from-[#00c97d] via-[#ffd3a3] to-[#ffba84] transition-all duration-300 group-hover:w-full rounded-full"></span>
  </a>
  <span className="mx-2 text-[#00c97d] font-bold">|</span>
  <a
    href="tel:+919996140555"
    className="text-[#ffd3a3] hover:text-white font-bold transition duration-200 relative"
  >
    <span className="drop-shadow-[0_0_6px_rgba(255,211,163,0.6)]">9996140555</span>
    <span className="absolute inset-x-0 -bottom-0.5 h-[2px] w-0 bg-gradient-to-r from-[#00c97d] via-[#ffd3a3] to-[#ffba84] transition-all duration-300 group-hover:w-full rounded-full"></span>
  </a>
</span>


             <span className="transition hover:text-orange-500 font-medium">
  📧 <strong className="text-orange-400">Email:</strong>{" "}
  <a
    href="mailto:vertexstudyvisa@gmail.com"
    className="text-yellow-300 font-semibold hover:text-orange-400 shadow-[0_0_6px_rgba(255,90,0,0.6)] transition duration-200"
  >
    vertexstudyvisa@gmail.com
  </a>
</span>

            </div>
           <div className="flex gap-4 text-xl">
  {[
    { Icon: FaFacebookF, color: "#1877F2", glow: "rgba(24, 119, 242, 0.5)" },
    { Icon: FaTwitter, color: "#1DA1F2", glow: "rgba(29, 161, 242, 0.5)" },
    { Icon: FaInstagram, color: "#E1306C", glow: "rgba(225, 48, 108, 0.5)" },
    { Icon: FaLinkedinIn, color: "#0077B5", glow: "rgba(0, 119, 181, 0.5)" },
  ].map(({ Icon, color, glow }, index) => (
    <motion.div
      key={index}
      whileHover={{ scale: 1.25 }}
      whileTap={{ scale: 0.95 }}
      className="transition duration-300"
      style={{
        color,
        textShadow: `
          0 0 6px ${glow},
          0 0 12px ${glow},
          0 0 20px rgba(0,0,0,0.3)`,
      }}
    >
      <Icon className="cursor-pointer" />
    </motion.div>
  ))}
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
  className="hidden md:flex gap-6 lg:gap-10 text-base lg:text-lg font-bold tracking-wide"
  initial="hidden"
  animate="visible"
  variants={{
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
    hidden: { opacity: 0 },
  }}
>
  {[
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/test-preparation", label: "Test Preparation" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
    { path: "/Faq", label: "FAQ" },
    { path: "/team", label: "Team" },
  ].map(({ path, label }, i) => (
    <motion.div
      key={i}
      variants={{
        hidden: { opacity: 0, y: 12 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <Link
        to={path}
        className="relative px-3 py-1 group transition duration-300 hover:scale-[1.05]"
      >
        {/* Gradient Text (Always On) */}
        <span className="bg-gradient-to-r from-[#1dd1a1] via-[#ffeaa7] to-[#f8a5c2] bg-clip-text text-transparent font-bold relative z-10">
          {label}
        </span>

        {/* Gradient Underline on Hover */}
        <span className="absolute left-1/2 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-[#00b894] via-[#fcd581] to-[#f78fb3] rounded-full transition-all duration-500 group-hover:w-full group-hover:left-0" />

        {/* Soft Glow (Subtle Always) */}
        <span className="absolute inset-0 rounded-md bg-gradient-to-r from-emerald-300/10 via-amber-200/10 to-pink-300/10 blur-md opacity-80 transition duration-500 pointer-events-none" />
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
      {/* Close Icon */}
      <div className="flex justify-end mb-4">
        <FaTimes
          onClick={toggleSidebar}
          className="text-orange-400 text-2xl cursor-pointer hover:scale-110 transition-transform"
        />
      </div>

      {/* Nav Links (Same style as top navbar) */}
      {[
        { path: "/", label: "Home" },
        { path: "/services", label: "Services" },
        { path: "/test-preparation", label: "Test Preparation" },
        { path: "/about", label: "About" },
        { path: "/contact", label: "Contact" },
        { path: "/Faq", label: "FAQ" },
        { path: "/team", label: "Team" },
      ].map(({ path, label }, i) => (
        <Link
          key={i}
          to={path}
          onClick={toggleSidebar}
          className="relative px-2 py-1 group transition duration-300 hover:scale-[1.05]"
        >
          {/* Premium Gradient Text Always On */}
          <span className="bg-gradient-to-r from-[#1dd1a1] via-[#ffeaa7] to-[#f8a5c2] bg-clip-text text-transparent font-bold tracking-wide relative z-10">
            {label}
          </span>

          {/* Gradient Underline on Hover */}
          <span className="absolute left-1/2 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-[#00b894] via-[#fcd581] to-[#f78fb3] rounded-full transition-all duration-500 group-hover:w-full group-hover:left-0" />

          {/* Subtle Glow Background Blur */}
          <span className="absolute inset-0 rounded-md bg-gradient-to-r from-emerald-300/10 via-amber-200/10 to-pink-300/10 blur-md opacity-80 transition duration-500 pointer-events-none" />
        </Link>
      ))}

      {/* Get A Quote Button (Optional Keep/Style separately) */}
      <Link to="/quote" onClick={toggleSidebar}>
        <button className="relative mt-6 px-6 py-3 text-white font-semibold text-sm rounded-xl 
          bg-gradient-to-br from-[#2c0f00] via-[#ff6b00] to-[#ff944d] 
          shadow-[0_0_25px_rgba(255,130,40,0.5),_0_0_50px_rgba(255,120,0,0.35)] 
          backdrop-blur-md overflow-hidden transition-all duration-300 transform hover:-translate-y-1 
          hover:shadow-[0_0_40px_rgba(255,140,40,0.7),_0_0_80px_rgba(255,100,0,0.4)]"
        >
          {/* Glow Layer */}
          <span className="absolute inset-0 bg-gradient-to-br from-[#ff6a00]/20 via-[#ff8800]/20 to-[#ff5e00]/20 
            blur-2xl opacity-50 rounded-xl pointer-events-none z-0" />

          {/* Subtle Overlay */}
          <span className="absolute top-0 left-0 w-full h-full rounded-xl bg-white/10 opacity-10 
            pointer-events-none z-0" />

          {/* Gradient Text */}
          <span className="relative z-10 tracking-wide bg-gradient-to-r from-[#fff] via-[#ffe6d4] to-[#fff2e0] bg-clip-text text-transparent">
            Get A Quote
          </span>
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
  className="flex flex-col items-center justify-center flex-1 px-4 sm:px-6 md:px-16 py-8 text-center"
>
  {/* Small Heading */}
  <motion.h2
    className="text-[20px] sm:text-[26px] md:text-[32px] font-bold mb-4 text-white drop-shadow-md leading-snug"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3 }}
  >
    Achieve Your Dream to Study Abroad with{" "}
    <span className="text-[#ff5a00] drop-shadow-lg">Vertex Study Visa</span>
  </motion.h2>

  {/* Typewriter Main Heading */}
  <motion.h1
    className="text-[32px] sm:text-[44px] md:text-[64px] lg:text-[80px] xl:text-[96px] 
      leading-tight font-extrabold mb-6 tracking-tight text-transparent bg-clip-text 
      bg-gradient-to-r from-orange-400 via-yellow-300 to-pink-500 
      drop-shadow-[0_1px_1px_rgba(255,130,0,0.6)] whitespace-normal sm:whitespace-nowrap overflow-hidden"
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

  {/* Sub Text */}
  <motion.p
    className="text-sm sm:text-base md:text-lg text-white/80 max-w-2xl mb-8 sm:mb-10 leading-relaxed tracking-wide font-bold drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)]"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.6 }}
  >
    We specialize in{" "}
    <span className="text-orange-400">Study Visas</span>,{" "}
    <span className="text-yellow-300">Tourist Visas</span>, and{" "}
    <span className="text-pink-400">Permanent Residency (PR)</span>{" "}
    guidance. Join thousands of students we've helped succeed across the globe.
  </motion.p>

  {/* CTA Button */}
  <motion.div
    className="flex flex-wrap justify-center gap-4"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.7 }}
  >
    <Link to="/consultant">
      <button className="relative px-8 py-4 text-white font-semibold text-lg rounded-xl backdrop-blur-md bg-white/10 border border-white/20 overflow-hidden shadow-[0_12px_32px_rgba(255,90,0,0.5)] scale-[1.03] ring-1 ring-orange-400/40 group transition-all duration-300">
        <span className="absolute inset-0 bg-gradient-to-r from-[#ff5a00]/30 via-[#ff8800]/30 to-[#ff5a00]/30 blur-xl opacity-60 transition-all duration-500 pointer-events-none" />
        <span className="absolute inset-0 rounded-xl border border-orange-500/20 pointer-events-none" />
        <span className="relative z-10 bg-gradient-to-r from-[#ff5a00] via-[#ff8800] to-[#ff5a00] bg-clip-text text-transparent tracking-wide">
          GET FREE CONSULTATION
        </span>
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
