import React from 'react';
import { Grid, Paper, makeStyles } from '@material-ui/core';
import Login from './Login';
import Register from './Register';

const useStyles = makeStyles(theme => ({
    grid: {
        textAlign: 'center'
    },
    root: {
        '& > *': {
            margin: '0 auto',
            marginTop: '50px',
            paddingTop: '25px',
            width: '90%',
            maxWidth: '450px',
            height: '600px',
            borderRadius: '5px'
        }
    },
    paper: {
        backgroundColor: 'white'
    }
}));

export default function Authentication() {
    const classes = useStyles();
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <div className={classes.grid}>
                    <div className={classes.root}>
                        <Paper className={classes.paper} elevation={20}>
                            <Register />
                        </Paper>
                    </div>
                </div>
            </Grid>
        </Grid>
    );
}
