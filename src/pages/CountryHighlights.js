import React from "react";

const countries = [
  {
    name: "Canada",
    emoji: "🇨🇦",
    successRate: "95%",
    description: "Top choice for study and PR programs.",
  },
  {
    name: "Australia",
    emoji: "🇦🇺",
    successRate: "92%",
    description: "Great education system and work rights.",
  },
  {
    name: "United Kingdom",
    emoji: "🇬🇧",
    successRate: "90%",
    description: "Home to world-class universities.",
  },
  {
    name: "United States",
    emoji: "🇺🇸",
    successRate: "88%",
    description: "Best for STEM programs and job options.",
  },
  {
    name: "New Zealand",
    emoji: "🇳🇿",
    successRate: "91%",
    description: "Safe, affordable, and career-oriented.",
  },
];

export default function CountryHighlights() {
  return (
    <section className="bg-gradient-to-br from-blue-100 via-white to-indigo-100 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-12 drop-shadow-md">
          🌍 Explore Your Dream Destinations
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center">
          {countries.map((country, index) => (
            <div
              key={index}
              className="bg-white/40 backdrop-blur-md border border-white/20 rounded-3xl p-6 shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.03] hover:bg-white/70 cursor-pointer group"
            >
              {/* ✨ Flag Emoji Display */}
              <div className="text-5xl mb-4 animate-bounce drop-shadow-sm transition-transform duration-300 group-hover:scale-110">
                {country.emoji}
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-1 tracking-wide group-hover:text-indigo-700">
                {country.name}
              </h3>

              <p className="text-sm text-gray-700 mb-3">{country.description}</p>

              <p className="text-green-700 font-medium text-sm mt-2">
                ✅ Visa Success Rate:{" "}
                <span className="font-semibold text-green-800">
                  {country.successRate}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
