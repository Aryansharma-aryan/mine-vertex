import React from 'react';
import hero from '../assets/hero.jpg';
import About from './About';
import Services from './Services';
import Achivements from '../Achievments/Achivements';
import StudyVisaCountries from '../services/StudyVisaCountries';
import Team from './Team';
import CountryHighlights from './CountryHighlights';
import HowItWorks from './HowItWorks';
import CoachingCards from './CoachingCards';
import ContactSection from './ContactSection';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-white via-blue-50 to-blue-100 pt-10 pb-16 w-full">
        <div className="w-full px-6 md:px-20 flex flex-col-reverse md:flex-row items-center justify-between gap-14">

          {/* Left - Text & Feature Cards */}
          <div className="w-full md:w-1/2 space-y-10">
            <div className="space-y-6 text-center md:text-left">
              <p className="text-orange-600 font-semibold uppercase tracking-wider text-lg animate-pulse">
                Empowering Your Global Journey
              </p>
              <h1 className="text-5xl sm:text-6xl font-extrabold text-blue-900 leading-tight">
                Study, Settle & Succeed <br className="hidden sm:block" />
                <span className="text-orange-600">with Vertex Overseas</span>
              </h1>
              <p className="text-gray-700 text-lg leading-relaxed">
                We guide ambitious students and professionals toward their dreams abroad through expert consultation,
                visa support, and test preparation.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                {
                  title: "Student Visa Guidance",
                  color: "from-orange-100 to-orange-200",
                },
                {
                  title: "University & SOP Support",
                  color: "from-blue-100 to-blue-200",
                },
                {
                  title: "IELTS / PTE Coaching",
                  color: "from-purple-100 to-purple-200",
                },
                {
                  title: "Personalized Country Advice",
                  color: "from-green-100 to-green-200",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${item.color} p-5 rounded-xl shadow-lg hover:shadow-2xl hover:scale-[1.03] transition-transform duration-300`}
                >
                  <p className="text-blue-900 font-semibold text-lg text-center">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>

            {/* Call to Action Buttons */}
            <div className="pt-6 flex flex-wrap justify-center md:justify-start gap-4">
              <a
                href="#contact"
                className="inline-block px-6 py-3 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 shadow-md transition-all"
              >
                Contact Us
              </a>
              <a
                href="#services"
                className="inline-block px-6 py-3 border border-blue-700 text-blue-700 rounded-lg font-semibold hover:bg-blue-50 shadow-md transition-all"
              >
                Our Services
              </a>
            </div>
          </div>

          {/* Right - Hero Image */}
          <div className="w-full md:w-1/2 flex justify-center animate-fade-in">
            <img
              src={hero}
              alt="Study Abroad"
              className="w-full max-w-md rounded-3xl shadow-2xl object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <About />
      <Services />
      <Achivements />
      <Team />
      <StudyVisaCountries />
      <CountryHighlights />
      <HowItWorks />
      <CoachingCards />
      <ContactSection />
    </>
  );
};

export default Home;
