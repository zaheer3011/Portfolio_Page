import React from 'react'

const Home = () => {
  return (
    <div id='Home' className='w-full min-h-screen flex justify-center items-center text-center px-6'>

      <main>
        <h1 className='text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wide'>Zaheer Ahmed S</h1>
        
        <p className='flex flex-col sm:flex-row justify-center items-center gap-2 text-lg sm:text-xl md:text-1xl font-light tracking-wide'>Software Developer

        <span className='hidden sm:inline text-2xl font-bold'> • </span>Mern Stack Developer</p>

        <a href="#About Me" className='inline-block mt-2 rounded-lg bg-black text-white px-2 py-1 text-md hover:shadow-[0_0_15px_#06d6a0] hover:bg-gray-600 transition-all duration-300 hover:scale-105'>Learn More</a>
      </main>
      
    </div>
  )
}

export default Home
