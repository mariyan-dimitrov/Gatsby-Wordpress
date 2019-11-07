import React, { Component } from "react"
import { Link, graphql } from "gatsby"
class Archive extends Component {
  render() {
    const data = this.props.data
    return (
      <>
        <div>
          <h1>Pages</h1>
          {data.allWordpressPage.edges.map(({ node }) => (
            <div key={node.slug}>
              <Link to={node.slug}>
                <h2 dangerouslySetInnerHTML={{__html: node.title}}></h2>
              </Link>
              <h3 dangerouslySetInnerHTML={{__html: node.excerpt}}></h3>
            </div>
          ))}
        </div>

        <h1>Posts</h1>
        {data.allWordpressPost.edges.map(({ node }) => (
          <div key={node.slug}>
            <Link to={node.slug}>
              <h2 dangerouslySetInnerHTML={{__html: node.title}}></h2>
            </Link>
            <h3 dangerouslySetInnerHTML={{__html: node.excerpt}}></h3>
          </div>
        ))}
      </>
    )
  }
}

export default Archive

export const pageQuery = graphql`
  query {
    allWordpressPage {
      edges {
        node {
          id
          title
          excerpt
          slug
        }
      }
    }
    allWordpressPost {
      edges {
        node {
          title
          excerpt
          slug
        }
      }
    }
  }
`