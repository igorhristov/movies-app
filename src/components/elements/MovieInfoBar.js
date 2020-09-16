import React from 'react';
import { calcTime, convertMoney } from '../../helpers/helpers';

import styled from 'styled-components';

const StyledMovieInfoBar = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    min-height: 100px;
    height: auto;
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
    .movieinfobar-content-col {
        float: left;
        width: 33.33%;
        box-sizing: border-box;
        padding: 10px 20px 0 0;
    }
    .movieinfobar-info {
        padding: 5px 0 0 10px;
        float: left;
    }
    .fa-time,
    .fa-revenue {
        float: left;
        margin-top: -4px;
    }
    .fa-budget {
        float: left;
        margin-top: -3px;
    }
    @media screen and (max-width: 768px) {
        .fa-time,
        .fa-revenue,
        .fa-budget {
            display: none;
        }
    }
    @media screen and (max-width: 425px) {
        font-size: 14px;
    }
`;

const MovieInfoBar = ({ time, budget, revenue }) => {
    return (
        <StyledMovieInfoBar>
            <div className='movieinfobar-content'>
                <div className='movieinfobar-content-col'>
                    <i className='fa-time clock-0 fa-2x'></i>
                    <span className='movieinfobar-info'>
                        Running time: {calcTime(time)}
                    </span>
                </div>

                <div className='movieinfobar-content-col'>
                    <i className='fa-budget money fa-2x'></i>
                    <span className='movieinfobar-info'>
                        Budget: {convertMoney(budget)}
                    </span>
                </div>

                <div className='movieinfobar-content-col'>
                    <i className='fa-revenue fa-2x'></i>
                    <span className='movieinfobar-info'>
                        Revenue: {convertMoney(revenue)}
                    </span>
                </div>
            </div>
        </StyledMovieInfoBar>
    );
};

export default MovieInfoBar;
