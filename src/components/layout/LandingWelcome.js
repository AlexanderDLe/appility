import React from 'react';
import Mascot from '../../img/Mascot.png';
import { LandingWelcomeStyles } from './LayoutStyles';
import { useSpring, animated } from 'react-spring';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;

export default props => {
    const classes = LandingWelcomeStyles();

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
                    {props.auth.isVerified &&
                    localStorage.getItem('appilityAuth') === 'true'
                        ? ` ${props.auth.username}`
                        : ' to Appility'}
                </h1>
            </div>
        </div>
    );
};
