import React from "react";
import TeamCard3D from "./TeamCard3d";
import team1 from "../assets/karanpal.jpeg";
import team2 from "../assets/vasundha.jpeg";
import team3 from "../assets/supreet.jpeg";
import businessMeeting from "../assets/meeting.png";

// Team member data
const members = [
  {
    name: "Mr. Karanpal Singh",
    role: "Senior Consultant - Global Tourist Visa Operations",
    image: team1,
  },
  {
    name: "Ms. Vasudha",
    role: "Senior Consultant - Canada Study Visa",
    image: team2,
  },
  {
    name: "Mr. Supreet Dhamija",
    role: "Senior Consultant - USA Study Visa",
    image: team3,
  },
];

const Team = () => {
  return (
    <section className="bg-black py-24 px-4">
      {/* Heading with Typewriter Effect */}
      <h2 className="text-4xl md:text-5xl text-center font-bold text-white mb-12 animate-typing whitespace-nowrap overflow-hidden bg-gradient-to-r from-pink-500 via-purple-400 to-blue-500 bg-clip-text text-transparent">
        🌍 Meet Our Expert Team
      </h2>

      {/* Team Cards */}
      <div className="flex flex-wrap justify-center gap-10">
        {members.map((member, i) => (
          <TeamCard3D key={i} {...member} />
        ))}
      </div>

      {/* Expertise & Values Section */}
      <div className="flex flex-col lg:flex-row mt-20">
        {/* Left Card (with background image) */}
        <div
          className="lg:w-1/2 relative p-10"
          style={{
            backgroundImage: `url(${businessMeeting})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gray-900 bg-opacity-80"></div>
          <div className="relative z-10 text-white space-y-6">
            <h3 className="text-xl font-bold text-orange-400 flex items-center">
              🎯 Get Expert Guidance That Delivers.
            </h3>
            <h2 className="text-3xl font-extrabold leading-snug">
              We’re not just a consultancy — we’re your career partners abroad.
            </h2>
            <p className="text-gray-300">
              At <span className="font-semibold text-white">Vertex Study Visa</span>, we believe every student and traveler deserves a trusted partner on their international journey.
            </p>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded transition">
              GET IN TOUCH
            </button>
          </div>
        </div>

        {/* Right Card (values list) */}
        <div className="lg:w-1/2 bg-yellow-500/90 text-black p-10 flex flex-col justify-center space-y-5">
          <h3 className="text-2xl font-bold flex items-center">
            ✅ Ethical & Transparent Process
          </h3>
          <p className="text-sm text-gray-800">
            We provide 100% honest advice — no shortcuts, no fake promises.
          </p>
          <ul className="text-base space-y-3 font-medium">
            <li>🕒 Timely Application Handling</li>
            <li>💼 Modern, Digitally-Enabled Services</li>
            <li>🌐 Updated Visa Rules Knowledge</li>
            <li>🎓 Backed by Experts with Global Experience</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Team;
