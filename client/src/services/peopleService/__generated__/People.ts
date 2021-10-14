/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: People
// ====================================================

export interface People_getAllPeople_results {
  __typename: "Person";
  /**
   * The location of the person
   */
  homeworld: string | null;
  /**
   * The mass of the person
   */
  mass: string | null;
  /**
   * The height of the person
   */
  height: string | null;
  /**
   * The name of the person
   */
  name: string | null;
}

export interface People_getAllPeople {
  __typename: "PeopleResponse";
  count: number | null;
  next: string | null;
  previous: string | null;
  results: (People_getAllPeople_results | null)[] | null;
}

export interface People {
  getAllPeople: People_getAllPeople | null;
}

export interface PeopleVariables {
  page?: number | null;
}
