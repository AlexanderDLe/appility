import '../styles/main.scss';
import React, { useEffect } from 'react';
import NavBar from './layout/NavBar';
import Body from './layout/Body';
import { Container, CssBaseline } from '@material-ui/core';
import { connect } from 'react-redux';
import * as actions from '../actions';

const App = props => {
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

const mapStateToProps = state => {
    return {
        username: state.auth.username
    };
};

export default connect(mapStateToProps, actions)(App);
