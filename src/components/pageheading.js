import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import "./pageheading.css"


const PageHeading = ({headingStr, classStr}) => {
    return (
      <>
      <div className="page-heading">
          <span className="page-heading__icon">
              <i className={classStr}></i>
          </span>
            <h2>{headingStr}</h2>
        </div>
      </>
    )
}

export default PageHeading
