import { GraphQLObjectType } from 'graphql';
import getAllPeopleQuery from './getPeopleQuery';
import getPersonQuery from './getPersonQuery';

const query = new GraphQLObjectType({
  name: 'People',
  fields: {
    getAllPeople: getAllPeopleQuery,
    getPerson: getPersonQuery,
  },
});

export default query;
