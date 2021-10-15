import { GraphQLObjectType, GraphQLString } from 'graphql';

const GraphQLPerson = new GraphQLObjectType({
  name: 'Person',
  fields: () => ({
    name: {
      type: GraphQLString,
      description: 'The name of the person',
    },
    height: { type: GraphQLString, description: 'The height of the person' },
    mass: { type: GraphQLString, description: 'The mass of the person' },
    homeworld: {
      type: GraphQLString,
      description: 'The location of the person',
    },
  }),
});

export default GraphQLPerson;
