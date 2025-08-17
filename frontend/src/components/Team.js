import React from 'react';
import { motion } from 'framer-motion';

const Team = () => {
  const teamMembers = [
    {
      name: 'nathaniel fargo',
      image: '/images/team/nathaniel-fargo-profile-1.jpg', // Ensure the path is correct
    },
    {
      name: 'spencer marx',
      image: '/images/team/spencer-marx-profile-1.jpg', // Replace with the actual image path
    },
  ];

  return (
    <section className="snap-start flex items-center justify-center bg-white h-screen">
      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-center mb-12">our founders</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
              viewport={{ once: true }}
            >
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-gray-500">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="mt-4 text-2xl font-semibold">{member.name}</h3>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Team;