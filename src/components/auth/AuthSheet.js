import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import { authSheetStyles } from './AuthStyles';
import AuthForm from './AuthForm';

export default function Authentication() {
    const classes = authSheetStyles();

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
