import React, { useState } from 'react';
import workVisaImage from '../assets/workVisa.webp'; // Replace with your image path

const WorkVisa = () => {
  const [readMore, setReadMore] = useState(false);

  return (
    <section className="max-w-7xl mx-auto my-12 px-6 md:px-12">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row items-center">
        
        {/* Image Card */}
        <div className="md:w-1/2 p-4">
          <img
            src={workVisaImage}
            alt="Work Visa"
            className="rounded-lg object-cover w-full h-64 md:h-full shadow-md"
          />
        </div>

        {/* Content Card */}
        <div className="md:w-1/2 p-6 space-y-4 text-gray-800">
          <h2 className="text-3xl font-extrabold bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent animate-gradient-x">
            Work Visa Services
          </h2>
          <p className="text-lg">
            Unlock global career opportunities with our expert Work Visa consulting.
          </p>

          <p>
            We provide comprehensive support tailored to your unique career goals and immigration requirements.
          </p>

          {readMore && (
            <>
              <p>
                Our experienced consultants assist with visa categories including skilled worker programs, intra-company transfers, temporary work permits, and seasonal worker visas.
              </p>
              <p>
                From preparing and reviewing your application documents to liaising with immigration authorities, we ensure your submission is complete, accurate, and compelling.
              </p>
              <p>
                We help you understand eligibility criteria, processing times, and potential challenges for top work visa destinations such as Canada, Australia, the UK, Germany, and the United States.
              </p>
              <p>
                Beyond visa approval, we offer relocation assistance, including guidance on accommodation, healthcare, banking, and employment rights in your new country.
              </p>
              <p>
                Our personalized interview coaching and career counseling enhance your confidence, helping you make a smooth transition and succeed abroad.
              </p>
              <p>
                Partner with Vertex Overseas Consultants to make your global work dreams a reality with trusted expertise and dedicated support every step of the way.
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

export default WorkVisa;
