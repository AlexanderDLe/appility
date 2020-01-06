import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import AnimatedMascot from '../misc/AnimatedMascot';

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

export default function Landing() {
    const classes = useStyles();

    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <div className={classes.img}>
                        <AnimatedMascot />
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div className={classes.text}>
                        <h1>Welcome to Reactor</h1>
                        <p className={classes.h3text}>
                            This site is dedicated to improving your knowledge
                            in full stack development.
                        </p>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}
