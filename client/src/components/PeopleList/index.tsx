import React, { useEffect } from "react";
import { createSelector, Dispatch } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import peopleService from "../../services/peopleService";
import { People_getAllPeople } from "../../services/peopleService/__generated__/People";
import { setPeople } from "../../pages/Home/slice";
import { ContentContainer, PeopleListContainer } from "./peopleList.styles";
import { makeSelectPeople } from "../../pages/Home/selector";
// Icons
import { FaUserAstronaut, FaWeight } from 'react-icons/fa';
import { GiBodyHeight } from 'react-icons/gi';
import { BiPlanet } from 'react-icons/bi';

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
              <p>
                <GiBodyHeight />
                <span>
                  {person?.height}
                </span>
              </p>
              <p>
                <FaWeight />
                <span>
                  {person?.mass}
                </span>
              </p>
              <p>
                <BiPlanet />
                <span>
                  {person?.homeworld}
                </span>
              </p>
            </div>
          ))}
      </ContentContainer>
    </PeopleListContainer>
  );
};

export default PeopleList;
