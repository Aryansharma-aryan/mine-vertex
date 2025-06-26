import React, { useState } from 'react';
import visitorImage from '../assets/visitor.jpg'; // Use an appropriate visitor visa image

const VisitorVisa = () => {
  const [readMore, setReadMore] = useState(false);

  return (
    <section className="max-w-7xl mx-auto my-12 px-6 md:px-12">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row items-center">
        
        {/* Image Card */}
        <div className="md:w-1/2 p-4">
          <img
            src={visitorImage}
            alt="Visitor Visa"
            className="rounded-lg object-cover w-full h-64 md:h-full shadow-md"
          />
        </div>

        {/* Content Card */}
        <div className="md:w-1/2 p-6 space-y-4 text-gray-800">
          <h2 className="text-3xl font-extrabold text-gradient bg-gradient-to-r from-orange-500 to-yellow-400 animate-gradient-x">
            Visitor Visa Services
          </h2>
          <p className="text-lg">
            Planning to visit your loved ones or explore new countries? Our Visitor Visa consultancy ensures a smooth and hassle-free application process.
          </p>

          <p>
            We guide you through eligibility criteria, document preparation, and submission to help you secure your Visitor Visa with confidence.
          </p>

          {readMore && (
            <>
              <p>
                Our experts provide personalized assistance tailored to your travel plans, whether it’s a short vacation, business visit, or family reunion.
              </p>
              <p>
                We cover popular destinations including Canada, Australia, the UK, USA, and Schengen countries. We ensure all forms and paperwork are accurately completed and submitted on time.
              </p>
              <p>
                Get expert tips on interview preparation and follow-up support until your visa approval.
              </p>
            </>
          )}

          <button
            onClick={() => setReadMore(!readMore)}
            className="mt-4 inline-block px-6 py-3 bg-orange-600 text-white rounded-md font-semibold hover:bg-orange-700 transition"
          >
            {readMore ? 'Show Less' : 'Read More'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default VisitorVisa;
