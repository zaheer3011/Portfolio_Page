import React from 'react'
import { motion } from 'framer-motion'

const DisplaySkill = ({skill}) => {
    return (
        <button  className="bg-[#06d6a0] text-black font-medium py-2 px-3 rounded-lg text-sm transition-all duration-300 cursor-pointer
        mb-3
        hover:scale-110 
        hover:bg-emerald-400 
        hover:shadow-lg active:scale-95">{skill}</button>
    )
}

const Skills = () => {

    const skills_arr = ["HTML", "CSS", "JavaScript", "React JS", "Node JS", "Mongo DB", "Express JS", "JQuery", "Tailwind CSS", "Java", "C/C++", "SQL"];

  return (
    <motion.div 
    initial={{ opacity: 0, y: 80}}
    whileInView={{opacity: 1, y:0}}
    viewport={{once : true, amount: 0.2}}
    transition={{
        duration: 0.8,
        ease : "easeOut"
    }}
    id='Skills'
     className='m-20'>
        <h1 className='text-center text-2xl font-bold'  >Skills</h1>

        <div className='flex flex-wrap justify-center items-center m-5 space-x-3'>
            {
                skills_arr.map((skill, index) => {
                    return <DisplaySkill key={index} skill={skill}/>
                })
            }
        </div>

    </motion.div>
  )
}

export default Skills
