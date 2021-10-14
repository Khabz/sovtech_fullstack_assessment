import { ApolloClient, InMemoryCache } from "@apollo/client";
import dotenv from "dotenv";

dotenv.config();

export const apolloClient = new ApolloClient({
   uri: "http://localhost:4000/graphql",
   cache: new InMemoryCache(),
})