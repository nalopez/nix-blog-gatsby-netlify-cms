/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const POST_ARCHIVE_QUERY = graphql`
query BlogPostArchive {
    allMarkdownRemark(
        limit: 5,
        sort: {
        fields: frontmatter___date,
        order: DESC
        }
    ) {
    edges {
        node {
        frontmatter {
            title
            slug
        }
        }
    }
    }
}
`

const Archive = () => {
  const data = useStaticQuery(POST_ARCHIVE_QUERY)

    return (
    <>
        <aside>
            <h3>Archive</h3>
        </aside>
        <ul>
            {data.allMarkdownRemark.edges.map(edge => (
                <li key={edge.node.frontmatter.slug}>
                    <Link to={`/blogs${edge.node.frontmatter.slug}`}>{edge.node.frontmatter.title}</Link>
                </li>
            ))}
        </ul>
    </>
  )
}

export default Archive
