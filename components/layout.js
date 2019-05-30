import React, { Component } from "react";
import { Navigation } from "./navigation";
import { rhythm, scale } from "../utils/typography";
import ApolloClient from "apollo-client";
import { ApolloProvider } from "react-apollo";
import fetch from "node-fetch";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

export default class Layout extends React.Component {
  render() {
    const link = createHttpLink({ uri: '/graphql', fetch: fetch });
    const client = new ApolloClient({ link: link, cache: new InMemoryCache() });
    const { children } = this.props;
    // const { location, title } = this.props

    let header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <a
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            href={`/`}
          >
            My Gatsby starter blog!
          </a>
        </h1>
      );
    
    return (
      <ApolloProvider client={client}>
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>{header}</header>
        <Navigation />
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
      </ApolloProvider>
    );
  }
}