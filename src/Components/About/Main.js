import React from 'react'
import { NavLink } from 'react-router-dom'

const Main = () => {
    return (
        <div>
            <div className="container-fluid background">
                <div className="content-container container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="content">
                            <h1>Hi, I am Veronica Smigielski</h1>
                            <h2 className="mt-5 mb-4">Full-Stack Developer</h2>
                            <p className="mb-4">
                            Veronica has a Bachelor of Science in Management Information Systems from Columbia College in MO. The classes
                that she took went over both front and back end programming. Throughout the past few months, she has taken all
                the workshops that SheCodes offers to extend her studies. During March and April of 2021, she was trained
                by mThree for Java Full-Stack Development. She is currently studying towards another Bachelors degree in Cybersecurity.
                            </p>
                            <NavLink to="/work" className="btn btn-branding">View my projects</NavLink>
                        </div>
                        </div>
                        <div className="col-lg-6">
                            <img src="images/Veronica.jpg" alt="Veronica" className="img-fluid about-image" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mt-sm-5">
                        <h3>Background and History</h3>
                        <p>
                            My name is Veronica McCormick, soon to be Veronica Smigielski. I am twenty-five years old. In January of 2020, 
                            my husband told me that he wanted a divorce. Due to corona rising in the country of Italy, movement had come 
                            to a halt on March 12th. There was a lockdown until mid-June. I decided to fly to Belgium before I left for 
                            the United States again; however, that was the beginning of a new chapter. 
                        </p>
                        <p>
                            I began my first Bachelor's degree in Management Information Systems in 2017. I finished the degree in August 
                            2020. I was extremely excited to get into the programming field. Since finishing my Bachelor's degree, I 
                            thought it would be best to complete a few certifications to accompany my new degree. I began preparation 
                            courses for CompTIA Network+ at the end of August. My thirst for knowledge didn't stop there. I began 
                            questioning if I should continue with another Bachelor's degree or even go into my Master's. Overall, the 
                            final decision was to begin another Bachelor's degree but in Cybersecurity. I knew that I would be having 
                            a lot of school beginning in October since classNamees at Columbia College began October 26, 2020. My preparation 
                            courses for CompTIA A+ and Security+ would also begin at the end of October. This would mean that I would be 
                            taking a total of four classNamees at once through three different colleges.
                        </p>
                        <p>
                            During the summer, there was a bit of time when Europe's countries came off of lockdown which meant a bit more 
                            traveling while I was in Belgium. I traveled to Paris, Amsterdam, Brugge, and the Ardennes. I enjoyed the wild 
                            ride that flying to Belgium brought me. While I lived in Italy, I only went to Barcelona for vacation. In 
                            retrospect, the divorce was the best thing that could have happened to me to reignite the spark that I had 
                            for programming and travelling.
                        </p>
                    </div>
                    <div className="col-lg-6 mt-sm-5">
                        <img src="images/Paris.jpg" alt="Veronica" className="img-fluid about-image" />
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default Main
