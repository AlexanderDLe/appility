import React from 'react';
import { useMediaQuery } from '@material-ui/core';
import { ScoreContentStyles } from './ScoreStyles';
import ScoreTable from './ScoreTable';

const useMinWidthQuery = query => {
    if (query) return { padding: '24px' };
    else return { padding: '6px' };
};

const ScoreContents = () => {
    const classes = ScoreContentStyles();
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
