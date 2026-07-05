import React, { useState } from 'react'
import CA1 from '../assets/CA1.png';
import MA from '../assets/MA.png'
import TH from '../assets/TH.png'
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const DisplayProject = ({ img, title, description, skills, url }) => {

  const [projectDescription] = useState(description || [])
  console.log(projectDescription);
  const [projectSkills] = useState(skills || [])
  
  return (
    <motion.div 
    // initial={{opacity : 0, y : 80}}
    // whileInView={{opacity : 1, y : 0}}
    // viewport={{once : true, amount : 0.2}}
    // transition={{
    //   duration: 1,
    //   ease: "easeIn"
    // }}
    
    className='w-[400px] border p-3 rounded-lg
    transition-all duration-500 ease-in-out cursor-pointer
    hover:-translate-y-3
    hover:scale-10s
    hover:border-[#06d6a8]
    hover:shadow-[0_0_25px_#06d6a0]
  '>
      <img className='w-full h-80 object-center rounded-lg' src={img} alt={title} />

      <h1 className='flex justify-between items-center font-bold text-2xl my-2'>{title}
        <span>
          <a href={url} target='_blank'><FaGithub style={{
          fontSize : '1.2rem'}}/>
          </a>
        </span>
      </h1>

      <ul className='my-1'>
          {
            projectDescription.map((desc, index) => {
              return <li className='italic text-gray-600 text-[.9rem] text-justify list-disc ml-4' key={index}>{desc}</li>
            })
          }
      </ul> 

      <div className='flex flex-wrap gap-2 mt-4'>
        {
          projectSkills.map((skill, index) => {
            return <button className='bg-[#06d6a0] p-[4px] rounded-lg text-sm transition-all duration-300 hover:scale-110 hover:bg-emerald-400 hover:shadow-lg active-95 hover:cursor-pointer' key={index}>{skill}</button>
          })
        }
      </div>
    </motion.div>
  )
}

const projects = [

  {
    "id" : 1,
    "project_img" : CA1,
    "project_title" : "Chat Application",
    "project_skills" : ["Mongo DB", "Express JS", "React JS", "Node JS"],
    "project_description" : ["Developed a real-time chat application using Mongo DB, Express JS, React JS, Node JS with a responsive and user-friendly interface.", "Implemented real-time messaging functionality using Socket.IO, including instant message delivery and active user status features", "Integrated RESTful APIs and Mongo DB database for secure message storage, user management, and seamless client server communication."],
    "project_link" : ""
  },

  {
    "id" : 2,
    "project_img" : MA,
    "project_title" : "MERN Authentication System",
    "project_skills" : ["Mongo DB", "Express JS", "React JS", "Node JS"],
    "project_description" : [" Developed a secure MERN stack authentication application using MongoDB, Express JS, React JS, Node JS, with responsive user interface design.", "Implemented user signup, login, logout, JWT-authentication, password encryption using bcrypt and protected routes for secure access control.", "Integrated RESTFul APIs and MongoDB database for efficient user data management and seamless client-server communication."],
    "project_link" : "" 
  }, 

  {
    "id" : 3,
    "project_img" : TH,
    "project_title" : "Tasty Hub",
    "project_skills" : ["HTML", "CSS", "JavaScript"],
    "project_description" : ["Develped a responsive e-commorce website using HTML, CSS and Javascript with dynamic product images, cart functionality, and interactive UI components."],
    "project_link" : "https://zaheer3011.github.io/TastyHub/"
  }
]

const Project = () => {
  return (
    <motion.div 
    initial={{opacity : 0, y : 80}}
    whileInView={{opacity : 1, y : 0}}
    viewport={{once : true, amount : 0.2}}
    transition={{
      duration: 0.8,
      ease: "easeOut"
    }}
    id='Project'
     className='my-25'>
      <h1 className='text-center text-2xl font-bold'>Project</h1>

      <motion.section 
      initial={{opacity : 0, y : 80}}
      whileInView={{opacity : 1, y : 0}}
      viewport={{once : true, amount : 0.2}}
      transition={{
        duration : 0.8,
        ease : "easeOut"
      }}
      className='flex flex-wrap justify-center gap-8 mx-12 my-18'>
          {
            projects.map((project) => {
              return <DisplayProject key={project.id} img={project.project_img} title={project.project_title} description={project.project_description} skills={project.project_skills} url={project.project_link} />
            })
          }
      </motion.section>
    </motion.div>
  )
}

export default Project
