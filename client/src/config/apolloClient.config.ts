import { ApolloClient, InMemoryCache } from "@apollo/client";
import dotenv from "dotenv";

dotenv.config();

const { REACT_APP_API_URL } = process.env;

export const apolloClient = new ApolloClient({
   uri: `${REACT_APP_API_URL}`,
   cache: new InMemoryCache(),
})