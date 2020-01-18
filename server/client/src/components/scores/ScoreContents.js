import React from 'react';
import { makeStyles } from '@material-ui/core';

import ScoreTable from './ScoreTable';

const useStyles = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(1),
        textDecoration: 'none'
    },
    header: {
        color: 'white',
        fontFamily: 'Audiowide',
        textTransform: 'uppercase',
        borderBottom: `1px solid ${theme.palette.secondary.main}`,
        textAlign: 'center',
        width: '100%',
        height: '100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    scoreBody: {
        padding: '24px 24px',
        minHeight: '400px',
        color: 'white'
    }
}));

const ScoreContents = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <div className={classes.header}>
                <h1 className={classes.header}>SCORES</h1>
            </div>
            <div className={classes.scoreBody}>
                <ScoreTable />
            </div>
        </React.Fragment>
    );
};

export default ScoreContents;
