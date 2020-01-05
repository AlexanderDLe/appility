import React from 'react';
import Mascot from '../../img/Mascot.png';
import { Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    img: {
        padding: theme.spacing(2),
        textAlign: 'center'
    },
    text: {
        textAlign: 'center',
        fontFamily: 'Audiowide',
        color: '#e6ce72'
    },
    h3text: {
        fontFamily: 'Roboto',
        color: '#d4bf6a'
    }
}));

export default function Landing() {
    const classes = useStyles();

    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <div className={classes.img}>
                        <img alt="Mascot" src={Mascot} />
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div className={classes.text}>
                        <h1>Welcome to Reactor</h1>
                        <h3 className={classes.h3text}>
                            This site is dedicated to improving your knowledge
                            in full stack development.
                        </h3>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}
