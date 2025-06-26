import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-r from-white via-orange-50 to-white py-20 px-6 md:px-12 min-h-screen"
    >
      <div className="max-w-7xl mx-auto">
        {/* Marquee */}
        <marquee className="text-orange-600 font-semibold text-lg mb-12 select-none">
          Empowering Dreams Worldwide 🌍 | Trusted by Thousands Since 2015!
        </marquee>

        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-red-500 to-pink-500 animate">
            About Vertex Overseas Consultants
          </h2>
          <p className="mt-4 text-gray-700 max-w-3xl mx-auto text-lg">
            Dedicated to guiding students and professionals on their journey to study, settle, and succeed abroad with personalized and expert support.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Card 1 */}
          <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl shadow-2xl p-8 hover:shadow-3xl transition duration-500">
            <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-600 animate-glow mb-4">
              Who We Are
            </h3>
            <p className="text-gray-800 leading-relaxed">
              Vertex Overseas Consultants is a leading education and immigration advisory firm established in 2015 in Kurukshetra,
              Haryana. Our core belief is empowering individuals with the knowledge and resources needed to navigate the complexities of
              studying and migrating abroad successfully.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-2xl shadow-2xl p-8 hover:shadow-3xl transition duration-500">
            <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-500 to-yellow-600 animate-glow mb-4">
              Our Mission
            </h3>
            <p className="text-gray-800 leading-relaxed">
              Our mission is to provide personalized, transparent, and ethical consulting services that pave the way for educational
              and immigration success worldwide. We aim to foster lasting relationships through trust, guidance, and dedicated support at every stage.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gradient-to-br from-pink-100 to-pink-200 rounded-2xl shadow-2xl p-8 hover:shadow-3xl transition duration-500">
            <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-700 animate-glow mb-4">
              Our Services
            </h3>
            <ul className="text-gray-800 leading-relaxed list-disc list-inside space-y-2">
              <li>🎓 Student Visa Counseling & Application Support</li>
              <li>📝 University & Course Selection Guidance</li>
              <li>📚 IELTS / PTE / TOEFL Coaching & Test Prep</li>
              <li>🌍 Immigration & PR Consultancy</li>
              <li>🤝 Pre & Post-Departure Assistance</li>
              <li>🎯 Career Planning & Placement Assistance</li>
            </ul>
          </div>

          {/* Card 4 */}
          <div className="bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-2xl shadow-2xl p-8 hover:shadow-3xl transition duration-500">
            <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-700 to-cyan-600 animate-glow mb-4">
              Our Global Reach
            </h3>
            <p className="text-gray-800 leading-relaxed">
              We have proudly assisted thousands of students and professionals to achieve their dreams in countries such as Canada, Australia,
              the UK, the USA, New Zealand, Europe, and Singapore. Our strong partnerships with educational institutions worldwide help us deliver timely
              and accurate advice tailored to each client’s aspirations.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl shadow-2xl p-8 hover:shadow-3xl transition duration-500">
            <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-teal-600 to-cyan-700 animate-glow mb-4">
              Why Choose Us?
            </h3>
            <p className="text-gray-800 leading-relaxed">
              At Vertex Overseas, we combine years of industry expertise with a student-first approach. We offer end-to-end support, quick query resolution,
              and unmatched dedication, ensuring you feel confident and prepared on your journey abroad.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl shadow-2xl p-8 hover:shadow-3xl transition duration-500">
            <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-700 to-red-600 animate-glow mb-4">
              Our Values
            </h3>
            <ul className="text-gray-800 leading-relaxed list-disc list-inside space-y-2">
              <li>Integrity & Transparency</li>
              <li>Client-Centric Guidance</li>
              <li>Excellence & Innovation</li>
              <li>Empathy & Respect</li>
              <li>Continuous Learning & Improvement</li>
            </ul>
          </div>
        </div>

      </div>

      {/* Glow animation styles */}
      <style>{`
      
        marquee {
          /* modern fallback to stop scroll on hover */
          scroll-behavior: smooth;
        }
      `}</style>
    </section>
  );
};

export default About;
