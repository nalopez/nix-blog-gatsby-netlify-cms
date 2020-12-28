import React from "react"

import NewLayout from "../components/newlayout"
import PageHeading from "../components/pageheading"

import "../components/resume.css"

const Resume = () => (
    <NewLayout background="#2C2D2F">
        <div className="resume">
        <PageHeading headingStr="Resume." classStr="lnr lnr-license"></PageHeading>

            <div className="row">
                <div className="resume__experience">
                    <div className="subheading">
                        <h3> Experience </h3>
                    </div>
                    <ul className="resume__list">
                        <li>
                            <span className="resume__line-left"></span>
                            <div className="resume__job-content">
                                <h4>Senior Web Developer</h4>
                                <h5>Lamudi Technical Services Corporation</h5>
                                <h5>Bel-Air, Makati, Philippines</h5>
                                <p className="resume__job-info">
                                    Currently developing multi-tenant changes for <a className="resume__link" href="https://www.propertypro.com.ph/">PropertyPro</a>, a real-estate CRO system.
                                </p>
                                <p className="resume__job-info">
                                    
                                </p>
                            </div>
                            <span className="resume__job-year">
                                <span className="resume__job-year-to">Present</span>
                                <span className="resume__job-year-from">2020</span>
                            </span>
                        </li>
                        <li>
                            <span className="resume__line-left"></span>
                            <div className="resume__job-content">
                                <h4>Software Development Consultant</h4>
                                <h5>Boon Interior</h5>
                                <h5>Makati, Philippines</h5>
                                <p className="resume__job-info">
                                    Developing the backend project tracking system, and various front-facing services, eg. My Account page and mail template creations
                                </p>
                                <p className="resume__job-info">
                                    
                                </p>
                            </div>
                            <span className="resume__job-year">
                                <span className="resume__job-year-to">Present</span>
                                <span className="resume__job-year-from">2020</span>
                            </span>
                        </li>
                        <li>
                            <span className="resume__line-left"></span>
                            <div className="resume__job-content">
                                <h4>Senior Web Developer</h4>
                                <h5>CodingChiefs by Nochii</h5>
                                <h5>Clark, Pampanga, Philippines</h5>
                                <p className="resume__job-info">
                                    Performed as a remote developer for <a className="resume__link" href="https://www.bax-shop.nl" target="_blank">Bax Music</a>, a music equipments supplier based on the Netherlands.
                                </p>
                                <p className="resume__job-info">
                                    Responsible for developing new features and third-party integrations for their various e-commerce sites.
                                </p>
                            </div>
                            <span className="resume__job-year">
                                <span className="resume__job-year-to">2020</span>
                                <span className="resume__job-year-from">2019</span>
                            </span>
                        </li>
                        <li>
                            <span className="resume__line-left"></span>
                            <div className="resume__job-content">
                                <h4>Scrum Master</h4>
                                <h5>Bayview Technologies, Inc.</h5>
                                <h5>Bel-Air, Makati, Philippines</h5>
                                <p className="resume__job-info">
                                    Implemented scrum methodologies for a development team
                                </p>
                                <p className="resume__job-info">
                                    Facilitated scrum meetings (e.g. daily stand up, backlog grooming, retrospective)
                                </p>
                                <p className="resume__job-info">
                                    Timeboxed team's tasks to ensure progress and completion throughout the sprint
                                </p>
                                <p className="resume__job-info">
                                    Documented the team's sprint agenda, reports and action items, for the next sprint's reference.
                                </p>
                            </div>
                            <span className="resume__job-year">
                                <span className="resume__job-year-to">2019</span>
                                <span className="resume__job-year-from">2017</span>
                            </span>
                        </li>
                        <li>
                            <span className="resume__line-left"></span>
                            <div className="resume__job-content">
                                <h4>Software Engineer</h4>
                                <h5>Bayview Technologies, Inc.</h5>
                                <h5>Bel-Air, Makati, Philippines</h5>
                                <p className="resume__job-info">
                                    Developed new functionalities and existing feature enhancements for a payment gateway project</p>
                                <p className="resume__job-info">
                                    Integrated different payment method APIs
                                </p>
                                <p className="resume__job-info">
                                    Designed new system architecture and created database designs
                                </p>
                            </div>
                            <span className="resume__job-year">
                                <span className="resume__job-year-to">2019</span>
                                <span className="resume__job-year-from">2016</span>
                            </span>
                        </li>
                        <li>
                            <span className="resume__line-left"></span>
                            <div className="resume__job-content">
                                <h4>Junior Web Developer</h4>
                                <h5>Bayview Technologies, Inc.</h5>
                                <h5>Bel-Air, Makati, Philippines</h5>
                                <p className="resume__job-info">
                                    Trained under the company's internal academy for the technologies used in all of its projects.
                                </p>
                                <p className="resume__job-info">
                                    Developed new functionalities and existing feature enhancements for a payment gateway project built in PHP
                                </p>
                            </div>
                            <span className="resume__job-year">
                                <span className="resume__job-year-to">2016</span>
                                <span className="resume__job-year-from">2014</span>
                            </span>
                        </li>
                    </ul>
                </div>

                
                <div className="resume__education">
                    <div className="subheading">
                        <h3> Education </h3>
                    </div>
                    <ul className="resume__list">
                        <li>
                            <span className="resume__line-left"></span>
                            <div className="resume__job-content">
                                <h4>BS Computer Science</h4>
                                <h5>University of the Philippines Manila</h5>
                                <h5>Ermita, Manila, Philippines</h5>
                                <p className="resume__job-info">
                                    Major in Health Informatics
                                </p>
                            </div>
                            <span className="resume__job-year">
                                <span className="resume__job-year-to">2014</span>
                                <span className="resume__job-year-from">2010</span>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="row">
                <div className="skill-set skill-set__front-end">
                    <div className="subheading">
                        <h3> Front-End Skills </h3>
                    </div>
                    <div className="skill-set__skill-item">
                        <h4 className="skill-set__progress-title">Javascript</h4>
                        <div className="skill-set__progress">
                            <div className="skill-set__progress-bar" data-progress-value="80" style={{width: '80%'}}>
                                <div className="skill-set__progress-value">80%</div>
                            </div>
                        </div>
                    </div>
                    <div className="skill-set__skill-item">
                        <h4 className="skill-set__progress-title">ReactJS</h4>
                        <div className="skill-set__progress">
                            <div className="skill-set__progress-bar" data-progress-value="60" style={{width: '60%'}}>
                                <div className="skill-set__progress-value">60%</div>
                            </div>
                        </div>
                    </div>
                    <div className="skill-set__skill-item">
                        <h4 className="skill-set__progress-title">VueJS</h4>
                        <div className="skill-set__progress">
                            <div className="skill-set__progress-bar" data-progress-value="60" style={{width: '60%'}}>
                                <div className="skill-set__progress-value">60%</div>
                            </div>
                        </div>
                    </div>
                    <div className="skill-set__skill-item">
                        <h4 className="skill-set__progress-title">Angular</h4>
                        <div className="skill-set__progress">
                            <div className="skill-set__progress-bar" data-progress-value="60" style={{width: '60%'}}>
                                <div className="skill-set__progress-value">60%</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="skill-set skill-set__back-end">
                    <div className="subheading">
                        <h3> Back-End Skills </h3>
                    </div>
                    <div className="skill-set__skill-item">
                        <h4 className="skill-set__progress-title">PHP</h4>
                        <div className="skill-set__progress">
                            <div className="skill-set__progress-bar" data-progress-value="80" style={{width: '80%'}}>
                                <div className="skill-set__progress-value">80%</div>
                            </div>
                        </div>
                    </div>
                    <div className="skill-set__skill-item">
                        <h4 className="skill-set__progress-title">Symfony</h4>
                        <div className="skill-set__progress">
                            <div className="skill-set__progress-bar" data-progress-value="80" style={{width: '80%'}}>
                                <div className="skill-set__progress-value">80%</div>
                            </div>
                        </div>
                    </div>
                    <div className="skill-set__skill-item">
                        <h4 className="skill-set__progress-title">Laravel</h4>
                        <div className="skill-set__progress">
                            <div className="skill-set__progress-bar" data-progress-value="60" style={{width: '60%'}}>
                                <div className="skill-set__progress-value">60%</div>
                            </div>
                        </div>
                    </div>
                    <div className="skill-set__skill-item">
                        <h4 className="skill-set__progress-title">Database Management</h4>
                        <div className="skill-set__progress">
                            <div className="skill-set__progress-bar" data-progress-value="80" style={{width: '80%'}}>
                                <div className="skill-set__progress-value">80%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            

        </div>
    </NewLayout>
)

export default Resume