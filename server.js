import { ApolloServer } from 'apollo-server';
import { StarWarsAPI } from './apis/starWarsApi.js'
import resolvers from './resolvers.js';
import typeDefs from './schema/index.js';

const server = new ApolloServer({
  typeDefs, resolvers
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});