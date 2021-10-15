import { GraphQLSchema } from 'graphql';
import queries from './queries/index';

const schema: GraphQLSchema = new GraphQLSchema({
  query: queries,
});

export default schema;
