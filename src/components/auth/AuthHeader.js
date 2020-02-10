import React from 'react';
import { useSpring, animated } from 'react-spring';
import { authHeaderStyles } from './AuthStyles';

const AuthHeader = props => {
    const classes = authHeaderStyles();
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
