import { apolloClient } from "../../config/apolloClient.config";
import { GET_ALL_PEOPLE } from "./queries";
import { People_getAllPeople } from "./__generated__/People";

class PeopleService {
  public async getPeople(page: Number): Promise<People_getAllPeople> {
    const response = await apolloClient
      .query({ query: GET_ALL_PEOPLE, variables: { page } })
      .catch((err) => {
        throw err;
      });

    const { getAllPeople } = response.data;

    return getAllPeople as People_getAllPeople;
  }
}

export default new PeopleService();
