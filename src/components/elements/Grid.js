import React from 'react';
import styled from 'styled-components';

const StyledGrid = styled.div`
    h1 {
        font-family: Oswald, sans-serif;
        font-size: 42px;
    }
`;

const StyledGridContent = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;

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
  
    return (
        <StyledGrid>
            <h1>{header}</h1>
            <StyledGridContent>{children}</StyledGridContent>
        </StyledGrid>
    );
};

export default Grid;
