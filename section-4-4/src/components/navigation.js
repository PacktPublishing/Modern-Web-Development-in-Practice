import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"

export class Navigation extends React.Component {
    render() {
        return (
            <StaticQuery
                query={graphql`
                    query {
                        site {
                            siteMetadata {
                                menuLinks {
                                    url, name
                                }
                            }
                        }
                    }
                `}
                render={data=>(
                    <ul>
                        {data.site.siteMetadata.menuLinks.map(link =>{
                                return (<li><a href={link.url}>{link.name}</a></li>)
                            })
                        }
                    </ul>
                )} />
        )
    }
}

export default Navigation