import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    header: {
        width: '100%',
        height: '100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}));

const QuizContents = ({ quiz }) => {
    const classes = useStyles();
    const fetchQuizData = label => {
        if (label) return require(`./data/${label}Data`);
        else return require(`./data/TestData`);
    };
    const data = fetchQuizData(quiz.label).default;
    const headerStyle = {
        color: 'white',
        fontFamily: 'Audiowide',
        textTransform: 'uppercase',
        borderBottom: `1px solid ${data.color}`
    };

    return (
        <React.Fragment>
            <div className={classes.header} style={headerStyle}>
                <h1>{data.title}</h1>
            </div>
            <div></div>
        </React.Fragment>
    );
};

const mapStateToProps = state => {
    return {
        quiz: state.quiz
    };
};

export default connect(mapStateToProps)(QuizContents);
