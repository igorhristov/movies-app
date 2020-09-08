import React, { Fragment, useState } from 'react';

import {
    IMAGE_BASE_URL,
    POSTER_SIZE,
    BACKDROP_SIZE,
    POPULAR_BASE_POINT,
    SEARCH_BASE_URL,
} from '../helpers/config';

import HeroImage from './elements/HeroImage';
import SearchBar from './elements/SearchBar';
import Spinner from './elements/Spinner';
import Grid from './elements/Grid';
import MovieThumb from './elements/MovieThumb';
import LoadMoreBtn from './elements/LoadMoreBtn';

// Custom Hook

import { useHomeFetch } from './hooks/useHomeFetch';

import NoImage from '../images/NoImage.svg';

const Home = () => {
    const [
        {
            state: { movies, currentPage, totalPages, heroImage },
            loading,
            error,
        },
        fetchMovies,
    ] = useHomeFetch();
    const [searchTerm, setSearchterm] = useState('');

    const searchMovies = (search) => {
        const endpoint = search ? SEARCH_BASE_URL + search : POPULAR_BASE_POINT;

        setSearchterm(search);

        fetchMovies(endpoint);
    };

    const loadMoreMovies = () => {
        const searchEndpoing = `${SEARCH_BASE_URL}${searchTerm}$page=${
            currentPage + 1
        }`;
        const popularEndpoint = `${POPULAR_BASE_POINT}&page=${currentPage + 1}`;

        const endpoint = searchTerm ? searchEndpoing : popularEndpoint;

        fetchMovies(endpoint);
    };

    if (error) return <div>Something went wrong...</div>;
    if (!movies[0]) return <Spinner />;
    return (
        <Fragment>
            {!searchTerm && (
                <HeroImage
                    image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
                    title={heroImage.original_title}
                    text={heroImage.overview}
                />
            )}

            <SearchBar callback={searchMovies} />
            <Grid header={searchTerm ? 'Search Result' : 'Popular Movies'}>
                {movies.map((movie) => (
                    <MovieThumb
                        key={movie.id}
                        clickable
                        image={
                            movie.poster_path
                                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                                : NoImage
                        }
                        movieId={movie.id}
                        movieName={movie.original_title}
                    />
                ))}
            </Grid>
            {loading && <Spinner />}
            {currentPage < totalPages && !loading && (
                <LoadMoreBtn text='Load More' callback={loadMoreMovies} />
            )}
        </Fragment>
    );
};

export default Home;
