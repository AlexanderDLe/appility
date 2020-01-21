import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles, Radio, RadioGroup } from '@material-ui/core';
import { Check, Close } from '@material-ui/icons';
import getScoreGrade from './getScoreGrade';
import { saveScore } from '../../actions';
import { useSpring, animated } from 'react-spring';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        minHeight: '400px',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        paddingBottom: '10px'
    },
    box: {
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '150px',
        width: '150px',
        border: '3px solid white',
        borderRadius: '50%'
    },
    scoreLetter: {
        fontFamily: 'Audiowide',
        fontSize: '5em'
    },
    question: {
        color: 'white',
        fontSize: '1.15em',
        paddingBottom: '10px',
        display: 'flex',
        alignItems: 'start'
    },
    questionOption: {
        paddingTop: '10px'
    },
    seeAnswer: {
        cursor: 'pointer'
    },
    checkbox: {
        color: 'white'
    },
    incorrect: {
        color: '#ff2525'
    },
    correct: {
        color: '#00ff00'
    }
}));

const QuestionResults = ({ saveScore, data, subject }) => {
    const classes = useStyles();
    const corrects = data.reduce((accumulator, item) => {
        return item.correct ? accumulator + 1 : accumulator;
    }, 0);
    const score = corrects ? Math.floor((corrects / data.length) * 100) : 0;

    useEffect(() => {
        saveScore({ subject, score });
    }, [subject, score, saveScore]);

    const spring = useSpring({
        config: {
            mass: 2,
            tension: 250
        },
        opacity: 1,
        transform: 'translateY(0%)',
        from: {
            opacity: 0,
            transform: 'translateY(-100%)'
        }
    });

    const renderScore = () => {
        const { color, scoreLetter, boxPadding } = getScoreGrade(score);
        return (
            <animated.div style={spring}>
                <div
                    style={{ paddingLeft: boxPadding, borderColor: color }}
                    className={classes.box}
                >
                    <div
                        style={{ color: color }}
                        className={classes.scoreLetter}
                    >
                        {scoreLetter}
                    </div>
                </div>
            </animated.div>
        );
    };

    const renderAnswers = () => {
        return data.map((dataObject, index) => {
            return (
                <div key={index} style={{ paddingBottom: '50px' }}>
                    <div className={classes.question}>
                        <div className="">{index + 1}.</div>
                        <div style={{ paddingLeft: '10px' }}>
                            {dataObject.question}
                        </div>
                    </div>
                    <RadioGroup>
                        {dataObject.options.map((answer, index) => {
                            return (
                                <div className={classes.question} key={index}>
                                    <Radio
                                        color="default"
                                        checked={
                                            answer === dataObject.chosenAnswer
                                        }
                                        value={answer}
                                        className={classes.checkbox}
                                    />
                                    <div className={classes.questionOption}>
                                        {answer}
                                    </div>
                                </div>
                            );
                        })}
                    </RadioGroup>
                    <div className={classes.question}>
                        <div className="">
                            {dataObject.correct ? (
                                <Check className={classes.correct} />
                            ) : (
                                <Close className={classes.incorrect} />
                            )}
                            {dataObject.answerDescription}
                        </div>
                    </div>
                </div>
            );
        });
    };

    return (
        <React.Fragment>
            <div className={classes.root}>
                <div>
                    {renderScore()}
                    <h1>Your Results: {score}%</h1>
                    <p style={{ paddingBottom: '20px' }}>
                        You scored {corrects} out of {data.length}
                    </p>
                </div>
            </div>
            {renderAnswers()}
        </React.Fragment>
    );
};

export default connect(null, { saveScore })(QuestionResults);
