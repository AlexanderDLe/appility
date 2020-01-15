import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Radio, RadioGroup } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    question: {
        color: 'white',
        fontSize: '1.15em',
        paddingBottom: '10px'
    },
    checkbox: {
        color: 'white'
    }
}));

const QuizQuestions = ({ count, data, handleAnswer }) => {
    const classes = useStyles();
    return (
        <React.Fragment>
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
        </React.Fragment>
    );
};

export default QuizQuestions;
