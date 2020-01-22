import React from 'react';
import Mascot from '../../img/Mascot.png';
import { makeStyles } from '@material-ui/core';
import { useSpring, animated } from 'react-spring';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;

const useStyles = makeStyles(theme => ({
    text: {
        textAlign: 'center',
        fontFamily: 'Audiowide',
        color: theme.palette.secondary.main
    },
    h3text: {
        fontFamily: 'Roboto',
        color: theme.palette.secondary.light
    }
}));

export default props => {
    const classes = useStyles();

    const [spring, set] = useSpring(() => ({
        xy: [0, 0],
        config: { mass: 10, tension: 550, friction: 140 }
    }));

    return (
        <div
            style={{
                padding: '30px'
            }}
            onMouseMove={({ clientX: x, clientY: y }) =>
                set({ xy: calc(x, y) })
            }
        >
            <animated.img
                style={{
                    transform: spring.xy.interpolate(trans1)
                }}
                src={Mascot}
            />
            <div className={classes.text}>
                <h1>
                    Welcome{' '}
                    {props.auth.isAuthenticated
                        ? ` ${props.auth.username}`
                        : ' to Quizzer'}
                </h1>
                <p className={classes.h3text}>Ready to test your knowledge?</p>
            </div>
        </div>
    );
};
