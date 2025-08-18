/*
Author: Assistant <assistant@ai.com>
Created: 2024-12-19
Purpose: Main App component for SolidJS Aloe frontend application
*/

import { Component } from 'solid-js';
import Hero from './components/Hero';
import Mission from './components/Mission';
import About from './components/About';
import Contact from './components/Contact';
import Team from './components/Team';
import Footer from './components/Footer';

const App: Component = () => {
  return (
    <div class="App snap-y snap-mandatory overflow-y-scroll h-screen">
      <Hero />
      <Mission />
      <About />
      <Contact />
      <Team />
      <Footer />
    </div>
  );
};

export default App;
