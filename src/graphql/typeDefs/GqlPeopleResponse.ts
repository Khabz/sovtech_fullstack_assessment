import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
} from 'graphql';
import GqlPerson from './GqlPerson';

const GqlPeopleResponse = new GraphQLObjectType({
  name: 'PeopleResponse',
  fields: () => ({
    count: { type: GraphQLInt },
    next: { type: GraphQLString },
    previous: { type: GraphQLString },
    results: { type: GraphQLList(GqlPerson) },
  }),
});

export default GqlPeopleResponse;
