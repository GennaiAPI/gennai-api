import { ApolloServerPluginDrainHttpServer, AuthenticationError } from 'apollo-server-core';

import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';
import express from 'express';
import http from 'http';
import resolvers from './resolvers/index.js';
import typeDefs from './schema/index.js';

const startServer = async () => {
  const app = express();

  app.use('/playground', express.static('playground.html'))

  app.use('/docs', express.static('prisma/docs'))

  app.use(cors({
    preflightContinue: true,
    credentials: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS"
  }))

  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    introspection: true,
    context: ({ req }) => {
      if (req.method === 'POST' && req.headers.authorization !== process.env.AUTH) {
        throw new AuthenticationError("You do not have permission to use POST method.")
      }
    },
    formatError: (err) => {
      return {
        message: err.message,
        code: err.extensions.code
      }
    }
  });

  await server.start();

  server.applyMiddleware({
    app,
    path: '/graphql'
  });

  await new Promise(resolve => httpServer.listen({ port: process.env.PORT || 8080 }, resolve));
  console.log(`🚀 Server is ready!`);
}

startServer()