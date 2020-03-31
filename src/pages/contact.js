import React from "react"

// Components
import NewLayout from "../components/newlayout"
import PageHeading from "../components/pageheading"

// CSS
import "../components/contact.css"

const Contact = () => (
    <NewLayout background="#2C2D2F">
        <PageHeading headingStr="Contact." classStr="lnr lnr-envelope"></PageHeading>

        <div className="row mb-70">
            <div className="subheading">
                <h3>Let's Talk</h3>
            </div>

            <div class="contact">
                <form className="contact__form" method="POST" netlify-honeypot="bot-field" data-netlify="true">
                    <input type="hidden" name="bot-field" />
                    <div className="row mb-20">
                        <span className="contact__form-field contact__form-field-inline contact__form-field-first">
                            <input className="contact__name contact__input" type="text" placeholder="Name" required></input>
                        </span>
                        <span className="contact__form-field contact__form-field-inline">
                            <input className="contact__email contact__input" type="email" placeholder="Email" required></input>
                        </span>
                    </div>
                    <div className="row mb-20">
                        <span className="contact__form-field contact__form-field-block">
                            <textarea rows="5" className="contact__message contact__input" placeholder="Your message.." required></textarea>
                        </span>
                    </div>
                    <div className="row mb-20">
                        <span className="contact__form-field contact__form-field-block contact__form-submit">
                            <button className="contact__submit contact__button">Submit</button>
                        </span> 
                    </div>
                </form>
            </div>
        </div>

        <div className="row mb-50">
            <div className="info__item">
                <span className="info__item-icon"><i className="fas fa-paper-plane"></i></span>
                <h5>lopez.nicoleanne@gmail.com</h5>
            </div>
            <div className="info__item">
                <span className="info__item-icon"><i className="fas fa-map-marker-alt"></i></span>
                <h5>Clark Global City, Clark Freeport Zone, Pampanga</h5>
            </div>
            <div className="info__item">
                <span className="info__item-icon"><i className="fas fa-phone"></i></span>
                <h5>(+63) 961-361-3660</h5>
            </div>
        </div>
    </NewLayout>
    
    
)

export default Contact