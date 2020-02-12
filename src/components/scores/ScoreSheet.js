import React, { useEffect } from 'react';
import { Grid, Paper } from '@material-ui/core';
import { ScoreSheetStyles } from './ScoreStyles';
import { Redirect } from 'react-router-dom';

import ScoreContents from './ScoreContents';

const ScoreSheet = ({ match }) => {
    const classes = ScoreSheetStyles();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!localStorage.getItem('appilityAuth')) {
        return <Redirect to="/auth" />;
    }

    return (
        <Grid container spacing={3}>
            <Grid item className={classes.root} xs={12}>
                <Paper className={classes.paper} elevation={1}>
                    <ScoreContents />
                </Paper>
            </Grid>
        </Grid>
    );
};

export default ScoreSheet;
