import React from 'react';

const ReactData = {
    title: 'Modern React',
    label: 'React',
    param: 'react',
    image: 'React.png',
    color: '#61dafb',
    description: 'Test your Modern React knowledge.',
    dropdownText: () => {
        return (
            <>
                <h3>This Quiz Covers:</h3>
                <ul>
                    <li>The Virtual DOM and performance.</li>
                    <li>Stateful components and conditional rendering.</li>
                    <li>Rendering JSX.</li>
                    <li>
                        React Hooks such as useState, useEffect, Suspense, etc.
                    </li>
                </ul>
            </>
        );
    },
    items: [
        {
            id: 0,
            question: 'Is Earth round?',
            options: ['Yes', 'No', 'Not anymore.', 'The Earth is flat.'],
            answer: 'Yes',
            answerDescription: 'Yes. The Earth is actually round.'
        },
        {
            id: 1,
            question: 'Is Earth flat?',
            options: ['Yes', 'No', 'Not anymore.', 'The Earth is a square.'],
            answer: 'No',
            answerDescription: 'Vivian is of course the punkiest.'
        },
        {
            id: 2,
            question: 'Are you sick?',
            options: ['Yes', 'No', 'Not anymore.', 'Never.'],
            answer: 'Yes',
            answerDescription: 'Yes, I have a the cold.'
        }
    ]
};

export default ReactData;
