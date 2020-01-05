import React from 'react';
import { Route } from 'react-router-dom';
import Authentication from '../auth/Authentication';
import Landing from './Landing';

const stylez = {
    height: '300vh',
    padding: '24px'
};

export default function Body() {
    return (
        <div style={stylez}>
            <Route exact path="/" component={Landing} />
            <Route exact path="/auth" component={Authentication} />
        </div>
    );
}
