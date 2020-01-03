import '../styles/main.sass';
import React from 'react';
import { NavBar, Body } from './layout';
import { Container } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';

const App = (): JSX.Element => {
    return (
        <React.Fragment>
            <div id="back-to-top-anchor"></div>
            <CssBaseline />
            <NavBar />
            <Container>
                <Body />
            </Container>
        </React.Fragment>
    );
};

export default App;
