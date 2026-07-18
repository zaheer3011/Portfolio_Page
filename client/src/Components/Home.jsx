import React from 'react'
import {useTypewriter, Cursor} from 'react-simple-typewriter'

const Home = () => {

  const [ text ] = useTypewriter({
    words : ['MERN Stack Developer', 'Software Developer'],
    loop : true,
    typeSpeed : 100,
    deleteSpeed : 50,
    delaySpeed : 1000
  })

  return (
    <div id='Home' className='w-full min-h-screen flex justify-center items-center text-center px-6'>

      <main>
        <h1 className='text-3xl sm:text-3xl md:text-3xl lg:text-5xl font-semibold tracking-wide'>Zaheer Ahmed S</h1>
        
        <p className="flex justify-center items-center gap-2 sm:text-2xl text-base font-light tracking-wide">
          <span className='text-green-400 font-normal'>{text}</span>
          <span><Cursor/></span>
        </p>

        <a href="#About Me" className='inline-block mt-2 rounded-lg bg-black text-white px-2 py-1 text-md hover:shadow-[0_0_15px_#06d6a0] hover:bg-gray-600 transition-all duration-300 hover:scale-105'>Learn More</a>
      </main>
      
    </div>
  )
}

export default Home
