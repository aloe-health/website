/*
Author: Assistant <assistant@ai.com>
Created: 2024-12-19
Purpose: About component with simple text section for Aloe frontend
*/

import { Component } from "solid-js";
import { Motion } from "solid-motionone";

const About: Component = () => {
  return (
    <section class="snap-start flex items-center justify-center bg-gray-900 h-screen">
      <Motion.div
        class="max-w-2xl text-center px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p class="text-lg text-gray-300">
          aloe is a health tech startup based in Utah
          <br />
          <br />
          we're building the next generation of technology to change the way we
          think about medicine
        </p>
      </Motion.div>
    </section>
  );
};

export default About;
