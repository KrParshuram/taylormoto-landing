// src/components/Hero.jsx
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-gradient-to-gray-900 to-gray-300 text-white text-center">
      {/* Animated Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight"
      >
        Welcome to <span className="text-red-600">Taylor Moto</span>
      </motion.h1>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-6 max-w-2xl text-lg md:text-xl text-gray-300"
      >
        India’s trusted name in premium engine oils. For over a decade, we’ve been powering engines across industries — delivering protection, performance, and peace of mind.
      </motion.p>

      {/* Call to Action */}
      <a href="#products">
      <motion.button
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-8 px-8 py-3 rounded-full bg-red-600 hover:bg-red-700 text-white font-semibold shadow-lg transition"
      >
        Explore Our Products
      </motion.button>
    </a>
    </section>
  );
};

export default Hero;
