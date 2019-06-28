const createServer = require("http");
const parse = require("url");
const next = require("next");
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./schema/typeDefs");
const resolvers = require("./schema/resolvers");

const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
    const apolloServer = new ApolloServer({
        typeDefs, resolvers
    });

    const app = express();

    apolloServer.applyMiddleware({ app });

    app.get("/graphql", (req, res) => { apolloServer });

    app.get("*", (req, res) => { return handle(req, res); });

    app.set('port', process.env.PORT || 8000);
    var port = app.get('port');

    app.listen(port, err => {
        if (err) throw err;
        console.log(`> ready on http://localhost:${port}`);
        console.log(`> Apollo Server ready at http://localhost:${port}${apolloServer.graphqlPath}`);
    })
});