import React, { useState } from "react";
import touristVisaImg from "../assets/tourist.webp"; // Replace with your image path

const TouristVisa = () => {
  const [expanded, setExpanded] = useState(false);

  const shortContent = `Planning your dream vacation abroad? Vertex Overseas Consultants 
  provides comprehensive tourist visa assistance for multiple countries, ensuring 
  a smooth application process.`;

  const fullContent = `
Planning your dream vacation abroad? Vertex Overseas Consultants 
provides comprehensive tourist visa assistance for multiple countries, ensuring 
a smooth application process.

We guide you through the required documentation, application forms, 
and interview preparations to boost your approval chances. Our experts 
stay updated with the latest travel restrictions and visa policies to keep 
your plans hassle-free.

Whether you want to explore Europe, North America, Asia, or Oceania, 
our personalized services help you get your tourist visa on time, 
making your travel experience memorable and worry-free.
`;

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 my-16">
      <div className="bg-gradient-to-r from-orange-100 via-white to-orange-100 rounded-xl shadow-2xl flex flex-col md:flex-row overflow-hidden hover:shadow-orange-400 transition-shadow duration-500">
        
        {/* Image Card */}
        <div className="md:w-1/2 overflow-hidden">
          <img
            src={touristVisaImg}
            alt="Tourist Visa Assistance"
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Content Card */}
        <div className="md:w-1/2 p-8 flex flex-col justify-between">
          <h2 className="text-3xl font-extrabold text-orange-700 mb-4 
              bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent
              animate-pulse">
            Tourist Visa Assistance
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

export default TouristVisa;
