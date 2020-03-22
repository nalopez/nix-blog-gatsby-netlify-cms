import React from "react"

// Components
import NewLayout from "../components/newlayout"
import PageHeading from "../components/pageheading"

// CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../components/aboutme.css"

// Images
import baxLogo from "../images/clients/bax-logo.svg"
import codingchiefsLogo from "../images/clients/cc-logo.png"
import insurancehubLogo from "../images/clients/tih-logo.png"
import EvoraAngelo from "../images/testimonials/evora-angelo.jpg"

const AboutMe = () => (
    // TODO: Fix passing of background
    // TODO: Download resume function
    // TODO: Create sprites for clients and testimonials
    <NewLayout background="#2C2D2F">
        <PageHeading headingStr="About Me." classStr="lnr lnr-user"></PageHeading>
        <div className="about-me mb-70">
            <div className="row mb-70">
                <div className="about-me__main-message">
                    <h3 className="mb-20">Full Stack Developer & Scrum Master</h3>
                    <p>I am have been a fullstack PHP developer for 5 years, specializing in the development of payment management and e-commerce sites.</p>

                    <p>I am a certified Scrum Master, with 2 years experience of facilitiating scrum activities.</p>

                    <p>I am a freelance UI/UX designer.</p>
                </div>

                <div className="about-me__personal-info">
                    <h3 className="mb-20">Personal Information</h3>
                    <ul className="about-me__personal-info-list">
                        <li>
                            <span className="about-me__personal-info-label">Name</span>
                            <span>Nicole Anne Lopez</span>
                        </li>
                        <li>
                            <span className="about-me__personal-info-label">Age</span>
                            <span>25 Years</span>
                        </li>
                        <li>
                            <span className="about-me__personal-info-label">Residence</span>
                            <span>Clark, Pampanga</span>
                        </li>
                        <li>
                            <span className="about-me__personal-info-label">Name</span>
                            <span>lopez.nicoleanne@gmail.com</span>
                        </li>
                        <li>
                            <span className="about-me__personal-info-label">Phone Number:</span>
                            <span>(+63) 961-361-3660</span>
                        </li>
                        <li>
                            <span className="about-me__personal-info-label">Freelance:</span>
                            <span>Available</span>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div className="row about-me__services mb-50">
                <div className="subheading">
                    <h3> Services </h3>
                </div>
                <div className="services__list">
                    <div className="services__item">
                        <div className="services__icon">
                            <i className="lnr lnr-laptop"></i>
                        </div>
                        <h4>Web Development</h4>
                        <p>Web infrastructure planning, development, deployment, maintenance and support</p>
                    </div>
                    <div className="services__item">
                        <div className="services__icon">
                            <i className="lnr lnr-laptop"></i>
                        </div>
                        <h4>Agile Management</h4>
                        <p>Scrum team facilitation (e.g. Sprint Planning, Sprint Restrospective)</p>
                    </div>
                    <div className="services__item">
                        <div className="services__icon">
                            <i className="lnr lnr-laptop"></i>
                        </div>
                        <h4>Freelance Projects</h4>
                        <p>Logo design</p>
                    </div>
                </div>
            </div>
            <div className="row about-me__clients mb-50">
                <div className="subheading">
                    <h3> Clients </h3>
                </div>
                <div className="clients__list">
                    <div className="clients__logo">
                        <a href="https://www.bax-shop.nl">
                            <img src={baxLogo} />
                        </a>
                    </div>
                    <div className="clients__logo">
                        <a href="https://www.codingchiefs.com/en">
                            <img src={codingchiefsLogo} />
                        </a>
                    </div>
                    <div className="clients__logo">
                        <a href="https://www.facebook.com">
                            <img src={insurancehubLogo} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="row about-me__testimonials mb-50">
                <div className="subheading">
                    <h3> Testimonials </h3>
                </div>

                <div className="testimonials__list">

                    <div className="testimonial-item">
                        <div className="testimonial-item__content">
                            <p>"Nix is easy to work with because of her wide experience in programming. She is professional and does her work on time."</p>
                        </div>
                        <div className="testimonial-item__meta">
                            <img src={ EvoraAngelo } />
                            <div className="testimonial-item__meta-info">
                                <h4>Angelo Evora</h4>
                                <div>Owner, The Insurance Hub <br/> Financial Adviser, Pru Life UK</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </NewLayout>
)

export default AboutMe