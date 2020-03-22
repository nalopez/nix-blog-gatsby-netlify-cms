import React from "react"

// CSS
import "./mobileNav.css"

const MobileNav = ({ siteTitle}) => {
  const setNavbarOpen = () => {
     let sidebar = document.getElementById('sidebar-container')
     let displayValue = 'none';

     if (sidebar.style.display != "block") {
       displayValue = 'block';
     }
      
     sidebar.style.display = displayValue;
  }

    return (
      <>
        <div className="mobile-nav">
            <a className="mobile-nav__toggle" onClick={() => setNavbarOpen()}>
                <i className="fas fa-bars"></i>
            </a>
            <h2>{ siteTitle}</h2>
        </div>
      </>
    )
            }

export default MobileNav
