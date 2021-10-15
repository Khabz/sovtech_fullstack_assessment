import React, { useEffect } from "react";
import { createSelector, Dispatch } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import peopleService from "../../services/peopleService";
import { People_getAllPeople } from "../../services/peopleService/__generated__/People";
import { setPeople } from "../../pages/Home/slice";
import { ContentContainer, PeopleListContainer } from "./peopleList.styles";
import { makeSelectPeople } from "../../pages/Home/selector";
// Icons
import { FaUserAstronaut, FaWeight } from "react-icons/fa";
import { GiBodyHeight } from "react-icons/gi";
import { BiPlanet } from "react-icons/bi";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

// Dispatch set people action
const actionDispatch = (dispatch: Dispatch) => ({
  setPeople: (people: People_getAllPeople) => dispatch(setPeople(people)),
});

// Create selector and return people data
const stateSelector = createSelector(makeSelectPeople, (results) => results);

const PeopleList = () => {
  const [page, setPage] = React.useState(1);
  const [error, setError] = React.useState(null);
  const { setPeople } = actionDispatch(useDispatch());
  const { results, count, next, previous } = useSelector(stateSelector);
  const history = useHistory();

  // Fetch people data
  const fetchPeople = async (selectedPage: number) => {
    if (selectedPage) setPage(selectedPage);
    const people = await peopleService.getPeople(page).catch((err) => {
      setError(err);
    });

    if (people) setPeople(people);
  };
  // Render people list
  const renderPeopleList = () => {
    if (!results && !error) {
      return <div className="events">Loading...</div>;
    }

    if (error) {
      return <div className="events">Something went wrong</div>;
    }

    if (results && results.length === 0) {
      return <div className="events">No results</div>;
    }

    if (results && !error) {
      return results.map((person, index) => (
        <div
          onClick={() => {
            goToPersonPage(String(person?.name));
          }}
          className="boxWrap"
          key={index}
        >
          <h3>
            <FaUserAstronaut />
            <span>{person?.name}</span>
          </h3>
          <p>
            <GiBodyHeight />
            <span>{person?.height}</span>
          </p>
          <p>
            <FaWeight />
            <span>{person?.mass}</span>
          </p>
          <p>
            <BiPlanet />
            <span>{person?.homeworld}</span>
          </p>
        </div>
      ));
    }
  };

  // Route to person detail page with using params from url
  const goToPersonPage = (name: string) => {
    history.push(`/person/${name}`);
  };

  // Render a simple pagination
  const renderPagination = () => {
    if (next || previous) {
      return (
        <div className="pagination">
          {previous && (
            <button
              className="pagination__button"
              onClick={() => fetchPeople(parseInt(previous.split("=")[1]))}
            >
              <MdArrowBackIosNew />
            </button>
          )}
          {next && (
            <button
              className="pagination__button"
              onClick={() => fetchPeople(parseInt(next.split("=")[1]))}
            >
              <MdArrowForwardIos />
            </button>
          )}
        </div>
      );
    }
  };

  // render results count
  const renderResultsCount = () => {
    if (count) {
      return (
        <div className="results__count">
          <span>{count} results found</span>
        </div>
      );
    }
  };

  useEffect(() => {
    fetchPeople(page);
  });

  return (
    <PeopleListContainer>
      <ContentContainer>
        {renderResultsCount()}
        {renderPeopleList()}
        {renderPagination()}
      </ContentContainer>
    </PeopleListContainer>
  );
};

export default PeopleList;
