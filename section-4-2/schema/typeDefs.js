const { gql } = require("apollo-server");
const typeDefs = gql`
    type Query {
        "A simple test property to hel you get started with GraphQL"
        hello: String
    }
`

module.exports = typeDefs;