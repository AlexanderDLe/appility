import React from 'react';
import { Grid, Paper, makeStyles } from '@material-ui/core';
import AuthForm from './AuthForm';

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: '0 auto',
            width: '100%',
            maxWidth: '450px'
        }
    },
    paper: {
        backgroundColor: theme.palette.primary.main
    }
}));

export default function Authentication() {
    const classes = useStyles();

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <div className={classes.grid}>
                    <div className={classes.root}>
                        <Paper className={classes.paper} elevation={1}>
                            <AuthForm />
                        </Paper>
                    </div>
                </div>
            </Grid>
        </Grid>
    );
}
