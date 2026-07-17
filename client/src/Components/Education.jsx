import React from 'react'
import {motion} from 'framer-motion'

const Education = () => {
  return (
    <motion.section
      initial={{ opacity : 0, y: 80}}
      whileInView={{ opacity: 1, y: 0}}
      viewport={{once : true, amount : 0.2}}
      transition={{
        duration: 0.8,
        ease: "easeInOut"
      }}
      id='Education'
      className='my-16 px-4 sm:px-6 lg:px-8'>
      <h1 className='text-center font-bold text-2xl'>Education</h1>

      <div className='flex justify-center items-center'>

        <section className='w-full lg:w-1/3 max-w-2xl'>

          <div className='my-5 border-1 p-5 rounded-lg transition-[0.6s] ease-in-out cursor-pointer
          hover:-translate-x-3
          hover:shadow-[0_0_25px_#06d6a0]'>

            <h1 className='font-bold italic text-base sm:text-lg'>Master of Computer Application | <span>2025 - 2027</span></h1>

            <p className='text-sm'>Priyadarshini Engineering College</p>

          </div>

          <div className='my-5 border-1 p-4 sm:p-5 rounded-lg
          transition-all ease-in-out cursor-pointer
          hover:-translate-x-3
          hover:shadow-[0_0_25px_#06d6a0]'>

            <h1 className='font-bold italic'>Bachelor of Computer Application | <span>2022 -2025</span></h1>

            <p className='text-sm'>Islamiah College (Autonomous)</p>
            
          </div>

        </section>
      </div>

    </motion.section>
  )
}

export default Education
