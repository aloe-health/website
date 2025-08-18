import React from 'react';
import Hero from './components/Hero';
import Team from './components/Team';
import Mission from './components/Mission';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App snap-y snap-mandatory overflow-y-scroll h-screen">
        <Hero />
        {/* main scroll section */}
        {/* <div className="snap-start"> */}
          <Mission />
          <About />
          <Contact />
          <Team />
        {/* </div> */}
        <Footer />
    </div>
  );
}

export default App;