import { GraphQLObjectType, GraphQLString } from 'graphql';
import { Person } from '@src/graphql/generated/graphql';
import GqlPerson from '@src/graphql/typeDefs/GqlPerson';
import dataSource from '@src/data/peopleService';

const getPersonQuery = {
  type: GqlPerson,
  args: {
    name: { type: GraphQLString },
  },
  resolve: async (_: void, _args): Promise<Person> => {
    const { name } = _args;

    const response = await dataSource.getPerson(name);

    return response;
  },
};

export default getPersonQuery;
