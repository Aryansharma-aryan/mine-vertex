// CoachingCards.jsx
import React, { useState } from "react";
import { Mic, Laptop2, BookOpen } from "lucide-react";
import { coachingDescriptions } from "./CoachingDescription"

const coachingData = [
  {
    title: "IELTS Coaching",
    key: "ielts",
    bg: "bg-gradient-to-br from-indigo-100 to-white",
    icon: <Mic className="w-8 h-8 text-indigo-700" />,
  },
  {
    title: "PTE Coaching",
    key: "pte",
    bg: "bg-gradient-to-br from-purple-100 to-white",
    icon: <Laptop2 className="w-8 h-8 text-purple-700" />,
  },
  {
    title: "Spoken English",
    key: "spokenEnglish",
    bg: "bg-gradient-to-br from-emerald-100 to-white",
    icon: <BookOpen className="w-8 h-8 text-emerald-700" />,
  },
];

export default function CoachingCards() {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (key) => {
    setExpanded((prev) => (prev === key ? null : key));
  };

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">🎓 Coaching Options</h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {coachingData.map((item) => (
            <div
              key={item.key}
              className={`${item.bg} p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300`}
            >
              <div className="mb-4 bg-white p-4 rounded-full w-fit shadow">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">{item.title}</h3>
              <p className="text-sm text-gray-700 whitespace-pre-line">
                {expanded === item.key
                  ? coachingDescriptions[item.key]
                  : coachingDescriptions[item.key].slice(0, 400) + "..."}
              </p>
              <button
                onClick={() => toggleExpand(item.key)}
                className="mt-4 inline-block px-4 py-2 text-sm rounded-xl bg-indigo-600 text-white shadow hover:bg-indigo-700 transition"
              >
                {expanded === item.key ? "Read Less" : "Read More"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
