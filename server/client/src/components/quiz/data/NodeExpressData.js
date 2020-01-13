import React from 'react';

const NodeExpressData = {
    title: 'APIs With Node & Express',
    label: 'NodeExpress',
    image: 'NodeExpress.png',
    color: '#87c643',
    description: 'Test your backend prowess!',
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

export default NodeExpressData;
