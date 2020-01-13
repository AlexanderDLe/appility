import React from 'react';

const ReactData = {
    title: 'React With Redux',
    label: 'Redux',
    image: 'Redux.png',
    color: '#9d42c3',
    description: 'Test your Redux fundamentals with this quiz!',
    dropdownText: () => {
        return (
            <>
                <h3>This Quiz Covers:</h3>
                <ul>
                    <li>
                        Fundamental React concepts such as the Virtual DOM,
                        stateful components, conditional rendering, JSX, etc.
                    </li>
                    <li>
                        New React Hooks such as useState, useEffect, Suspense,
                        etc.
                    </li>
                </ul>
            </>
        );
    }
};

export default ReactData;
