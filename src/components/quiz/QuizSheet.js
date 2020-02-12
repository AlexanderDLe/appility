import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { Grid, Paper } from '@material-ui/core';
import { QuizSheetStyles } from './QuizStyles';

import QuizContents from './QuizContents';

const QuizSheet = ({ match }) => {
    const classes = QuizSheetStyles();
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
                    <QuizContents param={match.params.id} />
                </Paper>
            </Grid>
        </Grid>
    );
};

export default QuizSheet;
