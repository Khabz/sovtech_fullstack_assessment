import { createSelector } from "reselect";
import { IRootPersonState } from "../../interface";

const selectPersonPage = (state: IRootPersonState) => state.personPage;

export const makeSelectPerson = createSelector(
  selectPersonPage,
  (personPage) => personPage.person
);