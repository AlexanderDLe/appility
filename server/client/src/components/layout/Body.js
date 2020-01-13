import React, { useContext } from 'react';
import { Route, Switch, __RouterContext } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';

import Authentication from '../auth/Authentication';
import Landing from './Landing';
import PrivacyPolicy from '../misc/PrivacyPolicy';
import QuizSheet from '../quiz/QuizSheet';

const stylez = {
    minHeight: 'calc(101vh - 64px)',
    padding: '24px',
    paddingBottom: '64px',
    backgroundColor: 'rgb(31, 31, 31)',
    boxShadow: '0px 0px 25px -15px #000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflowX: 'hidden'
};

const Body = () => {
    const { location } = useContext(__RouterContext);
    const transitions = useTransition(location, location => location.pathname, {
        from: {
            opacity: 0,
            position: 'absolute',
            transform: 'translate(100%,0)'
        },
        enter: { opacity: 1, position: 'static', transform: 'translate(0,0)' },
        leave: {
            opacity: 0,
            position: 'absolute',
            transform: 'translate(-100%,0)'
        }
    });

    return (
        <div style={stylez}>
            {transitions.map(({ item, props, key }) => (
                <animated.div key={key} style={props}>
                    <Switch location={item}>
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/auth" component={Authentication} />
                        <Route
                            exact
                            path="/privacy-policy"
                            component={PrivacyPolicy}
                        />
                        <Route exact path="/quiz" component={QuizSheet} />
                    </Switch>
                </animated.div>
            ))}
        </div>
    );
};

export default Body;
