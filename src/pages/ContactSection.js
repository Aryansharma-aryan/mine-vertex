import React from "react";

export default function ContactSection() {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white px-6 pt-24 pb-20 flex flex-col items-center justify-center">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400 mb-10 text-center">
        📬 Contact Us
      </h2>

      <div className="w-full max-w-5xl grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-indigo-300">Vertex Overseas</h3>
          <p className="text-gray-300">
            📍 SCO 6 & 7, Vidhata Complex, Opp. New Bus Stand, Kurukshetra, Haryana 136118
          </p>
          <p>📞 <a href="tel:+919815215300" className="text-indigo-400 hover:underline">+91‑98152‑15300</a></p>
          <p>📧 <a href="mailto:info@vertexoverseas.com" className="text-indigo-400 hover:underline">info@vertexoverseas.com</a></p>
<p>
  🌐 <a
    href="https://vertexoverseas.com"
    className="text-indigo-400 hover:underline"
    target="_blank"
    rel="noopener noreferrer"
  >
    www.vertexoverseas.com
  </a>
</p>
        </div>

        {/* Contact Form */}
        <form className="bg-white text-gray-800 p-6 rounded-2xl shadow-xl space-y-4">
          <div>
            <label className="block font-semibold">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <label className="block font-semibold">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <label className="block font-semibold">Message</label>
            <textarea
              rows="4"
              placeholder="Write your message"
              className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-semibold transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
