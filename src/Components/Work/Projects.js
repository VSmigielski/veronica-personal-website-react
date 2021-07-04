import React from 'react'
import '../../Assets/portfolio.css'

const Projects = ({name, alt, title, image, description, link, name2, alt2, title2, image2, description2, link2, classRow}) => {
    return (
        <div>
            <div className={classRow}>
                <div className="content-container-1 container">
                    <div className="content">
                        <div className="row">
                            <div className="col-md-6 mb-4">
                                <img src={image} alt={alt} className="img-fluid rounded"/>
                                <h3 className="text-center mt-3"><a href={link} target="_blank" 
                                title={title} without rel="noreferrer">{name}</a></h3>
                                <p className="text-center text-muted">
                                    {description}
                                </p>
                            </div>
                            <div className="col-md-6 mb-4">
                                <img src={image2} alt={alt2} className="img-fluid rounded"/>
                                <h3 className="text-center mt-3"><a href={link2} target="_blank" 
                                title={title2} without rel="noreferrer">{name2}</a></h3>
                                <p className="text-center text-muted">
                                   {description2}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
