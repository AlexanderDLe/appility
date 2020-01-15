import React from 'react';
import { makeStyles } from '@material-ui/core';
import scoreRender from './scoreRender';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        minHeight: '400px',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontSize: '1.15em',
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
    }
}));

const QuestionResults = ({ data }) => {
    const classes = useStyles();
    const corrects = data.reduce((accumulator, item) => {
        return item.correct ? accumulator + 1 : accumulator;
    }, 0);
    const percent = corrects ? Math.floor((corrects / data.length) * 100) : 0;
    const renderResult = () => {
        const { color, scoreLetter, boxPadding } = scoreRender(percent);

        return (
            <div
                style={{ paddingLeft: boxPadding, borderColor: color }}
                className={classes.box}
            >
                <div style={{ color: color }} className={classes.scoreLetter}>
                    {scoreLetter}
                </div>
            </div>
        );
    };
    return (
        <div className={classes.root}>
            <div>
                {renderResult()}
                <h1>Your Results: {percent}%</h1>
                <p>
                    You scored {corrects} out of {data.length}
                </p>
            </div>
        </div>
    );
};

export default QuestionResults;
