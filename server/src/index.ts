import { ApolloServer } from 'apollo-server';
import dotenv from 'dotenv-safe';
import schema from '@src/graphql/schemas/schema';
import { performAstCodegen } from '@src/codegen';

dotenv.config();

const startServer = () => {
  const server = new ApolloServer({
    schema,
  });

  performAstCodegen();

  server
    .listen()
    .then(({ url }) => {
      console.log(`🚀  Server ready at ${url}graphql`);
    })
    .catch(err => console.log('Error launching server', err));
};

startServer();
