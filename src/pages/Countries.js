import {
  FaCanadianMapleLeaf,
  FaFlagUsa,
  FaGlobeEurope,
  FaGlobeAsia
} from "react-icons/fa";

import Marquee from "react-fast-marquee"; // Make sure this is installed: `npm install react-fast-marquee`

const countries = [
  {
    name: "Canada",
    Icon: FaCanadianMapleLeaf,
    color: "bg-gradient-to-r from-red-500 to-red-700",
  },
  {
    name: "Australia",
    Icon: FaGlobeAsia,
    color: "bg-gradient-to-r from-blue-600 to-indigo-800",
  },
  {
    name: "UK",
    Icon: FaGlobeEurope,
    color: "bg-gradient-to-r from-pink-600 to-red-800",
  },
  {
    name: "USA",
    Icon: FaFlagUsa,
    color: "bg-gradient-to-r from-blue-800 to-gray-900",
  },
];

const CountriesWeServe = () => {
  return (
    <section className="py-24 px-6 bg-gray-950 text-white font-[Poppins] relative overflow-hidden">
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-yellow-400 animate-pulse">
          🌍 Countries We Serve
        </h2>
        <p className="text-lg md:text-xl text-gray-300">
          Explore top global destinations with unmatched guidance and success rates.
        </p>
      </div>

      {/* Cards Marquee (scrolling to the right) */}
      <Marquee
        direction="right"
        speed={50}
        pauseOnHover
        gradient={true}
        gradientColor={[15, 23, 42]}
      >
        <div className="flex gap-8 px-4">
          {countries.map(({ name, Icon, color }, index) => (
            <div
              key={index}
              className={`w-[300px] rounded-2xl p-6 shadow-xl transform hover:scale-105 transition duration-300 ${color}`}
            >
              <div className="flex flex-col items-center text-center gap-4">
                <Icon size={48} className="text-white animate-fade-in-up" />
                <h3 className="text-2xl font-bold uppercase">{name}</h3>
                <p className="text-sm text-gray-100 leading-relaxed">
                  Leading study destination with high visa success rates. Top universities, post-study work permits, and PR options.
                </p>
              </div>
            </div>
          ))}
        </div>
      </Marquee>

      {/* Bottom Marquee Text */}
      <div className="mt-20">
        <Marquee
          speed={60}
          gradient={true}
          gradientColor={[15, 23, 42]}
          className="text-yellow-300 font-semibold text-lg uppercase tracking-wider"
        >
          🇨🇦 Canada &nbsp; 🇦🇺 Australia &nbsp; 🇬🇧 UK &nbsp; 🇺🇸 USA &nbsp; – Study Abroad With Vertex Study Visa – &nbsp;
        </Marquee>
      </div>
    </section>
  );
};

export default CountriesWeServe;
