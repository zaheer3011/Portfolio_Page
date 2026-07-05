import React from 'react'
import Navbar from './Components/Navbar'
import './index.css'
import Home from './Components/Home'
import About from './Components/About'
import Skills from './Components/Skills'
import Experience from './Components/Experience'
import Education from './Components/Education'
import Project from './Components/Project'
import Contact from './Components/Contact'
import Platform from './Components/SocialPlatform'
import {ToastContainer, toast} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

const App = () => {
  return (
    <div className='App'>
      <ToastContainer position='top-right' autoClose={3000} />
      <Navbar/>
      <Home/>
      <About/>
      <Education/>
      <Experience/> 
      <Skills/>
      <Project/>
      <Platform/>
      <Contact/>
    </div>
    
  )
}

export default App
