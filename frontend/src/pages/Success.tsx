/*
Author: Assistant <assistant@ai.com>
Created: 2024-12-19
Purpose: Success page shown after successful form submission for Aloe frontend
*/

import { Component } from "solid-js";
import { Motion } from "solid-motionone";
import { A } from "@solidjs/router";
import { CheckCircle } from "lucide-solid";

const Success: Component = () => {
  return (
    <div class="min-h-screen bg-gradient-to-t from-emerald-400 to-green-100 flex items-center justify-center">
      <Motion.div
        class="text-center text-white max-w-2xl px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Motion.div
          class="flex justify-center mb-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <CheckCircle size={80} class="text-white drop-shadow-lg" />
        </Motion.div>

        <Motion.h1
          class="text-5xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Message Sent!
        </Motion.h1>

        <Motion.p
          class="text-xl md:text-2xl mb-8 leading-relaxed font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Thank you for reaching out to us.
          <br />
          We'll get back to you as soon as possible.
        </Motion.p>

        <Motion.div
          class="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <A
            href="/"
            class="inline-block px-8 py-4 bg-white text-emerald-600 border-2 border-white rounded-lg font-semibold text-lg hover:bg-emerald-50 hover:text-emerald-700 transition-all duration-300 hover:-translate-y-1"
          >
            Return Home
          </A>
        </Motion.div>
      </Motion.div>
    </div>
  );
};

export default Success;
