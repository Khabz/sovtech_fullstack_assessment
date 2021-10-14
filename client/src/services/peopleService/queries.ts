import { gql } from "@apollo/client";

export const GET_ALL_PEOPLE = gql`
  query People($page: Int) {
    getAllPeople(page: $page) {
      count
      next
      previous
      results {
        homeworld
        mass
        height
        name
      }
    }
  }
`;
