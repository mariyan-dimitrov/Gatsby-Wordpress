import React, { Component } from "react";
import { Link, graphql } from "gatsby";
import Header from '../components/Header';

class PostsSubPath extends Component {
  render() {
    const data = this.props.data
    return (
      <>
        <Header />
        <h1>Posts</h1>
        {data.allWordpressPost.edges.map(({ node }) => (
          <div key={node.slug}>
            <Link to={`/posts/${node.slug}`}>
              <h2 dangerouslySetInnerHTML={{__html: node.title}}></h2>
            </Link>
            <h3 dangerouslySetInnerHTML={{__html: node.excerpt}}></h3>
          </div>
        ))}

        Or maybe you want to see all <Link to={`/pages/`}>pages</Link>.
      </>
    )
  }
}

export default PostsSubPath

export const pageQuery = graphql`
  query {
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