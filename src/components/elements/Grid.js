import React from 'react';
import styled from 'styled-components';

const StyledGrid = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 20px h1 {
        font-family: 'Abel', sans-serif;
        font-size: 42px;

        @media screen and (max-width: 768px) {
            font-size: 22px;
        }
    }
`;

const StyledGridContent = styled.div`
    display: grid;
    grid-template-columnt: repeat(5, minmax(100px, 1fr));
    grid-gap: 40px;
    position: relative;

    .grid-element {
        animation: animateGrid 0.5s;
    }

    @keyframes animateGrid {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @media screen and (max-width: 768px) {
        .grid-content {
            grid-template-columns: repeat(2, 1fr);
        }

        .grid-content h1 {
            font-size: 22px;
        }
    }

    @media screen and (max-width: 375px) {
        .grid-content {
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

const Grid = ({ header, children }) => {
    const renderElements = () => {
        const gridElements = children.map((element, i) => (
            <div key={i} className='rmdb-grid-element'>
                {element}
            </div>
        ));
        return gridElements;
    };

    return (
        <StyledGrid>
            <h1>{header}</h1>
            <StyledGridContent>{renderElements()}</StyledGridContent>
        </StyledGrid>
    );
};

export default Grid;
