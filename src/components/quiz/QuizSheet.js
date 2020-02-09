import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Grid, Paper, makeStyles } from '@material-ui/core';

import QuizContents from './QuizContents';

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: '0 auto',
            width: '100%',
            maxWidth: '600px'
        }
    },
    paper: {
        backgroundColor: theme.palette.primary.main
    }
}));

const QuizSheet = ({ match, auth }) => {
    const classes = useStyles();
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

const mapStateToProps = state => {
    return {
        auth: state.auth
    };
};

export default connect(mapStateToProps)(QuizSheet);
