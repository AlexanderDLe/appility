import React, { useEffect } from 'react';
import { Grid, Paper, makeStyles } from '@material-ui/core';

import QuizContents from './QuizContents';

const useStyles = makeStyles(theme => ({
    grid: {
        textAlign: 'center'
    },
    root: {
        '& > *': {
            margin: '0 auto',
            paddingBottom: '25px',
            width: '90%',
            minWidth: '600px',
            minHeight: '850px',
            borderRadius: '3px'
        }
    },
    paper: {
        backgroundColor: theme.palette.primary.main
    }
}));

export default props => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const classes = useStyles();

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <div className={classes.grid}>
                    <div className={classes.root}>
                        <Paper className={classes.paper} elevation={1}>
                            <QuizContents />
                        </Paper>
                    </div>
                </div>
            </Grid>
        </Grid>
    );
};
