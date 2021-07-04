import React from 'react'
import Footer from './Footer'
import '../../Assets/portfolio.css'

const Main = () => {
    return (
        <div>
            <div className="container-fluid background">
                <div className="content-container container">
                    <div className="content links">
                        <h1 className="mb-5">Let's get in touch</h1>
                        <h3>Email</h3>
                        <p className="ms-5">
                            <a href="mailto:veronicasmigielski@gmail.com" title="Email Veronica">veronicasmigielski@gmail.com</a>
                        </p>
                        <h3>GitHub</h3>
                        <p className="ms-5">
                            <a href="https://github.com/VSmigielski" target="_blank" title="GitHub Profile" rel="noreferrer">VSmigielski</a> 
                        </p>
                        <h3>LinkedIn</h3>
                        <p className="ms-5">
                            <a href="https://www.linkedin.com/in/veronica-mccormick-b85025174/" target="_blank" title="LinkedIn Profile" rel="noreferrer">Veronica McCormick</a>
                        </p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Main
