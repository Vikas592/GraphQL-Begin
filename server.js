import { typeDefs } from './Graphql/typeDefs';
import { resolvers } from './Graphql/resolvers';
import { createServer } from 'http';
import express from 'express';
import { ApolloServer, PubSub } from 'apollo-server-express';

const app = express();
const httpServer = createServer(app)

const pubsub = new PubSub();
const server = new ApolloServer({ typeDefs, resolvers, 
    context:({req,res})=>({req,res, pubsub}) });

server.applyMiddleware({ app });
server.installSubscriptionHandlers(httpServer)

httpServer.listen(3000, () => {
    console.log("server started");
});
