import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-12 px-6">
      <div className="max-w-7xl mx-auto grid gap-10 grid-cols-1 md:grid-cols-4">
        {/* Brand & Contact */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Vertex Overseas</h3>
          <p>📍 SCO 6 & 7, Vidhata Complex, Opp. New Bus Stand, Kurukshetra, Haryana 136118</p>
          <p>📞 +91‑98152‑15300</p>
          <p>✉️ info@vertexoverseas.com</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/services" className="hover:text-white">Services</a></li>
            <li><a href="/coaching/ielts" className="hover:text-white">IELTS Coaching</a></li>
            <li><a href="/coaching/pte" className="hover:text-white">PTE Coaching</a></li>
            <li><a href="/coaching/spoken-english" className="hover:text-white">Spoken English</a></li>
            <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
          </ul>
        </div>

        {/* Country Services */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Visa Services By Country</h4>
          <ul className="space-y-2">
            <li>Canada – Study, PR, Tourist</li>
            <li>Australia – Study, Work, PR</li>
            <li>UK – Student, Dependent, Tourist</li>
            <li>USA – F1, H1B, Visitor</li>
            <li>New Zealand – Study, Work, PR</li>
          </ul>
        </div>

        {/* Newsletter & Social */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold mb-4 text-white">Stay Updated</h4>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="flex-grow px-4 py-2 rounded-lg text-gray-800"
            />
            <button className="px-4 py-2 bg-indigo-600 rounded-lg hover:bg-indigo-700 transition">
              Subscribe
            </button>
          </form>
          <div className="flex gap-4 mt-2">
            <a href="https://facebook.com" aria-label="Facebook"><FaFacebook size={20} /></a>
            <a href="https://instagram.com" aria-label="Instagram"><FaInstagram size={20} /></a>
            <a href="https://linkedin.com" aria-label="LinkedIn"><FaLinkedin size={20} /></a>
            <a href="https://youtube.com" aria-label="YouTube"><FaYoutube size={20} /></a>
            <a href="https://wa.me/919815215300" aria-label="WhatsApp"><FaWhatsapp size={20} /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Vertex Overseas. All Rights Reserved.
      </div>
    </footer>
  );
}
