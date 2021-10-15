import { GraphQLInt, GraphQLString } from 'graphql';
import { PeopleResponse } from '../../generated/graphql';
import GqlPeopleResponse from '../../typeDefs/GqlPeopleResponse';
import dataSource from '../../../data/peopleService';

const getAllPeopleQuery = {
  type: GqlPeopleResponse,
  args: {
    page: { type: GraphQLInt },
  },
  resolve: async (_: void, _args): Promise<PeopleResponse> => {
    const { page } = _args;

    const response = await dataSource.getAllPeople(page);

    return response;
  },
};

export default getAllPeopleQuery;
