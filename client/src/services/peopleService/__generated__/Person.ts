/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Person
// ====================================================

export interface Person_getPerson {
  __typename: "Person";
  /**
   * The name of the person
   */
  name: string | null;
  /**
   * The height of the person
   */
  height: string | null;
  /**
   * The mass of the person
   */
  mass: string | null;
  /**
   * The location of the person
   */
  homeworld: string | null;
}

export interface Person {
  getPerson: Person_getPerson | null;
}

export interface PersonVariables {
  name?: string | null;
}
