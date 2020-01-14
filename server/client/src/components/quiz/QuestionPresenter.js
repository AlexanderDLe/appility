import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Checkbox } from '@material-ui/core';

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

const QuizQuestions = ({ count, data }) => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <div className={classes.question}>
                {count + 1}. {data.Question}
            </div>
            {data.Options.map((answer, index) => {
                return (
                    <div className={classes.question} key={index}>
                        <Checkbox
                            color="default"
                            className={classes.checkbox}
                            onChange={() => console.log('hi')}
                        />
                        {answer}
                    </div>
                );
            })}
        </React.Fragment>
    );
};

export default QuizQuestions;
