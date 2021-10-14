import React from "react";
import Banner from "../../components/Banner";
import PersonItem from "../../components/PersonItem";

interface PersonPageProps {
  match: {
    params: {
      name: string;
    }
  }
}



const PersonPage = (props: PersonPageProps) => {
  const { name } = props.match.params;
  return (
    <div>
      <Banner title={`${name}`} requireBack={true}/>
      <PersonItem name={name} />
    </div>
  );
};

export default PersonPage;