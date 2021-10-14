import { apolloClient } from "../../config/apolloClient.config";
import { GET_ALL_PEOPLE } from "./queries";
import { People_getAllPeople_results } from "./__generated__/People";

class PeopleService {
  public async getPeople(page: Number): Promise<People_getAllPeople_results> {
    const response = await apolloClient
      .query({ query: GET_ALL_PEOPLE, variables: { page } })
      .catch((err) => {
        throw err;
      });

    const { getAllPeople } = response.data;

    return getAllPeople as People_getAllPeople_results;
  }
}

export default new PeopleService();
