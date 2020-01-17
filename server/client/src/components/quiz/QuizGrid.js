import React from 'react';
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';

import QuizCard from './QuizCard';
import JavaScriptData from './data/javascript';
import TypeScriptData from './data/typescript';
import ReactData from './data/react';
import ReduxData from './data/redux';
import NodeExpressData from './data/nodeexpress';
import GitData from './data/git';

const QuizGrid = ({ quiz }) => {
    return (
        <React.Fragment>
            <Grid item xs={12} sm={6} md={4}>
                <QuizCard score={quiz.JavaScript} data={JavaScriptData} />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <QuizCard score={quiz.React} data={ReactData} />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <QuizCard score={quiz.Redux} data={ReduxData} />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <QuizCard score={quiz.TypeScript} data={TypeScriptData} />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <QuizCard score={quiz.NodeExpress} data={NodeExpressData} />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <QuizCard score={quiz.Git} data={GitData} />
            </Grid>
        </React.Fragment>
    );
};

const mapStateToProps = state => {
    return {
        quiz: state.quiz
    };
};

export default connect(mapStateToProps)(QuizGrid);
