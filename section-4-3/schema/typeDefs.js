const { gql } = require("apollo-server");
const typeDefs = gql`
    type Query {
        "A simple test property to hel you get started with GraphQL"
        hello: String,
        site: Site
    }

    type Site {
        siteMetadata: SiteMetadata
    }

    type SiteMetadata {
        title: String,
        author: String,
        description: String,
        siteUrl: String,
        social: SocialMetadata,
        menuLinks: [MenuLink]
    }

    type SocialMetadata {
        twitter: String
    }

    type MenuLink {
        name: String,
        url: String
    }
`

module.exports = typeDefs;