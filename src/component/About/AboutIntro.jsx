import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const AboutIntro = () => (
  <div className="text-center max-w-4xl mx-auto">
    <Helmet>
      <title>About Us | Taylor Moto</title>
      <meta
        name="description"
        content="Learn about Taylor Moto – trusted across India for premium engine oils built for performance, protection, and reliability."
      />
    </Helmet>

    {/* Heading updated from h2 to h1 for correct semantic structure */}
    <motion.h1
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-4xl md:text-5xl font-bold mb-6"
    >
      About Taylor Moto
    </motion.h1>

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
