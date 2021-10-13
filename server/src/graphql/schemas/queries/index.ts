import { GraphQLObjectType } from 'graphql';
import getAllPeopleQuery from '@src/graphql/schemas/queries/getPeopleQuery';

const query = new GraphQLObjectType({
  name: 'People',
  fields: {
    people: getAllPeopleQuery,
  },
});

export default query;
