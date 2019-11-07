import React, { Component } from "react";
import { Link, graphql } from "gatsby";
import Header from '../components/Header';

class PagesSubPath extends Component {
  render() {
    const data = this.props.data
    return (
      <>
        <Header />
        <h1>Pages</h1>
        {data.allWordpressPage.edges.map(({ node }) => (
            <div key={node.slug}>
                <Link to={`/pages/${node.slug}`}>
                    <h2 dangerouslySetInnerHTML={{__html: node.title}}></h2>
                </Link>
                <h3 dangerouslySetInnerHTML={{__html: node.excerpt}}></h3>
            </div>
        ))}

        Or maybe you want to see all <Link to={`/posts/`}>posts</Link>.
      </>
    )
  }
}

export default PagesSubPath

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
  }
`