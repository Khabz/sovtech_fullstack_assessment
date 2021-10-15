import { Person_getPerson } from "./../../services/peopleService/__generated__/Person";
import { createSlice } from "@reduxjs/toolkit";
import { IPersonState } from "./types";

const initialState: IPersonState = {
  person: {
    __typename: "Person",
    name: null,
    height: null,
    mass: null,
    homeworld: null,
  } as Person_getPerson,
};

export const personSlice = createSlice({
  name: "person",
  initialState,
  reducers: {
    setPerson: (state, action) => {
      // TODO: clear initial state before setting new person. There must be a better way to do this
      state.person = {
        __typename: "Person",
        name: null,
        height: null,
        mass: null,
        homeworld: null,
      } as Person_getPerson;
      state.person = action.payload;
    },
  },
});

export const { setPerson } = personSlice.actions;
export default personSlice.reducer;
