import React from 'react';
import { useSpring, animated } from 'react-spring';

const AuthHeader = props => {
    const spring = useSpring({
        opacity: 1,
        transform: 'translateY(0%)',
        from: {
            opacity: 0,
            transform: 'translateY(-100%)'
        }
    });
    return (
        <animated.div style={spring}>
            {props.authState === 'LOGIN' ? 'SIGN IN' : 'REGISTER'}
        </animated.div>
    );
};

export default AuthHeader;
