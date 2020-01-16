import React from 'react';
import { Grid } from '@material-ui/core';

import QuizCard from './QuizCard';
import JavaScriptData from './data/javascript';
import TypeScriptData from './data/typescript';
import ReactData from './data/react';
import ReduxData from './data/redux';
import NodeExpressData from './data/nodeexpress';
import GitData from './data/git';

export default () => {
    return (
        <React.Fragment>
            <Grid item xs={12} sm={6} md={4}>
                <QuizCard data={JavaScriptData} />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <QuizCard data={ReactData} />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <QuizCard data={ReduxData} />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <QuizCard data={TypeScriptData} />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <QuizCard data={NodeExpressData} />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <QuizCard data={GitData} />
            </Grid>
        </React.Fragment>
    );
};
