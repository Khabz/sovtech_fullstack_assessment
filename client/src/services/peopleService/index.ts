import { apolloClient } from "../../config/apolloClient.config";
import { GET_ALL_PEOPLE, GET_PERSON } from "./queries";
import { People_getAllPeople } from "./__generated__/People";
import { Person_getPerson } from "./__generated__/Person";

class PeopleService {
  public async getPeople(page: Number): Promise<People_getAllPeople> {
    const response = await apolloClient
      .query({ query: GET_ALL_PEOPLE, variables: { page } })
      .catch((err) => {
        return err;
      });

    const { getAllPeople } = response.data;

    return getAllPeople as People_getAllPeople;
  }

  public async getPersonByName(name: String): Promise<Person_getPerson> {
    const response = await apolloClient
      .query({ query: GET_PERSON, variables: { name } })
      .catch((err) => {
        return err;
      });

    const { getPerson } = response.data;

    console.log("service", getPerson);

    return getPerson as Person_getPerson;
  }
}

export default new PeopleService();
