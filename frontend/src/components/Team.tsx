/*
Author: Assistant <assistant@ai.com>
Created: 2024-12-19
Purpose: Team component with founder profiles for Aloe frontend
*/

import { Component } from "solid-js";
import { Motion } from "solid-motionone";

interface TeamMember {
  name: string;
  image: string;
}

const Team: Component = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "nathaniel fargo",
      image: "/images/team/nathaniel-fargo-profile-1.jpg",
    },
    {
      name: "spencer marx",
      image: "/images/team/spencer-marx-profile-1.jpg",
    },
  ];

  return (
    <section class="snap-start flex items-center justify-center bg-white h-screen">
      <Motion.div
        class="container mx-auto px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 class="text-4xl font-bold text-center mb-12">our founders</h2>
        <div class="flex flex-col md:flex-row justify-center items-center gap-12">
          {teamMembers.map((member, index) => (
            <Motion.div
              class="flex flex-col items-center"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
            >
              <div class="w-40 h-40 rounded-full overflow-hidden border-4 border-gray-500">
                <img
                  src={member.image}
                  alt={member.name}
                  class="w-full h-full object-cover"
                />
              </div>
              <h3 class="mt-4 text-2xl font-semibold">{member.name}</h3>
            </Motion.div>
          ))}
        </div>
      </Motion.div>
    </section>
  );
};

export default Team;
