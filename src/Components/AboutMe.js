import React from 'react'
import Projects from './Projects'
import About from '../Css/About.css'
import {FaGithub} from 'react-icons/fa'
import {FaTwitterSquare} from 'react-icons/fa'

const AboutMe = () => {
  return (
    <div className="about-meContainer Container">
        <div className="leftaboutme">
            <h1 >Hello, I'm Micheci Martinez </h1>
            <h2>Full Stack Engineer </h2>
            <p>Hi!, I'm Micheci Martinez a Full Stack Web Developer with 3+ experience in programming.
              I am always trying to improve programming wise and in real life to hopefully inspire my loved ones.
            </p>
            <div className="icons">
              <a href='https://github.com/micheci'> <FaGithub/> <span>GitHub</span></a>
              <a href='https://twitter.com/icehcim'><FaTwitterSquare/> <span>Twitter</span></a>
            </div>
            
        </div>

        <div className="rightaboutme">
            <Projects/>
        </div>
    </div>

  )
}

export default AboutMe