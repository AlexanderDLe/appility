import React from 'react';
import { makeStyles } from '@material-ui/core';
import { LinearProgress } from '@material-ui/core';
import { theme } from '../../styles/theme';

const useStyles = makeStyles({
    feedback: {
        margin: '0 auto',
        width: '85%',
        maxWidth: '350px'
    },
    loader: {
        backgroundColor: theme.palette.secondary.light
    }
});

const AuthAlert = ({ feedback }) => {
    const classes = useStyles();

    return (
        <div className={classes.feedback}>
            {feedback.loading ? (
                <LinearProgress className={classes.loader} color="primary" />
            ) : (
                ''
            )}
            {feedback.authError ? (
                <div style={{ color: '#f44336' }}>{feedback.authError}</div>
            ) : (
                ''
            )}
        </div>
    );
};

export default AuthAlert;
