// src/components/About/AboutIntro.jsx
import { motion } from "framer-motion";

const AboutIntro = () => (
  <div className="text-center max-w-4xl mx-auto">
    <motion.h2
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-4xl md:text-5xl font-bold mb-6"
    >
      About Taylor Moto
    </motion.h2>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className="text-lg md:text-xl text-gray-600 leading-relaxed"
    >
      At <span className="text-red-600 font-semibold">Taylor Moto</span>, we specialize in premium engine oils engineered to protect and enhance performance for all types of engines.
    </motion.p>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      className="mt-6 text-base md:text-lg text-gray-500"
    >
      Trusted by riders and professionals nationwide for reliability, efficiency, and performance.
    </motion.p>
  </div>
);

export default AboutIntro;
