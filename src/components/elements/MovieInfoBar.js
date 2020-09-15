import React from 'react';

import styled from 'styled-components';

const StyledMovieInfoBar = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    min-height: auto;
    background: #1c1c1c;
    padding: 20px;
    box-sizing: border-box;
    font-family: 'Abel', sans-serif;
    font-size: 20px;

    .movieinfobar-content {
        max-width: 1280px;
        width: 100%;
        margin: 0 auto;
        color: #fff;
    }
`;

const MovieInfoBar = () => {
    return <div>Movie Info Bar</div>;
};

export default MovieInfoBar;
