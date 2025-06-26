import React, { useState } from "react";
import prVisaImg from "../assets/prvisa.png"; // Replace with your image path

const Pvisa = () => {
  const [expanded, setExpanded] = useState(false);

  const shortContent = `Dreaming of permanent residency abroad? Vertex Overseas Consultants 
  offers expert assistance for PR visa applications to countries like Canada, Australia, 
  and New Zealand, making your transition smooth and stress-free.`;

  const fullContent = `
Dreaming of permanent residency abroad? Vertex Overseas Consultants 
offers expert assistance for PR visa applications to countries like Canada, Australia, 
and New Zealand, making your transition smooth and stress-free.

Our experienced consultants guide you through eligibility assessments, 
documentation, and submission processes, tailored to each country’s specific requirements. 
We also provide interview preparation and post-landing services to help you settle confidently.

Whether you're aiming for skilled migration, family sponsorship, or business immigration, 
we ensure your PR application is accurate and complete to increase your chances of success.
`;

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 my-16">
      <div className="bg-gradient-to-r from-orange-100 via-white to-orange-100 rounded-xl shadow-2xl flex flex-col md:flex-row overflow-hidden hover:shadow-orange-400 transition-shadow duration-500">
        
        {/* Image Card */}
        <div className="md:w-1/2 overflow-hidden">
          <img
            src={prVisaImg}
            alt="Permanent Residency Visa Assistance"
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Content Card */}
        <div className="md:w-1/2 p-8 flex flex-col justify-between">
          <h2 className="text-3xl font-extrabold text-orange-700 mb-4 
              bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent
              animate-pulse">
            Permanent Residency (PR) Visa Assistance
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

export default Pvisa;
