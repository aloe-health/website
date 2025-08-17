import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="snap-start flex items-center justify-center bg-gradient-to-t from-emerald-400 to-green-100 h-screen">
      <motion.h1
        className="text-8xl md:text-8xl font-bold text-white"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 1.1, type: 'spring', stiffness: 120 }}
      >
        aloe.
      </motion.h1>
    </section>
  );
};

export default Hero;