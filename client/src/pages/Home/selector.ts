import { createSelector } from "reselect";
import { IRootAppState } from "../../interface";

const selectHomePage = (state: IRootAppState) => state.homePage;

export const makeSelectPeople = createSelector(selectHomePage, (homePage) => homePage.people);