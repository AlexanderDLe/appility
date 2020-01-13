import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core';
import { Fab } from '@material-ui/core';
import { ArrowBack, ArrowForward, Check } from '@material-ui/icons';

import QuizQuestions from './QuizQuestions';

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
        minHeight: '500px'
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
    const footerStyle = {
        borderTop: `1px solid ${data.color}`
    };
    console.log(data);
    return (
        <React.Fragment>
            <div className={classes.block} style={headerStyle}>
                <h1>{data.title}</h1>
            </div>
            <div className={classes.quizBody}>
                <QuizQuestions data={data.items} />
            </div>
            <div className={classes.block} style={footerStyle}>
                <div className={classes.buttons}>
                    <Fab size="medium" className={classes.margin}>
                        <ArrowBack />
                    </Fab>
                    <Fab size="medium" className={classes.margin}>
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
