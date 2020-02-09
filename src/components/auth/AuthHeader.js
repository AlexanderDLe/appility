import React from 'react';
import { useSpring, animated } from 'react-spring';
import { makeStyles } from '@material-ui/core';
import { theme } from '../../styles/theme';

const useStyles = makeStyles({
    header: {
        fontFamily: 'Audiowide',
        color: theme.palette.secondary.light,
        fontSize: '2.5em',
        fontWeight: 'lighter',
        padding: '20px'
    }
});

const AuthHeader = props => {
    const classes = useStyles();
    const spring = useSpring({
        opacity: 1,
        transform: 'translateY(0%)',
        from: {
            opacity: 0,
            transform: 'translateY(-100%)'
        }
    });
    return (
        <animated.div className={classes.header} style={spring}>
            {props.authState}
        </animated.div>
    );
};

export default AuthHeader;
