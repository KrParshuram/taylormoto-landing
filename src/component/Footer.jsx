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
    <footer className="bg-gray-900 text-gray-200 py-10 px-6" aria-label="Site Footer">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        
        {/* Brand Info */}
        <section aria-label="Company Description">
          <h2 className="text-2xl font-bold text-white mb-3">Taylor Moto</h2>
          <p className="text-gray-400">
            Engineered to perform. Built to protect. We provide premium quality
            engine oils trusted by professionals across India.
          </p>
        </section>

        {/* Quick Links */}
        <nav aria-label="Footer Navigation">
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#about" className="hover:text-white transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#products" className="hover:text-white transition">
                Our Products
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>

        {/* Contact Info & Social */}
        <section aria-label="Contact and Social Links" className="space-y-3">
          <h3 className="text-xl font-semibold mb-3">Contact</h3>
          <address className="not-italic space-y-2 text-gray-400">
            <p className="flex items-center gap-2">
              <FaPhoneAlt aria-hidden="true" /> <a href="tel:+919876543210" className="hover:text-white">+91 98765 43210</a>
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope aria-hidden="true" /> <a href="mailto:contact@taylormoto.com" className="hover:text-white">contact@taylormoto.com</a>
            </p>
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt aria-hidden="true" /> Mumbai, India
            </p>
          </address>

          <div className="flex gap-4 mt-4 text-lg" aria-label="Social Media Links">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Follow us on Facebook"
              aria-label="Facebook"
              className="hover:text-white"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Follow us on Instagram"
              aria-label="Instagram"
              className="hover:text-white"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Connect on LinkedIn"
              aria-label="LinkedIn"
              className="hover:text-white"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </section>
      </div>

      <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-700 pt-6">
        &copy; {new Date().getFullYear()} Taylor Moto. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
