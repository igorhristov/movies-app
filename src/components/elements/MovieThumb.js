import React from 'react';
import styled from 'styled-components';

const StyledMovieThumb = styled.div`
    width: 100%;
    height: auto;
    transition: all 0.3s;
    object-fit: cover;
    border-radius: 20px;

    .clickable {
        cursor: pointer;
    }

    .clickable:hover {
        opacity: 0.8;
    }
`;

const MovieThumb = ({ image, movieId, clickable }) => {
    return (
        <StyledMovieThumb className='rmdb-moviethumb'>
            {clickable ? (
                <img className='clickable' src={image} alt='moviethumb' />
            ) : (
                <img src={image} alt='moviethumb' />
            )}
        </StyledMovieThumb>
    );
};

export default MovieThumb;
