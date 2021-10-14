import React from 'react';
import { HomeContainer } from './home.styles';
import Banner from '../../components/Banner';
import PeopleList from '../../components/PeopleList'

const HomePage = () => {
    return (
        <HomeContainer>
            <Banner />
            <PeopleList />
        </HomeContainer>
    );
}

export default HomePage