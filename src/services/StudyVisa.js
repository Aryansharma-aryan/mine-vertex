import React, { useState } from "react";
import studyVisaImg from "../assets/studyvisa.png"; // replace with your image path

const StudyVisa = () => {
  const [expanded, setExpanded] = useState(false);

  const shortContent = `Vertex Overseas Consultants offers expert guidance and support 
  to students applying for study visas across popular destinations worldwide. 
  We simplify the complex visa application process, ensuring your documents 
  are complete and accurate.`;

  const fullContent = `
  Vertex Overseas Consultants offers expert guidance and support 
  to students applying for study visas across popular destinations worldwide. 
  We simplify the complex visa application process, ensuring your documents 
  are complete and accurate.

  Our experienced counselors stay updated with the latest immigration rules 
  and visa policies to maximize your chances of approval. We assist you in 
  preparing for interviews, filling application forms, and collecting 
  necessary documents.

  Whether you’re targeting Canada, Australia, the USA, UK, or Europe, 
  our tailored services help you navigate country-specific visa 
  requirements efficiently. Trust Vertex Overseas to make your study 
  abroad dreams a reality with seamless visa assistance.
  `;

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 my-16">
      <div className="bg-gradient-to-r from-orange-100 via-white to-orange-100 rounded-xl shadow-2xl flex flex-col md:flex-row overflow-hidden hover:shadow-orange-400 transition-shadow duration-500">
        
        {/* Image Card */}
        <div className="md:w-1/2 overflow-hidden">
          <img
            src={studyVisaImg}
            alt="Study Visa Assistance"
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Content Card */}
        <div className="md:w-1/2 p-8 flex flex-col justify-between">
          <h2 className="text-3xl font-extrabold text-orange-700 mb-4 
              bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent
              animate-pulse">
            Study Visa Assistance
          </h2>

          <p className="text-gray-700 whitespace-pre-line mb-6">
            {expanded ? fullContent : shortContent}
          </p>

          <button
            onClick={() => setExpanded(!expanded)}
            className="self-start px-6 py-3 bg-orange-600 text-white font-semibold rounded-md 
              hover:bg-orange-700 transition duration-300 shadow-md
              focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-1"
          >
            {expanded ? "Read Less" : "Read More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default StudyVisa;
