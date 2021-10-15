import { GraphQLSchema } from 'graphql';
import queries from '@src/graphql/schemas/queries/index';

const schema: GraphQLSchema = new GraphQLSchema({
  query: queries,
});

export default schema;
