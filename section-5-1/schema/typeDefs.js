const { gql } = require("apollo-server");
const typeDefs = gql`
    scalar DateTime

    type Query {
        "A simple test property to hel you get started with GraphQL"
        hello: String,
        site: Site,
        allMarkdownRemark: AllMarkdownRemark
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

    type AllMarkdownRemark {
        edges:[MarkdownRemarkEdge]
    }

    type MarkdownRemarkEdge {
        node: MarkdownRemarkNode
    }

    type MarkdownRemarkNode {
        excerpt: String,
        frontmatter: FrontmatterNode,
        fields: MarkdownRemarkFields
    }

    type MarkdownRemarkFields {
        slug: String
    }

    type FrontmatterNode {
        date: DateTime,
        title: String,
        description: String
    }
`

module.exports = typeDefs;