/*
Author: Assistant <assistant@ai.com>
Created: 2024-12-19
Purpose: Home page component containing all main sections for Aloe frontend
*/

import { Component } from "solid-js";
import Hero from "../components/Hero";
import Mission from "../components/Mission";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home: Component = () => {
  return (
    <div class="Home">
      <Hero />
      <Mission />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
