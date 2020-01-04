import React, { useEffect } from 'react';
import { Container, CssBaseline } from '@material-ui/core';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';
import { NavBar, Body } from './layout';

const App = props => {
    useEffect(() => {
        props.fetchUser();
    });

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

export default connect(null, { fetchUser })(App);
