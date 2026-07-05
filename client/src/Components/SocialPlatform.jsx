import React from 'react'
import { SiLeetcode } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";
import { SiHackerrank } from 'react-icons/si';
import { FaLongArrowAltRight } from "react-icons/fa";
import LT from "../assets/LT.png";
import GFG from "../assets/GFG.png";
import HR from "../assets/HR.png";
import { motion } from 'framer-motion';

const platforms = [
  {
    "id" : 1,
    "ImageURL" : LT,
    "name" : "LeetCode",
    "logo" : SiLeetcode,
    "siteURL" : "https://leetcode.com/u/Zaheer-Ahmed/"
  },

  {
    "id" : 2,
    "ImageURL" : GFG,
    "name" : "GeeksforGeeks",
    "logo" : SiGeeksforgeeks,
    "siteURL" : "https://www.geeksforgeeks.org/profile/zaheer1103"
  },

  {
    "id" : 3,
    "ImageURL": HR,
    "name" : "HackerRank",
    "logo" : SiHackerrank,
    "siteURL" : "https://www.hackerrank.com/profile/szaheer1103"
  }
]

const DisplayPlatform = ({ image, name, logo, siteURL }) => {

  const IconComponent = logo

  return (
    <div className='flex flex-wrap w-[400px] border rounded-xl p-2 my-2 
    transition-all duration-500 ease-in-out
    hover:-translate-y-3
    hover:scale-105
    hover:shadow-[0_0_25px_#06d6a8]'>
      <img src={image} alt={name} className='w-full h-70 my-5 rounded-lg' />
      <div className='flex w-full justify-between'>
        <h1 className='flex items-center gap-1 text-1xl text-sm bg-[#06d6a0] px-2 py-1 rounded-lg hover:cursor-pointer'>{name} <span><FaLongArrowAltRight/></span></h1>
        <span className='cursor-pointer'>
            <a href={siteURL} target='_blank'><IconComponent size="2rem" /></a>
        </span>
      </div>
    </div>
  )
}


const SocialPlatform = () => {
  return (
    <motion.div 
    initial={{opacity : 0, y : 80}}
    whileInView={{opacity : 1, y : 0}}
    viewport={{once : true, amount : 0.2}}
    transition={{
      duration: 0.8,
      ease : "easeOut"
    }}
    id='SocialPlatform'
    className='my-12 mx-24'>
        <h1 className='text-center text-2xl font-bold'>Coding Platform</h1>

        <section className='flex gap-15 flex-wrap justify-center items-center rounded-lg my-7'>
          {
            platforms.map((platform) => {
              return <DisplayPlatform key={platform.id} image={platform.ImageURL} name={platform.name} logo={platform.logo} siteURL={platform.siteURL}/>
            })
          }
        </section>
    </motion.div>
  )
}

export default SocialPlatform
