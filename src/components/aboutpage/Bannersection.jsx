import React from 'react';
import { motion } from 'framer-motion';

const Bannersection = () => {
  return (
    <section className="w-full py-12 border-y font2">
      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.h3
          className="text-2xl font-semibold font3 bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent inline-block"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
          whileHover={{ scale: 1.05 }}
        >
          Let’s Build Something Great
        </motion.h3>

        {/* Subtext */}
        <motion.p
          className="mt-2 opacity-80 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          I create modern & clean UI websites with animations.
        </motion.p>

      </div>
    </section>
  );
};

export default Bannersection;
