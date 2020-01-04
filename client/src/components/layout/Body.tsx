import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const stylez = {
    height: '300vh'
};

const Dashboard = () => <h1>Dashboard</h1>;
const QuizSelection = () => <h1>QuizSelection</h1>;
const Quiz = () => <h1>Quiz</h1>;
const Scores = () => <h1>Scores</h1>;

export default function Body() {
    return (
        <div style={stylez}>
            <BrowserRouter>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/" component={QuizSelection} />
                <Route exact path="/" component={Quiz} />
                <Route exact path="/" component={Scores} />
            </BrowserRouter>
        </div>
    );
}
