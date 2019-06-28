import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

class AboutMe extends React.Component {
    render() {
        const { data } = this.props
        const siteTitle = data.site.siteMetadata.title
        const posts = data.allMarkdownRemark.edges

        return(
            <Layout location={this.props.location} title={siteTitle}>
                <SEO
                title="All posts"
                keywords={[`blog`, `gatsby`, `javascript`, `react`]}
                />
                <h1>About me</h1>
                <p>This is a page all about me, and my latest blog posts.</p>
                <aside>
                    <h3>Latest posts</h3>
                    <ul>
                        {posts.map(({node}) => {
                            return (<li>
                                <h4>{node.frontmatter.title}</h4>
                                <date>{node.frontmatter.date}</date>
                                <p>{node.frontmatter.description || node.excerpt}</p>
                            </li>)
                        })}
                    </ul>
                </aside>

            </Layout>
        )
    }
}

export default AboutMe

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
        allMarkdownRemark(
            sort: {
                fields:[frontmatter___date],
                order:DESC
            }
        ) {
            edges {
                node {
                    excerpt,
                    frontmatter {
                        title, date, description
                    }
                }
            }
        }
    }
`