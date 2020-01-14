import React, { useState } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core';
import { Fab } from '@material-ui/core';
import { ArrowBack, ArrowForward, Check } from '@material-ui/icons';

import QuestionPresenter from './QuestionPresenter';

const useStyles = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(1)
    },
    block: {
        width: '100%',
        height: '100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    submitButton: {
        margin: theme.spacing(1),
        backgroundColor: '#87c643',
        color: 'white',
        padding: '0px 30px'
    },
    quizBody: {
        padding: '24px 24px',
        minHeight: '500px',
        color: 'white'
    }
}));

const fetchQuizData = label => {
    if (label) return require(`./data/${label}Data`);
    else return require(`./data/TestData`);
};
const QuizContents = ({ quiz }) => {
    const classes = useStyles();
    const data = fetchQuizData(quiz.label).default;
    const style = {
        header: {
            color: 'white',
            fontFamily: 'Audiowide',
            textTransform: 'uppercase',
            borderBottom: `1px solid ${data.color}`,
            textAlign: 'center'
        },
        footer: {
            borderTop: `1px solid ${data.color}`
        }
    };
    const [questionCount, setQuestionCount] = useState(0);
    const incrementCounter = () => {
        if (questionCount < data.items.length - 1) {
            setQuestionCount(questionCount + 1);
        }
    };
    const decrementCounter = () => {
        if (questionCount > 0) {
            setQuestionCount(questionCount - 1);
        }
    };

    console.log(data);
    return (
        <React.Fragment>
            <div className={classes.block} style={style.header}>
                <h1>{data.title}</h1>
            </div>
            <div className={classes.quizBody}>
                <p>
                    Question {questionCount + 1} of {data.items.length}
                </p>
                <QuestionPresenter
                    count={questionCount}
                    data={data.items[questionCount]}
                />
            </div>
            <div className={classes.block} style={style.footer}>
                <div className={classes.buttons}>
                    <Fab
                        onClick={decrementCounter}
                        size="medium"
                        className={classes.margin}
                    >
                        <ArrowBack />
                    </Fab>
                    <Fab
                        onClick={incrementCounter}
                        size="medium"
                        className={classes.margin}
                    >
                        <ArrowForward />
                    </Fab>
                    <Fab variant="extended" className={classes.submitButton}>
                        <Check style={{ paddingRight: '10px' }} />
                        SUBMIT
                    </Fab>
                </div>
            </div>
        </React.Fragment>
    );
};

const mapStateToProps = state => {
    return {
        quiz: state.quiz
    };
};

export default connect(mapStateToProps)(QuizContents);
