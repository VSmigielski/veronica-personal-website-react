import React from 'react'
import '../Assets/portfolio.css'
import {NavLink} from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <div className="contact-box d-flex justify-content-between mb-5 d-none d-md-flex">
                <div>
                    <h3>
                        Work Inquiry
                    </h3>
                    <p className="text-muted">
                        Let's work together
                    </p>
                </div>
               <div>
                <NavLink to="/contact" className="btn btn-branding mt-3" title="Contact Veronica">Contact me</NavLink>
               </div>
            </div>
            <div className="d-flex justify-content-center mb-5">
                <a href="mailto:veronicasmigielski@gmail.com" className="email-link" title="Email Veronica">veronicasmigielski@gmail.com</a>
            </div>

            <div className="social-links d-flex justify-content-center">
                <a href="https://github.com/VSmigielski" target="_blank" title="GitHub Profile" rel="noreferrer">
                    <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/veronica-mccormick-b85025174/" target="_blank" title="LinkedIn Profile" rel="noreferrer">
                    <i className="fab fa-linkedin-in"></i>
                </a>
            </div>
            <p className="text-center mt-5">
                This project was coded by Veronica Smigielski and it is <a href="https://github.com/VSmigielski/veronica-personal-website-react" target="_blank" rel="noreferrer">open-sourced</a>
            </p>
        </footer>
    )
}

export default Footer
