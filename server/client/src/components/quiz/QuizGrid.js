import React from 'react';
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';

import QuizCard from './QuizCard';
import {
    JavaScriptData,
    TypeScriptData,
    ReactData,
    ReduxData,
    NodeExpressData,
    GitData,
    JavaData,
    AWSFundamentalsData,
    AWSDevAssociatesData
} from './data/cardData';

const QuizGrid = ({ quiz }) => {
    const cardData = [
        [quiz.JavaScript, JavaScriptData],
        [quiz.TypeScript, TypeScriptData],
        [quiz.React, ReactData],
        [quiz.Redux, ReduxData],
        [quiz.NodeExpress, NodeExpressData],
        [quiz.Git, GitData],
        [quiz.Java, JavaData],
        [quiz.AWSFundamentals, AWSFundamentalsData],
        [quiz.AWSDevAssociates, AWSDevAssociatesData]
    ];
    const renderCards = () => {
        return cardData.map(data => {
            return (
                <Grid item xs={12} sm={6} md={4}>
                    <QuizCard score={data[0]} data={data[1]} />
                </Grid>
            );
        });
    };

    return <React.Fragment>{renderCards()}</React.Fragment>;
};

const mapStateToProps = state => {
    return {
        quiz: state.quiz
    };
};

export default connect(mapStateToProps)(QuizGrid);
