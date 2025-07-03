import React from "react";
import guidanceBgRight from "../assets/download.jpg";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const flipLeft = {
  hidden: { rotateY: -90, opacity: 0 },
  visible: {
    rotateY: 0,
    opacity: 1,
    transition: { duration: 1 },
  },
};

const flipRight = {
  hidden: { rotateY: 90, opacity: 0 },
  visible: {
    rotateY: 0,
    opacity: 1,
    transition: { duration: 1 },
  },
};

const GuidanceSection = () => {
  return (
    <section className="w-full bg-[#0f172a] py-24 px-4 relative overflow-hidden">
      {/* Heading with Typewriter */}
      <h2 className="text-center text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 mb-20 animate-fade-in-down drop-shadow-intense">
        <Typewriter
          words={[" Expert Guidance That Elevates Your Journey"]}
          loop={false}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h2>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center relative z-10">
        {/* Left: Text Box with Flip Animation */}
        <motion.div
          variants={flipLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-[#1e293b] bg-opacity-90 p-10 rounded-2xl shadow-xl border border-yellow-400/20 backdrop-blur"
        >
          <h3 className="text-orange-400 font-bold text-xl mb-3 uppercase tracking-wide">
            Personalized Guidance
          </h3>
          <h4 className="text-white text-3xl sm:text-4xl font-bold mb-6 leading-tight">
            Committed to Guiding You Every Step of the Way
          </h4>
          <p className="text-gray-300 text-base leading-relaxed mb-8">
            At Vertex Study Visa KKR, we don’t just file your application—we walk
            with you through the entire process. From your first counseling session
            to your final visa stamp, our experts ensure you’re informed, confident,
            and fully prepared for your global journey.
          </p>
          <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-2 px-6 rounded-full shadow-md transition duration-300">
            Get Free Consultation
          </button>
        </motion.div>

        {/* Right: List over Background with Flip Animation */}
        <motion.div
          variants={flipRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute inset-0 bg-orange-500 bg-opacity-80 rounded-2xl z-0"></div>
          <img
            src={guidanceBgRight}
            alt="Visa Guidance"
            className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-30 z-0"
          />
          <div className="relative z-10 p-10 text-white">
            <h4 className="text-xl sm:text-2xl font-bold mb-6 text-[#0f172a]">
              Why Choose Vertex?
            </h4>
            <ul className="space-y-4 text-md text-[#0f172a] font-medium">
              <li>✅ Personalized Counseling</li>
              <li>✅ Timely Submissions</li>
              <li>✅ Transparent Process</li>
              <li>✅ Updated Visa Guidelines</li>
              <li>✅ Support After Approval</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GuidanceSection;
