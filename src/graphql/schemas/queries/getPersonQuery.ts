import { GraphQLString } from 'graphql';
import { Person } from '../../generated/graphql';
import GqlPerson from '../../typeDefs/GqlPerson';
import dataSource from '../../../data/peopleService';

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
