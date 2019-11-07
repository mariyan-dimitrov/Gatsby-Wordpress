import React, { Component } from "react"
import Header from '../components/Header';
import '../main.scss';

class PostTemplate extends Component {
    render() {
        const post = this.props.data.wordpressPost

        return (
            <>
                <Header />
                <div className="container container--post">
                    <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>
            </>
        )
    }
}


export default PostTemplate

export const pageQuery = graphql`
    query currentPostQuery($id: String!) {
        wordpressPost(id: { eq: $id }) {
            title
            content
        }
        site {
            siteMetadata {
                title
            }
        }
    }
`