import '../styles/main.scss';
import React, { useEffect } from 'react';
import NavBar from './layout/NavBar';
import Body from './layout/Body';
import { Container, CssBaseline } from '@material-ui/core';
import { connect } from 'react-redux';
import * as actions from '../actions';
//
import 'crypto-js/lib-typedarrays';
import Amplify from 'aws-amplify';
import awsconfig from './config';
Amplify.configure(awsconfig);

const App = props => {
    useEffect(() => {
        props.fetchLocalUser();
        setTimeout(() => {
            props.fetchUser();
        }, 500);
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

//https://appilityauth.auth.us-west-2.amazoncognito.com/login?response_type=code&client_id=28tq1a3nmbo4eu2rcjanv4jae0&redirect_uri=http://localhost:3000
