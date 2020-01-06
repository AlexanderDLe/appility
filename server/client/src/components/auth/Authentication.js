import React, { useState } from 'react';
import { Grid, Paper, makeStyles } from '@material-ui/core';
import AuthForm from './AuthForm';

const useStyles = makeStyles(theme => ({
    grid: {
        textAlign: 'center'
    },
    root: {
        '& > *': {
            margin: '0 auto',
            marginTop: '40px',
            paddingTop: '15px',
            width: '90%',
            maxWidth: '450px',
            height: '600px',
            borderRadius: '3px'
        }
    },
    paper: {
        backgroundColor: 'rgb(22, 22, 22)'
    }
}));

const auth = {
    LOGIN: 'LOGIN',
    REGISTER: 'REGISTER'
};

export default function Authentication() {
    const [authState, setAuthState] = useState(auth.LOGIN);
    const classes = useStyles();

    const changeAuthState = () => {
        if (authState === auth.LOGIN) {
            setAuthState(auth.REGISTER);
        } else {
            setAuthState(auth.LOGIN);
        }
    };

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <div className={classes.grid}>
                    <div className={classes.root}>
                        <Paper className={classes.paper} elevation={5}>
                            <AuthForm
                                changeAuthState={changeAuthState}
                                authState={authState}
                            />
                        </Paper>
                    </div>
                </div>
            </Grid>
        </Grid>
    );
}
