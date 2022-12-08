import React from 'react'
import Projects from './Projects'
import About from '../Css/About.css'
import {FaGithub} from 'react-icons/fa'
import {FaTwitterSquare} from 'react-icons/fa'

const AboutMe = () => {
  return (
    <div className="about-meContainer">
        <div className="leftaboutme">
            <h1 >Hello, I'm Micheci Martinez </h1>
            <h2>Full Stack Engineer </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
            qui officia deserunt mollit anim id est laborum.</p>
            <div className="icons">
              <FaGithub/> <span>GitHub</span>
              <FaTwitterSquare/> <span>Twitter</span>
            </div>
            
        </div>

        <div className="rightaboutme">
            <Projects/>
        </div>
    </div>

  )
}

export default AboutMe