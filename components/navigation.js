import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const navigationQuery = gql`
    query {
        site {
            siteMetadata {
                menuLinks {
                    url, name
                }
            }
        }
    }
`

export class Navigation extends React.Component {
    render() {
        return (
            <Query query={navigationQuery}>
            {({loading, error, data}) => {
                return (
                    <nav>
                        <ul>
                        {
                            data.site && 
                            data.site.siteMetadata &&
                            data.site.siteMetadata.menuLinks && 
                            data.site.siteMetadata.menuLinks.map(link =>{
                                return (<li key={link.url}><a href={link.url}>{link.name}</a></li>)
                            })
                        }
                        </ul>
                    </nav>
                )
            }}
            </Query>
        )
    }
}

export default Navigation