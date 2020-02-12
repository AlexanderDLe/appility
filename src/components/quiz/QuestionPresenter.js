import React from 'react';
import { Radio, RadioGroup } from '@material-ui/core';
import { QuizQuestionPresenter } from './QuizStyles';

const QuizQuestions = ({
    count,
    countTotal,
    data,
    handleAnswer,
    showAnswer
}) => {
    const classes = QuizQuestionPresenter();

    return (
        <React.Fragment>
            <p>
                Question {count + 1} of {countTotal}
            </p>
            <div className={classes.question}>
                <div className="">{count + 1}.</div>
                <div style={{ paddingLeft: '10px' }}>{data.question}</div>
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
                                onChange={() => handleAnswer(count, answer)}
                            />
                            <div className={classes.questionOption}>
                                {answer}
                            </div>
                        </div>
                    );
                })}
            </RadioGroup>
            <p className={classes.showAnswer}>
                {showAnswer ? data.answerDescription : ''}
            </p>
        </React.Fragment>
    );
};

export default QuizQuestions;
