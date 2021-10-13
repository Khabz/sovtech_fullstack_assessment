import { GraphQLInt, GraphQLString } from 'graphql';
import {
  QueryGetAllPeopleArgs,
  PeopleResponse,
} from '@src/graphql/generated/graphql';
import GqlPeopleResponse from '@src/graphql/typeDefs/GqlPeopleResponse';
import dataSource from '@src/data/peopleService';

const getAllPeopleQuery = {
  type: GqlPeopleResponse,
  args: {
    page: { type: GraphQLInt },
    next: { type: GraphQLString },
    prev: { type: GraphQLString },
  },
  resolve: async (_: void, _args): Promise<PeopleResponse> => {
    const { page, next, prev } = _args;

    const response = await dataSource.getAllPeople(page, next, prev);

    return response;
  },
};

export default getAllPeopleQuery;
