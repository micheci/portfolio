import React from 'react'
import '../Css/Projectcss.css'


const Project = ({siteName,lang,title,desc}) => {
  return (
    <div>
        <article>
            <a href={siteName}>
                <p className='projectLang'>
                    {lang}
                </p>
                <h3 className="projectTitle">{title}</h3>
                <p className='projectDesc'>{desc}</p>
            </a>
        </article>
    </div>
  )
}

export default Project