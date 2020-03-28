import React from "react"

// Components
import NewLayout from "../components/newlayout"

// CSS
import "../components/home.css"

// Images
import nixlogo from "../images/nix-logo.png"

const Home = () => (
    <NewLayout>
        <div className="banner-content">
            <img src={nixlogo} />
            <div className="banner-content__text-wrapper">
                <h1 className="mb-20">NICOLE <span className="pink">LOPEZ</span></h1>
                <p>
                    <span>I am a </span>
                    <span className="cd-words-wrapper pink">Full-stack Web Developer</span>
                </p>
            </div>
        </div>
    </NewLayout>
    
    
)

export default Home