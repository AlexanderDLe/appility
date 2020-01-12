import React from 'react';

const JavaScriptData = {
    title: 'JavaScript Fundamentals',
    label: 'JavaScript',
    image: 'JavaScript.png',
    description: 'Test your JavaScript fundamentals with this quiz!',
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

export default JavaScriptData;
