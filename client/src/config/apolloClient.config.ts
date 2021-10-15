import { ApolloClient, InMemoryCache } from "@apollo/client";

const { REACT_APP_API_URL } = process.env;

export const apolloClient = new ApolloClient({
   uri: "/graphql",
   cache: new InMemoryCache(),
})