import React from "react";
import founderImage from "../assets/gurbaaz.png";

const FounderSection = () => {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-br from-[#101b2d] via-[#0f172a] to-[#1c1e29] overflow-hidden">
      {/* Glowing Background Blobs */}
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-orange-500 opacity-20 blur-[120px] rounded-full z-0" />
      <div className="absolute -bottom-20 -right-10 w-80 h-80 bg-blue-500 opacity-20 blur-[100px] rounded-full z-0" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Founder Card */}
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl shadow-yellow-500/10 transition-transform hover:scale-[1.02] duration-500">
          <img
            src={founderImage}
            alt="Founder Gurbaj Singh"
            className="w-full h-auto object-cover rounded-2xl border-4 border-yellow-400/30 mb-6 shadow-lg"
          />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Gurbaj Singh Sarpanch
          </h2>
          <p className="text-sm text-yellow-400 font-medium mb-4">
            Founder, Vertex Study Overseas
          </p>
          <p className="text-gray-300 leading-relaxed text-[16px] mb-4">
            With over <strong>8+ years of global experience</strong> in visa consultation and education strategy, Gurbaj has built Vertex into a brand of trust, transparency, and results. Now based in the UK, he’s helped thousands achieve their study abroad dreams.
          </p>
          <p className="text-gray-400 text-sm">
            “Every student has a unique path. My mission is to help them walk it with confidence and clarity.”
          </p>
        </div>

        {/* Right Side - Title & CTA */}
        <div className="text-white text-center md:text-left">
          <h3 className="text-4xl sm:text-5xl font-extrabold mb-4 bg-gradient-to-r from-yellow-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
            👨‍🎓 Driven by Purpose.
          </h3>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
            Meet the visionary behind Vertex — dedicated to making international education accessible, ethical, and impactful.
          </p>
          <button className="bg-gradient-to-r from-yellow-400 to-pink-500 hover:from-yellow-500 hover:to-pink-400 text-black font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 hover:scale-105">
            Know More
          </button>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
