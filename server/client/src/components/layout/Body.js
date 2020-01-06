import React from 'react';
import { Route } from 'react-router-dom';
import Authentication from '../auth/Authentication';
import Landing from './Landing';
import PrivacyPolicy from '../misc/PrivacyPolicy';

const stylez = {
    height: '300vh',
    padding: '24px',
    backgroundColor: 'rgb(31, 31, 31)',
    boxShadow: '0px 0px 25px -15px #000'
};

export default function Body() {
    return (
        <div style={stylez}>
            <Route exact path="/" component={Landing} />
            <Route exact path="/auth" component={Authentication} />
            <Route exact path="/privacy-policy" component={PrivacyPolicy} />
        </div>
    );
}
