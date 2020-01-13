import React from 'react';

const GitData = {
    title: 'Version Control With Git/Github',
    label: 'Git',
    image: 'Git.png',
    color: '#f44c28',
    description: 'Test your Git fundamentals with this quiz!',
    dropdownText: () => {
        return (
            <>
                <h3>This Quiz Covers:</h3>
                <ul>
                    <li>
                        Basics such as variables, functions, arrays, objects,
                        etc.
                    </li>
                    <li>Functional Programming concepts.</li>
                    <li>Object Orientation concepts.</li>
                    <li>Promises and Async-Await.</li>
                </ul>
            </>
        );
    }
};

export default GitData;
