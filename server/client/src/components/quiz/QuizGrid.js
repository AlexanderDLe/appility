import React from 'react';
import { Grid } from '@material-ui/core';

import QuizCard from './QuizCard';
import JavaScriptData from './data/JavaScriptData';
import TypeScriptData from './data/TypeScriptData';
import ReactData from './data/ReactData';
import ReduxData from './data/ReduxData';
import NodeExpress from './data/NodeExpress';
import GitData from './data/GitData';

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
                <QuizCard data={NodeExpress} />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <QuizCard data={GitData} />
            </Grid>
        </React.Fragment>
    );
};
