import React from 'react';

const GitData = {
    title: 'Version Control With Git/Github',
    label: 'Git',
    param: 'git',
    image: 'Git.png',
    color: '#f44c28',
    description: 'Test your git knowledge.',
    dropdownText: () => {
        return (
            <>
                <h3>This Quiz Covers:</h3>
                <ul>
                    <li>Version control systems.</li>
                    <li>Push and pull requests.</li>
                    <li>Staging and committing.</li>
                    <li>Branching and merging.</li>
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

export default GitData;
