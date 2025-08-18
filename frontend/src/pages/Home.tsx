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
import Team from "../components/Team";
import Footer from "../components/Footer";

const Home: Component = () => {
  return (
    <div class="Home snap-y snap-mandatory overflow-y-scroll h-screen">
      <Hero />
      <Mission />
      <About />
      <Contact />
      <Team />
      <Footer />
    </div>
  );
};

export default Home;
