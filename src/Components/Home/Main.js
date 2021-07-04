import React, {useState} from 'react'
import data1 from '../../Data/data1'
import Project from './Project'
import { NavLink } from 'react-router-dom'

const Main = () => {
    const [projects] = useState(data1)
    return (
        <div>
            <div class="hero">
                <p>👋 Hi I am</p>
                <h1>
                    Veronica Smigielski
                </h1>
                <h2 class="mb-3">Full-stack developer</h2>
                <div>
                    <NavLink class="btn btn-branding" to="/contact" title="Contact me">Contact me</NavLink>
                </div>
            </div>
            <p class="text-center m-5">Featured Projects to show</p>
            {
                projects.map((project)=> {
                    return <Project key={project.id} {...project}/>;
                })
            }
        </div>
    )
}

export default Main
