import React from "react"
import {Link, StaticQuery, graphql} from 'gatsby'

const LISTING_QUERY = graphql`
query BlogPostListing {
    allMarkdownRemark(
        limit: 10,
        sort: {
        fields: frontmatter___date,
        order: DESC
        }
    ) {
    edges {
        node {
          excerpt
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
            title
            slug
        }
        }
    }
    }
}
`

const Listing = () => (
  <StaticQuery
    query={LISTING_QUERY}
    render = {({allMarkdownRemark}) => (
        allMarkdownRemark.edges.map(({node}) => (
            <article key={node.frontmatter.slug}>
                <Link to={`/blogs${node.frontmatter.slug}`}>
                    <h2>{node.frontmatter.title}</h2>
                </Link>
                <p>{node.frontmatter.date}</p>
                <p>{node.excerpt}</p>
                <Link to={`/blogs${node.frontmatter.slug}`}>Read more..</Link>
            </article>
        ))
    )}
  />
)

export default Listing
