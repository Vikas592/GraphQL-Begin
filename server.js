const { typeDefs } = require('./Graphql/typeDefs');
const { resolvers } = require('./Graphql/resolvers');

const express = require('express');
const { ApolloServer } = require('apollo-server-express');

const app = express();
const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });

app.listen(3000, () => {
    console.log("server started");
});