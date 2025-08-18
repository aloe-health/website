/*
Author: Assistant <assistant@ai.com>
Created: 2024-12-19
Purpose: Hero component with animated title and gradient background for Aloe frontend
*/

import { Component } from "solid-js";
import { Motion } from "solid-motionone";

const Hero: Component = () => {
  return (
    <section class="snap-start flex items-center justify-center bg-gradient-to-t from-emerald-400 to-green-100 h-screen">
      <Motion.h1
        class="text-8xl md:text-8xl font-bold text-white"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 0.5,
          duration: 1.1,
          easing: "ease-out",
        }}
      >
        aloe.
      </Motion.h1>
    </section>
  );
};

export default Hero;
