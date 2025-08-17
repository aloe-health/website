// CURRENTLY NOT USED
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="snap-start flex items-center justify-center bg-gray-900 h-screen">
      <motion.div
        className="max-w-2xl text-center px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* <h2 className="text-4xl font-bold mb-4">About</h2> */}
        <p className="text-lg text-gray-300">
          aloe is a health tech startup based in Utah
          <br />
          <br />
          we're building the next generation of technology to change the way we think about medicine
        </p>
      </motion.div>
    </section>
  );
};

export default About;