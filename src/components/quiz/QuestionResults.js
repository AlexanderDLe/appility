import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Radio, RadioGroup } from '@material-ui/core';
import { QuizQuestionResults } from './QuizStyles';
import { Check, Close } from '@material-ui/icons';
import getScoreGrade from '../misc/getScoreGrade';
import { saveScore } from '../../actions';
import { useSpring, animated } from 'react-spring';

const QuestionResults = ({ auth, saveScore, data, subject }) => {
    const classes = QuizQuestionResults();
    const corrects = data.reduce((accumulator, item) => {
        return item.correct ? accumulator + 1 : accumulator;
    }, 0);
    const score = corrects ? Math.floor((corrects / data.length) * 100) : 0;

    useEffect(() => {
        if (auth.isVerified) saveScore({ subject, score });
    }, [subject, score, saveScore, auth]);

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

const mapStateToProps = state => {
    return {
        auth: state.auth
    };
};

export default connect(mapStateToProps, { saveScore })(QuestionResults);
