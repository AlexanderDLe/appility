import React, { useEffect } from 'react';
import { Grid, Paper, makeStyles } from '@material-ui/core';

import QuizContents from './QuizContents';

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: '0 auto',
            width: '90%',
            minWidth: '600px',
            borderRadius: '3px'
        }
    },
    paper: {
        backgroundColor: theme.palette.primary.main
    }
}));

export default ({ match }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const classes = useStyles();

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
