import React from 'react';
import { HomeContainer } from './home.styles';
import Banner from '../../components/Banner';
import PeopleList from '../../components/PeopleList'

const HomePage = () => {
    console.log(process.env.REACT_APP_API_URL)
    return (
        <HomeContainer>
            <Banner title={"Star Wars Characters"} requireBack={false} />
            <PeopleList />
        </HomeContainer>
    );
}

export default HomePage