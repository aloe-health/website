/*
Author: Assistant <assistant@ai.com>
Created: 2024-12-19
Purpose: Footer component with logo and contact information for Aloe frontend
*/

import { Component } from "solid-js";
import { Motion } from "solid-motionone";

const Footer: Component = () => {
  return (
    <footer class="snap-start flex items-center justify-center bg-gray-800 text-gray-300 h-screen">
      <Motion.div
        class="text-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p class="flex items-center justify-center mb-2">
          <img
            src="/images/logo/64logo.png"
            alt="Aloe Icon"
            class="m-1 w-8 h-8"
          />
          <br />
        </p>
        <span>{new Date().getFullYear()} &copy; aloe health</span>
        <p class="mb-2">all rights reserved</p>
        <div class="mt-4">
          <p>
            reach us at{" "}
            <span class="hover-effect">
              <a href="mailto:contact@aloe-health.tech">
                contact@aloe-health.tech
              </a>
            </span>
          </p>
        </div>
      </Motion.div>
    </footer>
  );
};

export default Footer;
