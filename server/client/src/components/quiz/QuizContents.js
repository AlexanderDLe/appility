import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    block: {
        width: '100%',
        height: '300px'
    }
}));

const QuizContents = ({ quiz }) => {
    const fetchQuizData = label => {
        if (label) return require(`./data/${label}Data`);
        else return require(`./data/TestData`);
    };
    const data = fetchQuizData(quiz.label).default;
    console.log(data);
    console.log(data.image);
    const classes = useStyles();
    return (
        <React.Fragment>
            <div
                className={classes.block}
                style={{ backgroundImage: `url("../../img/${data.image}")` }}
                // style={{ backgroundColor: `red` }}
            ></div>
        </React.Fragment>
    );
};

const mapStateToProps = state => {
    return {
        quiz: state.quiz
    };
};

export default connect(mapStateToProps)(QuizContents);
