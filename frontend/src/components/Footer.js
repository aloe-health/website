import React from 'react';
import { motion } from 'framer-motion';
import '../App.css';

const Footer = () => {
  return (
    <footer className="snap-start flex items-center justify-center bg-gray-800 text-gray-300 h-screen">
      <motion.div
        className="text-center px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <p className="flex items-center justify-center mb-2">
          <img
            src="/images/logo/64logo.png"
            alt="Aloe Icon"
            className="m-1 w-8 h-8" // Adjust size as needed
          />
          <br/>
        </p>
        <span>{new Date().getFullYear()} &copy; aloe health</span>
        <p className="mb-2">all rights reserved</p>
        <div className="mt-4">
          <p>reach us at <span className="hover-effect"><a href="mailto:contact@aloe-health.tech">contact@aloe-health.tech</a></span></p>
          {/* Add your Social Media Icons here */}
          {/* Example:
          <a href="#" className="mx-2">
            <FaFacebookF />
          </a>
          <a href="#" className="mx-2">
            <FaTwitter />
          </a>
          */}
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;