import { IHomePageState } from './type';
import { createSlice } from "@reduxjs/toolkit";
import { People_getAllPeople } from '../../services/peopleService/__generated__/People';

const initialState: IHomePageState = {
    people: [] as unknown as People_getAllPeople
};

export const HomePageSlice = createSlice({
  name: "homePage",
  initialState,
  reducers: {
      setPeople: (state, action) => {
          state.people = action.payload;
      }
  }
});

export const { setPeople } = HomePageSlice.actions;
export default HomePageSlice.reducer;
