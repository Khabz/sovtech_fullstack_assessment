import { GraphQLInt, GraphQLString } from 'graphql';
import { PeopleResponse } from '@src/graphql/generated/graphql';
import GqlPeopleResponse from '@src/graphql/typeDefs/GqlPeopleResponse';
import dataSource from '@src/data/peopleService';

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
