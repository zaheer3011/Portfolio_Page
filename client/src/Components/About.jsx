import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      id="About Me"
      className="py-20"
    >
      <h1 className="text-center text-2xl font-bold">About Me</h1>

      <div className="mt-8">
        <h3 className="ml-8 font-bold">Hi, I'm Zaheer Ahmed</h3>

        <p className="mx-8 mt-2 text-justify">
          I am a Master's student in Computer Applications with a strong
          passion for technology and innovation. My skills include programming
          and solving problems using new technologies.
        </p>
      </div>
    </motion.section>
  );
};

export default About;