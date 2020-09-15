import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import './SearchBar.styles.css';

const StyledSearchBar = styled.div`
    width: 100%;
    height: 105px;
    background: #1c1c1c;
    padding: 25px 20px 0px 20px;
    box-sizing: border-box;
    color: #fff;
`;
const StyledSearchBarContent = styled.div`
    max-width: 1280px;
    width: 100%;
    height: 55px;
    background: #353535;
    margin: 0 auto;
    border-radius: 40px;
    position: relative;
    color: #fff;
    .fa-search {
        position: absolute;
        left: 20px;
        top: 12px;
        color: #fff;
        z-index: 1000;
    }
    input {
        font-family: 'Abel', sans-serif;
        font-size: 28px;
        position: absolute;
        left: 0px;
        margin: 8px 0;
        padding: 0 0 0 60px;
        border: 0;
        width: 95%;
        background: transparent;
        height: 40px;
        color: #fff;
        box-sizing: border-box;
        :focus {
            outline: none;
        }
        @media screen and (max-width: 720px) {
            font-size: 28px;
        }
    }
`;

const SearchBar = ({ callback }) => {
    const [state, setState] = useState('');
    const timeOut = useRef(null);

    const doSearch = (event) => {
        const { value } = event.target;

        clearTimeout(timeOut.current);
        setState(value);

        timeOut.current = setTimeout(() => {
            callback(value);
        }, 500);
    };

    return (
        <div className='rmdb-searchbar'>
            <div className='tmdb-logo'>
                <i className='fa fa-search rmdb-tmdb'></i>
                <img
                    className='rmdb-tmdb'
                    src='/images/tmdb_logo.png'
                    alt='tmdb-logo'
                />
            </div>
            <div className='rmdb-searchbar-content'>
                <input
                    type='text'
                    className='rmdb-searchbar-input'
                    placeholder='Search Movie Title...'
                    onChange={doSearch}
                    value={state}
                />
            </div>
        </div>
    );
};

export default SearchBar;
