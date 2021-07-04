import React, {useState} from 'react'
import '../../Assets/portfolio.css'
import dataWork from '../../Data/dataWork'
import Projects from './Projects'

const Main = () => {
    const [projectsWork] = useState(dataWork)
    return (
        <div>
            <div className="container-fluid background">
                <div className="content-container-1 container">
                    <div className="content">
                        <h1 className="mb-5">Take a look at what I've been working on!</h1>
                    </div>
                </div>
            </div>
            {
                projectsWork.map((project)=> {
                    return <Projects key={project.id} {...project}/>;
                })
            }
            <div className="container">
                <p className="text-center">If you're looking for other projects in another language (i.e. Python, C#, Java), 
                    check out my <a href="https://github.com/VSmigielski" target="_blank" title="GitHub Profile" rel="noreferrer">GitHub</a> profile!</p>
            </div>
        </div>
    )
}

export default Main
