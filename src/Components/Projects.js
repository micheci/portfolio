import React from 'react'
import Project from './Project'

const Projects = () => {
  return (
    <div className='projects-container'> 
        <Project desc="Shows space pictures depending on day in HTML,CSS,JAVASCRIPT"title=" Space pictures" siteName="https://spacesky-production.up.railway.app/" lang="react"/>
        
        <Project desc="Full Stack social media site using ejs/node/express" title="Freedom Social Page" siteName="https://binary-upload-boom-production.up.railway.app/" lang="EJS" />
        
        <Project/>
    </div>
  )
}

export default Projects