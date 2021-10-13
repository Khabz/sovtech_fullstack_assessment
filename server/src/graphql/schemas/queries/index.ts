import { GraphQLObjectType } from 'graphql';
import getAllPeopleQuery from '@src/graphql/schemas/queries/getPeopleQuery';
import getPersonQuery from '@src/graphql/schemas/queries/getPersonQuery';

const query = new GraphQLObjectType({
  name: 'People',
  fields: {
    people: getAllPeopleQuery,
    person: getPersonQuery,
  },
});

export default query;
