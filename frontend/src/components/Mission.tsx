/*
Author: Assistant <assistant@ai.com>
Created: 2024-12-19
Purpose: Mission component with feature cards and icons for Aloe frontend
*/

import { Component } from "solid-js";
import { Motion } from "solid-motionone";
import { Heart, Home, Clock } from "lucide-solid";

const Mission: Component = () => {
  const featureData = [
    {
      icon: () => <Heart size={40} class="text-red-500" />,
      title: "your health",
      description:
        "you deserve to know the important stuff happening on the inside",
    },
    {
      icon: () => <Home size={40} class="text-blue-500" />,
      title: "in the home",
      description:
        "we're bringing safe and accessible medical imaging to your kitchen",
    },
    {
      icon: () => <Clock size={40} class="text-green-500" />,
      title: "whenever you want",
      description: "diseases develop quickly so we help you look often",
    },
  ];

  return (
    <section class="snap-start flex items-center justify-center bg-white min-h-screen py-12">
      <Motion.div
        class="container mx-auto px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 class="text-4xl font-bold text-center mb-12">
          your doctor can't see you every week...
          <br />
          but we can.
        </h2>
        <div class="flex flex-wrap -mx-4">
          {featureData.map((feature, index) => (
            <div class="w-full md:w-1/3 px-4 mb-8">
              <Motion.div
                class="bg-white p-8 rounded-lg shadow-lg text-center h-full"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
                hover={{ scale: 1.05 }}
              >
                <div class="mb-4 flex justify-center">{feature.icon()}</div>
                <h3 class="text-2xl font-semibold mb-2">{feature.title}</h3>
                <p class="text-gray-600">{feature.description}</p>
              </Motion.div>
            </div>
          ))}
        </div>
      </Motion.div>
    </section>
  );
};

export default Mission;
