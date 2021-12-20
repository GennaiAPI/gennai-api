import { ApolloServer } from 'apollo-server';
import { StarWarsAPI } from './apis/starWarsApi.js'
import resolvers from './resolvers.js';
import typeDefs from './schema/index.js';

const server = new ApolloServer({
  typeDefs, resolvers, cors: false
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});