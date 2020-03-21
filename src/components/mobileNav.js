import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import "./mobileNav.css"

const MobileNav = ({ siteTitle}) => {
    return (
      <>
        <div className="mobile-nav">
            <a class="mobile-nav__toggle">
                <i class="fas fa-bars"></i>
            </a>
            <h2>{ siteTitle}</h2>
        </div>
      </>
    )
            }

export default MobileNav
