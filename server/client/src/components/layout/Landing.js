import React from 'react';
import { connect } from 'react-redux';
import { Grid, makeStyles } from '@material-ui/core';
import AnimatedMascot from './LandingWelcome';

const useStyles = makeStyles(theme => ({
    img: {
        padding: theme.spacing(2),
        textAlign: 'center'
    },
    text: {
        textAlign: 'center',
        fontFamily: 'Audiowide',
        color: theme.palette.secondary.main
    },
    h3text: {
        fontFamily: 'Roboto',
        color: theme.palette.secondary.light
    }
}));

function Landing(props) {
    const classes = useStyles();

    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <div className={classes.img}>
                        <AnimatedMascot auth={props.auth} />
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    };
};

export default connect(mapStateToProps)(Landing);
