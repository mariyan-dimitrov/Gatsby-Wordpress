import React, { Component } from "react";
// import { Link, graphql } from "gatsby";
import Header from '../components/Header';
import { Link } from "gatsby"
import './index.scss';

class Index extends Component {
  render() {
    return (
      <>
        <Header />
        <strong>Hello and welcome to this simple site which is serving statig pages from WordPress using Gatsby.js, GraphQL and React.js</strong>
        <br></br>
        You can view all <Link to={`/posts/`}>posts</Link> and <Link to={`/pages/`}>pages</Link>.
      </>
    )
  }
}

export default Index