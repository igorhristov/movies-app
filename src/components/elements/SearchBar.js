import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import './SearchBar.styles.css';

const StyledSearchBar = styled.div`
    max-width: 1080px;
    height: 125px;
    margin: 0 auto;
    position: relative;
    padding: 30px 0;
    box-sizing: border-box;
    color: #fff;
`;
const StyledSearchBarContent = styled.div`
    max-width: 1080px;
    width: 70%;

    height: 55px;
    float: left;
    left: 320px;
    border-bottom: 2px solid #757575;
    border-top: 0;
    border-right: 0;
    border-left: 0;

    position: relative;
    color: #757575;

    input {
        font-family: Oswald, sans-serif;

        font-size: 38px;
        position: absolute;
        left: 20px;
        top: 7px;
        border: 0;
        background: transparent;
        height: 40px;
        color: #757575;
    }
    input:focus {
        outline: none;
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
