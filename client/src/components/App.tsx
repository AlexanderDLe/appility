import '../styles/main.sass';
import React, { useEffect } from 'react';
import { NavBar, Body } from './layout';
import { Container, CssBaseline } from '@material-ui/core';
import { connect } from 'react-redux';
import * as actions from '../actions';

interface Props {
    fetchUser: Function;
}

const App = (props: Props): JSX.Element => {
    useEffect(() => {
        props.fetchUser();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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

export default connect(null, actions)(App);
