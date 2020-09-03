import React from 'react';
import { createGlobalStyle } from 'styled-components';

import Header from './components/elements/Header';
import Home from './components/Home';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;

const App = () => {
    return (
        <>
            <Header />
            <Home />
            <GlobalStyle />
        </>
    );
};

export default App;
