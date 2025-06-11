// src/components/Footer/Footer.jsx
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">Taylor Moto</h2>
          <p className="text-gray-400">
            Engineered to perform. Built to protect. We provide premium quality
            engine oils trusted by professionals across India.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#about" className="hover:text-white transition">
                About
              </a>
            </li>
            <li>
              <a href="#products" className="hover:text-white transition">
                Products
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info & Social */}
        <div className="space-y-3">
          <h3 className="text-xl font-semibold mb-3">Contact</h3>
          <p className="flex items-center gap-2 text-gray-400">
            <FaPhoneAlt /> +91 98765 43210
          </p>
          <p className="flex items-center gap-2 text-gray-400">
            <FaEnvelope /> contact@taylormoto.com
          </p>
          <p className="flex items-center gap-2 text-gray-400">
            <FaMapMarkerAlt /> Mumbai, India
          </p>

          <div className="flex gap-4 mt-4 text-lg">
            <a href="#" className="hover:text-white">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-white">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-white">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-700 pt-6">
        &copy; {new Date().getFullYear()} Taylor Moto. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
