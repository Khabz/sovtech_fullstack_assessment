import React, { useEffect } from "react";
import { Dispatch } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import peopleService from "../../services/peopleService";
import { People_getAllPeople_results } from "../../services/peopleService/__generated__/People";
import { setPeople } from "../../pages/Home/slice";

const actionDispatch = (dispatch: Dispatch) => ({
  setPeople: (people: People_getAllPeople_results) =>
    dispatch(setPeople(people)),
});

const PeopleList = () => {
  const { setPeople } = actionDispatch(useDispatch());

  const fetchPeople = async (page: 1) => {
    const people = await peopleService.getPeople(page).catch((err) => {
      console.log(err);
    });

    if(people) setPeople(people);
  };

  useEffect(() => {
    fetchPeople(1);
  }, []);
  return (
    <div>
      <h1>People List</h1>
    </div>
  );
};

export default PeopleList;
