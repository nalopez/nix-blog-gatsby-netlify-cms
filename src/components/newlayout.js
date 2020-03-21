/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

// Components
import Sidebar from "./sidebar"
import MobileNav from "./mobileNav"

// CSS
import "../fonts/fontawesome-free-5.12.1-web/css/all.min.css"
import "./newlayout.css"

import Background from "../images/background.jpeg"

const NewLayout = ({children, background}) => {
var backgroundData;
if (background) {
  backgroundData = {backgroundColor: `${background}`}
} else {
  backgroundData = {
    backgroundImage: "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(" + Background + ")",
    height: "100vh"
  }
}

  return (
    <div className="main-content">
      <Sidebar siteTitle="NICOLE LOPEZ"></Sidebar>
      <MobileNav siteTitle="NICOLE LOPEZ"></MobileNav>
      <div className="content" 
        style={backgroundData}>
        <main>{children}</main>
        
      </div>
    </div>
  )
}

NewLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default NewLayout
