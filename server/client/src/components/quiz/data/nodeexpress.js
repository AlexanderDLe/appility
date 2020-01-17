import React from 'react';

const NodeExpressData = {
    title: 'APIs With Node & Express',
    label: 'NodeExpress',
    param: 'nodeexpress',
    image: 'NodeExpress.png',
    color: '#87c643',
    description: 'Test your Node & Express knowledge.',
    dropdownText: () => {
        return (
            <>
                <h3>This Quiz Covers:</h3>
                <ul>
                    <li>API CRUD operations.</li>
                    <li>The request and response cycle.</li>
                    <li>Cookie/Token authentication.</li>
                    <li>The Node.js event loop.</li>
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

export default NodeExpressData;
