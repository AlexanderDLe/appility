import React from 'react';
import { makeStyles, useMediaQuery } from '@material-ui/core';

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
        minHeight: '400px',
        color: 'white'
    }
}));

const useMinWidthQuery = query => {
    if (query) return { padding: '24px' };
    else return { padding: '6px' };
};

const ScoreContents = () => {
    const classes = useStyles();
    const minWidthQuery = useMediaQuery('(min-width:500px)');
    const dynamicPadding = useMinWidthQuery(minWidthQuery);

    return (
        <React.Fragment>
            <div className={classes.header}>
                <h1 className={classes.header}>SCORES</h1>
            </div>
            <div style={dynamicPadding} className={classes.scoreBody}>
                <ScoreTable />
            </div>
        </React.Fragment>
    );
};

export default ScoreContents;
