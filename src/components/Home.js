import React, { Fragment } from 'react';
import HeroImage from './elements/HeroImage';
import SearchBar from './elements/SearchBar';
import Spinner from './elements/Spinner';
import Grid from './elements/Grid';
import MovieThumb from './elements/MovieThumb';
import LoadMoreBtn from './elements/LoadMoreBtn';

const Home = (props) => {
    return (
        <Fragment>
            <HeroImage />
            <SearchBar />
            <Grid />
            <MovieThumb />
            <Spinner />
            <LoadMoreBtn />
        </Fragment>
    );
};

export default Home;
