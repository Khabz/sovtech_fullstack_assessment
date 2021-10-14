import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { createSelector } from "reselect";
import { makeSelectPerson } from "../../pages/Person/selector";
import { setPerson } from "../../pages/Person/slice";
import peopleService from "../../services/peopleService";
import {
  Person_getPerson,
  Person,
} from "../../services/peopleService/__generated__/Person";

interface Props {
  name: string;
}

const actionDispatch = (dispatch: Dispatch) => ({
  setPerson: (payload: Person_getPerson) => dispatch(setPerson(payload)),
});

const stateSelector = createSelector(makeSelectPerson, (results) => results);

const PersonItem = (props: Props) => {
  const { name } = props;

  const { setPerson } = actionDispatch(useDispatch());

  const {
    mass,
    name: personName,
    height,
    homeworld,
  } = useSelector(stateSelector);
  const [error, setError] = useState(null);

  const fetchPerson = async () => {
    const response = await peopleService.getPersonByName(name).catch((err) => {
      setError(err);
    });
    console.log(response);

    if (response) setPerson(response);
  };

  useEffect(() => {
    fetchPerson();
  });

  const renderPerson = () => {
    return <div>{mass}</div>;
  };

  return <div>{renderPerson()}</div>;
};

export default PersonItem;
