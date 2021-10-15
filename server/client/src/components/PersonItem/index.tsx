import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { createSelector } from "reselect";
import { makeSelectPerson } from "../../pages/Person/selector";
import { setPerson } from "../../pages/Person/slice";
import peopleService from "../../services/peopleService";
import { Person_getPerson } from "../../services/peopleService/__generated__/Person";
import { PersonItemContainer, PersonItemContent } from "./personItem.styles";
// Icons
import { BiUser, BiPlanet } from "react-icons/bi";
import { GiWeight, GiBodyHeight } from "react-icons/gi";

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
    if (!error && !personName) return <div>Loading...</div>;

    if (error) return <div>Something went wrong.....</div>;

    if (!personName) return <div>No person found</div>;

    return (
      <>
        <PersonItemContent>
          <div className="item">
            <span>
              <BiUser />
            </span>
            <h4>{personName}</h4>
          </div>
          <div className="item">
            <span>
              <GiWeight />
            </span>
            <h4>{mass} kg</h4>
          </div>
          <div className="item">
            <span>
              <GiBodyHeight />
            </span>
            <h4>{height}</h4>
          </div>
          <div className="item">
            <span>
              <BiPlanet />
            </span>
            <h4>{homeworld}</h4>
          </div>
        </PersonItemContent>
      </>
    );
  };

  return <PersonItemContainer>{renderPerson()}</PersonItemContainer>;
};

export default PersonItem;
