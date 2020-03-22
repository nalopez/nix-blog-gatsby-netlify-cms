import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import "./sidebar.css"

import devpic from '../images/devpic.jpg'

const POST_PAGES_QUERY = graphql`
  query getMainPages{
    site {
      siteMetadata {
        title
        author
        testdata
        mainPages {
          name
          link
          icon
        }
      }
    }
  }
`

const Sidebar = ({ siteTitle}) => {
  const data = useStaticQuery(POST_PAGES_QUERY)

    return (
      <>
      <div id="sidebar-container" className="sidebar-container">
        <div className="sidebar">
          <div>
            <img src={devpic}></img>
            <div className='sidebar__site-name'>{ siteTitle }</div>
          </div>
          <div>
            <ul className="sidebar__main-link-group">
                {data.site.siteMetadata.mainPages.map(page => (
                    <li key={page.link}>
                        <Link className="sidebar__main-link" to={`${page.link}`}>
                          <span className="sidebar__main-link-icon">
                            <i className={`lnr ${page.icon}`}></i>
                          </span>
                          {page.name}
                        </Link>
                    </li>
                ))}
            </ul>
          </div>

          <footer>
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </div>
    </>
    )
            }

Sidebar.propTypes = {
  siteTitle: PropTypes.string,
}

Sidebar.defaultProps = {
  siteTitle: ``,
}

export default Sidebar
