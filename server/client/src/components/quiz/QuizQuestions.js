import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    question: {
        color: 'white',
        fontSize: '1.25em'
    }
}));

const QuizQuestions = ({ data }) => {
    const classes = useStyles();
    console.log(data);
    return (
        <div>
            {data.map(item => {
                return (
                    <React.Fragment>
                        <div key={item.id} className={classes.question}>
                            {item.Question}
                        </div>
                        ;
                    </React.Fragment>
                );
            })}
        </div>
    );
};

export default QuizQuestions;
