import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import { StarWarsAPI } from './apis/starWarsApi.js'
import cors from 'cors';
import express from 'express';
import http from 'http';
import resolvers from './resolvers.js';
import typeDefs from './schema/index.js';

const startServer = async () => {
  const app = express();

  var corsOptions = {
    origin: "*",
    preflightContinue: true,
    credentials: true
  };
  app.use(cors(corsOptions))

  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    typeDefs, resolvers, plugins: [ApolloServerPluginDrainHttpServer({ httpServer })], introspection: true,
  });

  await server.start();

  server.applyMiddleware({
    app,
    cors: false,
    // By default, apollo-server hosts its GraphQL endpoint at the
    // server root. However, *other* Apollo Server packages host it at
    // /graphql. Optionally provide this to match apollo-server.
    path: '/graphql'
  });

  await new Promise(resolve => httpServer.listen({ port: process.env.PORT || 4000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:${process.env.PORT || 4000}${server.graphqlPath}`);
  // server.listen({ port:  }).then(({ url }) => {
  //   console.log(`🚀  Server ready at ${url}`);
  // })
}

startServer()