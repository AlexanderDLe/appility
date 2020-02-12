import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import { LandingStyles } from './LayoutStyles';
import LandingWelcome from './LandingWelcome';
import QuizGrid from '../quiz/QuizGrid';

const Landing = props => {
    const classes = LandingStyles();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <div className={classes.img}>
                        <LandingWelcome auth={props.auth} />
                    </div>
                </Grid>
                <QuizGrid />
            </Grid>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        auth: state.auth
    };
};

export default connect(mapStateToProps)(Landing);
