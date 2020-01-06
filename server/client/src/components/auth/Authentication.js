import React from 'react';
import { Grid, Paper, makeStyles } from '@material-ui/core';
import AuthForm from './AuthForm';

const useStyles = makeStyles({
    grid: {
        textAlign: 'center'
    },
    root: {
        '& > *': {
            margin: '0 auto',
            marginTop: '40px',
            paddingTop: '25px',
            paddingBottom: '25px',
            width: '90%',
            maxWidth: '450px',
            minHeight: '650px',
            borderRadius: '3px'
        }
    },
    paper: {
        backgroundColor: 'rgb(22, 22, 22)'
    }
});

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
