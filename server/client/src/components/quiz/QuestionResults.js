import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core';
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
    console.log('hi');
    return (
        <div className={classes.root}>
            <div>
                {renderScore()}
                <h1>Your Results: {score}%</h1>
                <p>
                    You scored {corrects} out of {data.length}
                </p>
            </div>
        </div>
    );
};

export default connect(null, { saveScore })(QuestionResults);
