import React from 'react';

const ReactData = {
    title: 'React With Redux',
    label: 'Redux',
    param: 'redux',
    image: 'Redux.png',
    color: '#9d42c3',
    description: 'Test your knowledge of React & Redux.',
    dropdownText: () => {
        return (
            <>
                <h3>This Quiz Covers:</h3>
                <ul>
                    <li>The redux data flow.</li>
                    <li>Action creators.</li>
                    <li>Application state and reducers.</li>
                    <li>Data immutability.</li>
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
