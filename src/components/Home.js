import React, { Fragment, useState, useEffect } from 'react';

import {
    API_KEY,
    API_URL,
    IMAGE_BASE_URL,
    POSTER_SIZE,
    BACKDROP_SIZE,
} from '../helpers/config';

import HeroImage from './elements/HeroImage';
import SearchBar from './elements/SearchBar';
import Spinner from './elements/Spinner';
import Grid from './elements/Grid';
import MovieThumb from './elements/MovieThumb';
import LoadMoreBtn from './elements/LoadMoreBtn';

// Custom Hook

import { useHomeFetch } from './hooks/useHomeFetch';

const Home = (props) => {
    const [{ state, loading, error }, fetchMovies] = useHomeFetch();

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
