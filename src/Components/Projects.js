import React from 'react'
import Project from './Project'

const Projects = () => {
  return (
    <div className='projects-container'> 
        <Project desc="Shows space pictures depending on day in HTML,CSS,JAVASCRIPT"title=" Space pictures" siteName="https://spacesky-production.up.railway.app/" lang="React"/>
        
        <Project desc="Full Stack social media site using ejs/node/express" title="Freedom Social Page" siteName="https://binary-upload-boom-production.up.railway.app/" lang="EJS" />
        
        <Project desc="Full Stack page with Auth to watch 2 streams at once" title="Dos Streams" siteName="https://dos-streams-production.up.railway.app/" lang="JavaScript,EJS" />
    </div>
  )
}

export default Projects