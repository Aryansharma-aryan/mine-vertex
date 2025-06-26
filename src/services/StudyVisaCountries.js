import React from 'react';
import australiaFlag from '../assets/australia.png';
import ukFlag from '../assets/uk.png';
import canadaFlag from '../assets/canada.svg';
import nzFlag from '../assets/newzealand.png';

const countries = [
  { name: "Australia", flag: australiaFlag },
  { name: "United Kingdom", flag: ukFlag },
  { name: "Canada", flag: canadaFlag },
  { name: "New Zealand", flag: nzFlag },
];

const StudyVisaCountries = () => {
  return (
 <div className="px-4 pt-6 min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="text-center mb-6">
        <p className="text-xl text-pink-600 font-semibold tracking-wide uppercase ">Study Visa</p>
        <h2 className="text-xl font-bold text-gray-800 mt-1">
          Explore The World With Our <br className="sm:hidden" />
          Study Abroad Support
        </h2>
      </div>

      <div className="flex flex-col gap-5">
        {countries.map((country, index) => (
          <div
            key={index}
            className="flex items-center bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 px-5 py-4"
          >
            <img
              src={country.flag}
              alt={`${country.name} Flag`}
              className="w-10 h-10 rounded-full shadow-sm border border-gray-200 mr-4"
            />
            <span className="text-base sm:text-lg font-medium text-gray-800">{country.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudyVisaCountries;
