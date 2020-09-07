import React from 'react';
import styled from 'styled-components';

const StyledMovieThumb = styled.div`
margin: 0 20px 20px 0;
background: #fff;
max-height: 380px;
animation: animateGrid 0.5s;
overflow: hidden;


    .clickable {
        cursor: pointer;
    }

    .clickable:hover {
        opacity: 0.8;
    }

    
@keyframes animateGrid {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  &:nth-child(4n + 4) {
    margin-right: 0;
`;

const MovieThumb = ({ image, movieId, clickable }) => {
    return (
        <StyledMovieThumb>
            {clickable ? (
                <img className='clickable' src={image} alt='moviethumb' />
            ) : (
                <img src={image} alt='moviethumb' />
            )}
        </StyledMovieThumb>
    );
};

export default MovieThumb;
