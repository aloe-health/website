/*
Author: Assistant <assistant@ai.com>
Created: 2024-12-19
Purpose: 404 NotFound page component for Aloe frontend
*/

import { Component } from "solid-js";
import { Motion } from "solid-motionone";
import { A } from "@solidjs/router";

const NotFound: Component = () => {
  return (
    <div class="min-h-screen bg-gradient-to-t from-emerald-400 to-green-100 flex items-center justify-center">
      <Motion.div
        class="text-center text-white max-w-2xl px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Motion.div
          class="text-lg font-bold mb-8 opacity-80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          aloe.
        </Motion.div>

        <Motion.div
          class="text-8xl md:text-9xl font-bold leading-none mb-4 drop-shadow-md"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          404
        </Motion.div>

        <Motion.h1
          class="text-2xl md:text-3xl font-semibold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Page Not Found
        </Motion.h1>

        <Motion.p
          class="text-lg md:text-xl mb-8 opacity-90 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          The page you're looking for doesn't exist or has been moved.
          <br />
          Let's get you back to where the healing happens.
        </Motion.p>

        <Motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <A
            href="/"
            class="inline-block px-8 py-4 bg-white bg-opacity-20 text-white border-2 border-white border-opacity-30 rounded-lg font-semibold text-lg hover:bg-opacity-30 hover:border-opacity-50 transition-all duration-300 hover:-translate-y-1"
          >
            Return Home
          </A>
        </Motion.div>

        <Motion.div
          class="mt-12 text-sm opacity-75"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          <p>
            Need help?
            <br />
            Reach us at{" "}
            <a
              href="mailto:contact@aloe-health.tech"
              class="underline hover:no-underline"
            >
              contact@aloe-health.tech
            </a>
          </p>
        </Motion.div>
      </Motion.div>
    </div>
  );
};

export default NotFound;
