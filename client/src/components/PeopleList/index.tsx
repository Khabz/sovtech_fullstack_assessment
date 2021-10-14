import React, { useEffect } from "react";
import { createSelector, Dispatch } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import peopleService from "../../services/peopleService";
import { People_getAllPeople } from "../../services/peopleService/__generated__/People";
import { setPeople } from "../../pages/Home/slice";
import { ContentContainer, PeopleListContainer } from "./peopleList.styles";
import { makeSelectPeople } from "../../pages/Home/selector";
// Icons
import { FaUserAstronaut } from 'react-icons/fa'

const actionDispatch = (dispatch: Dispatch) => ({
  setPeople: (people: People_getAllPeople) => dispatch(setPeople(people)),
});

const stateSelector = createSelector(makeSelectPeople, (results) => results);

const PeopleList = () => {
  const [page, setPage] = React.useState(1);
  const { results, count, next, previous } = useSelector(stateSelector);
  const { setPeople } = actionDispatch(useDispatch());

  console.log(results, count, next, previous);

  const fetchPeople = async (selectedPage: number) => {
    if (selectedPage) setPage(selectedPage);
    const people = await peopleService.getPeople(page).catch((err) => {
      throw err;
    });

    if (people) setPeople(people);
  };

  useEffect(() => {
    fetchPeople(page);
  });
  return (
    <PeopleListContainer>
      <ContentContainer>
        {results &&
          results.map((person, index) => (
            <div className="boxWrap" key={index}>
              <h3>
                <FaUserAstronaut />
                <span>
                  {person?.name}
                </span>
              </h3>
            </div>
          ))}
      </ContentContainer>
    </PeopleListContainer>
  );
};

export default PeopleList;
