import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  const exp_one = ["HTML", "CSS", "JavaScript"];
  const exp_two = ["HTML", "CSS", "JavaScript", "React JS"];

  return (
    <motion.div 
      initial={{opacity : 0, y : 80}}
      whileInView={{opacity: 1, y : 0}}
      viewport={{once : true, amount : 0.2}}
      transition={{
        duration: 0.8,
        ease: "easeOut"
      }}
      id="Experience"
    className="m-25">
      {/* Heading */}
      <h1
        className="text-center text-3xl font-bold mb-10
        bg-gradient-to-r from-[#06d6a0] via-cyan-400 to-blue-500
        bg-clip-text"
      >
        Experience
      </h1>

      <section className="flex flex-col justify-center items-center gap-12">

        {/* Internship 1 */}
        <aside className="lg:w-1/2 md:w-full sm:w-full">
          <div
            className=" border border-gray-700 rounded-xl p-6
            transition-all duration-500 ease-in-out
            hover:-translate-y-3
            hover:scale-105
            hover:shadow-[0_0_25px_#06d6a0]"
          >
            <div className="flex justify-between mb-4">
              <div>
                <h2 className="font-bold text-lg">
                  Web Developer Intern
                </h2>
                <p className="italic text-gray-400">
                  Chennai, Tamil Nadu (Remote)
                </p>
              </div>

              <div className="text-right">
                <h2 className="font-bold">CodSoft</h2>
                <p className="italic text-gray-400">
                  Nov 2024 - Dec 2024
                </p>
              </div>
            </div>

            <ul className="list-disc ml-5 space-y-2">
              <li>Developed Responsive Portfolio Website.</li>
              <li>Developed Calculator Application.</li>
            </ul>

            <div className="flex flex-wrap gap-3 mt-5">
              {exp_one.map((e, index) => (
                <button
                  key={index}
                  className="bg-[#06d6a0] text-black font-medium
                  py-1 px-3 rounded-lg text-sm
                  transition-all duration-300
                  hover:scale-110
                  hover:bg-emerald-400
                  hover:shadow-lg
                  active:scale-95"
                >
                  {e}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Internship 2 */}
        <aside className="lg:w-1/2 md:w-full sm:w-full">
          <div
            className=" border border-gray-700 rounded-xl p-6
            transition-all duration-500 ease-in-out
            hover:-translate-y-3
            hover:scale-105
            hover:border-[#06d6a0]
            hover:shadow-[0_0_25px_#06d6a0]"
          >
            <div className="flex justify-between mb-4">
              <div>
                <h2 className="font-bold text-lg">
                  Web Developer Intern
                </h2>
                <p className="italic text-gray-400">
                  Chennai, Tamil Nadu (Remote)
                </p>
              </div>

              <div className="text-right">
                <h2 className="font-bold">NullClass</h2>
                <p className="italic text-gray-400">
                  March 2025 - June 2025
                </p>
              </div>
            </div>

            <ul className="list-disc ml-5 space-y-2">
              <li>Developed Real-Time Website like YouTube.</li>
              <li>Developed YouTube Clone using React JS.</li>
            </ul>

            <div className="flex flex-wrap gap-3 mt-5">
              {exp_two.map((e, index) => (
                <button
                  key={index}
                  className="bg-[#06d6a0] text-black font-medium
                  py-1 px-3 rounded-lg text-sm
                  transition-all duration-300
                  cursor-pointer
                  hover:scale-110
                  hover:bg-emerald-400
                  hover:shadow-lg
                  active:scale-95"
                >
                  {e}
                </button>
              ))}
            </div>
          </div>
        </aside>

      </section>
    </motion.div>
  );
};

export default Experience;