// src/components/Hero.tsx
"use client";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16 text-white text-center"
      aria-label="Taylor Moto Hero Section"
    >
      {/* Animated Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg"
      >
        Welcome to <span className="text-red-600">Taylor Moto</span>
      </motion.h1>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-6 max-w-2xl text-lg md:text-xl text-gray-200 drop-shadow"
      >
        India’s trusted name in premium engine oils for over a decade — delivering unmatched protection, performance, and peace of mind across industries.
      </motion.p>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-8"
      >
        <a
          href="#products"
          className="px-8 py-3 rounded-full bg-red-600 hover:bg-red-700 text-white font-semibold shadow-lg transition"
        >
          Explore Our Products
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
