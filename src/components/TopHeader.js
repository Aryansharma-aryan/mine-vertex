import React from "react";
import { Mail, MapPin, Phone, Facebook, Instagram, Linkedin } from "lucide-react";

export default function Header() {
  return (
    <>
      {/* Top Bar */}
      <div className="bg-black text-white text-sm py-2 px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-4 flex-wrap justify-center">
          <span className="flex items-center gap-1">
            <Phone size={14} className="text-pink-400" />
            89300 00555
          </span>
          <span className="flex items-center gap-1">
            <Mail size={14} className="text-pink-400" />
            info@vertexoverseas.com
          </span>
          <span className="flex items-center gap-1">
            <MapPin size={14} className="text-pink-400" />
            Sco 3, Bikaner Sweets, Kurukshetra, Haryana
          </span>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-3 mt-2 md:mt-0">
          <a href="#" className="hover:text-pink-500"><Facebook size={16} /></a>
          <a href="#" className="hover:text-pink-500"><Linkedin size={16} /></a>
          <a href="#" className="hover:text-pink-500"><Instagram size={16} /></a>
        </div>
      </div>

     
    </>
  );
}
