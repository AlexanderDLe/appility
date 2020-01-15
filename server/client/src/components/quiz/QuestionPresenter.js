import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Radio, RadioGroup } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    question: {
        color: 'white',
        fontSize: '1.15em',
        paddingBottom: '10px'
    },
    seeAnswer: {
        cursor: 'pointer'
    },
    checkbox: {
        color: 'white'
    }
}));

const QuizQuestions = ({
    count,
    countTotal,
    data,
    handleAnswer,
    showAnswer
}) => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <p>
                Question {count + 1} of {countTotal}
            </p>
            <div className={classes.question}>
                {count + 1}. {data.question}
            </div>
            <RadioGroup>
                {data.options.map((answer, index) => {
                    return (
                        <div className={classes.question} key={index}>
                            <Radio
                                color="default"
                                checked={answer === data.chosenAnswer}
                                value={answer}
                                className={classes.checkbox}
                                onChange={() => handleAnswer(data.id, answer)}
                            />
                            {answer}
                        </div>
                    );
                })}
            </RadioGroup>
            <p className={classes.seeAnswer}>
                {showAnswer ? data.answerDescription : ''}
            </p>
        </React.Fragment>
    );
};

export default QuizQuestions;
