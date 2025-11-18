import React from "react";
import { Facebook, Instagram, Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-950 text-white py-10 px-8 mt-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo / Name */}
        <div>
          <h2 className="text-2xl font-bold">Abubakar Afzal</h2>
          <p className="text-gray-400 mt-2">Frontend Web Develope</p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-lg mb-2">Quick Links</h3>
          <Link to="/about" className="text-gray-300 hover:text-white">About</Link>
          <Link to="/projects" className="text-gray-300 hover:text-white">Projects</Link>
          <Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Follow Me</h3>
          <div className="flex gap-5 text-gray-300">
            <a href="#" className="hover:text-white"><Github /></a>
            <a href="#" className="hover:text-blue-600"><Facebook /></a>
            <a href="#" className="hover:text-pink-500"><Instagram /></a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-5">
        ©  Abubakar Afzal Portfolio.   All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;