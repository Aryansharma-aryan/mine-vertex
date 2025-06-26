import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/vertexlogo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo + Name */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Vertex Overseas Logo" className="h-10 w-auto" />
          <span className="text-3xl font-semibold text-orange-500 select-none">Vertex Overseas</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-gray-700 text-base font-medium tracking-wide">
          <Link to="/" className="hover:text-blue-600 transition duration-300 ease-in-out">Home</Link>
          <Link to="/about" className="hover:text-blue-600 transition duration-300 ease-in-out">About</Link>
          <Link to="/services" className="hover:text-blue-600 transition duration-300 ease-in-out">Services</Link>
          <Link to="/coaching" className="hover:text-blue-600 transition duration-300 ease-in-out">Preparation</Link>
          <Link to="/contact" className="hover:text-blue-600 transition duration-300 ease-in-out">Contact</Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-white px-4 pb-4 space-y-2 text-gray-700 text-base font-medium shadow-md">
          <Link to="/" className="block py-2 hover:text-blue-600" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className="block py-2 hover:text-blue-600" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/services" className="block py-2 hover:text-blue-600" onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="/coaching" className="block py-2 hover:text-blue-600" onClick={() => setIsOpen(false)}>Preparation</Link>
          <Link to="/contact" className="block py-2 hover:text-blue-600" onClick={() => setIsOpen(false)}>Contact</Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
