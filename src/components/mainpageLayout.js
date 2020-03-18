import React, {Component} from 'react'
import {graphql} from 'gatsby'
import NewLayout from './newlayout';

export default class mainPageLayout extends Component {
    render() {
        const { markdownRemark } = this.props.data;
        return (
            <NewLayout>
            <div>
                <h1>{markdownRemark.frontmatter.title}</h1>
                <div dangerouslySetInnerHTML={{
                    __html: markdownRemark.html
                }}></div>
            </div>
            </NewLayout>
        )
    }
}

export const query = graphql`
 query MainPageQuery($slug: String!)  {
    markdownRemark(
      frontmatter: {
        slug: {
          eq: $slug
        }
      }
    ) {
      html
      frontmatter {
        title
        slug
      }
    }
  }
`