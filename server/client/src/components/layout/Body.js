import React, { useContext } from 'react';
import { Route, Switch, __RouterContext } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';
import { makeStyles } from '@material-ui/core';

import AuthSheet from '../auth/AuthSheet';
import Landing from './Landing';
import PrivacyPolicy from '../misc/PrivacyPolicy';
import QuizSheet from '../quiz/QuizSheet';
import ScoreSheet from '../scores/ScoreSheet';

const useStyles = makeStyles(theme => ({
    body: {
        minHeight: 'calc(101vh - 64px)',
        paddingBottom: '64px',
        backgroundColor: 'rgb(31, 31, 31)',
        boxShadow: '0px 0px 25px -15px #000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflowX: 'hidden'
    },
    div: {
        width: '100%'
    }
}));

const Body = () => {
    const classes = useStyles();
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
        <div className={classes.body}>
            {transitions.map(({ item, props, key }) => (
                <animated.div className={classes.div} key={key} style={props}>
                    <Switch location={item}>
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/auth" component={AuthSheet} />
                        <Route
                            exact
                            path="/privacy-policy"
                            component={PrivacyPolicy}
                        />
                        <Route exact path="/quiz/:id" component={QuizSheet} />
                        <Route
                            exact
                            path="/quizscores"
                            component={ScoreSheet}
                        />
                    </Switch>
                </animated.div>
            ))}
        </div>
    );
};

export default Body;
