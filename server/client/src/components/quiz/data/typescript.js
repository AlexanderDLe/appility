import React from 'react';

const TypeScriptData = {
    title: 'TypeScript',
    label: 'TypeScript',
    param: 'typescript',
    image: 'TypeScript.png',
    color: '#007acc',
    description: 'Test your TypeScript knowledge.',
    dropdownText: () => {
        return (
            <>
                <h3>This Quiz Covers:</h3>
                <ul>
                    <li>Type annotations and inference.</li>
                    <li>TypeScript configuration.</li>
                    <li>Features such as generics, interfaces, etc.</li>
                    <li>Decorators, modules, etc.</li>
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

export default TypeScriptData;
