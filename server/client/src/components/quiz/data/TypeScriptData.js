import React from 'react';

const TypeScriptData = {
    title: 'TypeScript',
    label: 'TypeScript',
    image: 'TypeScript.png',
    description: 'Test your TypeScript knowledge with this quiz!',
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

export default TypeScriptData;
