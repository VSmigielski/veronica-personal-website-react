import React from 'react'
import {Container} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'

const Project = ({title, image, description, classRow}) => {

    return ( 
        <Container>
            <div class={classRow}>
                <div class="col-sm d-none d-lg-block">
                    <img src={image} class="img-fluid rounded margin-weather" alt="Travel Project Preview" />
                </div>
                <div class="col-sm">
                    <div class="project-description">
                        <h2 class="mb-5">
                            {title}
                        </h2>
                        <p class="mb-5 text-muted">
                        {description}
                        </p>
                        <NavLink to="/work" class="btn btn-branding-outline">Learn More</NavLink>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Project
