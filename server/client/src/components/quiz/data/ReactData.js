import React from 'react';

const ReactData = {
    title: 'Modern React',
    label: 'React',
    image: 'React.png',
    color: '#61dafb',
    description: 'Test your React fundamentals with this quiz!',
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
